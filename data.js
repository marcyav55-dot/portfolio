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
const TITLE = {en:"Full-Stack Software Developer · Machine Learning · Artificial Intelligence",fr:"Développeur Full-Stack · Machine Learning · Intelligence artificielle"};
const SUMMARY = {
  en:"Software developer and founder of TYM Services, working across full-stack engineering, Machine Learning and artificial intelligence. I design and build web applications, data-driven solutions and intelligent software integrations.",
  fr:"Développeur logiciel et fondateur de TYM Services, intervenant en développement Full-Stack, Machine Learning et intelligence artificielle. Je conçois et développe des applications web, des solutions orientées données et des intégrations logicielles intelligentes."
};
/* Shown on the CV only when filled. Real data only. */
const EDUCATION = [
  { school:"Université de Kolwezi", degree:{en:"Software Engineering — Year 3 (Bac 3)",fr:"Génie logiciel — Bac 3"}, period:"" },
  { school:"", degree:{en:"State Diploma — General Electricity",fr:"Diplôme d’État — Électricité générale"}, period:"" }
];
const LANGUAGES = [
  {n:{en:"French",fr:"Français"},level:{en:"Fluent",fr:"Courant"}},
  {n:{en:"English",fr:"Anglais"},level:{en:"",fr:""}}
];
const PROJECTS = [
  { id:"ml-train", main:true, name:"ML TRAIN", status:{en:"Educational platform",fr:"Plateforme éducative"},
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
 {k:"web",image:"assets/domains/web-solution.svg",n:{en:"Full-Stack Development & Software Engineering",fr:"Développement Full-Stack et ingénierie logicielle"},d:{en:"Designing and building complete digital products, from responsive user interfaces to backend services, databases, APIs and deployment.",fr:"Concevoir et développer des produits numériques complets, des interfaces responsives aux services backend, bases de données, API et déploiement."},can:{en:["Frontend: responsive interfaces and user experience","Backend: business logic, REST APIs and authentication","Database design, SQL and application architecture","Application deployment, DevOps workflows and secure development"],fr:["Frontend : interfaces responsives et expérience utilisateur","Backend : logique métier, API REST et authentification","Conception de bases de données, SQL et architecture logicielle","Déploiement d’applications, pratiques DevOps et développement sécurisé"]},tags:["HTML","CSS","JavaScript","TypeScript","React","Node.js","Express","Python","Django REST","PostgreSQL","Supabase","Git","GitHub","Docker","CI/CD","Vercel","Excel","Cybersécurité · fondamentaux"]},
 {k:"data",image:"assets/domains/data-science-forecast.svg",n:{en:"Machine Learning & Data Science",fr:"Machine Learning et Data Science"},d:{en:"Working with data and exploring predictive models, from data preparation and analysis to model training, evaluation and practical experiments.",fr:"Travailler avec les données et explorer des modèles prédictifs, de la préparation et l’analyse des données à l’entraînement, l’évaluation et l’expérimentation des modèles."},can:{en:["Data collection, cleaning and exploratory analysis","Statistics, visualisation and predictive analytics","Machine Learning model training and evaluation","Deep Learning and neural-network fundamentals","Computer vision experiments"],fr:["Collecte, nettoyage et exploration des données","Statistiques, visualisation et analyse prédictive","Entraînement et évaluation de modèles de Machine Learning","Fondamentaux du Deep Learning et des réseaux de neurones","Expérimentations en vision par ordinateur"]},tags:["Python","Pandas","NumPy","Matplotlib","Scikit-learn","Machine Learning","Deep Learning","Neural Networks","OpenCV","Data visualisation"]},
 {k:"ai",image:"assets/domains/ai-solution.svg",n:{en:"Artificial Intelligence & Generative AI",fr:"Intelligence artificielle et IA générative"},d:{en:"Building intelligent applications powered by language models and generative systems, and integrating them into useful products.",fr:"Concevoir des applications intelligentes basées sur les modèles de langage et les systèmes génératifs, et les intégrer dans des produits utiles."},can:{en:["LLMs, AI APIs and intelligent application integration","Prompt Engineering and effective AI assistant use","Fine-tuning concepts and model adaptation","RAG pipelines, embeddings and AI agents","Generative image creation and visual prompting","Reviewing, testing and improving AI-generated outputs"],fr:["LLM, API d’IA et intégration d’applications intelligentes","Prompt Engineering et utilisation efficace des assistants IA","Fondamentaux du fine-tuning et adaptation de modèles","Pipelines RAG, embeddings et agents IA","Création d’images génératives et prompts visuels","Vérification, test et amélioration des résultats produits par l’IA"]},tags:["LLM","OpenAI API","Claude API","Gemini API","Prompt Engineering","Fine-tuning","RAG","Embeddings","AI Agents","Generative AI","Image Generation"]}
];
const LEARNING={en:["Full-Stack Engineering","Frontend & Backend","REST APIs","Databases","Cloud Computing","AWS","Google Cloud","Docker","DevOps & CI/CD","Cybersecurity fundamentals","Data Science","Predictive Analytics","Machine Learning","Deep Learning","Computer Vision","LLMs","Prompt Engineering","Fine-tuning","RAG & AI Agents","Generative Image Creation","Online learning support"],fr:["Ingénierie Full-Stack","Frontend et Backend","API REST","Bases de données","Cloud computing","AWS","Google Cloud","Docker","DevOps et CI/CD","Fondamentaux de la cybersécurité","Data Science","Analyse prédictive","Machine Learning","Deep Learning","Vision par ordinateur","LLM","Prompt Engineering","Fine-tuning","RAG et agents IA","Génération d’images par IA","Accompagnement pédagogique en ligne"]};
const JOURNEY=[
 {t:{en:"Understand the need",fr:"Comprendre le besoin"},d:{en:"Clarify goals, users and constraints.",fr:"Clarifier les objectifs, utilisateurs et contraintes."}},
 {t:{en:"Plan the solution",fr:"Planifier la solution"},d:{en:"Define useful features and delivery steps.",fr:"Définir les fonctionnalités et les étapes."}},
 {t:{en:"Build and test",fr:"Développer et tester"},d:{en:"Implement progressively and verify the result.",fr:"Développer progressivement et vérifier le résultat."}},
 {t:{en:"Deliver and support",fr:"Livrer et accompagner"},d:{en:"Present the result and agree on follow-up.",fr:"Présenter le résultat et convenir du suivi."}}
];
const GALLERY=[
 {src:"https://www.nordiccapital.com/imported-media/1639/capabilities-dashboarding.jpg?bgcolor=ffffff&height=720&quality=90&v=1d89dd5da064af0&width=1440",title:{en:"Business dashboards across laptop, tablet and phone",fr:"Tableaux de bord d’entreprise sur ordinateur, tablette et téléphone"},category:"Dashboards"},
 {src:"https://www.theurer.com/fileadmin/_processed_/d/b/csm_BI-Mobile-Company-Dashboard-Multi-Devices_a36365d15c.png",title:{en:"Management indicators and business charts",fr:"Indicateurs de gestion et graphiques d’entreprise"},category:"Dashboards"},
 {src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=88",title:{en:"Data analysis and visual reporting",fr:"Analyse de données et rapports visuels"},category:"Data Science"},
 {src:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=88",title:{en:"Digital business analytics",fr:"Analyse numérique de l’activité"},category:"Data Science"},
 {src:"https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--dbcc664c-a68d-4db2-9029-a28356b0c709/ey-odi-report-banner.png?preferwebp=true&quality=85&width=1000",title:{en:"A connected world: global digital communication",fr:"Un monde connecté : communication numérique mondiale"},category:"Global reach"}
];
const PROGRAMMING = ["Python","JavaScript","TypeScript","SQL","HTML / CSS","Excel"];
