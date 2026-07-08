import { Project, Skill, Experience } from './types';

export const PORTFOLIO_OWNER = "Jason Patrick R. Salon";
export const OWNER_TITLE = "Full Stack Web Developer";
export const OWNER_BIO = "Versatile Full Stack Developer with 3+ years of experience building scalable, secure web applications from the ground up. Proven track record in the Cybersecurity and E-commerce sectors, specializing in modernizing legacy architectures to achieve up to 40% performance improvements. Expert in the React/Next.js ecosystem and robust backends like Node.js, Laravel, and Django. Passionate about building 'intelligent' web experiences through the strategic integration of AI/LLM APIs (OpenAI/Anthropic). Experienced in founding-team environments, taking complex products from initial concept to full-scale deployment with a focus on audit-ready, high-performance infrastructure.";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Voice AI Platform",
    description: "An advanced, real-time voice intelligence platform powered by conversational AI. Supports speech-to-text, context-aware analysis, and voice-driven assistant capabilities.",
    tags: ["React", "WebSockets", "FastAPI", "OpenAI Whisper", "LLMs"],
    imageUrl: "/projects/voice_ai_platform.jpg",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Notes and Reminder Platform",
    description: "A productivity platform incorporating AI-driven workflows and automation. Features contextual categorization, automated action-item extraction, and smart scheduling reminders.",
    tags: ["Next.js", "Zustand", "Supabase", "AI Agents", "Automations"],
    imageUrl: "/projects/notes_reminder_platform.jpg",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Service-Based E-Commerce Platform",
    description: "Designed and developed a scalable e-commerce platform. Integrated secure user authentication and payment systems, improving transaction success rates by 25%. Built with ReactJS, NodeJS, and PostgreSQL.",
    tags: ["ReactJS", "NodeJS", "PostgreSQL", "Payment Gateway"],
    imageUrl: "/projects/ecommerce_platform.jpg",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "All-in-One Cybersecurity Platform",
    description: "Developed core modules for intrusion detection and vulnerability scanning. Unified separate systems into a single scalable platform, improving performance and reducing bug reports by 30%.",
    tags: ["Django", "Python", "Cybersecurity", "Scalability"],
    imageUrl: "/projects/cybersecurity_platform.jpg",
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "NG SIEM Threat Detection",
    description: "Enhanced threat detection algorithms and implemented real-time event correlation features. Integrated visual dashboards for proactive incident response within the analytics team.",
    tags: ["Python", "Analytics", "Threat Detection", "Dashboard"],
    imageUrl: "/projects/siem_threat_detection.jpg",
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Compliance Software Suite",
    description: "Contributed to privacy and security compliance tools focusing on user privacy and front-end UI development. Implemented encryption standards for user data.",
    tags: ["UI/UX", "Security", "Encryption", "Compliance"],
    imageUrl: "/projects/compliance_suite.jpg",
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, category: "Frontend", icon: "⚛️" },
  { name: "Zustand / TanStack Query", level: 90, category: "Frontend", icon: "📦" },
  { name: "Tailwind CSS / Bootstrap", level: 90, category: "Frontend", icon: "🎨" },
  { name: "Node.js / Express", level: 85, category: "Backend", icon: "🟢" },
  { name: "Django / FastAPI (Python)", level: 90, category: "Backend", icon: "🐍" },
  { name: "Laravel (PHP)", level: 80, category: "Backend", icon: "🏗️" },
  { name: "RESTful APIs", level: 95, category: "Backend", icon: "🔌" },
  { name: "PostgreSQL / MySQL", level: 85, category: "Database", icon: "🗄️" },
  { name: "Supabase", level: 85, category: "Database", icon: "⚡" },
  { name: "Flutter (Dart)", level: 75, category: "Mobile", icon: "📱" },
  { name: "OpenAI & Anthropic APIs", level: 85, category: "AI / ML", icon: "🧠" },
  { name: "Git / GitHub", level: 90, category: "Tools & DevOps", icon: "🐙" },
  { name: "Docker / Linux", level: 80, category: "Tools & DevOps", icon: "🐳" },
  { name: "Figma", level: 85, category: "Design", icon: "📐" },
  { name: "WordPress", level: 80, category: "CMS", icon: "🌐" },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Full Stack Web Developer – E-commerce Service Platform",
    company: "Antimony Technologies",
    period: "Oct 2024 – Present",
    description: [
      "Designed and developed a service-based e-commerce platform using ReactJS, NodeJS, and PostgreSQL.",
      "Integrated secure user authentication and payment systems, improving transaction success rate by 25%.",
      "Collaborated closely with designers and stakeholders to ensure a seamless user experience."
    ]
  },
  {
    id: 2,
    role: "Full Stack Web Developer – All-in-One Cybersecurity Platform",
    company: "CyTech International",
    period: "June 2023 – Oct 2024",
    description: [
      "Developed core modules like intrusion detection and vulnerability scanning using Django and Python.",
      "Helped unify separate systems into a single scalable platform, improving performance and reducing bug reports by 30%.",
      "Coordinated with QA and research teams to ensure security and compliance standards were met."
    ]
  },
  {
    id: 3,
    role: "Web Developer / Researcher – NG SIEM",
    company: "CyTech International",
    period: "Feb 2023 – June 2023",
    description: [
      "Enhanced threat detection algorithms and implemented real-time event correlation features.",
      "Worked with the analytics team to integrate visual dashboards for proactive incident response.",
      "Focused on secure coding practices and codebase optimization."
    ]
  },
  {
    id: 4,
    role: "Intern Web Developer – Compliance Software",
    company: "CyTech International",
    period: "Dec 2022 – Feb 2023",
    description: [
      "Contributed to privacy and security compliance tools with a focus on testing, user privacy, and front-end UI development.",
      "Ensured regulatory adherence and implemented basic encryption standards for user data."
    ]
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${PORTFOLIO_OWNER}'s portfolio website. 
Your role is to represent ${PORTFOLIO_OWNER} to potential employers or clients visiting the site.
Answer questions in the first person as if you are a helpful assistant speaking on behalf of ${PORTFOLIO_OWNER}, or strictly about ${PORTFOLIO_OWNER}'s skills and experience.
Keep responses concise, professional, yet friendly.
Here is the context about ${PORTFOLIO_OWNER}:
Title: ${OWNER_TITLE}
Bio: ${OWNER_BIO}
Skills: ${SKILLS.map(s => s.name).join(', ')}
Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.period})`).join('; ')}
Projects: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join('; ')}
If asked about contact info, suggest using the contact form or email: patrickranario45@gmail.com.
Do not make up facts not present in this data. If you don't know, say you don't know but can forward the query.
`;