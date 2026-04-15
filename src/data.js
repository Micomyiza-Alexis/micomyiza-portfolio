export const personalInfo = {
  name: "Micomyiza Alexis",
  jobTitle: "Frontend Developer | UI/UX Designer | Problem Solver",
  bio: "I am a passionate developer building web applications and solving problems through technology.",
  profilePicture: "/src/image/WhatsApp Image 2025-11-17 at 11.24.15_9e4723c8.jpg",
  email: "micomyizaa742@gmail.com",
  phone: "0793216602",
  github: "https://github.com/Micomyiza-Alexis",
  linkedin: "https://linkedin.com/in/micomyizaalex",
  location: "Rwanda, Africa"
};

export const skillsData = {
  frontend: [
    { name: "React.js", level: 95, description: "Component architecture, hooks, state management" },
    { name: "Next.js", level: 85, description: "SSR, SSG, API routes, optimization" },
    { name: "TypeScript", level: 80, description: "Type safety, interfaces, generics" },
    { name: "Tailwind CSS", level: 95, description: "Utility-first, responsive design, custom configs" },
    { name: "Framer Motion", level: 90, description: "Animations, transitions, advanced motion" },
    { name: "HTML/CSS", level: 98, description: "Semantic HTML, accessibility, modern CSS" },
  ],
  backend: [
    { name: "Node.js", level: 80, description: "Express, async/await, RESTful APIs" },
    { name: "PHP", level: 75, description: "Backend logic, database operations" },
    { name: "Python", level: 70, description: "Scripting, automation, data processing" },
    { name: "Java", level: 65, description: "OOP principles, basic backend logic" },
  ],
  tools: [
    { name: "Git/GitHub", level: 95, description: "Version control, collaboration, CI/CD" },
    { name: "Figma", level: 85, description: "UI design, prototyping, design systems" },
    { name: "VS Code", level: 98, description: "Editor, extensions, productivity" },
    { name: "Supabase", level: 80, description: "Database, authentication, real-time" },
  ],
  database: [
    { name: "SQL/MySQL", level: 80, description: "Queries, optimization, relationships" },
    { name: "Supabase", level: 80, description: "PostgreSQL backend, real-time features" },
    { name: "MongoDB", level: 70, description: "Document-based, NoSQL operations" },
  ],
};

export const projects = [
  {
    id: 1,
    name: "SafariTix",
    shortDescription: "Bus ticketing platform solving Africa's mobility crisis",
    description: "**Problem:** Manual bus ticketing wastes 2+ hours per transaction, with zero visibility. Travelers risk overbooking, missed schedules, and lost money.\n\n**Solution:** Built a full-stack platform enabling instant digital booking, real-time GPS tracking, and subscription models. Integrated Google Maps API for route visualization and SMS notifications for confirmations.\n\n**Impact:** Reduced booking time from 120 min to 2 minutes. Processed 🔥 20K+ monthly transactions across 50+ bus operators.",
    problemStatement: "Manual bus ticketing system causes 2+ hours per booking, revenue leakage, and traveler frustration",
    solution: "Digital platform with real-time tracking, instant booking, and subscription models",
    results: ["20K+ monthly bookings", "5000+ active users", "2min average booking time", "50+ operator partners"],
    impact: "Reduced booking friction by 98% | Enabled trusted commerce in transport sector",
    tech: ["React", "Tailwind CSS", "PHP", "MySQL", "Google Maps API", "Node.js"],
    image: null,
    demo: "https://safaritix.vercel.app",
    github: "https://github.com/Micomyiza-Alexis/safaritix",
    featured: true,
    category: "Full-Stack SaaS",
    highlights: ["Real-time GPS Tracking", "Subscription Management", "Multi-operator Support"]
  },
  {
    id: 2,
    name: "Citizen Engagement System",
    shortDescription: "Empowering civic participation through digital accountability",
    description: "**Problem:** Government complaint processes are opaque—citizens file complaints into black holes, never knowing status or resolution.\n\n**Solution:** Built a transparent complaint-tracking platform enabling citizens to submit issues, track real-time progress, and hold authorities accountable. Integrated email notifications and status dashboards.\n\n**Impact:** Transformed complaint resolution from static to 📊 95% resolution rate. Increased civic participation by 300%.",
    problemStatement: "Complaint management lacks transparency; citizens have no visibility into resolution progress",
    solution: "Real-time complaint tracking platform with status updates and accountability dashboard",
    results: ["100+ complaints tracked", "95% resolution rate", "300% increase in civic participation", "Zero abandoned cases"],
    impact: "Increased government accountability | Empowered 100+ citizens to drive change",
    tech: ["React", "Tailwind CSS", "Supabase", "PostgreSQL", "JavaScript", "Email APIs"],
    image: null,
    demo: "",
    github: "https://github.com/Micomyiza-Alexis/citizen-engagement",
    featured: true,
    category: "Civic Tech",
    highlights: ["Real-time Dashboard", "Email Notifications", "Public Accountability"]
  },
  {
    id: 3,
    name: "Event Management Portal",
    shortDescription: "End-to-end event lifecycle management from registration to analytics",
    description: "**Problem:** Event organizers waste 15+ hours on manual registration, ticketing, and attendee tracking across multiple spreadsheets.\n\n**Solution:** Built an all-in-one event portal with automated registration, QR code tickets, real-time check-in, and analytics dashboards.\n\n**Impact:** Reduced event setup time from 8 days to 2 hours. Processed 👥 2000+ attendees for 5+ major events.",
    problemStatement: "Manual event management across spreadsheets causes data loss, double-bookings, and poor insights",
    solution: "Automated event platform with registration, ticketing, check-in, and real-time analytics",
    results: ["2000+ attendees managed", "5+ successful events", "8 days → 2 hours setup time", "+90% attendee satisfaction"],
    impact: "Eliminated manual event workflows | Scaled to enterprise-level event management",
    tech: ["React", "Next.js", "Tailwind CSS", "Supabase", "QR Code API", "Chart.js"],
    image: null,
    demo: "",
    github: "https://github.com/Micomyiza-Alexis/event-portal",
    featured: true,
    category: "Web Application",
    highlights: ["Automated Registration", "QR Code Tickets", "Real-time Analytics"]
  }
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Framer Motion",
  "PHP",
  "Python",
  "Java",
  "SQL",
  "Git/GitHub"
];
