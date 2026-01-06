import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  name = 'ASSIGA ATEBA Basile';

  about = `Passionné par l’informatique, j’ai acquis au fil de mes expériences d’excellentes compétences en infrastructure IT ainsi qu’en développement. Rigoureux, réactif et doté d’une excellente capacité d’adaptation, je suis prêt à relever de nouveaux défis au sein d’une organisation collaborative et stimulante, où je pourrais mettre à profit mes compétences. Participer à des projets innovants, qu’il s’agisse de la mise en place, de l’optimisation ou de la maintenance d’architectures informatiques ou applicatives, représente pour moi une réelle source de motivation et un moteur dans mon évolution professionnelle.`;

  skills = {
    technical: [
      'Java', 'PHP', 'SQL', 'C++', 'TypeScript', 'Angular', 'SpringBoot', 'Firebase', 'Maven', 'Hibernate', 'Laravel',
      'HTML', 'CSS', 'SASS', 'REST APIs', 'Unit testing (JUnit)', 'PostgreSQL', 'MongoDB', 'MySQL',
      'Git', 'GitHub Actions', 'Docker', 'DockerHub', 'Jenkins', 'Netbeans', 'IntelliJ', 'Visual Studio Code',
      'Apache Tomcat', 'Nginx', 'OVHcloud (VPS)', 'Windows', 'Linux', 'Windows Server', 'VMware',
      'Postman', 'Arduino', 'Monitoring', 'CI/CD pipelines', 'IPv4/IPv6', 'DHCP/DNS', 'VoIP', 'SSH/RDP'
    ],
    functional: [
      'Capacité d’adaptation', 'Coordonner l’activité d’une équipe', 'Analyser les besoins clients',
      'Élaboration de cahiers des charges', 'Rédaction de spécifications fonctionnelles et techniques',
      'Conduite d\'entretiens clients', 'Tests & recette', 'Mener des ateliers de design / maquettage',
      'Gestion de projet Agile (Scrum)', 'Rédiger une documentation technique', 'Persévérance', 'Goût du challenge',
      'Contrôler la conformité d’un produit', 'Gérer la relation client', 'Travail d\'équipe'
    ]
  };

  experiences = [
    {
      company: 'Forum Associatif Tous Ensemble',
      role: 'Développeur Fullstack',
      period: 'Juin 2025 à Septembre 2025',
      description: `A l'occasion de ses 25 ans d'existence, le groupe a décidé de renforcer sa visibilité et son engagement citoyen auprès de ses partenaires ainsi que du grand public, en valorisant ses activités (sur le web) et en créant une plateforme web dédiée aux porteurs de projets issus des quartiers populaires.`,
      projects: [
        {
          title: 'Refonte du site Web',
          summary: `Modernisation du site web en y intégrant des éléments graphiques destinés à le rendre plus dynamique et attractif, enrichissement des contenus et ajout de fonctionnalités (traduction multilingue, espace contact).`,
          tasks: [
            "Intégrer des éléments graphiques (styles, scripts)",
            "Développer les pages du site (Actions, Actualités, Contact etc.)",
            "Enrichir le site avec des informations actualisées (images, vidéos, textes)",
            "Implémenter le service de contact",
            "Maintenir le site et corriger les bugs après déploiement"
          ],
          achievements: [
            "Augmentation des prises de contact de 0 à plus de 7 par semaine"
          ],
          tech: ['PHP','Laravel','MySQL','Git'],
          logo: 'assets/logos/forum-associatif-tous-ensemble.png',
          url: 'https://forumassotousensemble.org/'
        },
        {
          title: "Développement d'une plateforme web pour porteurs de projets",
          summary: `Création d'une interface destinée à accompagner les porteurs de projets: gestion des utilisateurs (rôles), gestion des candidatures, dashboard, etc.`,
          tasks: [
            "Rédiger le cahier des charges avec le coordinateur de projets",
            "Définir les spécifications fonctionnelles et techniques",
            "Développer un MVP (gestion des utilisateurs, rôles, gestion des candidatures, dashboard etc)"
          ],
          tech: ['Angular','SpringBoot','PostgreSQL','MongoDB','Docker','Jenkins','Git'],
          logo: 'assets/logos/forum-associatif-tous-ensemble.png',
          url: ''
        }
      ]
      ,
      logo: 'assets/logos/forum-associatif-tous-ensemble.png'
    },
    {
      company: 'Lima Survey',
      role: 'Ingénieur informatique',
      period: '07-2022 – 07-2024 | Yaoundé, Cameroun (2 ans)',
      description: `Déploiement, exploitation et support d'une infrastructure IT dans le cadre des activités de la structure.`,
      project: `Déploiement et maintenance d'infrastructures IT critiques`,
      tasks: [
        "Déployer et maintenir les infrastructures IT critiques",
        "Gérer plus de 30 équipements (serveurs, routeurs, postes clients)",
        "Assurer le support technique et former les utilisateurs",
        "Optimiser les performances réseau (Wi-Fi, routage, câblage)"
      ],
      tech: ['Windows Server','Active Directory','DHCP','DNS','Réseaux'],
      logo: 'assets/logos/lima-survey.png'
    },
    {
      company: 'Lima Survey',
      role: 'Ingénieur informatique',
      period: '02-2021 – 07-2021 | Yaoundé, Cameroun (6 mois)',
      description: `Déploiement, exploitation et support d'une infrastructure IT dans le cadre des activités de la structure.`,
      project: `Déploiement et maintenance d'infrastructures IT`,
      tasks: [
        "Déployer et mettre en service les équipements informatiques",
        "Gérer et maintenir les équipements réseau",
        "Assurer le support technique et la formation des utilisateurs"
      ],
      tech: ['Windows Server','Active Directory','DHCP','DNS','Réseaux'],
      logo: 'assets/logos/lima-survey.png'
    },
    {
      company: 'BNR Company',
      role: 'Développeur',
      period: 'Septembre 2021 à Février 2022',
      description: `Spécialisée dans le domaine de l’informatique, BNR Company a décidé de développer ses activités en déployant les solutions qu’elle conçoit afin d’élargir son offre et de renforcer sa présence sur le marché.`,
      project: `Développement de solutions de gestion et d'e-commerce`,
      tasks: [
        "Déploiement de solutions de gestion pour PME et structures de santé",
        "Développement d'interfaces web et fonctionnalités métiers",
        "Tests, correction de bugs et maintenance d'API e-commerce",
        "Tester les correctifs et les nouveaux services à l'aide de Postman"
      ],
      tech: ['PHP','Laravel','API REST','Postman','Bootstrap','Figma','MySQL'],
      logo: 'assets/logos/bnr-company.png'
    },
    {
      company: 'CAMTEL',
      role: "Stagiaire à la Division des systèmes d'information",
      period: '03-2020 – 06-2020 | Yaoundé, Cameroun',
      description: `Stage académique à la Division des systèmes d'information de CAMTEL, axé sur le déploiement d'architectures réseau FTTx, l'installation de lignes spécialisées et la maintenance des infrastructures de connectivité.`,
      theme: 'Etude et proposition de déploiement d\'un Backbone IP/MPLS',
      tasks: [
        "Mettre en place des architectures FTTx et installer des lignes spécialisées pour le déploiement des réseaux",
        "Installer et maintenir le câblage (Ethernet et fibre optique) ainsi que des équipements associés",
        "Gérer les panneaux de brassage et les convertisseurs pour assurer une connectivité réseau fiable et performante"
      ],
      tech: ['Switchs','convertisseurs','panneaux de brassage','câblage FTTx','Ethernet','RIP','OSPF','IS-IS','IP/MPLS','BGP'],
      logo: 'assets/logos/camtel.png'
    },
    {
      company: 'CAMPOST Cameroun',
      role: "Stagiaire académique",
      period: '2018 |  Yaoundé,Cameroun',
      description: `Stage académique réalisé dans le cadre de la formation, axé sur l'administration des systèmes d'information et la gestion des infrastructures Microsoft.`,
      tasks: [
        "Administrer et configurer SharePoint pour la gestion documentaire et la collaboration",
        "Gérer et maintenir Windows Server 2012 R2",
        "Configurer et administrer les services DNS (Domain Name System)",
        "Gérer Active Directory Services (ADS) pour l'authentification et les politiques de sécurité"
      ],
      tech: ['SharePoint','Windows Server 2012 R2','DNS','Active Directory'],
      logo: 'assets/logos/Campost.png'
    }
  ];

  education = [
    { year: 'Septembre 2025', title: 'Mastère Spécialisé Informatique, Systèmes d\'Information et Réseaux : Manager de projets en informatique et systèmes d\'information', school: 'INSA', logo: 'assets/logos/insa-lyon.png', diploma: 'assets/ASSIGA-ATEBA-Basile-CV-IF.pdf' },
    { year: 'Novembre 2022', title: 'Master Recherche : Télécommunications et systèmes intelligents', school: 'École Nationale Supérieure Polytechnique de Douala', logo: 'assets/logos/ensp-douala.jpg', diploma: 'assets/ASSIGA-ATEBA-Basile-CV-IF.pdf' },
    { year: 'Novembre 2020', title: 'Master : Ingénieur de conception en Télécommunications, Technologies de l\'Information et de la Communication', school: 'École Nationale Supérieure Polytechnique de Douala', logo: 'assets/logos/ensp-douala.jpg', diploma: 'assets/ASSIGA-ATEBA-Basile-CV-IF.pdf' }
  ];

  // Exemple de relevé de cours / semestres — utilisé par le composant Formation
  // coursesBySemester = [
  //   { period: 'Été 2023', items: [
  //     { title: 'Gestion de portefeuille de projets', grade: 'A' },
  //     { title: 'Gestion et supervision d\'équipes en situation de projets', grade: 'B' }
  //   ]},
  //   { period: 'Hiver 2023', items: [
  //     { title: 'Rédaction du projet en progression', grade: 'Z' }
  //   ]},
  //   { period: 'Automne 2022', items: [
  //     { title: 'Introduction à la gestion de projets d\'ingénierie', grade: 'B' },
  //     { title: 'Rédaction du projet en progression', grade: 'Z' }
  //   ]},
  //   { period: 'Été 2022', items: [
  //     { title: 'Développement de carrière aux cycles supérieurs', grade: 'S' },
  //     { title: 'Robots industriels', grade: 'A-' }
  //   ]}
  // ];

  publications = [
    { title: 'Deployment of a Backbone Operator (IJ-ECS article)', url: 'https://www.ijecs.in/index.php/ijecs/article/view/4974', summary: 'Article décrivant le déploiement d\'une dorsale opérateur et les choix d\'architecture.' },
    { title: 'Deployment of a Backbone operator and BGP traffic Engineering (ResearchGate)', url: 'https://www.researchgate.net/publication/372138888_Deployment_of_a_Backbone_operator_and_BGP_traffic_Engineering', summary: 'Publication technique sur l\'ingénierie BGP et optimisation du routage.' }
  ];

  // Liste des projets 
  projects = [
    {
      title: 'PlateformeWeb & API – Services Minutes',
      company: 'Services Minutes',
      logo: 'assets/logos/services-minutes.png',
      period: '09/2025 – 11/2025',
      description: `L'entreprise spécialisée dans la cordonnerie et la maroquinerie souhaitait renforcer sa visibilité et mettre en avant ses services ainsi que ses produits.`,
      summary: `Conception et développement d'une plateforme web et d'une API pour Services Minutes (prise de rendez-vous, catalogue produit, facturation).`,
      details: `Le projet consistait à développer un nouveau site web et une API REST en architecture 3-tiers afin d'améliorer la gestion des produits, la prise de rendez-vous et la facturation. L'accent a été mis sur la modularité et la maintenabilité pour permettre des évolutions rapides.`,
      tasks: [
        "Échanger avec le client sur ses besoins et attentes",
        "Mettre en place l'architecture et les environnements (dev/staging/prod)",
        "Concevoir et développer les différentes interfaces utilisateurs",
        "Développer l'API et les services back/front (recherche, filtres, authentification JWT, gestion des produits)"
      ],
      achievements: [
        // "Livraison d'un MVP fonctionnel en 6 semaines",
        // "Amélioration du temps de chargement des pages de 40% grâce à l'optimisation des assets"
      ],
      tech: ['Angular','Spring Boot','MongoDB','Docker','GitHub Actions','Nginx'],
      url: 'https://www.services-minutes.fr/'
    },
    {
      title: "Système de paiement sécurisé par carte",
      company: 'INSA LYON',
      logo: 'assets/logos/insa-lyon.png',
      period: '01/2025 – 04/2025',
      description: `Projet de conception et développement d'un module de paiement sécurisé par carte, couvrant le cahier des charges jusqu'à la recette et l'intégration hardware.`,
      summary: `Projet complet (cahier des charges, spécifications, conception et développement) réalisé en équipe Agile pour concevoir un module de paiement sécurisé par carte.`,
      details: `Travail sur les aspects fonctionnels et techniques: modèle de données, diagrammes de classes, maquettes d'interface, communication avec le lecteur de cartes et sécurité des flux.`,
      tasks: [
        "Rédaction du cahier des charges et spécifications",
        "Réalisation du modèle Entité-Association (E/A) et diagrammes de classes",
        "Conception des maquettes UI selon les rôles",
        "Configurer et intégrer le lecteur de cartes et le service Arduino pour la lecture des données"
      ],
      achievements: [
        "Prototype validé lors de la soutenance technique",
        "Mise en place d'un protocole de test pour la validation des échanges avec le lecteur de cartes"
      ],
      tech: ['Java','Angular','Spring Boot','MySQL','Arduino','RFID','Keycloak','Figma'],
      url: ''
    },
    {
      title: "Conception et développement d'un outil de planification d'un réseau cellulaire de nouvelle génération",
      company: 'École Nationale Supérieure Polytechnique de Douala',
      logo: 'assets/logos/ensp-douala.jpg',
      period: '2021 – 2022',
      summary: "Projet académique de conception et développement d'un outil de planification pour réseau cellulaire nouvelle génération.",
      description: `Projet de recherche et développement réalisé dans le cadre de la formation à Polytechnique, visant à créer un outil de planification pour les réseaux cellulaires de nouvelle génération.`,
      details: `L'objectif était de concevoir et développer un outil algorithmique permettant d'optimiser la planification et le déploiement de réseaux cellulaires nouvelle génération en tenant compte des contraintes de couverture, capacité et qualité de service.`,
      tasks: [
        "Étudier les algorithmes de planification et d'optimisation de réseaux cellulaires",
        "Concevoir l'architecture de l'outil de planification",
        "Développer les algorithmes en Python",
        "Tester et valider l'outil sur différents scénarios de déploiement"
      ],
      tech: ['Algorithmie','Python','Linux (Ubuntu)'],
      url: ''
    },
    {
      title: "Etude et proposition de déploiement d'un Backbone IP/MPLS",
      company: 'École Nationale Supérieure Polytechnique de Douala',
      logo: 'assets/logos/camtel.png',
      period: '03-2020 – 06-2020',
      summary: "Étude et conception d'une architecture backbone IP/MPLS avec ingénierie de trafic BGP, publiée sous forme d'article scientifique.",
      description: `Projet de recherche portant sur l'étude et la proposition de déploiement d'un réseau backbone IP/MPLS avec optimisation du trafic via BGP.`,
      details: `Travail de recherche approfondi sur les architectures backbone opérateur, incluant la modélisation, la simulation et l'optimisation des flux de trafic. Les résultats ont été publiés dans des revues scientifiques (IJ-ECS et ResearchGate).`,
      tasks: [
        "Étudier les architectures backbone IP/MPLS et les mécanismes d'ingénierie de trafic",
        "Concevoir et modéliser l'architecture backbone avec eNSP (Huawei)",
        "Configurer les protocoles de routage statique et dynamique",
        "Simuler et analyser le trafic avec Wireshark",
        "Optimiser le routage avec BGP traffic engineering",
        "Rédiger et publier les résultats sous forme d'articles scientifiques"
      ],
      tech: ['eNSP (Huawei)','Wireshark','Routage statique','Routage dynamique','IP/MPLS','BGP','VMWare'],
      url: ''
    },
    {
      title: "Déploiement réseau téléphonique IP (particulier)",
      period: '2021',
      summary: "Déploiement d'un réseau téléphonique IP pour un particulier : 15 postes IP (Grandstream), auto‑com Grandstream, amplificateurs, convertisseurs analogiques et câblage structuré.",
      url: '',
      details: `Contexte : Dans le but de moderniser l'infrastructure téléphonique, d'améliorer la qualité audio et la gestion des communications, un particulier a decidé d'installer un réseau téléphonique IP complet.`,
      tasks: [
        "Étude des besoins et dimensionnement de la solution (nombre de postes, qualité audio)",
        "Installation et configuration de l'auto‑com Grandstream (IP-PBX) et des postes IP",
        "Câblage structuré et alimentation PoE des postes, intégration d'un amplificateur",
        "Installation de convertisseurs analogiques,",
        "Tests de QoS, validation des appels et documentation de l'installation"
      ],
      tech: ['Grandstream','SIP','VoIP','IP Phones','Analog gateways','PoE','Câblage','QoS', 'baie de brassage', 'panneaux de brassage', 'switchs' ],
    }
  ];

  languages = [
    { name: 'Français', level: 'Bilingue / Langue natale' },
    { name: 'Anglais', level: 'Capacité techniques' }
  ];

  // Simple gallery listing some asset images for the Galerie section
  gallery = [
    'assets/logos/pp.jpeg',
    'assets/logos/services-minutes.png',
    'assets/logos/forum-associatif-tous-ensemble.png',
    'assets/logos/ensp-douala.jpg',
    'assets/logos/insa-lyon.png',
    'assets/logos/camtel.png',
    'assets/logos/lima-survey.png',
    'assets/logos/Campost.png'
  ];

  contact = {
    email: 'atebabasile@gmail.com',
    cv: 'assets/ASSIGA-ATEBA-Basile-CV-IF.pdf',
    // Use the provided profile picture if available (placed under assets/logos/pp.jpeg)
    photo: 'assets/logos/pp.jpeg'
  };
}
