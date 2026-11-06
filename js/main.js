const LANGS=[["fr","Français"],["en","English"],["zh","中文"],["ja","日本語"],["es","Español"],["it","Italiano"],["ar","العربية"]];
const KEY="de-revision-v1";
let st={done:{},quiz:{},ex:{},lang:"fr"};
try{const s=JSON.parse(localStorage.getItem(KEY)||"null");if(s)st=Object.assign(st,s)}catch(e){}
st.ex=st.ex||{};
function save(){try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}}
const u=()=>(PACKS[st.lang]||PACKS.fr).ui;
const f=(s,o)=>s.replace(/\{(\w+)\}/g,(m,k)=>o[k]);
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");

/* ---------- languages: one file per language in lang/, loaded on demand ---------- */
window.PACKS=window.PACKS||{};
let L=[];
function loadLang(code){
  return new Promise(res=>{
    if(PACKS[code])return res(true);
    const sc=document.createElement("script");sc.src="lang/"+code+".js";
    sc.onload=()=>res(!!PACKS[code]);sc.onerror=()=>res(false);document.head.appendChild(sc);
  });
}
function lessonData(l){
  const p=PACKS[st.lang];
  if(st.lang==="fr"||!p||!p.lessons)return l;
  return p.lessons.find(x=>x.id===l.id)||l;
}
function isFallback(){const p=PACKS[st.lang];return st.lang!=="fr"&&(!p||!p.lessons)}
function title(i){return u().titles[i]}

/* ---------- navigation ---------- */
const extra=()=>[["tableau",u().home,"⌂"],["video",vs().nav,"▶"],["carte",u().map,"00"],["oral",u().oral,"Q?"],["lexique",u().lex,"A–Z"],["suivi",u().track,"✓"]];
function navItems(){const e=extra();return [e[0],e[1],e[2],...L.map((l,i)=>[l.id,title(i),String(i+1).padStart(2,"0")]),e[3],e[4],e[5]]}
function curId(){return (location.hash||"#tableau").slice(1)}
function renderNav(cur){
  const rl=document.getElementById("raillinks");rl.innerHTML="";
  navItems().forEach(([id,t,n],i)=>{
    if(i===3){const s=document.createElement("div");s.className="sep";s.textContent=u().sepL;rl.appendChild(s)}
    if(i===13){const s=document.createElement("div");s.className="sep";s.textContent=u().sepT;rl.appendChild(s)}
    const a=document.createElement("a");a.href="#"+id;
    a.innerHTML=`<span class="n">${n}</span><span>${esc(t)}</span>${st.done[id]?'<span class="ok">✓</span>':''}`;
    if(id===cur)a.setAttribute("aria-current","page");rl.appendChild(a);
  });
  const ms=document.getElementById("msel");
  ms.innerHTML=navItems().map(([id,t,n])=>`<option value="${id}" ${id===cur?"selected":""}>${n} · ${esc(t)}${st.done[id]?" ✓":""}</option>`).join("");
  const nd=L.filter(l=>st.done[l.id]).length;
  document.getElementById("progtxt").textContent=f(u().prog,{n:nd});
  document.getElementById("progbar").style.width=(nd*10)+"%";
  document.getElementById("brandsub").textContent=u().brandSub;
  document.querySelectorAll(".langlbl").forEach(e=>e.textContent=u().lang);
  document.getElementById("goto").textContent=u().goTo;
  document.querySelectorAll("select.langsel").forEach(s=>{s.value=st.lang});
}
document.getElementById("msel").addEventListener("change",e=>{location.hash=e.target.value});
document.querySelectorAll("select.langsel").forEach(s=>{
  s.addEventListener("change",async e=>{const c=e.target.value;await loadLang(c);st.lang=PACKS[c]?c:"fr";st.langSet=true;save();applyLang();route()});
});
function applyLang(){const r=document.documentElement;r.lang=st.lang==="zh"?"zh-Hans":st.lang;r.dir=st.lang==="ar"?"rtl":"ltr"}

/* ---------- lesson ---------- */
function trBanner(){return isFallback()?`<div class="trbar">${u().trNA}</div>`:""}
function quizHTML(l){
  return l.quiz.map((q,qi)=>`<div class="q" data-q="${qi}"><p><b>${qi+1}.</b> ${q[0]}</p><div class="opts">${q[1].map((o,oi)=>`<button class="opt" data-o="${oi}">${o}</button>`).join("")}</div><p class="why" hidden></p></div>`).join("");
}
function lessonView(l0,idx){
  const l=lessonData(l0),U=u();
  const prev=idx>0?L[idx-1]:null,next=idx<L.length-1?L[idx+1]:null;
  return `${trBanner()}
  <div class="block"><span class="eyebrow">${f(U.lessonN,{n:idx+1})} · ${l.en}</span><h1>${esc(title(idx))}</h1><p class="lede">${l.one}</p><a class="btn ghost" style="align-self:flex-start" href="#video-${VCH[idx+1]}">▶ ${vs().see}</a></div>
  <section class="simple">
    <span class="simple-tag">${U.simple}</span>
    <div class="sgrid">
      <div class="sbox"><h3>${U.why}</h3><p>${l.eli5.why}</p></div>
      <div class="sbox"><h3>${U.steps}</h3><ol class="steps">${l.eli5.steps.map(s=>`<li><span>${s}</span></li>`).join("")}</ol></div>
      <div class="sbox ex"><h3>${U.ex}</h3><p>${l.eli5.ex}</p></div>
    </div>
  </section>
  <div class="image"><span class="tag">${l.img.tag}</span><p>${l.img.txt}</p></div>
  <div class="block"><h2>${U.words}</h2><div class="terms">${l.terms.map(t=>`<div class="term"><b>${t[0]}</b><span>${t[1]}</span></div>`).join("")}</div></div>
  <div class="block">${l.body}</div>
  <div class="trap"><b>${U.trap}</b> ${l.trap}</div>
  ${l.mine?`<div class="mine">${l.mine}</div>`:""}
  <div class="phrase" dir="ltr">${l.phrase}<small dir="auto">${l.fr} · ${U.phraseNote}</small></div>
  <div class="block"><h2>${U.prof}</h2><p class="muted">${U.profHint}</p>
  ${l.qa.map(q=>`<details class="qa"><summary>${q[0]}</summary><div><p>${q[1]}</p></div></details>`).join("")}</div>
  <div class="block"><h2>${U.quiz}</h2><div class="quiz" id="quiz">${quizHTML(l)}</div><p class="score" id="qscore"></p></div>
  <button class="btn done-toggle" id="donebtn">${st.done[l.id]?U.undoneBtn:U.doneBtn}</button>
  <div class="row spread">${prev?`<a class="btn ghost" href="#${prev.id}">${esc(title(idx-1))}</a>`:"<span></span>"}${next?`<a class="btn" href="#${next.id}">${esc(title(idx+1))}</a>`:`<a class="btn" href="#oral">${U.toOral}</a>`}</div>`;
}
function wireLesson(l0){
  const l=lessonData(l0),U=u();let good=0,ans=0;
  document.querySelectorAll("#quiz .q").forEach(qd=>{
    const qi=+qd.dataset.q,q=l.quiz[qi];
    qd.querySelectorAll(".opt").forEach(b=>b.addEventListener("click",()=>{
      const oi=+b.dataset.o;ans++;if(oi===q[2])good++;
      qd.querySelectorAll(".opt").forEach(x=>{x.disabled=true;if(+x.dataset.o===q[2])x.classList.add("right")});
      if(oi!==q[2])b.classList.add("wrong");
      const w=qd.querySelector(".why");w.hidden=false;w.innerHTML=(oi===q[2]?`<b class="g">${U.yes}</b> `:`<b class="r">${U.no}</b> `)+q[3];
      document.getElementById("qscore").textContent=f(U.score,{g:good,a:ans})+(ans===l.quiz.length?(good===ans?U.perfect:U.retry):"");
      if(ans===l.quiz.length){st.quiz[l.id]=Math.max(st.quiz[l.id]||0,good);save()}
    }));
  });
  document.getElementById("donebtn").addEventListener("click",()=>{st.done[l.id]=!st.done[l.id];save();route()});
}

/* ---------- home ---------- */
const TB="https://education.tangoai.fr/courses/data-engineering/";
const SLUG=["m01-architecture-and-cloud-foundations/01-architecture-decision-frame","m01-architecture-and-cloud-foundations/02-object-storage-foundations","m02-ingestion/03-batch-streaming-cdc","m03-warehousing-and-transformation/04-sql-warehouses","m03-warehousing-and-transformation/05-dbt-and-the-medallion-pattern","m04-containerisation/06-packaging-data-jobs","m05-orchestration-and-iac/07-airflow-dagster","m05-orchestration-and-iac/08-terraform","m06-finops-and-governance/09-finops","m06-finops-and-governance/10-security-and-governance"];
const HAS={setup:[1,2,4,5,6,7],demo:[2,3,4,5,6,7,8,9]};
const T=(h,ic,b,d,ext)=>`<a class="tile" href="${h}"${ext?' target="_blank" rel="noopener"':''}><span class="ic">${ic}</span><b>${b}</b><span class="d">${d}</span></a>`;
function homeView(){
  const U=u(),nd=L.filter(l=>st.done[l.id]).length,nextL=L.find(l=>!st.done[l.id]),ni=nextL?L.indexOf(nextL):-1;
  const chip=l=>st.done[l.id]?`<span class="chip ok">${U.chipOk}</span>`:(st.quiz[l.id]!=null?`<span class="chip mid">${f(U.chipQuiz,{g:st.quiz[l.id],t:l.quiz.length})}</span>`:`<span class="chip todo">${U.chipTodo}</span>`);
  return `<section class="hero">
    <span class="eyebrow">${U.heroEy}</span><h1>${U.heroT}</h1>
    <div class="strata" aria-hidden="true"><i></i><i></i><i></i></div>
    <p class="lede">${U.heroL}</p>
    <div class="resume"><div><span class="small">${nd===0?U.first:nextL?U.resume:U.allDone}</span>
      <span class="big">${nextL?f(U.lessonN,{n:ni+1})+" · "+esc(title(ni)):U.trainNow}</span>
      <span class="ring">${f(U.nDone,{n:nd})}</span></div>
      <a class="btn" href="${nextL?"#"+nextL.id:"#oral"}">${nd===0?U.start:U.cont}</a></div>
  </section>
  <div class="block"><h2>${U.where}</h2><div class="tiles">
    ${installTile()}${T("#video",vs().eyV,vs().nav,vs().d)}${T("#carte",U.icMap,U.map,U.dMap)}${T("#oral",U.icOral,U.oral,U.dOral)}${T("#lexique",U.icLex,U.lex,U.dLex)}${T("#suivi",U.icTrack,U.track,U.dTrack)}
  </div></div>
  <div class="block"><h2>${U.ten}</h2><div class="lgrid">
    ${L.map((l,i)=>`<a class="lc" href="#${l.id}"><span class="n">${String(i+1).padStart(2,"0")} · ${l.en}</span><b>${esc(title(i))}</b>${chip(l)}</a>`).join("")}
  </div></div>
  <div class="block"><h2>${U.beforeExam}</h2><div class="tiles">
    ${T(TB+"m07-wrap-up-and-defence/11-course-review/mock-exam",U.onTango,U.mockT,U.mockD,1)}${T(TB+"m07-wrap-up-and-defence/11-course-review",U.onTango,U.revT,U.revD,1)}${T(TB+"m07-wrap-up-and-defence/12-project-defence/presenting",U.onTango,U.defT,U.defD,1)}
  </div></div>`;
}

/* ---------- map ---------- */
function mapView(){
  const U=u(),s=(id,k,t,d,c="")=>`<a class="stop ${c}" href="#${id}"><span class="k">${k}</span><span class="t">${t}</span><span class="d">${d}</span></a>`,n=i=>f(U.lessonN,{n:i});
  return `<div class="block"><span class="eyebrow">${U.mapEy}</span><h1>${U.mapT}</h1><p class="lede">${U.mapL}</p></div>
  <div class="pipe">
   <div class="lane">${s("l1",n(1),U.s1,U.d1)}</div><div class="arrow">${U.a1}</div>
   <div class="lane">${s("l3",n(3),U.s3,U.d3)}</div><div class="arrow">${U.a2}</div>
   <div class="lane">${s("l2",n(2),"Bronze",U.d2,"bz")}</div><div class="arrow">${U.a3}</div>
   <div class="lane">${s("l4",n(4),"BigQuery",U.d4)}</div><div class="arrow">${U.a4}</div>
   <div class="lane">${s("l5",n(5),"Silver",U.dSv,"sv")}${s("l5",n(5),"Gold",U.dGd,"gd")}</div><div class="arrow">${U.a5}</div>
   <div class="around"><span class="lbl">${U.around}</span><div class="lane">${s("l6",n(6),"Docker",U.d6)}${s("l7",n(7),"Airflow",U.d7)}${s("l8",n(8),"Terraform",U.d8)}${s("l9",n(9),"FinOps",U.d9)}${s("l10",n(10),U.s10,U.d10)}</div></div>
  </div>
  <div class="block"><h2>${U.howT}</h2><ul class="clean">${U.how.map(x=>`<li>${x}</li>`).join("")}</ul></div>
  <a class="btn self-start" href="#l1">${U.startL1}</a>`;
}

/* ---------- oral ---------- */
let oralPool=[],oralI=0;
function oralView(){
  const U=u();oralPool=[];L.forEach((l,i)=>lessonData(l).qa.forEach(q=>oralPool.push([i,q])));
  for(let i=oralPool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[oralPool[i],oralPool[j]]=[oralPool[j],oralPool[i]]}
  oralI=0;
  return `<div class="block"><span class="eyebrow">${U.sepT}</span><h1>${U.oralT}</h1><p class="lede">${U.oralL}</p></div>
  <div class="card-oral" id="oc"></div>
  <div class="row"><button class="btn ghost" id="oshow">${U.show}</button><button class="btn" id="onext">${U.nextQ}</button><span class="score" id="ocount"></span></div>
  <div class="tip">${U.idk}</div>`;
}
function oralShow(){
  const [i,q]=oralPool[oralI%oralPool.length];
  document.getElementById("oc").innerHTML=`<span class="from">${f(u().lessonN,{n:i+1})} · ${esc(title(i))}</span><p class="qq">${q[0]}</p><div class="ans" id="oans" hidden><p>${q[1]}</p></div>`;
  document.getElementById("ocount").textContent=`${(oralI%oralPool.length)+1} / ${oralPool.length}`;
}

/* ---------- lexique ---------- */
function lexView(){
  const U=u(),all=[];L.forEach((l,i)=>lessonData(l).terms.forEach(t=>all.push([t[0],t[1],i])));
  all.sort((a,b)=>a[0].localeCompare(b[0],"en",{sensitivity:"base"}));
  return `<div class="block"><span class="eyebrow">${U.sepT}</span><h1>${U.lexT}</h1><p class="lede">${U.lexL}</p></div>
  <div class="lex"><label class="eyebrow" for="lq">${U.search}</label><input id="lq" type="search" placeholder="${esc(U.searchPh)}">
  <div class="tscroll"><table id="lt"><tr><th>${U.colWord}</th><th>${U.colPlain}</th><th>${U.colLesson}</th></tr>${all.map(t=>`<tr data-s="${esc((t[0]+" "+t[1]).toLowerCase())}"><td><code>${t[0]}</code></td><td>${t[1]}</td><td><a href="#${L[t[2]].id}">${t[2]+1}</a></td></tr>`).join("")}</table></div></div>`;
}

/* ---------- suivi ---------- */
function trackView(){
  const U=u(),nd=L.filter(l=>st.done[l.id]).length;
  let exDone=0;Object.values(st.ex).forEach(v=>{if(v)exDone++});
  const qok=Object.entries(st.quiz).filter(([id,v])=>v===L.find(l=>l.id===id).quiz.length).length;
  const ext=(h,t)=>`<a href="${h}" target="_blank" rel="noopener">${t}</a>`;
  const ck=k=>`<label class="chk"><input type="checkbox" id="ex-${k}" data-ex="${k}" ${st.ex[k]?"checked":""}><span>${U.done}</span></label>`;
  const rows=L.map((l,i)=>{const b=TB+SLUG[i];
    return `<tr><td class="ln"><b>${i+1}. ${esc(title(i))}</b><br><a href="#${l.id}">${U.lSheet}</a> · ${ext(b,U.lCourse)}</td>
    <td>${HAS.setup.includes(i)?ext(b+"/setup",U.lSetup):"—"}${HAS.demo.includes(i)?"<br>"+ext(b+"/demo-guide",U.lDemo):""}</td>
    <td>${ext(b+"/exercise-1",U.lEx1)}<br>${ck(l.id+"e1")}</td><td>${ext(b+"/exercise-2",U.lEx2)}<br>${ck(l.id+"e2")}</td>
    <td>${ext(b+"/project",U.lStep)}<br>${ck(l.id+"p")}</td>
    <td>${ext(b+"/quiz",U.lQuiz)}<br><span class="score">${st.quiz[l.id]!=null?f(U.here,{g:st.quiz[l.id],t:l.quiz.length}):""}</span></td></tr>`}).join("");
  const G=(h,b,d)=>`<a class="lnk" href="${h}"${h[0]==="#"?"":' target="_blank" rel="noopener"'}><b>${b}</b><span>${d}</span></a>`;
  return `<div class="block"><span class="eyebrow">${U.trEy}</span><h1>${U.trT}</h1></div>
  <div class="stats"><div class="stat"><span class="v">${nd}/10</span><span class="l">${U.stL}</span></div><div class="stat"><span class="v">${qok}/10</span><span class="l">${U.stQ}</span></div><div class="stat"><span class="v">${exDone}/30</span><span class="l">${U.stE}</span></div></div>
  <div class="block"><h2>${U.byL}</h2><p class="muted">${U.trHint}</p>
  <div class="tscroll"><table class="grid-l"><tr><th>${U.cL}</th><th>${U.cPrep}</th><th>${U.cClass}</th><th>${U.cHome}</th><th>${U.cProj}</th><th>${U.cQuiz}</th></tr>${rows}</table></div></div>
  <div class="block"><h2>${U.endT}</h2><div class="links">
   ${G(TB+"m07-wrap-up-and-defence/11-course-review",U.revT,U.revD)}${G(TB+"m07-wrap-up-and-defence/11-course-review/mock-exam",U.mockT,U.mockD)}${G(TB+"m07-wrap-up-and-defence/11-course-review/project",U.prepT,U.prepD)}${G(TB+"m07-wrap-up-and-defence/12-project-defence/checklist",U.ckT,U.ckD)}${G(TB+"m07-wrap-up-and-defence/12-project-defence/presenting",U.defT,U.defD)}${G("#oral",U.oral,U.dOral)}
  </div></div>`;
}
function wireTrack(){
  document.querySelectorAll("input[data-ex]").forEach(c=>c.addEventListener("change",()=>{st.ex[c.dataset.ex]=c.checked;save();route()}));

}

/* ---------- vidéo ---------- */
const VCH=[0,9,85,147,212,264,328,392,438,491,531,580];
const VS={
 fr:{nav:"Le cours en vidéo",d:"Tout le cours en 10 minutes, animé et sous-titré.",ch:"Chapitres",intro:"Introduction",recap:"Le trajet complet",note:"",see:"Revoir ce passage en vidéo",dl:"Télécharger pour regarder hors ligne",busy:"Téléchargement…",ok:"✓ Disponible hors ligne",err:"Téléchargement impossible, réessaie avec une connexion.",inst:"Installer l'appli",instD:"Sur ton téléphone ou ton ordi, avec son icône. Marche sans internet.",ios:"Sur iPhone : bouton Partager, puis « Sur l'écran d'accueil ».",other:"Dans le menu du navigateur : « Installer l'application » ou « Ajouter à l'écran d'accueil ».",installed:"✓ Appli installée",eyI:"Hors ligne",eyV:"Vidéo"},
 en:{nav:"Course video",d:"The whole course in 10 minutes, animated and captioned.",ch:"Chapters",intro:"Introduction",recap:"The full journey",note:"",see:"Watch this part on video",dl:"Download to watch offline",busy:"Downloading…",ok:"✓ Available offline",err:"Download failed, try again with a connection.",inst:"Install the app",instD:"On your phone or computer, with its own icon. Works without internet.",ios:"On iPhone: Share button, then “Add to Home Screen”.",other:"In the browser menu: “Install app” or “Add to Home screen”.",installed:"✓ App installed",eyI:"Offline",eyV:"Video"},
 es:{nav:"El curso en vídeo",d:"Todo el curso en 10 minutos, animado y subtitulado.",ch:"Capítulos",intro:"Introducción",recap:"El recorrido completo",note:"Vídeo en inglés, con subtítulos integrados.",see:"Ver esta parte en vídeo",dl:"Descargar para ver sin conexión",busy:"Descargando…",ok:"✓ Disponible sin conexión",err:"No se pudo descargar, inténtalo con conexión.",inst:"Instalar la app",instD:"En tu móvil u ordenador, con su icono. Funciona sin internet.",ios:"En iPhone: botón Compartir y luego «Añadir a pantalla de inicio».",other:"En el menú del navegador: «Instalar aplicación» o «Añadir a pantalla de inicio».",installed:"✓ App instalada",eyI:"Sin conexión",eyV:"Vídeo"},
 it:{nav:"Il corso in video",d:"Tutto il corso in 10 minuti, animato e sottotitolato.",ch:"Capitoli",intro:"Introduzione",recap:"Il percorso completo",note:"Video in inglese, con sottotitoli integrati.",see:"Guarda questa parte in video",dl:"Scarica per guardare offline",busy:"Download in corso…",ok:"✓ Disponibile offline",err:"Download non riuscito, riprova con una connessione.",inst:"Installa l'app",instD:"Sul telefono o sul computer, con la sua icona. Funziona senza internet.",ios:"Su iPhone: pulsante Condividi, poi «Aggiungi alla schermata Home».",other:"Nel menu del browser: «Installa app» o «Aggiungi a schermata Home».",installed:"✓ App installata",eyI:"Offline",eyV:"Video"},
 zh:{nav:"课程视频",d:"10 分钟看完整门课，动画加字幕。",ch:"章节",intro:"引言",recap:"完整的数据旅程",note:"视频为英文，字幕已嵌入画面。",see:"观看这一部分的视频",dl:"下载以离线观看",busy:"下载中…",ok:"✓ 已可离线观看",err:"下载失败，请联网后重试。",inst:"安装应用",instD:"装在手机或电脑上，有自己的图标，无网络也能用。",ios:"iPhone：点「分享」按钮，再选「添加到主屏幕」。",other:"在浏览器菜单中选择「安装应用」或「添加到主屏幕」。",installed:"✓ 应用已安装",eyI:"离线",eyV:"视频"},
 ja:{nav:"講義ビデオ",d:"講義全体を10分で、アニメーションと字幕つきで。",ch:"チャプター",intro:"はじめに",recap:"データの旅の全体像",note:"動画は英語です（字幕は画面に表示）。",see:"この部分を動画で見る",dl:"オフライン用にダウンロード",busy:"ダウンロード中…",ok:"✓ オフラインで視聴可能",err:"ダウンロードできませんでした。接続して再試行してください。",inst:"アプリをインストール",instD:"スマホやパソコンにアイコン付きで。ネットなしでも使えます。",ios:"iPhone：共有ボタン →「ホーム画面に追加」。",other:"ブラウザのメニューから「アプリをインストール」または「ホーム画面に追加」。",installed:"✓ インストール済み",eyI:"オフライン",eyV:"ビデオ"},
 ar:{nav:"المقرر بالفيديو",d:"المقرر كله في 10 دقائق، متحرك ومع ترجمة.",ch:"الفصول",intro:"مقدمة",recap:"الرحلة الكاملة",note:"الفيديو باللغة الإنجليزية، والترجمة مدمجة في الصورة.",see:"شاهد هذا الجزء بالفيديو",dl:"تنزيل للمشاهدة دون اتصال",busy:"جارٍ التنزيل…",ok:"✓ متاح دون اتصال",err:"تعذّر التنزيل، أعد المحاولة مع اتصال.",inst:"تثبيت التطبيق",instD:"على هاتفك أو حاسوبك، بأيقونته الخاصة. يعمل دون إنترنت.",ios:"على iPhone: زر المشاركة، ثم «إضافة إلى الشاشة الرئيسية».",other:"من قائمة المتصفح: «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية».",installed:"✓ التطبيق مثبّت",eyI:"دون اتصال",eyV:"فيديو"}};
const vs=()=>VS[st.lang]||VS.en;
const mmss=s=>Math.floor(s/60)+":"+String(s%60).padStart(2,"0");
function videoView(start){const V=vs(),src="videos/cours-"+(st.lang==="fr"?"fr":"en")+".mp4";
  const names=[V.intro,...L.map((l,i)=>(i+1)+" · "+title(i)),V.recap];
  return `<section class="block"><span class="eyebrow">▶</span><h1>${V.nav}</h1><p class="lede">${V.d}</p>${V.note?`<p class="small">${V.note}</p>`:""}
  <video id="vid" controls preload="metadata" playsinline src="${src}#t=${start||0}" style="width:100%;border-radius:12px;border:1px solid var(--line);background:#F5EFE4"></video>
  <div class="row"><button class="btn ghost" id="vdl">⬇ ${V.dl}</button><span class="small" id="vdls"></span></div>
  <h2>${V.ch}</h2><div class="vch">${names.map((n,i)=>`<button class="vc" data-t="${VCH[i]}"><span class="vt">${mmss(VCH[i])}</span><span>${esc(n)}</span></button>`).join("")}</div></section>`}
function wireVideo(start){const v=document.getElementById("vid");
  document.querySelectorAll(".vc").forEach(b=>b.onclick=()=>{v.currentTime=+b.dataset.t;v.play();v.scrollIntoView({behavior:"smooth",block:"center"})});
  if(start)v.addEventListener("loadedmetadata",()=>{v.currentTime=start},{once:true});
  const btn=document.getElementById("vdl"),msg=document.getElementById("vdls"),V=vs(),url=new URL(v.getAttribute("src").split("#")[0],location.href).href;
  if(!("caches" in window)){btn.hidden=true;return}
  caches.open("videos").then(c=>c.match(url)).then(h=>{if(h){btn.hidden=true;msg.textContent=V.ok}});
  btn.onclick=async()=>{btn.disabled=true;msg.textContent=V.busy;
    try{const r=await fetch(url,{cache:"reload"});if(!r.ok)throw 0;await (await caches.open("videos")).put(url,r);btn.hidden=true;msg.textContent=V.ok}
    catch(e){btn.disabled=false;msg.textContent=V.err}}}
/* ---------- installation ---------- */
let installEvt=null;
addEventListener("beforeinstallprompt",e=>{e.preventDefault();installEvt=e});
const isInstalled=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===true;
function installTile(){const V=vs();return isInstalled()?"":`<a class="tile" href="#" id="instbtn"><span class="ic">${V.eyI}</span><b>${V.inst}</b><span class="d" id="instd">${V.instD}</span></a>`}
function wireInstall(){const b=document.getElementById("instbtn");if(!b)return;
  b.onclick=async e=>{e.preventDefault();const V=vs(),d=document.getElementById("instd");
    if(installEvt){installEvt.prompt();const r=await installEvt.userChoice;installEvt=null;if(r.outcome==="accepted")d.textContent=V.installed;return}
    d.textContent=/iphone|ipad|ipod/i.test(navigator.userAgent)?V.ios:V.other}}

/* ---------- router ---------- */
let lastH=null;
function route(){
  const h=curId(),v=document.getElementById("view"),idx=L.findIndex(l=>l.id===h);
  const keep=h===lastH?window.scrollY:0;
  if(idx>=0){v.innerHTML=lessonView(L[idx],idx);wireLesson(L[idx])}
  else if(h==="oral"){v.innerHTML=oralView();oralShow();
    document.getElementById("oshow").onclick=()=>{document.getElementById("oans").hidden=false};
    document.getElementById("onext").onclick=()=>{oralI++;oralShow()}}
  else if(h==="lexique"){v.innerHTML=lexView();
    document.getElementById("lq").addEventListener("input",e=>{const s=e.target.value.toLowerCase();document.querySelectorAll("#lt tr[data-s]").forEach(r=>r.hidden=!r.dataset.s.includes(s))})}
  else if(h==="carte")v.innerHTML=mapView();
  else if(h.startsWith("video")){const st0=+(h.split("-")[1]||0);v.innerHTML=videoView(st0);wireVideo(st0)}
  else if(h==="suivi"){v.innerHTML=trackView();wireTrack()}
  else{v.innerHTML=homeView();wireInstall()}
  renderNav(idx>=0?h:(h.startsWith("video")?"video":["oral","lexique","carte","suivi"].includes(h)?h:"tableau"));
  window.scrollTo(0,keep);lastH=h;
}
function pickLang(){
  const q=new URLSearchParams(location.search).get("lang");
  if(q&&LANGS.some(x=>x[0]===q))return q;
  if(st.langSet)return st.lang;
  const n=(navigator.language||"fr").slice(0,2);
  return LANGS.some(x=>x[0]===n)?n:"fr";
}
(async function main(){
  await loadLang("fr");L=PACKS.fr.lessons;
  let c=pickLang();if(c!=="fr"&&!(await loadLang(c)))c="fr";
  st.lang=c;applyLang();
  document.querySelectorAll("select.langsel").forEach(s=>{s.innerHTML=LANGS.map(([c,n])=>`<option value="${c}">${n}</option>`).join("")});
  addEventListener("hashchange",route);route();
})();
