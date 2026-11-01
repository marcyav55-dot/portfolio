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
 {n:{en:"Web development",fr:"Développement web"},level:{en:"Project practice",fr:"Pratique en projet"},rank:4},
 {n:{en:"Python development",fr:"Développement Python"},level:{en:"Project practice",fr:"Pratique et expérimentation"},rank:3},
 {n:{en:"Backend & databases",fr:"Backend et bases de données"},level:{en:"Project practice",fr:"Pratique en projet"},rank:3},
 {n:{en:"Artificial intelligence",fr:"Intelligence artificielle"},level:{en:"Developing",fr:"En développement"},rank:2},
 {n:{en:"Machine Learning & Data Science",fr:"Machine Learning & Data Science"},level:{en:"Learning",fr:"En apprentissage"},rank:2}
];
const PROGRAMMING = ["Python","JavaScript","TypeScript","SQL","HTML / CSS"];
