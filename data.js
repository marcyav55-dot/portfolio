/* ================= CONFIG — edit only this block =================
   - Social links: leave "" to hide a button (never put fake URLs).
   - Projects: copy an object in PROJECTS. cover/code/demo may be "".
   - Images: put files in /images and add them to GALLERY. The gallery
     section stays hidden while GALLERY is empty.
   ================================================================ */
const SITE = {
  github: "https://github.com/marcyav55-dot",
  linkedin: "",   // e.g. "https://www.linkedin.com/in/your-handle"
  email: "",      // e.g. "you@domain.com"
  phone: "",      // e.g. "+243 ..."
  location: "Lualaba, DR Congo",
  photo: "images/profile.jpg"   // put your photo in /images (portrait, ~800x1000)
};
const NAME = "Marcus Tshijika Yav";
const TITLE = {en:"Software engineering student — Web & AI",fr:"Étudiant en génie logiciel — Web & IA"};
const SUMMARY = {
  en:"Software engineering student building web products and exploring AI and machine learning. Main project: ML TRAIN, a platform that teaches AI step by step.",
  fr:"Étudiant en génie logiciel, je construis des produits web et j’explore l’IA et le machine learning. Projet principal : ML TRAIN, une plateforme qui enseigne l’IA pas à pas."};
/* Shown on the CV only when filled. Real data only. */
const EDUCATION = [ // add { school:"", degree:{en:"",fr:""}, period:"2022 – present" } when you have them
  { school:"", degree:{en:"Software engineering (student)",fr:"Génie logiciel (étudiant)"}, period:"" },
  { school:"", degree:{en:"General electricity (training)",fr:"Électricité générale (formation)"}, period:"" }
];
const LANGUAGES = [ // { n:{en:"French",fr:"Français"}, level:{en:"Native",fr:"Langue maternelle"} }
];
const PROJECTS = [
  { id:"ml-train", main:true, name:"ML TRAIN", status:{en:"V1 in progress",fr:"V1 en cours"},
    desc:{en:"A platform that teaches programming, math and AI/ML step by step, from the basics to LLM architecture. Learners write, run and understand code instead of just watching.",
          fr:"Une plateforme qui enseigne la programmation, les maths et l’IA/ML pas à pas, des bases jusqu’à l’architecture des LLM. On écrit, exécute et comprend le code au lieu de simplement regarder."},
    tech:["React","TypeScript","Node.js","Express","PostgreSQL","Supabase"], cover:"", code:"", demo:"",
    details:{en:["Structured curriculum: levels, courses, modules, lessons, concepts","Learning path, challenges and dashboard built","Custom JWT authentication: access token in memory, refresh token in an HttpOnly cookie","Code is not public yet"],
             fr:["Curriculum structuré : niveaux, cours, modules, leçons, concepts","Parcours d’apprentissage, défis et tableau de bord réalisés","Authentification JWT personnalisée : jeton d’accès en mémoire, jeton de renouvellement en cookie HttpOnly","Code pas encore public"]}},
  { id:"grace-divine", name:"Grace Divine Multiservices", status:{en:"Deployed",fr:"Déployé"},
    desc:{en:"Full-stack web application with a React frontend and a Django REST API.",fr:"Application web full-stack avec un frontend React et une API Django REST."},
    tech:["React","Vite","Django REST","PostgreSQL","JWT"], cover:"", code:"https://github.com/marcyav55-dot/Grace_Divine", demo:"",
    details:{en:["JWT authentication","Frontend and backend deployed separately"],fr:["Authentification JWT","Frontend et backend déployés séparément"]}},
  { id:"opencv", name:"OpenCV experiments", status:{en:"Experiments",fr:"Expérimentations"},
    desc:{en:"Computer vision experiments in Python with OpenCV.",fr:"Expérimentations de vision par ordinateur en Python avec OpenCV."},
    tech:["Python","OpenCV"], cover:"", code:"https://github.com/marcyav55-dot/Opencv", demo:"", details:null },
  { id:"agentsdata", name:"AgentsData", status:{en:"Concept",fr:"Concept"},
    desc:{en:"A SaaS idea: turn raw data into clean, validated, versioned datasets for AI agents. First target: coding-agent trajectories.",fr:"Une idée de SaaS : transformer des données brutes en jeux de données propres, validés et versionnés pour les agents IA. Première cible : les trajectoires d’agents de programmation."},
    tech:["Python","Data engineering"], cover:"", code:"", demo:"", details:null },
  { id:"jarvis", name:"Jarvis", status:{en:"Exploring",fr:"Exploration"},
    desc:{en:"A voice-driven assistant to explore automation, Python tooling and AI APIs on a computer and a phone.",fr:"Un assistant à commande vocale pour explorer l’automatisation, les outils Python et les API d’IA sur ordinateur et téléphone."},
    tech:["Python","AI APIs","Automation"], cover:"", code:"", demo:"", details:null },
  { id:"xploded", name:"Xploded", status:{en:"Planned",fr:"Prévu"},
    desc:{en:"Short educational videos showing objects and their parts in exploded views, starting with computer hardware.",fr:"Vidéos éducatives courtes montrant les objets et leurs composants en vues éclatées, en commençant par le matériel informatique."},
    tech:["Video","Education"], cover:"", code:"", demo:"", details:null }
];
const GALLERY = [
  // { src:"images/ml-train-dashboard.png", title:{en:"ML TRAIN dashboard",fr:"Tableau de bord ML TRAIN"}, category:"web", project:"ml-train" }
];
const SKILLS = [
 {k:"py",n:"Python",tags:["Python","Django","Scripts"],
  d:{en:"My main language for backends, automation and data work.",fr:"Mon langage principal pour les backends, l’automatisation et les données."},
  can:{en:["Build backends and REST APIs with Django REST","Write scripts that automate repetitive tasks","Structure projects with virtual environments and packages"],
       fr:["Construire des backends et des API REST avec Django REST","Écrire des scripts qui automatisent des tâches répétitives","Structurer des projets avec environnements virtuels et paquets"]}},
 {k:"web",n:"Web frontend",tags:["React","TypeScript","Vite","JavaScript"],
  d:{en:"Responsive interfaces that talk to real APIs.",fr:"Des interfaces responsives qui communiquent avec de vraies API."},
  can:{en:["Build React interfaces in TypeScript","Handle forms, auth state and API calls","Make layouts work from phones to large screens","Deploy a frontend to a hosting platform"],
       fr:["Construire des interfaces React en TypeScript","Gérer formulaires, état d’authentification et appels API","Adapter les mises en page du téléphone au grand écran","Déployer un frontend sur une plateforme d’hébergement"]}},
 {k:"api",n:"APIs & security basics",tags:["Node.js","Express","Django REST","JWT"],
  d:{en:"Backends that are organised and protected from the start.",fr:"Des backends organisés et protégés dès le départ."},
  can:{en:["Design REST endpoints with validation (Express, Django REST)","Implement JWT authentication","Add rate limiting and security headers","Keep secrets in environment variables, not in code"],
       fr:["Concevoir des endpoints REST avec validation (Express, Django REST)","Mettre en place l’authentification JWT","Ajouter limitation de débit et en-têtes de sécurité","Garder les secrets dans des variables d’environnement, pas dans le code"]}},
 {k:"db",n:"Databases",tags:["PostgreSQL","Supabase","SQL"],
  d:{en:"Data models that stay consistent as a product grows.",fr:"Des modèles de données qui restent cohérents quand le produit grandit."},
  can:{en:["Design relational schemas with keys and constraints","Write SQL migrations and queries","Use Supabase for storage and hosted PostgreSQL"],
       fr:["Concevoir des schémas relationnels avec clés et contraintes","Écrire des migrations et des requêtes SQL","Utiliser Supabase pour le stockage et PostgreSQL hébergé"]}},
 {k:"ai",n:"AI & Machine Learning",tags:["Machine Learning","LLM APIs","Python"],
  d:{en:"Learning how models work, and turning it into a product.",fr:"Comprendre le fonctionnement des modèles et en faire un produit."},
  can:{en:["Explain core ideas like loss and gradient descent","Plan a progressive AI curriculum (ML TRAIN)","Integrate language-model APIs into an application"],
       fr:["Expliquer les idées clés comme la perte et la descente de gradient","Concevoir un parcours d’apprentissage progressif en IA (ML TRAIN)","Intégrer des API de modèles de langage dans une application"]}},
 {k:"cv",n:"Computer vision",tags:["OpenCV","Python"],
  d:{en:"Hands-on image processing experiments.",fr:"Des expérimentations concrètes de traitement d’images."},
  can:{en:["Read, transform and analyse images with OpenCV","Prototype vision ideas quickly in Python"],
       fr:["Lire, transformer et analyser des images avec OpenCV","Prototyper rapidement des idées de vision en Python"]}},
 {k:"git",n:"Git & workflow",tags:["Git","GitHub"],
  d:{en:"Clean history and a reproducible way of working.",fr:"Un historique propre et une façon de travailler reproductible."},
  can:{en:["Use branches, commits and remote repositories","Keep private data out of public repos","Document how to run and deploy a project"],
       fr:["Utiliser branches, commits et dépôts distants","Garder les données privées hors des dépôts publics","Documenter comment lancer et déployer un projet"]}}
];
const JOURNEY = [
  { t:{en:"Software engineering student",fr:"Étudiant en génie logiciel"}, d:{en:"Building real projects alongside my studies to understand what I ship.",fr:"Je construis de vrais projets en parallèle de mes études pour comprendre ce que je livre."} },
  { t:{en:"Web development",fr:"Développement web"}, d:{en:"Full-stack apps with React, Django and Node.js, from API design to deployment.",fr:"Applications full-stack avec React, Django et Node.js, de la conception d’API au déploiement."} },
  { t:{en:"AI & Machine Learning",fr:"IA & Machine Learning"}, d:{en:"Learning AI in depth and turning it into a product with ML TRAIN.",fr:"J’apprends l’IA en profondeur et j’en fais un produit avec ML TRAIN."} },
  { t:{en:"Electricity & teaching",fr:"Électricité & enseignement"}, d:{en:"Trained in general electricity, and drawn to teaching and sharing knowledge, which is what ML TRAIN is about.",fr:"Formé en électricité générale, et attiré par l’enseignement et la transmission des connaissances, ce qui est l’esprit de ML TRAIN."} }
];
/* Studied or goals — shown separately from skills I use in projects. */
const LEARNING = {
  en:["Flask","OAuth 2.0 / OpenID Connect","NumPy","Pandas","Scikit-learn","PyTorch","TensorFlow","NLP & Transformers","C / C++","Go","Rust","Linux","Defensive cybersecurity","Cloud"],
  fr:["Flask","OAuth 2.0 / OpenID Connect","NumPy","Pandas","Scikit-learn","PyTorch","TensorFlow","NLP & Transformers","C / C++","Go","Rust","Linux","Cybersécurité défensive","Cloud"]};
