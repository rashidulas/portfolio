// /data/projects.ts

export interface MediaEntry {
    type: "image" | "video";
    src: string;
  }
  
  export interface Project {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    category: string[];
    media: MediaEntry[];
    github?: string;
    website?: string;
    description: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      slug: "homesecurity",
      title: "HomeSecurity",
      subtitle: "Real-time CV & TF security monitoring",
      category: ["OpenCV", "TensorFlow", "Google Cloud"],
      media: [
        { type: "image", src: "/projects/fleetpulse.png" },{ type: "image", src: "/projects/lung.jpg" }, { type: "image", src: "/projects/statefirm.png" }
      ],
      github: "https://github.com/yourgithub/homesecurity",
      description:
        "Developed a real-time monitoring system using OpenCV and TensorFlow, enhancing security alerts with Google Cloud Object Storage for video archival and real-time text notifications.",
    },
    {
      id: 2,
      slug: "uta-datathon-website",
      title: "UTA Datathon Website",
      subtitle: "React & Firebase site for 400+ students",
      category: ["React.js", "Firebase", "Google Maps API"],
      media: [
        { type: "image", src: "/projects/utadatathon.png" }
      ],
      website: "https://utadatathon.com",
      description:
        "Managed the UTA Datathon 2024 website, integrating Firebase backend and React.js frontend with QR code-based sign-in and interactive venue mapping for 400+ students.",
    },
    {
      id: 3,
      slug: "legalai",
      title: "LegalAI",
      subtitle: "AI-powered legal document summarization",
      category: ["Next.js", "MongoDB", "OpenAI API", "AWS"],
      media: [
        { type: "image", src: "/projects/legalai.png" }
      ],
      github: "https://github.com/yourgithub/legalai",
      description:
        "Developed AI-driven legal document summarization using OpenAI's API, extracting key clauses while managing deployment on AWS with Terraform for scalability.",
    },
    {
      id: 4,
      slug: "shelfshare",
      title: "ShelfShare",
      subtitle: "Book lending platform with SQL Server & Docker",
      category: [".NET MVC", "Microsoft SQL Server", "Docker"],
      media: [
        { type: "image", src: "/projects/shelfshare.png" }
      ],
      github: "https://github.com/yourgithub/shelfshare",
      description:
        "Built a platform for users to showcase and lend books, integrating Microsoft SQL Server for transaction tracking and Docker for streamlined deployment.",
    },
    {
      id: 5,
      slug: "trasva",
      title: "Trasva",
      subtitle: "Traveler social media with real-time tracking",
      category: ["Next.js", "TypeScript", "MongoDB", "Google API", "Clerk"],
      media: [
        { type: "image", src: "/projects/trasva.png" }
      ],
      github: "https://github.com/yourgithub/trasva",
      description:
        "Developed a social media platform for travelers, featuring real-time location tracking, trip discovery, and image storage using UploadThing and MongoDB.",
    },
    {
      id: 6,
      slug: "lunguardian",
      title: "LunGuardian",
      subtitle: "ML-driven lung cancer detection tool",
      category: ["Machine Learning", "HealthKit API", "Firebase Firestore"],
      media: [
        { type: "image", src: "/projects/lunguardian.png" }
      ],
      description:
        "Led the development of a lung cancer detection tool using wrist sensors, ML models, and Apple's HealthKit API, achieving 96% accuracy in patient diagnostics.",
    },
    {
      id: 7,
      slug: "enduro",
      title: "Enduro",
      subtitle: "Running tracker with Spring Boot & Docker",
      category: ["Spring Boot", "Java", "Docker", "Testcontainers"],
      media: [
        { type: "image", src: "/projects/enduro.png" }
      ],
      description:
        "Created a Java-based running activity tracker with Spring Boot, implementing CRUD REST API and integrating Testcontainers for reliable testing.",
    },
    {
      id: 8,
      slug: "statefarm-pwa",
      title: "StateFarm PWA",
      subtitle: "Responsive web app with AngularFire & Firebase",
      category: ["AngularFire", "Firebase"],
      media: [
        { type: "image", src: "/projects/statefarm.png" }
      ],
      description:
        "Developed a mobile-responsive web app for StateFarm, integrating real-time service updates and reducing onboarding time by 60% with Firebase-based user management.",
    },
    {
      id: 9,
      slug: "library-management-system",
      title: "Library Management System",
      subtitle: "Java & SQL GUI-based library system",
      category: ["Java", "SQL", "GUI"],
      media: [
        { type: "image", src: "/projects/libraryms.png" }
      ],
      github: "https://github.com/yourgithub/libraryms",
      description:
        "Built a Java-based library management system streamlining cataloging and loan information, reducing manual data entry by 40% through SQL automation.",
    },
    {
      id: 10,
      slug: "pricespy",
      title: "PriceSpy",
      subtitle: "E‑commerce scraper with real‑time updates",
      category: ["Next.js", "TypeScript", "MongoDB", "Bright Data"],
      media: [
        { type: "image", src: "/projects/pricespy.png" }
      ],
      github: "https://github.com/yourgithub/pricespy",
      description:
        "Created an e-commerce scraping tool to aggregate Amazon listings, integrating MongoDB and cron jobs for real-time updates, reducing manual checks by 15 hours weekly.",
    },
    {
      id: 11,
      slug: "waste0",
      title: "Waste.0",
      subtitle: "AI‑powered food waste reduction tool",
      category: ["Next.js", "AWS", "Databricks", "Streamlit", "MongoDB"],
      media: [
        { type: "image", src: "/projects/waste0.png" }
      ],
      github: "https://github.com/yourgithub/waste0",
      description:
        "Designed an AI-powered food waste reduction tool, predicting inventory levels and spoilage timelines using ML models, while integrating scalable cloud architecture on AWS.",
    }
  ];
  