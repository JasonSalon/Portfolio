import { Project, Skill, Experience } from './types';

export const PORTFOLIO_OWNER = "Jason";
export const OWNER_TITLE = "Senior Creative Engineer";
export const OWNER_BIO = "I craft high-performance, interactive web experiences. Specializing in React ecosystem, 3D visualization, and AI integration. I bridge the gap between design and engineering.";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Nebula Dashboard",
    description: "A real-time data visualization dashboard for SaaS analytics. Features customizable widgets, dark mode, and <50ms latency updates via WebSockets.",
    tags: ["React", "TypeScript", "D3.js", "Socket.io"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Echo AI Chat",
    description: "An intelligent conversational interface leveraging LLMs to assist with customer support. Includes voice-to-text and sentiment analysis.",
    tags: ["Next.js", "Gemini API", "Tailwind", "Redis"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Voxel Editor 3D",
    description: "Browser-based 3D modeling tool. Users can create, export, and share voxel art directly in the browser using WebGL.",
    tags: ["Three.js", "React Three Fiber", "Zustand"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Finance Flow",
    description: "Personal finance tracking application with predictive budgeting algorithms and bank integration.",
    tags: ["Vue.js", "Node.js", "PostgreSQL", "Chart.js"],
    imageUrl: "https://picsum.photos/600/400?random=4",
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, category: "Frontend", icon: "⚛️" },
  { name: "TypeScript", level: 90, category: "Frontend", icon: "TS" },
  { name: "Tailwind CSS", level: 95, category: "Design", icon: "🎨" },
  { name: "Node.js", level: 80, category: "Backend", icon: "🟢" },
  { name: "GraphQL", level: 75, category: "Backend", icon: "📡" },
  { name: "Docker / CI/CD", level: 70, category: "Tools", icon: "🐳" },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "TechNova Solutions",
    period: "2021 - Present",
    description: "Leading a team of 6 developers to rebuild the core product platform. Improved load times by 40% and established a new component design system."
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Creative Pulse Agency",
    period: "2018 - 2021",
    description: "Developed award-winning marketing sites for Fortune 500 clients. Specialized in complex animations and interactive WebGL experiences."
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "StartUp Inc",
    period: "2016 - 2018",
    description: "Collaborated on the initial MVP launch. Handled full-stack features using MERN stack."
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
If asked about contact info, suggest using the contact form or email: jason@example.com.
Do not make up facts not present in this data. If you don't know, say you don't know but can forward the query.
`;