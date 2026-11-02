/* ================= CONFIG — edit only this block =================
   - Social links: leave "" to hide a button (never put fake URLs).
   - Projects: copy an object in PROJECTS. cover/code/demo may be "".
   - Images: put files in /images and add them to GALLERY. The gallery
     section stays hidden while GALLERY is empty.
   ================================================================ */
const SITE = {
  github: "https://github.com/marcyav55-dot",
  linkedin: "https://www.linkedin.com/in/marc-yav",
  email: "marcyav55@gmail.com",
  phone: "080 83 73 717",
  whatsapp: "https://wa.me/243808373717",
  location: "Kolwezi, Lualaba, RDC",
  photo: "profile.jpg"
};
const NAME = "TSHIJIKA YAV MARC";
const KNOWN_AS = "Marcus Yav";
const TITLE = {en:"Software Developer · AI & Machine Learning Enthusiast",fr:"Développeur logiciel · Passionné d’IA & Machine Learning"};
const SUMMARY = {
  en:"Software engineering student and founder of TYM Services, building web applications and exploring artificial intelligence, Machine Learning and Data Science.",
  fr:"Étudiant en génie logiciel et fondateur de TYM Services. Je développe des applications web et approfondis mes compétences en intelligence artificielle, Machine Learning et Data Science."
};
/* Shown on the CV only when filled. Real data only. */
const EDUCATION = [
  { school:"Université de Kolwezi", degree:{en:"Software engineering — Year 3 (Bac 3)",fr:"Génie logiciel — Bac 3"}, period:"In progress / En cours" },
  { school:"", degree:{en:"State Diploma — General Electricity",fr:"Diplôme d’État — Électricité générale"}, period:"" }
];
const LANGUAGES = [
  {n:{en:"French",fr:"Français"},level:{en:"Fluent",fr:"Courant"}},
  {n:{en:"English",fr:"Anglais"},level:{en:"Learning",fr:"En apprentissage"}}
];
const PROJECTS = [
  { id:"ml-train", main:true, name:"ML TRAIN", status:{en:"V1 in progress",fr:"V1 en cours"},
    desc:{en:"An educational platform for learning programming, mathematics and AI/ML step by step, with a focus on understanding and writing code.",fr:"Une plateforme éducative pour apprendre la programmation, les mathématiques et l’IA/ML pas à pas, avec un accent sur la compréhension et l’écriture du code."},
    tech:["React","TypeScript","Node.js","Express","PostgreSQL"], cover:"", code:"", demo:"",
    details:{en:["Structured learning curriculum, lessons and concepts","Learning path, challenges and learner dashboard"],fr:["Curriculum structuré, leçons et concepts","Parcours d’apprentissage, défis et tableau de bord"]}},
  { id:"grace-divine", name:"Grace Divine Multiservices", status:{en:"Website project · deployed",fr:"Projet web · déployé"},
    desc:{en:"A full-stack multiservices website with service presentation, product catalogue and customer order flows.",fr:"Un site web full-stack multiservices avec présentation des services, catalogue de produits et parcours de commande."},
    tech:["React","Vite","Django REST Framework","PostgreSQL / Supabase","JWT"],cover:"",
    code:"https://github.com/marcyav55-dot/Grace_Divine",demo:"https://grace-divine-rust.vercel.app",details:null},
  { id:"opencv", name:"OpenCV experiments", status:{en:"Practical experiments",fr:"Expérimentations pratiques"},
    desc:{en:"Computer vision experiments using Python and OpenCV.",fr:"Expérimentations de vision par ordinateur avec Python et OpenCV."},
    tech:["Python","OpenCV"],cover:"",code:"https://github.com/marcyav55-dot/Opencv",demo:"",details:null}
];
const SKILLS = [
 {k:"web",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",n:{en:"Web development",fr:"Développement web"},d:{en:"Responsive websites and web platforms designed around real user needs.",fr:"Sites web et plateformes responsives conçus autour des besoins réels des utilisateurs."},can:{en:["Responsive interfaces","Business websites"],fr:["Interfaces responsives","Sites professionnels"]},tags:["HTML","CSS","JavaScript","React","TypeScript"]},
 {k:"api",image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",n:{en:"Backend development",fr:"Développement backend"},d:{en:"Reliable application logic, server-side systems and APIs.",fr:"Logique applicative fiable, systèmes côté serveur et API."},can:{en:["REST APIs","Authentication"],fr:["API REST","Authentification"]},tags:["Node.js","Express","Django REST","JWT"]},
 {k:"db",image:"https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=85",n:{en:"Databases & dashboards",fr:"Bases de données et tableaux de bord"},d:{en:"Structured information, database design and management dashboards.",fr:"Informations structurées, conception de bases de données et tableaux de bord de gestion."},can:{en:["Data models","CRUD systems","Management dashboards"],fr:["Modèles de données","Systèmes CRUD","Tableaux de bord de gestion"]},tags:["PostgreSQL","SQL","Supabase"]},
 {k:"ai",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",n:{en:"Artificial intelligence & Machine Learning",fr:"Intelligence artificielle et Machine Learning"},d:{en:"Exploring intelligent applications, machine learning models and computer vision.",fr:"Exploration d’applications intelligentes, de modèles de Machine Learning et de vision par ordinateur."},can:{en:["Python experiments","Computer vision","Machine learning prototypes"],fr:["Expériences Python","Vision par ordinateur","Prototypes de Machine Learning"]},tags:["Python","OpenCV","Machine Learning"]},
 {k:"data",image:"https://images.unsplash.com/photo-1551288049-bebda827c52f?auto=format&fit=crop&w=1200&q=85",n:{en:"Data Science & predictive analytics",fr:"Data Science et analyse prédictive"},d:{en:"Turning historical data into insights, trends and carefully evaluated forecasts.",fr:"Transformer les données historiques en informations utiles, tendances et prévisions soigneusement évaluées."},can:{en:["Data cleaning and exploration","Trend analysis","Forecasting examples (sales, demand, attendance)"],fr:["Nettoyage et exploration des données","Analyse des tendances","Exemples de prévisions (ventes, demande, fréquentation)"]},tags:["Python","Pandas","NumPy","Matplotlib","Scikit-learn"]},
 {k:"git",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",n:{en:"Technical delivery",fr:"Livraison technique"},d:{en:"Version control, deployment and ongoing technical support.",fr:"Gestion de versions, déploiement et accompagnement technique."},can:{en:["Git workflows","Deployment","Maintenance"],fr:["Flux Git","Déploiement","Maintenance"]},tags:["Git","GitHub","Vercel"]}
];
const LEARNING={en:["Data Science","Deep Learning","Cloud deployment"],fr:["Data Science","Deep Learning","Déploiement cloud"]};
const JOURNEY=[
 {t:{en:"Understand the need",fr:"Comprendre le besoin"},d:{en:"Clarify goals, users and constraints.",fr:"Clarifier les objectifs, utilisateurs et contraintes."}},
 {t:{en:"Plan the solution",fr:"Planifier la solution"},d:{en:"Define useful features and delivery steps.",fr:"Définir les fonctionnalités et les étapes."}},
 {t:{en:"Build and test",fr:"Développer et tester"},d:{en:"Implement progressively and verify the result.",fr:"Développer progressivement et vérifier le résultat."}},
 {t:{en:"Deliver and support",fr:"Livrer et accompagner"},d:{en:"Present the result and agree on follow-up.",fr:"Présenter le résultat et convenir du suivi."}}
];
const GALLERY=[
 {src:"1793541020227.jpg",title:{en:"TYM Services — digital solutions",fr:"TYM Services — solutions numériques"},category:"Studio"},
 {src:"profile.jpg",title:{en:"Founder profile",fr:"Profil du fondateur"},category:"Studio"},
 {src:"ca6336e2e2ebed43c0e74030f340c8df.jpg",title:{en:"Project visual",fr:"Visuel de projet"},category:"Projects"}
];
const PROGRAMMING = ["Python","JavaScript","TypeScript","SQL","HTML / CSS"];
