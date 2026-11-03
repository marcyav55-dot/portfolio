# TYM Services — site vitrine

Site web statique de TYM Services, une entreprise de solutions numériques. Le site est conçu en HTML, CSS et JavaScript, sans étape de compilation.

## Pages et fichiers
- `index.html` — page d’accueil de l’entreprise, expertises, services illustrés, projets, méthode et contact.
- `fondateur.html` — informations complémentaires sur le fondateur, séparées de la présentation principale.
- `cv.html` — CV consultable et imprimable.
- `data.js` — contenu éditable : coordonnées, projets, compétences, parcours et galerie.
- `assets/` — logo et ressources visuelles.
- `1793541020227.jpg` et autres médias racine — images du site.

## Direction artistique
- Identité visuelle professionnelle : ivoire doux, bleu marine, bleu soutenu, turquoise et accents verts.
- Grand bandeau d’accueil en dégradé bleu, typographie Bricolage Grotesque et Instrument Sans.
- Photos intégrées dans les cartes de services et les expertises.
- Navigation responsive avec menu mobile.
- Langues française et anglaise prises en charge.
- Présentation collective de l’entreprise ; les informations sur le fondateur restent sur une page distincte.

## Services présentés
- Sites web professionnels et plateformes responsives.
- Applications web et mobiles.
- Gestion des données et tableaux de bord.
- Intelligence artificielle et automatisation.
- Commerce et paiements en ligne.
- Maintenance et assistance technique.

Les photos distantes sont actuellement chargées depuis Unsplash. Pour la version définitive, privilégier les photos originales de TYM Services ou des visuels dont les droits d’utilisation sont confirmés.

## Projets présentés
- ML TRAIN — plateforme éducative dédiée à la programmation et à l’IA/ML.
- Grace Divine Multiservices — projet web multiservices.
- Expérimentations OpenCV — vision par ordinateur avec Python.

Les liens de démonstration sont à vérifier avant toute communication publique ; une démonstration protégée par authentification ne doit pas être présentée comme un site public.

## Modifier le contenu
- Mettre à jour les coordonnées et liens dans `SITE` dans `data.js`.
- Ajouter ou modifier les projets dans `PROJECTS`.
- Ajouter les photos originales dans `assets/` ou `images/`, puis référencer leurs chemins dans les données.
- N’afficher que des témoignages, statistiques et références vérifiables.

## Tester localement
```bash
python3 -m http.server 8000
```
Ouvrir ensuite `http://localhost:8000`.

## Déploiement
Hébergement statique compatible Vercel, Netlify ou GitHub Pages. Répertoire de sortie : racine du dépôt ; aucune commande de build requise.
