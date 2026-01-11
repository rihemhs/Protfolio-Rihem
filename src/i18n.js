import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Les traductions
const resources = {
  en: {
    translation: {
      // Navigation
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      hireMe: "Hire Me",
      language: "Language",

      // Sections Home
      welcome: "Welcome, I'm",
      role: "Full Stack Developer",
      description: "I create amazing web applications with modern technologies",
      viewProjects: "View Projects",
      contactMe: "Contact Me",

      // Sections About

      aboutSubtitle: "Learn more about my journey",
      experience: "Years of Experience",
      completedProjects: "Completed Projects",
      happyClients: "Happy Clients",

      // Sections Projects
      projectsTitle: "My Projects",
      projectsSubtitle: "Some of my recent work",
      viewDetails: "View Details",
      technologies: "Technologies",

      // Sections Contact
      contactTitle: "Get In Touch",
      contactSubtitle: "Let's work together",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",

      // Footer
      rights: "All rights reserved",

      // Boutons
      downloadCV: "Download CV",
      readMore: "Read More",
      seeAll: "See All Projects",

      // Erreurs
      required: "This field is required",
      invalidEmail: "Invalid email address",
      messageSent: "Message sent successfully",
      Bonjour: "Welcome",
      Auth: "I",
      CV: "Download CV",
      contacter: "Contact Me",
      Découvrir: "Discover more",
      FullStack: "Full Stack Web Developer",
      discription: "Full-Stack Developer with 7+ years of experience designing scalable, high-performance applications using Spring Boot, React.js/Next.js, and TypeScript. Strong expertise in REST APIs, database optimization, secure architectures (JWT, Spring Security), and Agile software delivery. Proven ability to build ERP systems collaborate with cross-functional teams, and deliver clean, maintainable code.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",

      // Infos
      Residence: "Residence",
      Address: "Address",
      Phone: "Phone",

      // Skills
      Frontend: "Frontend",
      Backend: "Backend",
      CMS: "CMS",
      Performance: "Performance & UX",
      PerformanceDesc: "Optimization, Responsive Design",
      viewProjects: "Voir mes projets",
      contactMe: "Me contacter",

      // Infos
      Residence: "Résidence",
      Address: "Adresse",
      Phone: "Téléphone",

      // Skills
      Frontend: "Frontend",
      Backend: "Backend",
      CMS: "CMS",
      Performance: "Performance & UX",
      PerformanceDesc: "Optimisation, Design responsive",
      designedBy: "Designed and Developed by Rihem Hassouna",
      copyright: "Copyright © {{year}} RH",
      // Dans resources.fr.translation
      downloadConfirm: "Êtes-vous sûr de vouloir télécharger le CV ?",
      downloadSuccess: "Téléchargement du CV commencé !",
      downloadError: "Erreur lors du téléchargement du CV.",
      fileName: "Nom du fichier: CV-RIHEM_HASSOUNA.pdf",
      downloadTitle: "Télécharger le CV",
      confirmDownload: "Télécharger",
      cancel: "Annuler",
      ////About Me
      aboutTitle: "About Me",
      salutation: "Hi, I’m",
      a: "",
      position: "Full-Stack Developer",
      decriptionposition: "specialized in Spring Boot, React.js, Next.js, and TypeScript. I have over 7 years of experience designing scalable, high-performance applications, building ERP systems, and collaborating with cross-functional teams in Agile environments.",
      list1: "💼 Developed modular ERP (Finance, HR, Payroll, Projects) using Spring Boot & Next.js",
      list2: "⚡ Implemented secure REST APIs with JWT & Spring Security",
      list3: "📊 Optimized databases and improved API response time",
      list4: "🎨 Built responsive UI/UX aligned with design specifications",
      list5: "📱 Developed React Native mobile apps and deployed to App Store & Google Play",
      result: "Strive to build things that make a difference.",
      DB: "Databases",
      DevOps: "DevOps / Tools",
      Mobile: "Mobile",
      tools: " Tools I Use",
      projets: "My Recent Projects",
      projectsSubtitle: "Discover a selection of my technical and creative achievements:",
      ERP: "ERP / ERP Platform",
      descriptionERP: "Multi-branch ERP platform integrating supplier, human resources, finance, and payroll management. Modular, secure, and scalable application developed with Next.js for the front-end, Spring Boot for the back-end, and PostgreSQL as the database.",
      SDDM: "SDDM E-commerce",
      descriptionSDDM: "E-commerce site for dentists and technicians to purchase dental orthoses and training courses. Stripe integration included.",
      soforthandelsregister: "Sofort-Handelsregister",
      soforthandelsregisterDescription: "E-commerce platform specializing in the sale of company information.",
      GLOCAL: "GLOCAL-IT-SOLUTION",
      GLOCALDescription: "Showcase site for a company specializing in IT solutions.",
      TicketPromo: "Ticket Promo",
      TicketPromoDescription: "The app to get the best offers near you! E-coupons!",
      ECommerceSite: "E-commerce Site",
      ECommerceSiteDescription: "E-commerce site for selling sports equipment and clothing.",
      CompanySite: "Company Site",
      CompanySiteDescription: "Company Website",
      MobileApp: "Mobile App",
      MobileAppDescription: "Application allowing the possibility to place orders either in retail or wholesale of seafood and fish online in a few clicks",
      //final 
      InterestedText: "Interested in a collaboration ?",
      voirproject:"View Project",
  "contact": {
    "title": "Contact Us",
    "description": "Get in touch with us. We'd love to hear from you.",
    "getInTouch": "Get in Touch",
    "sendMessage": "Send us a Message",
    "address": {
      "title": "Address",
      "value": "123 Street Name, City, Country"
    },
    "email": {
      "title": "Email",
      "value": "contact@example.com"
    },
    "phone": {
      "title": "Phone",
      "value": "+1 234 567 8900"
    },
    "form": {
      "name": "Name",
      "namePlaceholder": "Enter your name",
      "email": "Email",
      "emailPlaceholder": "Enter your email",
      "subject": "Subject",
      "subjectPlaceholder": "Enter subject",
      "message": "Message",
      "messagePlaceholder": "Enter your message",
      "submit": "Send Message"
    }
  }



    }
  },
  fr: {
    translation: {
      // Navigation
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      contact: "Contact",
      hireMe: "Me recruter",
      language: "Langue",

      // Sections Home
      welcome: "Bienvenue, je suis",
      role: "Développeur Full Stack",
      description: "Je crée des applications web étonnantes avec des technologies modernes",
      viewProjects: "Voir les projets",
      contactMe: "Me contacter",

      // Sections About
      aboutTitle: "À propos de moi",
      aboutSubtitle: "En savoir plus sur mon parcours",
      experience: "Années d'expérience",
      completedProjects: "Projets terminés",
      happyClients: "Clients satisfaits",

      // Sections Projects
      projectsTitle: "Mes projets",
      projectsSubtitle: "Quelques-uns de mes travaux récents",
      viewDetails: "Voir les détails",
      technologies: "Technologies",

      // Sections Contact
      contactTitle: "Me contacter",
      contactSubtitle: "Travaillons ensemble",
      name: "Votre nom",
      email: "Votre email",
      message: "Votre message",
      send: "Envoyer le message",

      // Footer
      rights: "Tous droits réservés",

      // Boutons
      downloadCV: "Télécharger CV",
      readMore: "Lire plus",
      seeAll: "Voir tous les projets",

      // Erreurs
      required: "Ce champ est requis",
      invalidEmail: "Adresse email invalide",
      messageSent: "Message envoyé avec succès",
      ////Home
      Bonjour: "Bonjour !",
      Auth: "Je suis",
      CV: "Télécharger mon CV",
      contacter: "Me contacter",
      Découvrir: "Découvrir plus",
      FullStack: "Développeur Web Full Stack",
      discription: "Développeur Full-Stack avec plus de 7 ans d’expérience dans la conception et le développement d’applications scalables et haute performance utilisant Spring Boot, React.js/Next.js et TypeScript.Solide expertise dans la création d’API REST, l’optimisation des bases de données et la mise en place d’architectures sécurisées (JWT, Spring Security). Habitué aux méthodologies Agile, avec une capacité éprouvée à développer des systèmes ERP, à collaborer efficacement avec des équipes pluridisciplinaires et à livrer un code propre, maintenable et de qualité.",
      designedBy: "Conçu et développé par Rihem Hassouna",
      copyright: "Copyright © {{year}} RH",
      // Dans resources.en.translation
      downloadConfirm: "Are you sure you want to download the CV?",
      downloadSuccess: "CV download started!",
      downloadError: "Error downloading CV.",
      fileName: "File name: CV-RIHEMHASSOUNA.pdf",
      downloadTitle: "Download CV",
      confirmDownload: "Download",
      cancel: "Cancel",
      ////About Me
      salutation: "Bonjour, je suis",
      a: "",
      position: "développeuse Full-Stack",
      decriptionposition: "spécialisée en Spring Boot, React.js, Next.js et TypeScript.J’ai plus de 7 ans d’expérience dans la conception d’applications scalables et performantes, le développement de systèmes ERP, ainsi que la collaboration avec des équipes pluridisciplinaires dans des environnements Agile.",
      list1: "💼 Développement d’un ERP modulaire (Finance, RH, Paie, Projets) avec Spring Boot & Next.js",
      list2: "⚡ Mise en œuvre d’API REST sécurisées avec JWT & Spring Security",
      list3: "📊 Optimisation des bases de données et amélioration du temps de réponse des API",
      list4: "🎨 Création d’interfaces UI/UX responsives conformes aux spécifications de conception",
      list5: "📱 Développement d’applications mobiles React Native et déploiement sur l’App Store & Google Play",
      result: "S’efforcer de créer des choses qui font la différence.",
      DB: "Bases de données",
      DevOps: "DevOps / Outils",
      Mobile: "Mobile",
      tools: " Outils que j'utilise",
      projets: "Mes Projets Récents",
      projectsSubtitle: "Découvrez une sélection de mes réalisations techniques et créatives :",
      ERP: "ERP / Plateforme ERP",
      descriptionERP: "Plateforme ERP multi-branches intégrant la gestion des fournisseurs, des ressources humaines, de la finance et de la paie. Application modulaire, sécurisée et évolutive, développée avec Next.js pour le front-end, Spring Boot pour le back-end et PostgreSQL comme base de données.",
      SDDM: "SDDM E-commerce",
      descriptionSDDM: "Site e-commerce destiné aux dentistes et techniciennes pour l'achat d'orthèses dentaires et de formations. Intégration de Stripe incluse.",
      soforthandelsregister: "Sofort-Handelsregister",
      soforthandelsregisterDescription: "Plateforme E-commerce spécialisée dans la vente d'informations sur les entreprises.",
      GLOCAL: "GLOCAL-IT-SOLUTION",
      GLOCALDescription: "Site vitrine d'une société spécialisée en solutions informatiques.",
      TicketPromo: "Ticket Promo",
      TicketPromoDescription: "L’appli pour bénéficier des meilleures offres près de chez vous ! E-coupons !",
      ECommerceSite: "Site E-commerce",
      ECommerceSiteDescription: "Site E-commerce de vente d'équipements et vêtements de sport.",
      CompanySite: "Site Société",
      CompanySiteDescription: "Site d'une entreprise",
      MobileApp: "Application Mobile",
      MobileAppDescription: "Application permettant la possibilité de passer des commandes soit en détails soit en gros de fruits de mer et de poissons en ligne en quelques clics",
           //final 
      InterestedText: "Intéressé par une collaboration ?",
      voirproject:"Voir le projet"




    }
  }
};

i18n
  .use(LanguageDetector) // Détecte la langue du navigateur
  .use(initReactI18next) // Passe i18n à react-i18next
  .init({
    resources,
    fallbackLng: "en", // Langue de repli
    supportedLngs: ["en", "fr"], // Langues supportées

    // Configuration de la détection
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"], // Où stocker la langue
    },

    interpolation: {
      escapeValue: false, // React s'occupe déjà de l'échappement
    },

    react: {
      useSuspense: false, // Pour éviter les problèmes avec SSR
    }
  });

export default i18n;