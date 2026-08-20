import profilePicture from "./image/WhatsApp Image 2025-11-17 at 11.24.15_9e4723c8.jpg";
// ========================================
// PERSONAL INFORMATION
// ========================================

export const personalInfo = {
  name: "Micomyiza Alexis",

  jobTitle: "Frontend Developer | UI/UX Designer | Full-Stack Developer",

  bio: "IT student and developer focused on building modern, responsive web applications and solving real-world problems through technology.",

  profilePicture,

  email: "lexmico10@gmail.com",

  phone: "0793216602",

  github: "https://github.com/Micomyiza-Alexis",

  linkedin: "https://linkedin.com/in/micomyizaalex",

  location: "Rwanda, Africa",
};


// ========================================
// SKILLS
// ========================================

export const skillsData = {
  frontend: [
    {
      name: "React.js",
      level: 85,
      description:
        "Component architecture, hooks, state management, and reusable UI development",
    },
    {
      name: "Next.js",
      level: 80,
      description:
        "Server-side rendering, routing, API routes, and production web applications",
    },
    {
      name: "TypeScript",
      level: 75,
      description:
        "Type-safe development, interfaces, types, and reusable application logic",
    },
    {
      name: "Tailwind CSS",
      level: 90,
      description:
        "Responsive layouts, utility-first styling, and modern UI implementation",
    },
    {
      name: "Framer Motion",
      level: 80,
      description:
        "Animations, transitions, interactive interfaces, and motion effects",
    },
    {
      name: "HTML/CSS",
      level: 95,
      description:
        "Semantic HTML, responsive design, accessibility, and modern CSS",
    },
  ],

  backend: [
    {
      name: "Node.js",
      level: 75,
      description:
        "REST APIs, Express, asynchronous programming, and backend services",
    },
    {
      name: "PHP",
      level: 65,
      description:
        "Backend logic, server-side development, and database operations",
    },
    {
      name: "Python",
      level: 65,
      description:
        "Scripting, automation, backend fundamentals, and data processing",
    },
    {
      name: "Java",
      level: 60,
      description:
        "Object-oriented programming and backend development fundamentals",
    },
  ],

  tools: [
    {
      name: "Git/GitHub",
      level: 90,
      description:
        "Version control, branching, pull requests, collaboration, and project workflows",
    },
    {
      name: "Figma",
      level: 85,
      description:
        "UI design, wireframes, prototypes, and design-to-development workflows",
    },
    {
      name: "VS Code",
      level: 95,
      description:
        "Development environment, extensions, debugging, and productivity",
    },
    {
      name: "Vercel",
      level: 75,
      description:
        "Deployment and hosting of modern frontend and Next.js applications",
    },
    {
      name: "Docker",
      level: 55,
      description:
        "Containerization fundamentals and development environments",
    },
  ],

  database: [
    {
      name: "SQL/MySQL",
      level: 75,
      description:
        "Queries, relationships, CRUD operations, and database fundamentals",
    },
    {
      name: "PostgreSQL",
      level: 75,
      description:
        "Relational databases, queries, relationships, and application data",
    },
    {
      name: "Supabase",
      level: 80,
      description:
        "PostgreSQL database, authentication, APIs, and real-time features",
    },
    {
      name: "MongoDB",
      level: 65,
      description:
        "Document databases, CRUD operations, and NoSQL fundamentals",
    },
  ],
};


// ========================================
// PROJECTS
// ========================================

export const projects = [
  {
    id: 1,
    name: "SafariTix",

    type: "personal",
    status: "in-progress",
    year: 2026,
    featured: true,

    category: "Transportation Technology",
    role: "Founder & Full-Stack Developer",

    shortDescription:
      "A digital bus ticketing and transportation management platform designed to simplify booking, seat management, and bus operations.",

    description:
      "SafariTix is a transportation platform concept focused on making bus travel easier to manage digitally. The platform brings together online ticket booking, seat management, bus scheduling, tracking concepts, and tools for transport operators.",

    problemStatement:
      "Traditional bus ticketing can involve queues, manual processes, limited seat visibility, and poor communication between passengers and transport operators.",

    solution:
      "Designed and developed a full-stack transportation platform with digital booking, seat management, bus scheduling, operator management, and API-driven architecture.",

    contribution: [
      "Designed the overall application architecture",
      "Built the passenger booking experience",
      "Implemented bus and seat management workflows",
      "Designed backend API architecture",
      "Worked on database structure and relationships",
      "Designed transport operator management features",
    ],

    results: [
      "Created a digital bus booking workflow",
      "Improved visibility of available seats",
      "Centralized passenger and operator workflows",
      "Established a foundation for real-time transportation features",
    ],

    impact:
      "SafariTix demonstrates my ability to design and build a real-world full-stack product around a practical transportation problem.",

    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Google Maps API",
    ],

    image: null,

    demo: "https://project-safaritix-transportation.vercel.app/",

    github:
      "https://github.com/Micomyiza-Alexis/project-safatiTix-developer",

    highlights: [
      "Online Bus Booking",
      "Seat Management",
      "Bus Scheduling",
      "Operator Management",
      "REST APIs",
    ],
  },


  // ========================================
  // RWANDA LEGALCONNECT
  // ========================================

  {
    id: 2,
    name: "Rwanda LegalConnect",

    type: "contribution",
    status: "in-progress",
    year: 2026,
    featured: true,

    category: "LegalTech",
    role: "Frontend Developer",

    shortDescription:
      "A digital legal services platform designed to make legal information and services easier to discover and access.",

    description:
      "Rwanda LegalConnect is a legal technology platform focused on connecting users with legal information, resources, and services through a modern digital experience.",

    problemStatement:
      "Finding legal information and navigating legal services can be difficult when resources are scattered across different sources and interfaces.",

    solution:
      "Contributed to a modern web platform that organizes legal resources, services, and information into an accessible and user-friendly experience.",

    contribution: [
      "Developed frontend interfaces",
      "Worked on the Legal Library experience",
      "Built reusable React components",
      "Improved responsive layouts",
      "Integrated frontend interfaces with API data",
      "Worked on resource and category browsing",
    ],

    results: [
      "Improved the legal resource browsing experience",
      "Created structured Legal Library interfaces",
      "Added reusable responsive components",
      "Improved navigation between legal resources",
    ],

    impact:
      "Contributed to making legal information easier to discover and interact with through a modern web interface.",

    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "REST APIs",
      "Git",
      "GitHub",
    ],

    image: null,

    demo: "",

    github:
      "https://github.com/Micomyiza-Alexis",

    highlights: [
      "Legal Library",
      "Resource Discovery",
      "Responsive UI",
      "API Integration",
      "Reusable Components",
    ],
  },


  // ========================================
  // CITIZEN ENGAGEMENT SYSTEM
  // ========================================

  {
    id: 3,
    name: "Citizen Engagement System",

    type: "academic",
    status: "completed",
    year: 2026,
    featured: false,

    category: "Civic Technology",
    role: "Full-Stack Developer",

    shortDescription:
      "A civic platform designed to improve communication between citizens and institutions through structured complaint tracking.",

    description:
      "A digital civic engagement platform that allows citizens to submit complaints, monitor their status, and follow the progress of issues through a centralized dashboard.",

    problemStatement:
      "Traditional complaint processes can make it difficult for citizens to know whether their complaints have been received, reviewed, or resolved.",

    solution:
      "Developed a centralized complaint management system with structured submissions, status tracking, dashboards, and notification workflows.",

    contribution: [
      "Designed the application interface",
      "Built complaint submission workflows",
      "Implemented complaint status tracking",
      "Created dashboard interfaces",
      "Worked on database integration",
      "Implemented notification functionality",
    ],

    results: [
      "Created a centralized complaint management workflow",
      "Improved visibility into complaint status",
      "Reduced reliance on manual complaint tracking",
      "Provided a structured communication channel",
    ],

    impact:
      "Demonstrates practical experience designing a digital workflow around citizen communication and issue tracking.",

    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Email APIs",
    ],

    image: null,

    demo: "",

    github:
      "https://github.com/Micomyiza-Alexis/citizen-engagement",

    highlights: [
      "Complaint Tracking",
      "Dashboard",
      "Status Management",
      "Email Notifications",
      "Civic Engagement",
    ],
  },


  // ========================================
  // EVENT MANAGEMENT PORTAL
  // ========================================

  {
    id: 4,
    name: "Event Management Portal",

    type: "academic",
    status: "completed",
    year: 2026,
    featured: false,

    category: "Web Application",
    role: "Full-Stack Developer",

    shortDescription:
      "An event management platform covering registration, digital tickets, attendee check-in, and event analytics.",

    description:
      "An end-to-end event management application designed to help organizers manage events, registrations, attendees, digital tickets, check-in, and event information from one platform.",

    problemStatement:
      "Managing registrations, attendees, tickets, and event information manually can create duplicated data and make event management difficult.",

    solution:
      "Built a centralized event management platform with registration workflows, digital QR tickets, attendee management, check-in functionality, and analytics interfaces.",

    contribution: [
      "Designed the event management interface",
      "Built event registration workflows",
      "Implemented attendee management",
      "Worked on QR-based ticket functionality",
      "Created event analytics interfaces",
      "Integrated application data with Supabase",
    ],

    results: [
      "Centralized event registration and attendee management",
      "Reduced manual event administration",
      "Created a digital ticketing workflow",
      "Provided organizers with event insights",
    ],

    impact:
      "Demonstrates experience building a complete web application around event registration and management workflows.",

    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "QR Code API",
      "Chart.js",
    ],

    image: null,

    demo: "",

    github:
      "https://github.com/Micomyiza-Alexis/event-portal",

    highlights: [
      "Event Registration",
      "QR Tickets",
      "Attendee Management",
      "Check-in",
      "Analytics",
    ],
  },


  // ========================================
  // OGERA
  // ========================================

  {
    id: 5,
    name: "Ogera",

    type: "professional",
    status: "in-progress",
    year: 2026,
    featured: false,

    category: "Web Platform",
    role: "Frontend Developer",

    shortDescription:
      "A modern web platform developed as part of professional software development work.",

    description:
      "Ogera is a web platform that I contributed to during professional development work, focusing on modern frontend development, reusable components, and API-driven interfaces.",

    problemStatement:
      "Modern platforms require clean interfaces, responsive experiences, reusable components, and reliable integration between frontend and backend services.",

    solution:
      "Contributed to the frontend implementation using React and Next.js, reusable components, responsive layouts, and API-driven interfaces.",

    contribution: [
      "Developed frontend features",
      "Built and improved reusable UI components",
      "Worked with API-driven interfaces",
      "Improved responsive layouts",
      "Worked with Git and GitHub workflows",
      "Contributed through feature branches and pull requests",
    ],

    results: [
      "Delivered frontend features through Git-based workflows",
      "Improved reusable component structure",
      "Built responsive user interfaces",
      "Gained experience working in a professional development environment",
    ],

    impact:
      "Demonstrates practical experience contributing to a professional software development project using team-based Git workflows.",

    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Git",
      "GitHub",
    ],

    image: null,

    demo: "https://ogera.sybellasystems.co.rw/",

    github:
      "https://github.com/SybellaSystems/ogera-frontend",

    highlights: [
      "Professional Project",
      "Next.js",
      "API Integration",
      "Reusable UI",
      "GitHub Workflow",
    ],
  },


  // ========================================
  // SYBELLA SYSTEMS WEBSITE
  // ========================================

  {
    id: 6,
    name: "Sybella Systems Website",

    type: "professional",
    status: "live",
    year: 2026,
    featured: false,

    category: "Corporate Website",
    role: "Frontend Developer",

    shortDescription:
      "A production corporate website where I contributed to the blog experience and administrative content management features.",

    description:
      "A production corporate website developed with Next.js, where I worked on the blog system, administrative interfaces, and API-driven content publishing functionality.",

    problemStatement:
      "A growing technology company needs a professional web presence while also giving internal staff the ability to manage and publish website content.",

    solution:
      "Contributed to the development and improvement of a modern Next.js website with responsive pages, blog functionality, administrative tools, and API-driven content.",

    contribution: [
      "Worked on the blog experience",
      "Improved the blog administration interface",
      "Worked on content publishing workflows",
      "Debugged API routes and frontend integrations",
      "Improved responsive UI components",
      "Worked with Git branches and pull requests",
    ],

    results: [
      "Improved the website content management experience",
      "Implemented blog editing functionality",
      "Worked with production Next.js builds",
      "Delivered changes through GitHub pull requests",
    ],

    impact:
      "Demonstrates experience working on a real production website and contributing through professional GitHub development workflows.",

    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "REST APIs",
      "Git",
      "GitHub",
    ],

    image: null,

    demo: "https://www.sybellasystems.co.rw",

    github:
      "https://github.com/SybellaSystems/website",

    highlights: [
      "Production Website",
      "Blog System",
      "Admin Dashboard",
      "Multilingual",
      "Content Management",
    ],
  },


  // ========================================
  // RWANDA LEGALCONNECT BACKEND
  // ========================================

  {
    id: 7,
    name: "Rwanda LegalConnect Backend",

    type: "contribution",
    status: "in-progress",
    year: 2026,
    featured: false,

    category: "Backend API",
    role: "Backend Developer",

    shortDescription:
      "Backend services supporting legal resources, categories, and platform data for Rwanda LegalConnect.",

    description:
      "Backend development work supporting the Rwanda LegalConnect platform, including API-driven access to legal resources and structured platform data.",

    problemStatement:
      "Frontend applications require reliable APIs and structured data services to provide users with dynamic legal resources and categories.",

    solution:
      "Worked on backend API functionality and data integration to support the legal platform's frontend experiences.",

    contribution: [
      "Worked on backend API development",
      "Integrated resource data with frontend features",
      "Worked with structured legal resource data",
      "Debugged API integration issues",
      "Worked with Git-based development workflows",
    ],

    results: [
      "Connected frontend features with backend resources",
      "Improved dynamic legal resource handling",
      "Supported the Legal Library experience",
    ],

    impact:
      "Demonstrates practical backend development experience supporting a real-world legal technology platform.",

    tech: [
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "REST API",
      "Git",
      "GitHub",
    ],

    image: null,

    demo: "",

    github:
      "https://github.com/Micomyiza-Alexis",

    highlights: [
      "REST API",
      "Backend Development",
      "Database Integration",
      "Legal Resources",
    ],
  },
];


// ========================================
// SIMPLE SKILLS LIST
// ========================================

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express",
  "PHP",
  "Python",
  "Java",
  "SQL",
  "PostgreSQL",
  "Supabase",
  "MongoDB",
  "Git/GitHub",
  "Figma",
];
