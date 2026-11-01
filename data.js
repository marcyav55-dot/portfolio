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
 {k:"web",n:{en:"Web development",fr:"Développement web"},d:{en:"Responsive websites and web platforms.",fr:"Sites web et plateformes responsives."},can:{en:["Responsive interfaces","Business websites"],fr:["Interfaces responsives","Sites professionnels"]},tags:["HTML","CSS","JavaScript","React","TypeScript"]},
 {k:"api",n:{en:"Backend development",fr:"Développement backend"},d:{en:"Application logic and APIs.",fr:"Logique applicative et API."},can:{en:["REST APIs","Authentication"],fr:["API REST","Authentification"]},tags:["Node.js","Express","Django REST","JWT"]},
 {k:"db",n:{en:"Databases & dashboards",fr:"Bases de données et tableaux de bord"},d:{en:"Structured data and management tools.",fr:"Données structurées et outils de gestion."},can:{en:["Data models","CRUD systems"],fr:["Modèles de données","Systèmes CRUD"]},tags:["PostgreSQL","SQL","Supabase"]},
 {k:"ai",n:{en:"AI & Machine Learning",fr:"IA et Machine Learning"},d:{en:"Learning and experimenting with intelligent software.",fr:"Apprentissage et expérimentation de logiciels intelligents."},can:{en:["Python experiments","Computer vision"],fr:["Expériences Python","Vision par ordinateur"]},tags:["Python","OpenCV","Machine Learning"]},
 {k:"git",n:{en:"Technical delivery",fr:"Livraison technique"},d:{en:"Version control, deployment and maintenance.",fr:"Gestion de versions, déploiement et maintenance."},can:{en:["Git workflows","Deployment"],fr:["Flux Git","Déploiement"]},tags:["Git","GitHub","Vercel"]}
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
