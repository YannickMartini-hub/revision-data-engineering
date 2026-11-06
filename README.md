# Data Eng sans prise de tête

Application de révision du cours **Data Engineering & Cloud Infrastructure** (MSc Albert School × Mines Paris).
Les 10 leçons réexpliquées simplement, avec quiz, mode oral et lexique, en 7 langues.

## Structure

| Fichier | Rôle |
| --- | --- |
| `index.html` | La page et sa mise en forme |
| `js/main.js` | L'application : choisit la langue (paramètre `?lang=`, choix enregistré, ou langue du navigateur) puis charge `lang/<code>.js` |
| `lang/fr.js` | Interface + contenu des leçons en français (la référence) |
| `lang/en.js`, `zh.js`, `ja.js`, `es.js`, `it.js`, `ar.js` | Interface + leçons dans chaque langue. Si une langue n'a pas encore ses leçons, elles s'affichent en français |

Lien direct vers une langue : `…/?lang=en`, `…/?lang=ar`, etc.

## Lancer en local

Ouvrir `index.html` via un petit serveur (les fichiers de langue sont chargés à la demande) :

```bash
python -m http.server 8000
```

puis aller sur http://localhost:8000.
