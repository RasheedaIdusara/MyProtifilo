 import smartcity1 from "../assets/projects/smartcity360/dashboard.png";
  import smartcity2 from "../assets/projects/smartcity360/security.png";
 import smartcity3 from "../assets/projects/smartcity360/zone.png";
 import smartcity4 from "../assets/projects/smartcity360/complaint.png";
 import smartcity5 from "../assets/projects/smartcity360/streetlight.png";
 import smartcity6 from "../assets/projects/smartcity360/policy.png";
 import smartcitycover from "../assets/projects/smartcity360/smartcity360-cover.png";
import globaltradecover from "../assets/projects/globaltrade/GlobalTradecoverimage.png";
  import globaltrade1 from "../assets/projects/globaltrade/globaltrade1.png";
  import globaltrade2 from "../assets/projects/globaltrade/globaltrade2.png";
  import globaltrade3 from "../assets/projects/globaltrade/globaltrade3.png";
  import globaltrade4 from "../assets/projects/globaltrade/globaltrade4.png";
  import globaltrade5 from "../assets/projects/globaltrade/globaltrade5.png";
    import globaltrade6 from "../assets/projects/globaltrade/globaltrade6.png";




// import globaltrade1 from "../assets/projects/globaltrade-1.png";
// import smartcity1 from "../assets/projects/smartcity-1.png";

export const projects = [
  {
    id: "smartify",
    number: "01",
    title: "Smartify Laptop & Mobile",
    category: "Mobile Commerce Application",
    tag: "Mobile",
    hasDetails: true,
    description:
      "A secure Android M-Commerce application and web admin portal for laptops and smartphones, featuring dynamic variant pricing, PayHere payments, and Google Maps delivery routing.",
    overview:
      "Smartify was built to eliminate fraud and disorganized listings common on informal marketplaces by centralizing laptop and smartphone shopping on Android. Users can customize RAM, storage, and color variants with real-time price updates, pin delivery locations on Google Maps, pay in-app via PayHere, and trigger instant support chat by shaking their device, while admins manage inventory and routes through a Tomcat-backed web panel.",
    images: [
      // smartify1,
      // smartify2,
    ],
    technologies: [
      "Java",
      "Android SDK",
      "Firebase",
      "SQLite",
      "Google Maps API",
      "PayHere",
      "REST APIs",
      "Apache Tomcat",
    ],
    highlights: [
      "Dynamic product variants (RAM, storage, color) with automated price calculation",
      "Hybrid storage combining Firebase Firestore cloud sync and local SQLite caching",
      "Google Maps & Directions API integration with delivery route Polylines",
      "In-app PayHere payment gateway integration and real-time order tracking",
      "Shake-gesture support chat trigger, push notifications, and direct support calling",
      "Full-stack web admin dashboard powered by a Java REST API and Tailwind CSS",
    ],
    futureUpdates: [
      "Migrating PayHere payment gateway from sandbox to live production mode",
      "Offline product catalog caching for low-connectivity environments",
      "Dark mode UI theme support across the Android application",
    ],
    githubUrl: "https://github.com/RasheedaIdusara",
    liveUrl: "",
    icon: "mobile",
    featured: true,
  },
  {
    id: "globaltrade",
    number: "02",
    title: "GlobalTrade",
    category: "Enterprise Web Application",
    tag: "Enterprise",
    hasDetails: true,
    description:
      "An enterprise supply chain management system built with a multi-module Jakarta EE architecture, automating shipments, warehouse inventory, customs clearance, and vendor tracking.",
    overview:
      "GlobalTrade centralizes end-to-end international trade operations across suppliers, purchase orders, shipments, warehouses, and customs clearance. Engineered as a multi-module Maven EAR application deployed on GlassFish 7 with PostgreSQL, it leverages EJB timers, asynchronous JMS messaging, container-managed transactions, and stateless JWT security for reliable enterprise workflows.",
      coverImage: globaltradecover,
    images: [
      globaltrade1,
      globaltrade2,
      globaltrade3,
      globaltrade4,
      globaltrade5,
      globaltrade6,
    ],
    technologies: [
      "Java",
      "Jakarta EE",
      "EJB 4.0",
      "GlassFish 7",
      "PostgreSQL",
      "JPA / Hibernate",
      "JAX-RS",
      "JMS",
      "JWT",
      "JSP",
    ],
    highlights: [
      "Multi-module Maven EAR architecture (core, ejb, web, ear) on GlassFish 7",
      "4 automated EJB Timer Services monitoring delayed customs, low stock, shipments, and vendor KPIs",
      "Asynchronous email alerting using JMS Producers and Message-Driven Beans (MDBs)",
      "Container-Managed Transactions (REQUIRED & REQUIRES_NEW) with custom @Audited interceptors",
      "Stateless JWT cookie authentication and Role-Based Access Control (RBAC) across 5 user roles",
    ],
    futureUpdates: [
      "Interactive analytics dashboard with real-time supply chain KPI charts",
      "Automated PDF invoice and customs clearance document generation",
      "Docker containerization for GlassFish and PostgreSQL deployment",
    ],
    githubUrl: "https://github.com/RasheedaIdusara",
    liveUrl: "",
    icon: "layers",
    featured: true,
  },
  {
    id: "smartcity360",
    number: "03",
    title: "SmartCity360",
    category: "Software Design Patterns",
    tag: "Systems",
    hasDetails: true,
    description:
      "A modular JavaFX smart-city management suite applying five GoF Object-Oriented Design Patterns to solve urban energy security, power grid control, and policy evaluation.",
    overview:
      "SmartCity360 is a Java 17 and JavaFX desktop simulation built to demonstrate clean software architecture and reusable Object-Oriented Design Patterns in real-world urban infrastructure. Backed by SQLite persistence, each subsystem solves a distinct engineering challenge ranging from stream encryption and hierarchical grid control to memory optimization for thousands of IoT devices.",
      coverImage: smartcitycover,
    images: [
      smartcity1,
      smartcity2,
      smartcity3,
      smartcity4,
      smartcity5,
      smartcity6,
    ],
    technologies: [
      "Java 17",
      "JavaFX",
      "FXML / CSS",
      "SQLite",
      "JDBC / DAO",
      "Maven",
      "OOP Design Patterns",
    ],
    highlights: [
      "Decorator Pattern: Runtime authentication, GZIP compression, and AES-GCM encryption on energy meter streams",
      "Composite Pattern: Recursive power shutdowns and usage aggregation across City → District → Street → Building",
      "Chain of Responsibility: Automated citizen complaint escalation across LocalStaff, Supervisor, and CityManager",
      "Flyweight Pattern: Memory optimization for 10,000+ streetlight instances via shared hardware state caching",
      "Interpreter Pattern: Custom DSL expression parser for dynamically evaluating city noise and parking policies",
    ],
    futureUpdates: [
      "Real-time IoT sensor data streaming via MQTT integration",
      "Interactive city map visualization for streetlight and power grid states",
      "Exportable audit and energy consumption reports in CSV/PDF formats",
    ],
    githubUrl: "https://github.com/RasheedaIdusara",
    liveUrl: "",
    icon: "cpu",
    featured: false,
  },
  {
    id: "vibechat",
    number: "04",
    title: "VibeChat — Real-Time Messaging App",
    category: "Cross-Platform Mobile Application",
    tag: "Mobile",
    hasDetails: true,
    description:
      "A cross-platform real-time chat mobile application built with React Native and TypeScript, powered by a custom Java Servlet, Hibernate ORM, and WebSocket backend.",
    overview:
      "VibeChat is a full-stack real-time messaging platform engineered for Android and iOS using React Native and TypeScript. Unlike apps relying on third-party BaaS tools, VibeChat runs on a custom Java backend utilizing WebSockets for instant bidirectional messaging, RESTful Servlets for authentication and history retrieval, and Hibernate ORM with MySQL for persistent storage.",
    images: [
      // vibechat1,
      // vibechat2,
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Java Servlets",
      "WebSocket",
      "Hibernate ORM",
      "MySQL",
      "NativeWind",
      "GlassFish",
    ],
    highlights: [
      "Real-time bidirectional messaging via custom Java WebSocket endpoints with ConcurrentHashMap session tracking",
      "Cross-platform mobile UI built with React Native, TypeScript, NativeWind, and React Navigation",
      "Hybrid networking combining WebSockets for live chat and REST APIs (Fetch + Gson) for auth and history",
      "Live message delivery statuses (Sent, Delivered, Read), unread counters, and user online/typing indicators",
      "Includes contact discovery, avatar selection (Expo ImagePicker), Status updates, and Call history screens",
    ],
    futureUpdates: [
      "Push notifications for incoming background messages",
      "Real-time voice and video calling integration",
      "Group chat support and rich media/file sharing",
    ],
    githubUrl: "https://github.com/RasheedaIdusara",
    liveUrl: "",
    icon: "mobile",
    featured: false,
  },
];