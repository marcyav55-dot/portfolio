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
  photo: "profile.jpg"   // photo personnelle du fondateur
};
const NAME = "Marcus Tshijika Yav";
const TITLE = {en:"Founder · YAV Digital Solutions",fr:"Fondateur · YAV Digital Solutions"};
const SUMMARY = {
  en:"Founder of YAV Digital Solutions, a digital studio helping schools, healthcare organisations, shops and businesses improve their online presence, manage information and build useful digital tools.",
  fr:"Fondateur de YAV Digital Solutions, un studio numérique qui accompagne les écoles, structures de santé, commerces et entreprises dans leur présence en ligne, la gestion de leurs informations et la création d’outils numériques utiles."
};
/* Shown on the CV only when filled. Real data only. */
const EDUCATION = [
  { school:"Université de Kolwezi", degree:{en:"Software engineering — Year 2 (Bac 2)",fr:"Génie logiciel — Bac 2"}, period:"In progress / En cours" },
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
  { id:"grace-divine", name:"Grace Divine Multiservices", status:{en:"Deployed · public access to confirm",fr:"Déployé · accès public à confirmer"},
    desc:{en:"A full-stack multiservices website for a local business, combining service presentation, a product shop and customer order flows.",fr:"Un site web full-stack pour une entreprise multiservices, réunissant la présentation des prestations, une boutique de produits et le parcours de commande des clients."},
    tech:["React","Vite","Django REST Framework","PostgreSQL / Supabase","JWT"],
    cover:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=85",
    code:"https://github.com/marcyav55-dot/Grace_Divine",
    demo:"https://grace-divine-rust.vercel.app",
    details:{en:["Responsive React frontend with service and information pages","Product catalogue, categories, product search and shopping cart components","Customer registration/login and JWT-based authentication","Django REST API with PostgreSQL/Supabase data models for products, services and orders","A visual asset from the actual Grace Divine website is used as the project cover"],fr:["Frontend React responsive avec pages de présentation et d’informations","Catalogue de produits, catégories, recherche et composants de panier","Inscription/connexion des clients et authentification JWT","API Django REST avec modèles PostgreSQL/Supabase pour les produits, services et commandes","L’image de couverture provient des ressources visuelles utilisées par le site Grâce Divine"]}},
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
 {k:"web",n:{en:"Professional websites",fr:"Sites web professionnels"},tags:["Web design","Responsive","SEO basics","React"], image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=85", 
  d:{en:"Give your school, clinic, shop or organisation a clear, modern website that works on phones and computers.",fr:"Donnez à votre école, centre de santé, commerce ou organisation un site moderne, clair et adapté aux téléphones comme aux ordinateurs."},
  can:{en:["Create a presentation website for your organisation","Show your services, activities, news, contact details and location","Build pages that adapt to mobile phones, tablets and computers","Prepare the site for publication on the internet"],fr:["Créer un site de présentation pour votre établissement","Présenter vos services, activités, actualités, contacts et localisation","Adapter le site aux téléphones, tablettes et ordinateurs","Préparer sa mise en ligne sur Internet"]}},
 {k:"api",n:{en:"School, clinic & business management tools",fr:"Applications de gestion pour écoles, centres de santé et entreprises"},tags:["Custom applications","Forms","User accounts"], image:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1000&q=85", 
  d:{en:"Replace scattered notebooks and spreadsheets with a tool organised around the way your team works.",fr:"Remplacez les cahiers dispersés et les fichiers difficiles à suivre par un outil organisé selon le fonctionnement de votre équipe."},
  can:{en:["Plan school tools for student records, attendance, classes and payments","Create business tools for customers, stock, appointments and reports","Design clinic workflows around appointments and administrative records, with privacy requirements defined before development","Adapt features to the organisation's real needs"],fr:["Concevoir des outils scolaires pour les élèves, présences, classes et paiements","Créer des outils d’entreprise pour les clients, stocks, rendez-vous et rapports","Étudier les besoins administratifs d’un centre de santé, en définissant les exigences de confidentialité avant le développement","Adapter les fonctionnalités au fonctionnement réel de l’établissement"]}},
 {k:"py",n:{en:"Custom web applications",fr:"Applications web sur mesure"},tags:["Python","Django","JavaScript"], image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&q=85", 
  d:{en:"Build an interactive application that does more than display information: it can collect, organise and process data.",fr:"Créez une application interactive qui ne se limite pas à afficher des informations : elle peut collecter, organiser et traiter des données."},
  can:{en:["Build forms, dashboards and user spaces","Automate repetitive tasks and simple workflows","Connect the application to a database","Explain the solution and help users get started"],fr:["Créer des formulaires, tableaux de bord et espaces utilisateurs","Automatiser des tâches répétitives et des opérations simples","Relier l’application à une base de données","Expliquer la solution et accompagner les premiers utilisateurs"]}},
 {k:"db",n:{en:"Data organisation & databases",fr:"Organisation des données et bases de données"},tags:["PostgreSQL","SQL","Supabase"], image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=85", 
  d:{en:"Improve the quality and reliability of your business data: structure databases, clean records and make information easier to find and use.",fr:"Améliorez la qualité et la fiabilité des données de votre organisation : structurez les bases de données, nettoyez les enregistrements et rendez les informations plus faciles à retrouver et à exploiter."},
  can:{en:["Review and organise existing databases and spreadsheets","Clean duplicate, incomplete or inconsistent records","Plan safe data migration from old files to a structured database","Create search, filtering, reporting and backup workflows"],fr:["Examiner et organiser les bases de données et fichiers existants","Nettoyer les doublons et les données incomplètes ou incohérentes","Préparer la migration sécurisée d’anciens fichiers vers une base structurée","Créer des fonctions de recherche, de filtrage, de rapports et de sauvegarde"]}},
 {k:"git",n:{en:"Website maintenance & essential security",fr:"Maintenance de sites et sécurité essentielle"},tags:["Updates","Backups","Access control","HTTPS"], image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&q=85", 
  d:{en:"Keep a website or application maintained, reduce common risks and make access easier to manage.",fr:"Entretenez votre site ou application, réduisez les risques courants et gérez mieux les accès."},
  can:{en:["Review common configuration and access-control issues","Apply updates and basic protective settings","Set up backup routines where supported","Help fix display issues and keep pages working"],fr:["Vérifier les problèmes courants de configuration et de gestion des accès","Appliquer les mises à jour et les protections de base","Mettre en place des sauvegardes lorsque la plateforme le permet","Corriger les problèmes d’affichage et maintenir les pages fonctionnelles"]}},
 {k:"ai",n:{en:"AI features & workflow automation",fr:"Fonctionnalités d’IA et automatisation"},tags:["AI APIs","Python","Automation"], image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&q=85", 
  d:{en:"Add useful AI-powered features to a website or internal tool when they solve a real problem.",fr:"Ajoutez des fonctions utilisant l’intelligence artificielle à un site ou à un outil interne lorsqu’elles répondent à un vrai besoin."},
  can:{en:["Connect an application to an AI service or assistant","Create simple question-answer or text-processing workflows","Automate repetitive digital tasks"],fr:["Connecter une application à un service ou assistant d’IA","Créer des fonctions simples de questions-réponses ou de traitement de texte","Automatiser des tâches numériques répétitives"]}},
 {k:"cv",n:{en:"Technical advice & project support",fr:"Conseil technique et accompagnement de projet"},tags:["Planning","Documentation","GitHub"], image:"https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1000&q=85", 
  d:{en:"Turn an idea into a clear project plan and explain technical choices in everyday language.",fr:"Transformez une idée en plan de projet clair et comprenez les choix techniques avec des mots simples."},
  can:{en:["Clarify the problem and define the useful features","Recommend a suitable technical approach and realistic next steps","Document how to use and maintain the delivered solution"],fr:["Clarifier le problème et définir les fonctionnalités utiles","Proposer une approche technique adaptée et des étapes réalistes","Documenter l’utilisation et la maintenance de la solution"]}},
 {k:"shop",n:{en:"Online shops & e-commerce",fr:"Boutiques en ligne et commerce électronique"},tags:["Product catalogue","Shopping cart","Orders"],image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&q=85",
  d:{en:"Sell online with a professional shop where customers can discover products, place orders and contact your business.",fr:"Vendez en ligne avec une boutique professionnelle où les clients peuvent découvrir vos produits, passer commande et contacter votre entreprise."},
  can:{en:["Create a product catalogue with categories and photos","Build product search, shopping cart and order workflows","Set up customer accounts and an order-management area","Connect suitable payment or delivery services after checking availability"],fr:["Créer un catalogue de produits avec catégories et photos","Mettre en place la recherche, le panier et le processus de commande","Créer des comptes clients et un espace de gestion des commandes","Intégrer des solutions de paiement ou de livraison après vérification de leur disponibilité"]}},
 {k:"it",n:{en:"IT support, maintenance & networks",fr:"Assistance informatique, maintenance et réseaux"},tags:["Computer setup","Wi-Fi","Hosting"],image:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&q=85",
  d:{en:"Get practical help setting up, maintaining and connecting the digital tools your organisation depends on.",fr:"Bénéficiez d’un accompagnement pratique pour installer, entretenir et connecter les outils numériques de votre organisation."},
  can:{en:["Install and configure computers and essential software","Help set up office Wi-Fi and basic local networks","Configure domains, hosting and professional email","Diagnose common website and application issues"],fr:["Installer et configurer les ordinateurs et logiciels essentiels","Aider à mettre en place le Wi-Fi et les réseaux locaux simples","Configurer les noms de domaine, l’hébergement et les e-mails professionnels","Diagnostiquer les problèmes courants des sites et applications"]}}

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
