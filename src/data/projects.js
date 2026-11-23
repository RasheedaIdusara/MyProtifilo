// import smartify1 from "../assets/projects/smartify-1.png";
// import smartify2 from "../assets/projects/smartify-2.png";

export const projects = [
  {
    id: "smartify",
    number: "01",
    title: "Smartify Laptop & Mobile",
    category: "Mobile Commerce Application",
    tag: "Mobile",
    hasDetails: true, // විස්තර තියෙන නිසා true
    description:
      "An Android commerce application for laptops and mobile devices, featuring product browsing, configurable variants, cart management, ordering, and administration.",
    overview:
      "Smartify was built to streamline mobile electronics shopping on Android. Users can filter devices by specifications, choose RAM/storage variants dynamically, track real-time order statuses, while admins manage stock through a dedicated panel.",
    images: [
      // smartify1,
      // smartify2,
      // (Images දානකම් හිස්ව තිබුණත් code එක crash වෙන්නේ නැහැ)
    ],
    technologies: ["Java", "Android", "Firebase", "REST APIs"],
    highlights: [
      "Product variants and cart management",
      "Order processing and tracking",
      "Admin management features",
    ],
    futureUpdates: [
      "Integrating Stripe / PayHere online payment gateway",
      "Adding push notifications for order status updates",
      "Dark mode UI theme support for Android app",
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
    hasDetails: false, // විස්තර තාම දාලා නැති නිසා click කළාම "Coming Soon" පෙන්නයි
    description:
      "A supply chain management application developed with a modular Jakarta EE architecture and PostgreSQL database integration.",
    technologies: ["Java", "Jakarta EE", "PostgreSQL", "JPA"],
    highlights: [
      "Multi-module application architecture",
      "User and role management",
      "Database persistence and transactions",
    ],
    githubUrl: "https://github.com/RasheedaIdusara",
    liveUrl: "",
    icon: "layers",
    featured: false,
  },
  {
    id: "smartcity360",
    number: "03",
    title: "SmartCity360",
    category: "Software Design Patterns",
    tag: "Systems",
    hasDetails: false, // Coming Soon පෙන්නයි
    description:
      "A Java-based smart-city system exploring reusable design patterns for infrastructure management, security, and service workflows.",
    technologies: ["Java", "SQLite", "OOP", "Design Patterns"],
    highlights: [
      "Decorator and Composite patterns",
      "Chain of Responsibility",
      "Flyweight and Interpreter patterns",
    ],
    githubUrl: "https://github.com/RasheedaIdusara",
    liveUrl: "",
    icon: "cpu",
    featured: false,
  },
];