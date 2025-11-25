import { Project, Skill, Experience } from './types';

export const PORTFOLIO_OWNER = "Jason Patrick R. Salon";
export const OWNER_TITLE = "Full Stack Web Developer";
export const OWNER_BIO = "Full Stack Web Developer with hands-on experience building secure, scalable web applications using modern frameworks like React, Django, and Node.js. Skilled in designing clean, responsive UIs and developing robust backend systems with RESTful APIs, database integration, and cloud-based deployment. Contributed to cybersecurity platforms, e-commerce systems, and compliance software in fast-paced development environments. Known for strong problem-solving skills, adaptability, and a deep commitment to writing efficient, maintainable code that delivers real business value.";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Service-Based E-Commerce Platform",
    description: "Designed and developed a scalable e-commerce platform. Integrated secure user authentication and payment systems, improving transaction success rates by 25%. Built with ReactJS, NodeJS, and PostgreSQL.",
    tags: ["ReactJS", "NodeJS", "PostgreSQL", "Payment Gateway"],
    imageUrl: "https://picsum.photos/600/400?random=10",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "All-in-One Cybersecurity Platform",
    description: "Developed core modules for intrusion detection and vulnerability scanning. Unified separate systems into a single scalable platform, improving performance and reducing bug reports by 30%.",
    tags: ["Django", "Python", "Cybersecurity", "Scalability"],
    imageUrl: "https://picsum.photos/600/400?random=11",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "NG SIEM Threat Detection",
    description: "Enhanced threat detection algorithms and implemented real-time event correlation features. Integrated visual dashboards for proactive incident response within the analytics team.",
    tags: ["Python", "Analytics", "Threat Detection", "Dashboard"],
    imageUrl: "https://picsum.photos/600/400?random=12",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Compliance Software Suite",
    description: "Contributed to privacy and security compliance tools focusing on user privacy and front-end UI development. Implemented encryption standards for user data.",
    tags: ["UI/UX", "Security", "Encryption", "Compliance"],
    imageUrl: "https://picsum.photos/600/400?random=13",
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, category: "Frontend", icon: "⚛️" },
  { name: "Django / Python", level: 90, category: "Backend", icon: "🐍" },
  { name: "Node.js", level: 85, category: "Backend", icon: "🟢" },
  { name: "Tailwind CSS / Bootstrap", level: 90, category: "Frontend", icon: "🎨" },
  { name: "PostgreSQL / MySQL", level: 85, category: "Backend", icon: "🗄️" },
  { name: "Flutter", level: 75, category: "Frontend", icon: "📱" },
  { name: "Docker / Git", level: 80, category: "Tools", icon: "🐳" },
  { name: "Laravel", level: 80, category: "Backend", icon: "🏗️" },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Antimony Technologies",
    period: "Oct 2024 – Present",
    description: "Designed and developed a service-based e-commerce platform using ReactJS, NodeJS, and PostgreSQL. Integrated secure user authentication and payment systems, improving transaction success rate by 25%. Collaborated closely with designers and stakeholders to ensure a seamless user experience."
  },
  {
    id: 2,
    role: "Senior Web Developer",
    company: "CyTech International",
    period: "June 2023 – Oct 2024",
    description: "Developed core modules like intrusion detection and vulnerability scanning using Django and Python. Helped unify separate systems into a single scalable platform, improving performance and reducing bug reports by 30%. Coordinated with QA and research teams to ensure security and compliance standards were met."
  },
  {
    id: 3,
    role: "Web Developer / Researcher",
    company: "CyTech International",
    period: "Feb 2023 – June 2023",
    description: "Enhanced threat detection algorithms and implemented real-time event correlation features. Worked with the analytics team to integrate visual dashboards for proactive incident response. Focused on secure coding practices and codebase optimization."
  },
  {
    id: 4,
    role: "Web Developer / QA",
    company: "CyTech International",
    period: "Dec 2022 – Feb 2023",
    description: "Contributed to privacy and security compliance tools with a focus on testing, user privacy, and front-end UI development. Ensured regulatory adherence and implemented basic encryption standards for user data."
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