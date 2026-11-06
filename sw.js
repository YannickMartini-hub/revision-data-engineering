/* Service worker : fait marcher le site sans connexion.
   - Les pages, scripts, langues et icônes sont gardés en mémoire dès la première visite.
   - Les polices Google sont gardées au premier affichage.
   - Les vidéos ne sont gardées que si on clique sur « Télécharger pour hors ligne ». */
const VERSION = "v1";
const CORE = "core-" + VERSION;
const FONTS = "fonts";
const VIDEO = "videos";
const FILES = [
  "./", "index.html", "js/main.js", "manifest.webmanifest",
  "lang/fr.js", "lang/en.js", "lang/es.js", "lang/it.js", "lang/zh.js", "lang/ja.js", "lang/ar.js",
  "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "icons/apple-touch-icon.png", "icons/icon.svg"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CORE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k.startsWith("core-") && k !== CORE).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});

/* Vidéo déjà téléchargée : on renvoie le morceau demandé (le lecteur vidéo demande des tranches). */
async function fromVideoCache(req) {
  const cache = await caches.open(VIDEO);
  const hit = await cache.match(req.url.split("#")[0]);
  if (!hit) return null;
  const range = req.headers.get("range");
  if (!range) return hit;
  const buf = await hit.arrayBuffer();
  const m = /bytes=(\d*)-(\d*)/.exec(range);
  const start = m && m[1] ? +m[1] : 0;
  const end = m && m[2] ? +m[2] : buf.byteLength - 1;
  return new Response(buf.slice(start, end + 1), {
    status: 206,
    headers: {
      "Content-Type": "video/mp4",
      "Content-Range": `bytes ${start}-${end}/${buf.byteLength}`,
      "Content-Length": String(end - start + 1),
      "Accept-Ranges": "bytes"
    }
  });
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (url.pathname.endsWith(".mp4")) {
    e.respondWith(fromVideoCache(req).then(r => r || fetch(req)));
    return;
  }

  if (url.hostname.includes("fonts.googleapis.com") || url.hostname.includes("fonts.gstatic.com")) {
    e.respondWith(caches.open(FONTS).then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      c.put(req, res.clone());
      return res;
    }));
    return;
  }

  if (url.origin === location.origin) {
    /* Réseau d'abord (pour recevoir les mises à jour), mémoire si pas de connexion. */
    e.respondWith(fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CORE).then(c => c.put(req, copy)); }
      return res;
    }).catch(async () => (await caches.match(req, { ignoreSearch: true })) || caches.match("index.html")));
  }
});
