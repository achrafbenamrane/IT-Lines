export const locales = ['en', 'es', 'fr', 'de', 'ar'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      testimonials: 'Testimonials',
      contact: 'Contact',
      blog: 'Blog'
    },
    hero: {
      welcome: 'Welcome to IT Lines',
      title: 'Drawing the Path to Your',
      subtitle: 'Digital Success',
      description: 'We connect businesses to innovative IT solutions that drive growth and success. From consultation to implementation, we draw the lines that lead to your digital transformation.',
      cta: 'Our Services',
      demo: 'Watch Demo'
    },
    services: {
      title: 'What We Offer',
      subtitle: 'Our Expertise',
      description: 'Connected solutions that draw clear paths to your business success with innovative technology.',
      getStarted: 'Get Started Today',
      webDev: 'Web Design & Development',
      webDevDesc: 'Custom, responsive websites that convert visitors into customers with modern design and seamless functionality.',
      digitalAds: 'Digital Advertising',
      digitalAdsDesc: 'Strategic campaigns that maximize ROI through targeted marketing across all digital channels.',
      ecommerce: 'E-commerce Solutions',
      ecommerceDesc: 'Complete online store solutions with secure payment systems and inventory management.',
      cloud: 'Cloud & IT Infrastructure',
      cloudDesc: 'Scalable cloud solutions and robust IT infrastructure to support your business growth.',
      security: 'Cybersecurity',
      securityDesc: 'Comprehensive security solutions to protect your digital assets and ensure business continuity.',
      software: 'Software Development',
      softwareDesc: 'Custom software solutions tailored to your unique business needs and workflows.',
      learnMore: 'Learn More'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Let\'s Start a Conversation',
      description: 'Have a project in mind? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.'
    },
    about: {
      title: 'About Us',
      subtitle: 'Connecting Businesses to Digital Excellence',
      description1: 'At IT Lines, we believe every business has a unique path to digital success. Our team of passionate IT professionals specializes in drawing those connections, creating clear lines between your current challenges and future achievements.',
      description2: 'Our mission is to connect businesses with innovative technology solutions that not only solve today\'s problems but also draw the roadmap for tomorrow\'s growth and success.',
      innovation: 'Innovation',
      dedication: 'Dedication',
      excellence: 'Excellence',
      projects: 'Projects Completed',
      clients: 'Happy Clients',
      team: 'Expert Team Members'
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'What Our Clients Say',
      description: 'Don\'t just take our word for it. Here\'s what our satisfied clients have to say about working with us.',
      trustedBy: 'TRUSTED BY LEADING COMPANIES'
    },
    blog: {
      title: 'Latest Insights',
      subtitle: 'Our Blog',
      description: 'Stay updated with the latest trends, insights, and best practices in technology and business.',
      readMore: 'Read More',
      viewAll: 'View All Articles'
    },
    cta: {
      title: 'Ready to Transform Your Business?',
      subtitle: 'Let\'s discuss your project and find the perfect solution'
    },
    footer: {
      company: 'IT Lines',
      description: 'Connecting businesses to digital success through innovative IT solutions and expert consulting services that draw the path to sustainable growth.',
      quickLinks: 'Quick Links',
      ourServices: 'Our Services',
      contactUs: 'Contact Us',
      stayUpdated: 'Stay Updated',
      subscribe: 'Subscribe',
      newsletterDesc: 'Subscribe to our newsletter for the latest tech insights and exclusive offers.'
    },
    whyUs: {
      title: 'Our Advantages',
      subtitle: 'Why Partner With Us?',
      description: 'We combine expertise, dedication, and innovation to deliver exceptional results for your business.',
      quickResponse: 'Quick Response',
      quickResponseDesc: 'Dedicated support with rapid response times to keep your business running smoothly 24/7.',
      responseTime: 'Response Time',
      experiencedTeam: 'Experienced Team',
      experiencedTeamDesc: 'Seasoned experts with a proven track record across diverse industries and technologies.',
      yearsExp: 'Years Experience',
      provenResults: 'Proven Results',
      provenResultsDesc: 'Data-driven strategies that deliver measurable outcomes and sustainable business growth.',
      successRate: 'Success Rate',
      processTitle: 'Our Simple Process',
      consultation: 'Consultation',
      consultationDesc: 'Understand your needs',
      strategy: 'Strategy',
      strategyDesc: 'Plan the solution',
      development: 'Development',
      developmentDesc: 'Build & implement',
      support: 'Support',
      supportDesc: 'Ongoing maintenance'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      services: 'Servicios',
      testimonials: 'Testimonios',
      contact: 'Contacto',
      blog: 'Blog'
    },
    hero: {
      welcome: 'Bienvenido a IT Lines',
      title: 'Trazando el Camino hacia su',
      subtitle: 'Éxito Digital',
      description: 'Conectamos empresas con soluciones IT innovadoras que impulsan el crecimiento y el éxito. Desde consultoría hasta implementación, trazamos las líneas que llevan a su transformación digital.',
      cta: 'Nuestros Servicios',
      demo: 'Ver Demo'
    },
    services: {
      title: 'Lo Que Ofrecemos',
      subtitle: 'Nuestra Experiencia',
      description: 'Servicios integrales para promover su crecimiento y ventas con soluciones tecnológicas de vanguardia.',
      getStarted: 'Comenzar Hoy',
      webDev: 'Diseño y Desarrollo Web',
      webDevDesc: 'Sitios web personalizados y responsivos que convierten visitantes en clientes con diseño moderno y funcionalidad perfecta.',
      digitalAds: 'Publicidad Digital',
      digitalAdsDesc: 'Campañas estratégicas que maximizan el ROI a través de marketing dirigido en todos los canales digitales.',
      ecommerce: 'Soluciones de Comercio Electrónico',
      ecommerceDesc: 'Soluciones completas de tienda en línea con sistemas de pago seguros y gestión de inventario.',
      cloud: 'Nube e Infraestructura IT',
      cloudDesc: 'Soluciones de nube escalables e infraestructura IT robusta para apoyar el crecimiento de su negocio.',
      security: 'Ciberseguridad',
      securityDesc: 'Soluciones de seguridad integrales para proteger sus activos digitales y garantizar la continuidad del negocio.',
      software: 'Desarrollo de Software',
      softwareDesc: 'Soluciones de software personalizadas adaptadas a sus necesidades comerciales únicas y flujos de trabajo.',
      learnMore: 'Saber Más'
    },
    contact: {
      title: 'Póngase en Contacto',
      subtitle: 'Iniciemos una Conversación',
      description: '¿Tiene un proyecto en mente? Nos encantaría saber de usted. Envíenos un mensaje y responderemos lo antes posible.'
    },
    about: {
      title: 'Acerca de Nosotros',
      subtitle: 'Transformando Empresas a Través de la Tecnología',
      description1: 'Somos un equipo de profesionales de TI apasionados dedicados a ayudar a las empresas a prosperar en la era digital. Con años de experiencia y un compromiso con la excelencia, entregamos soluciones que generan resultados reales.',
      description2: 'Nuestra misión es empoderar a las empresas con soluciones tecnológicas innovadoras que mejoren la eficiencia, impulsen el crecimiento y creen valor duradero para nuestros clientes.',
      innovation: 'Innovación',
      dedication: 'Dedicación',
      excellence: 'Excelencia',
      projects: 'Proyectos Completados',
      clients: 'Clientes Satisfechos',
      team: 'Miembros Expertos del Equipo'
    },
    testimonials: {
      title: 'Testimonios',
      subtitle: 'Lo Que Dicen Nuestros Clientes',
      description: 'No solo tome nuestra palabra. Esto es lo que nuestros clientes satisfechos tienen que decir sobre trabajar con nosotros.',
      trustedBy: 'CONFIADO POR EMPRESAS LÍDERES'
    },
    blog: {
      title: 'Últimas Perspectivas',
      subtitle: 'Nuestro Blog',
      description: 'Manténgase actualizado con las últimas tendencias, perspectivas y mejores prácticas en tecnología y negocios.',
      readMore: 'Leer Más',
      viewAll: 'Ver Todos los Artículos'
    },
    cta: {
      title: '¿Listo para Transformar su Negocio?',
      subtitle: 'Discutamos su proyecto y encontremos la solución perfecta'
    },
    footer: {
      company: 'IT Lines',
      description: 'Empoderando empresas con soluciones IT innovadoras y servicios de consultoría expertos para crecimiento sostenible.',
      quickLinks: 'Enlaces Rápidos',
      ourServices: 'Nuestros Servicios',
      contactUs: 'Contáctanos',
      stayUpdated: 'Manténgase Actualizado',
      subscribe: 'Suscribirse',
      newsletterDesc: 'Suscríbase a nuestro boletín para obtener las últimas perspectivas tecnológicas y ofertas exclusivas.'
    },
    whyUs: {
      title: 'Nuestras Ventajas',
      subtitle: '¿Por Qué Asociarse Con Nosotros?',
      description: 'Combinamos experiencia, dedicación e innovación para entregar resultados excepcionales para su negocio.',
      quickResponse: 'Respuesta Rápida',
      quickResponseDesc: 'Soporte dedicado con tiempos de respuesta rápidos para mantener su negocio funcionando sin problemas 24/7.',
      responseTime: 'Tiempo de Respuesta',
      experiencedTeam: 'Equipo Experimentado',
      experiencedTeamDesc: 'Expertos experimentados con un historial comprobado en diversas industrias y tecnologías.',
      yearsExp: 'Años de Experiencia',
      provenResults: 'Resultados Comprobados',
      provenResultsDesc: 'Estrategias basadas en datos que entregan resultados medibles y crecimiento empresarial sostenible.',
      successRate: 'Tasa de Éxito',
      processTitle: 'Nuestro Proceso Simple',
      consultation: 'Consulta',
      consultationDesc: 'Entender sus necesidades',
      strategy: 'Estrategia',
      strategyDesc: 'Planificar la solución',
      development: 'Desarrollo',
      developmentDesc: 'Construir e implementar',
      support: 'Soporte',
      supportDesc: 'Mantenimiento continuo'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      testimonials: 'Témoignages',
      contact: 'Contact',
      blog: 'Blog'
    },
    hero: {
      welcome: 'Bienvenue chez IT Lines',
      title: 'Traçant le Chemin vers Votre',
      subtitle: 'Succès Numérique',
      description: 'Nous connectons les entreprises à des solutions IT innovantes qui stimulent la croissance et le succès. De la consultation à la mise en œuvre, nous traçons les lignes qui mènent à votre transformation numérique.',
      cta: 'Nos Services',
      demo: 'Voir la Démo'
    },
    services: {
      title: 'Ce Que Nous Offrons',
      subtitle: 'Notre Expertise',
      description: 'Services complets pour promouvoir votre croissance et ventes avec des solutions technologiques de pointe.',
      getStarted: 'Commencer Aujourd\'hui',
      webDev: 'Conception et Développement Web',
      webDevDesc: 'Sites web personnalisés et responsifs qui convertissent les visiteurs en clients avec un design moderne et une fonctionnalité parfaite.',
      digitalAds: 'Publicité Numérique',
      digitalAdsDesc: 'Campagnes stratégiques qui maximisent le ROI grâce au marketing ciblé sur tous les canaux numériques.',
      ecommerce: 'Solutions E-commerce',
      ecommerceDesc: 'Solutions complètes de boutique en ligne avec systèmes de paiement sécurisés et gestion d\'inventaire.',
      cloud: 'Cloud et Infrastructure IT',
      cloudDesc: 'Solutions cloud évolutives et infrastructure IT robuste pour soutenir la croissance de votre entreprise.',
      security: 'Cybersécurité',
      securityDesc: 'Solutions de sécurité complètes pour protéger vos actifs numériques et assurer la continuité des affaires.',
      software: 'Développement de Logiciels',
      softwareDesc: 'Solutions logicielles personnalisées adaptées à vos besoins commerciaux uniques et flux de travail.',
      learnMore: 'En Savoir Plus'
    },
    contact: {
      title: 'Contactez-Nous',
      subtitle: 'Commençons une Conversation',
      description: 'Vous avez un projet en tête? Nous aimerions avoir de vos nouvelles. Envoyez-nous un message et nous répondrons dès que possible.'
    },
    about: {
      title: 'À Propos de Nous',
      subtitle: 'Transformer les Entreprises par la Technologie',
      description1: 'Nous sommes une équipe de professionnels IT passionnés dédiés à aider les entreprises à prospérer à l\'ère numérique. Avec des années d\'expérience et un engagement envers l\'excellence, nous livrons des solutions qui génèrent de vrais résultats.',
      description2: 'Notre mission est d\'autonomiser les entreprises avec des solutions technologiques innovantes qui améliorent l\'efficacité, stimulent la croissance et créent une valeur durable pour nos clients.',
      innovation: 'Innovation',
      dedication: 'Dévouement',
      excellence: 'Excellence',
      projects: 'Projets Complétés',
      clients: 'Clients Satisfaits',
      team: 'Membres Experts de l\'Équipe'
    },
    testimonials: {
      title: 'Témoignages',
      subtitle: 'Ce Que Disent Nos Clients',
      description: 'Ne nous croyez pas sur parole. Voici ce que nos clients satisfaits ont à dire sur le travail avec nous.',
      trustedBy: 'FAIT CONFIANCE PAR LES ENTREPRISES LEADERS'
    },
    blog: {
      title: 'Dernières Perspectives',
      subtitle: 'Notre Blog',
      description: 'Restez informé des dernières tendances, perspectives et meilleures pratiques en technologie et affaires.',
      readMore: 'Lire Plus',
      viewAll: 'Voir Tous les Articles'
    },
    cta: {
      title: 'Prêt à Transformer Votre Entreprise?',
      subtitle: 'Discutons de votre projet et trouvons la solution parfaite'
    },
    footer: {
      company: 'IT Lines',
      description: 'Autonomiser les entreprises avec des solutions IT innovantes et des services de conseil experts pour une croissance durable.',
      quickLinks: 'Liens Rapides',
      ourServices: 'Nos Services',
      contactUs: 'Contactez-Nous',
      stayUpdated: 'Restez Informé',
      subscribe: 'S\'abonner',
      newsletterDesc: 'Abonnez-vous à notre newsletter pour les dernières perspectives technologiques et offres exclusives.'
    },
    whyUs: {
      title: 'Nos Avantages',
      subtitle: 'Pourquoi Nous Choisir?',
      description: 'Nous combinons expertise, dévouement et innovation pour livrer des résultats exceptionnels pour votre entreprise.',
      quickResponse: 'Réponse Rapide',
      quickResponseDesc: 'Support dédié avec des temps de réponse rapides pour maintenir votre entreprise en marche 24/7.',
      responseTime: 'Temps de Réponse',
      experiencedTeam: 'Équipe Expérimentée',
      experiencedTeamDesc: 'Experts chevronnés avec un historique prouvé dans diverses industries et technologies.',
      yearsExp: 'Années d\'Expérience',
      provenResults: 'Résultats Prouvés',
      provenResultsDesc: 'Stratégies basées sur les données qui livrent des résultats mesurables et une croissance d\'entreprise durable.',
      successRate: 'Taux de Succès',
      processTitle: 'Notre Processus Simple',
      consultation: 'Consultation',
      consultationDesc: 'Comprendre vos besoins',
      strategy: 'Stratégie',
      strategyDesc: 'Planifier la solution',
      development: 'Développement',
      developmentDesc: 'Construire et implémenter',
      support: 'Support',
      supportDesc: 'Maintenance continue'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Dienstleistungen',
      testimonials: 'Referenzen',
      contact: 'Kontakt',
      blog: 'Blog'
    },
    hero: {
      welcome: 'Willkommen bei IT Lines',
      title: 'Den Weg zu Ihrem',
      subtitle: 'Digitalen Erfolg Zeichnen',
      description: 'Wir verbinden Unternehmen mit innovativen IT-Lösungen, die Wachstum und Erfolg fördern. Von der Beratung bis zur Umsetzung zeichnen wir die Linien, die zu Ihrer digitalen Transformation führen.',
      cta: 'Unsere Dienstleistungen',
      demo: 'Demo ansehen'
    },
    services: {
      title: 'Was Wir Anbieten',
      subtitle: 'Unsere Expertise',
      description: 'Umfassende Dienstleistungen zur Förderung Ihres Wachstums und Verkaufs mit modernsten Technologielösungen.',
      getStarted: 'Heute Beginnen',
      webDev: 'Webdesign und -entwicklung',
      webDevDesc: 'Maßgeschneiderte, responsive Websites, die Besucher in Kunden verwandeln mit modernem Design und nahtloser Funktionalität.',
      digitalAds: 'Digitale Werbung',
      digitalAdsDesc: 'Strategische Kampagnen, die ROI durch gezieltes Marketing über alle digitalen Kanäle maximieren.',
      ecommerce: 'E-Commerce-Lösungen',
      ecommerceDesc: 'Komplette Online-Shop-Lösungen mit sicheren Zahlungssystemen und Bestandsverwaltung.',
      cloud: 'Cloud und IT-Infrastruktur',
      cloudDesc: 'Skalierbare Cloud-Lösungen und robuste IT-Infrastruktur zur Unterstützung Ihres Unternehmenswachstums.',
      security: 'Cybersicherheit',
      securityDesc: 'Umfassende Sicherheitslösungen zum Schutz Ihrer digitalen Assets und zur Gewährleistung der Geschäftskontinuität.',
      software: 'Softwareentwicklung',
      softwareDesc: 'Maßgeschneiderte Softwarelösungen, die auf Ihre einzigartigen Geschäftsanforderungen und Arbeitsabläufe zugeschnitten sind.',
      learnMore: 'Mehr Erfahren'
    },
    contact: {
      title: 'Kontakt aufnehmen',
      subtitle: 'Lassen Sie uns ins Gespräch kommen',
      description: 'Haben Sie ein Projekt im Kopf? Wir würden gerne von Ihnen hören. Senden Sie uns eine Nachricht und wir antworten so schnell wie möglich.'
    },
    about: {
      title: 'Über Uns',
      subtitle: 'Unternehmen durch Technologie transformieren',
      description1: 'Wir sind ein Team leidenschaftlicher IT-Profis, die sich der Unterstützung von Unternehmen beim Gedeihen im digitalen Zeitalter widmen. Mit jahrelanger Erfahrung und einem Engagement für Exzellenz liefern wir Lösungen, die echte Ergebnisse erzielen.',
      description2: 'Unsere Mission ist es, Unternehmen mit innovativen Technologielösungen zu stärken, die Effizienz steigern, Wachstum fördern und dauerhaften Wert für unsere Kunden schaffen.',
      innovation: 'Innovation',
      dedication: 'Hingabe',
      excellence: 'Exzellenz',
      projects: 'Abgeschlossene Projekte',
      clients: 'Zufriedene Kunden',
      team: 'Experten-Teammitglieder'
    },
    testimonials: {
      title: 'Referenzen',
      subtitle: 'Was Unsere Kunden Sagen',
      description: 'Glauben Sie nicht nur uns. Hier ist, was unsere zufriedenen Kunden über die Zusammenarbeit mit uns zu sagen haben.',
      trustedBy: 'VERTRAUT VON FÜHRENDEN UNTERNEHMEN'
    },
    blog: {
      title: 'Neueste Einblicke',
      subtitle: 'Unser Blog',
      description: 'Bleiben Sie auf dem Laufenden mit den neuesten Trends, Einblicken und Best Practices in Technologie und Geschäft.',
      readMore: 'Mehr Lesen',
      viewAll: 'Alle Artikel Anzeigen'
    },
    cta: {
      title: 'Bereit, Ihr Unternehmen zu Transformieren?',
      subtitle: 'Lassen Sie uns Ihr Projekt besprechen und die perfekte Lösung finden'
    },
    footer: {
      company: 'IT Lines',
      description: 'Unternehmen mit innovativen IT-Lösungen und Expertenberatung für nachhaltiges Wachstum stärken.',
      quickLinks: 'Schnelle Links',
      ourServices: 'Unsere Dienstleistungen',
      contactUs: 'Kontaktieren Sie Uns',
      stayUpdated: 'Bleiben Sie Informiert',
      subscribe: 'Abonnieren',
      newsletterDesc: 'Abonnieren Sie unseren Newsletter für die neuesten Tech-Einblicke und exklusive Angebote.'
    },
    whyUs: {
      title: 'Unsere Vorteile',
      subtitle: 'Warum Mit Uns Zusammenarbeiten?',
      description: 'Wir kombinieren Expertise, Hingabe und Innovation, um außergewöhnliche Ergebnisse für Ihr Unternehmen zu liefern.',
      quickResponse: 'Schnelle Antwort',
      quickResponseDesc: 'Engagierter Support mit schnellen Antwortzeiten, um Ihr Unternehmen rund um die Uhr reibungslos am Laufen zu halten.',
      responseTime: 'Antwortzeit',
      experiencedTeam: 'Erfahrenes Team',
      experiencedTeamDesc: 'Erfahrene Experten mit einer bewährten Erfolgsbilanz in verschiedenen Branchen und Technologien.',
      yearsExp: 'Jahre Erfahrung',
      provenResults: 'Bewährte Ergebnisse',
      provenResultsDesc: 'Datengesteuerte Strategien, die messbare Ergebnisse und nachhaltiges Unternehmenswachstum liefern.',
      successRate: 'Erfolgsrate',
      processTitle: 'Unser Einfacher Prozess',
      consultation: 'Beratung',
      consultationDesc: 'Ihre Bedürfnisse verstehen',
      strategy: 'Strategie',
      strategyDesc: 'Die Lösung planen',
      development: 'Entwicklung',
      developmentDesc: 'Bauen und implementieren',
      support: 'Support',
      supportDesc: 'Laufende Wartung'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      testimonials: 'الشهادات',
      contact: 'اتصل بنا',
      blog: 'المدونة'
    },
    hero: {
      welcome: 'مرحباً بكم في آي تي لاينز',
      title: 'رسم طريق نحو',
      subtitle: 'نجاحكم الرقمي',
      description: 'نربط الشركات بحلول تقنية مبتكرة تدفع النمو والنجاح. من الاستشارة إلى التنفيذ، نرسم الخطوط التي تقود إلى تحولكم الرقمي.',
      cta: 'خدماتنا',
      demo: 'مشاهدة العرض'
    },
    services: {
      title: 'ما نقدمه',
      subtitle: 'خبرتنا',
      description: 'خدمات شاملة لتعزيز نموكم ومبيعاتكم بحلول تقنية متطورة.',
      getStarted: 'ابدأ اليوم',
      webDev: 'تصميم وتطوير المواقع',
      webDevDesc: 'مواقع ويب مخصصة ومتجاوبة تحول الزوار إلى عملاء بتصميم حديث ووظائف سلسة.',
      digitalAds: 'الإعلان الرقمي',
      digitalAdsDesc: 'حملات استراتيجية تعظم العائد على الاستثمار من خلال التسويق المستهدف عبر جميع القنوات الرقمية.',
      ecommerce: 'حلول التجارة الإلكترونية',
      ecommerceDesc: 'حلول متاجر إلكترونية كاملة مع أنظمة دفع آمنة وإدارة المخزون.',
      cloud: 'الحوسبة السحابية والبنية التحتية',
      cloudDesc: 'حلول سحابية قابلة للتوسع وبنية تحتية قوية لدعم نمو أعمالكم.',
      security: 'الأمن السيبراني',
      securityDesc: 'حلول أمنية شاملة لحماية أصولكم الرقمية وضمان استمرارية الأعمال.',
      software: 'تطوير البرمجيات',
      softwareDesc: 'حلول برمجية مخصصة مصممة خصيصاً لاحتياجات أعمالكم الفريدة وسير العمل.',
      learnMore: 'اعرف المزيد'
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'لنبدأ محادثة',
      description: 'لديكم مشروع في الذهن؟ نود أن نسمع منكم. أرسلوا لنا رسالة وسنرد في أقرب وقت ممكن.'
    },
    about: {
      title: 'من نحن',
      subtitle: 'تحويل الأعمال من خلال التكنولوجيا',
      description1: 'نحن فريق من محترفي تقنية المعلومات المتحمسين المكرسين لمساعدة الشركات على الازدهار في العصر الرقمي. مع سنوات من الخبرة والالتزام بالتميز، نقدم حلولاً تحقق نتائج حقيقية.',
      description2: 'مهمتنا هي تمكين الشركات بحلول تقنية مبتكرة تعزز الكفاءة وتعزز النمو وتخلق قيمة دائمة لعملائنا.',
      innovation: 'الابتكار',
      dedication: 'التفاني',
      excellence: 'التميز',
      projects: 'المشاريع المكتملة',
      clients: 'العملاء السعداء',
      team: 'أعضاء الفريق الخبراء'
    },
    testimonials: {
      title: 'الشهادات',
      subtitle: 'ما يقوله عملاؤنا',
      description: 'لا تأخذوا كلامنا فقط. هذا ما يقوله عملاؤنا الراضون عن العمل معنا.',
      trustedBy: 'موثوق به من قبل الشركات الرائدة'
    },
    blog: {
      title: 'أحدث الرؤى',
      subtitle: 'مدونتنا',
      description: 'ابقوا محدثين مع أحدث الاتجاهات والرؤى وأفضل الممارسات في التكنولوجيا والأعمال.',
      readMore: 'اقرأ المزيد',
      viewAll: 'عرض جميع المقالات'
    },
    cta: {
      title: 'مستعد لتحويل أعمالك؟',
      subtitle: 'دعونا نناقش مشروعكم ونجد الحل المثالي'
    },
    footer: {
      company: 'آي تي لاينز',
      description: 'تمكين الأعمال بحلول تقنية مبتكرة وخدمات استشارية متخصصة للنمو المستدام.',
      quickLinks: 'روابط سريعة',
      ourServices: 'خدماتنا',
      contactUs: 'اتصل بنا',
      stayUpdated: 'ابق محدثاً',
      subscribe: 'اشترك',
      newsletterDesc: 'اشترك في نشرتنا الإخبارية للحصول على أحدث الرؤى التقنية والعروض الحصرية.'
    },
    whyUs: {
      title: 'مزايانا',
      subtitle: 'لماذا تختارنا؟',
      description: 'نجمع بين الخبرة والتفاني والابتكار لتقديم نتائج استثنائية لأعمالكم.',
      quickResponse: 'استجابة سريعة',
      quickResponseDesc: 'دعم مخصص مع أوقات استجابة سريعة للحفاظ على سير أعمالكم بسلاسة على مدار الساعة.',
      responseTime: 'وقت الاستجابة',
      experiencedTeam: 'فريق ذو خبرة',
      experiencedTeamDesc: 'خبراء متمرسون مع سجل حافل عبر صناعات وتقنيات متنوعة.',
      yearsExp: 'سنوات الخبرة',
      provenResults: 'نتائج مثبتة',
      provenResultsDesc: 'استراتيجيات مدفوعة بالبيانات تحقق نتائج قابلة للقياس ونمو أعمال مستدام.',
      successRate: 'معدل النجاح',
      processTitle: 'عمليتنا البسيطة',
      consultation: 'الاستشارة',
      consultationDesc: 'فهم احتياجاتكم',
      strategy: 'الاستراتيجية',
      strategyDesc: 'تخطيط الحل',
      development: 'التطوير',
      developmentDesc: 'البناء والتنفيذ',
      support: 'الدعم',
      supportDesc: 'الصيانة المستمرة'
    }
  }
};

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}