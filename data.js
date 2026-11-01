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
const NAME = "Marcus Tshijika Yav";
const TITLE = {en:"Software Developer · AI & Machine Learning Enthusiast",fr:"Développeur logiciel · Passionné d’IA & Machine Learning"};
const SUMMARY = {
  en:"Software engineering student and founder of TYM Services, building web applications and exploring artificial intelligence, Machine Learning and Data Science.",
  fr:"Étudiant en génie logiciel et fondateur de TYM Services. Je développe des applications web et approfondis mes compétences en intelligence artificielle, Machine Learning et Data Science."
};
/* Shown on the CV only when filled. Real data only. */
const EDUCATION = [
  { school:"Université de Kolwezi", degree:{en:"Software engineering — Year 2 (Bac 2)",fr:"Génie logiciel — Bac 2"}, period:"In progress / En cours" },
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
 {k:"web",image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=85",n:{en:"Websites & digital presence",fr:"Sites web & présence numérique"},d:{en:"Modern, responsive websites that present your organisation clearly and help customers reach you.",fr:"Des sites modernes et adaptatifs pour présenter votre organisation et permettre à vos clients de vous contacter facilement."},can:{en:["Corporate and portfolio websites","Landing pages and responsive interfaces","Website redesign and integration"],fr:["Sites vitrines et portfolios professionnels","Pages de présentation et interfaces adaptatives","Refonte et intégration de sites web"]},tags:["HTML","CSS","JavaScript","React","TypeScript"]},
 {k:"api",image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9a?w=900&q=85",n:{en:"Web & mobile applications",fr:"Applications web & mobiles"},d:{en:"Useful applications and APIs designed around your workflows, users and business goals.",fr:"Des applications et API utiles, conçues autour de vos méthodes de travail, de vos utilisateurs et de vos objectifs."},can:{en:["Custom web applications","Management dashboards and portals","Backend services and API integration"],fr:["Applications web sur mesure","Tableaux de bord et portails de gestion","Services backend et intégration d’API"]},tags:["React","Node.js","Python","Django REST"]},
 {k:"ai",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=85",n:{en:"Artificial intelligence",fr:"Intelligence artificielle"},d:{en:"Practical AI experiments and automation to make information and repetitive tasks easier to handle.",fr:"Des expérimentations en IA et de l’automatisation pour faciliter le traitement de l’information et des tâches répétitives."},can:{en:["AI-powered assistants and workflows","Machine Learning prototypes","Intelligent data processing"],fr:["Assistants et flux de travail avec IA","Prototypes de Machine Learning","Traitement intelligent des données"]},tags:["Python","AI","Machine Learning","Automation"]},
 {k:"db",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85",n:{en:"Management systems & databases",fr:"Gestion des données & systèmes d’information"},d:{en:"Turn growing volumes of information into organised, searchable records, clear dashboards and useful reports.",fr:"Transformez des volumes croissants d’informations en données organisées, consultables, avec des tableaux de bord et des rapports clairs."},can:{en:["Centralised and organised business data","Dashboards, statistics and reporting","Scalable and secure databases"],fr:["Centralisation et organisation des données","Tableaux de bord, statistiques et rapports","Bases de données évolutives et sécurisées"]},tags:["PostgreSQL","SQL","Dashboards","Django"]},
 {k:"web",image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85",n:{en:"E-commerce & online services",fr:"E-commerce & services en ligne"},d:{en:"Online catalogues and ordering experiences that make it easier to showcase and sell products.",fr:"Des catalogues et parcours de commande en ligne pour mieux présenter et vendre vos produits."},can:{en:["Product catalogues","Order and enquiry flows","Business service pages"],fr:["Catalogues de produits","Parcours de commande et de demande","Pages de services commerciaux"]},tags:["E-commerce","Payments integration","Web"]},
 {k:"git",image:"https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=900&q=85",n:{en:"IT support & maintenance",fr:"Assistance informatique & maintenance"},d:{en:"Technical assistance to keep websites, applications and connected work tools running reliably.",fr:"Une assistance technique pour maintenir vos sites, applications et outils numériques en bon fonctionnement."},can:{en:["Website updates and maintenance","Technical troubleshooting","IT setup and digital guidance"],fr:["Mise à jour et maintenance de sites","Diagnostic des problèmes techniques","Configuration informatique et accompagnement"]},tags:["Maintenance","IT support","Troubleshooting"]}
];
const PROGRAMMING = ["Python","JavaScript","TypeScript","SQL","HTML / CSS"];

const LEARNING = {
 en:["Machine Learning","Data Science","Deep Learning","AI-assisted workflows"],
 fr:["Machine Learning","Data Science","Deep Learning","Automatisation avec l’IA"]
};
const JOURNEY = [
 {t:{en:"Understand the real need",fr:"Comprendre le besoin réel"},d:{en:"Every project starts by listening to the organisation, its users and its constraints.",fr:"Chaque projet commence par l’écoute de l’organisation, de ses utilisateurs et de ses contraintes."}},
 {t:{en:"Build a practical solution",fr:"Construire une solution pratique"},d:{en:"The scope and tools are chosen to fit the problem rather than adding unnecessary complexity.",fr:"Le périmètre et les outils sont choisis selon le problème, sans complexité inutile."}},
 {t:{en:"Keep improving",fr:"Faire évoluer la solution"},d:{en:"Clear handover and agreed follow-up help the digital tool remain useful over time.",fr:"Une livraison claire et un suivi convenu permettent à l’outil numérique de rester utile dans le temps."}}
];
const GALLERY = [];
