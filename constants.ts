
import { Project, Skill, Education, Certification, Experience, ContactInfo } from './types';

export const NAME = "Radhika Rajagoli";
export const HEADLINE = "Final-year Computer Science and Engineering Undergraduate";

export const PROFESSIONAL_OVERVIEW = "Motivated Final-year Computer Science and Engineering undergraduate with strong skills in web development, Programming and cybersecurity. Proficient in HTML, CSS, JavaScript, Python and C. Demonstrates a commitment to continuous learning through certifications and practical experience. Strong problem-solving, analytical thinking, and collaboration skills, with a keen interest in contributing to innovative software solutions.";

export const CONTACT_INFO: ContactInfo = {
  phone: "7975636576",
  email: "rajgoliradhika111@gmail.com",
  location: "Karnataka, India",
  linkedin: "https://www.linkedin.com/in/radhika-rajgoli-b17849259/",
  github: "https://github.com/example" // Placeholder
};

export const PROJECTS: Project[] = [
  {
    title: "E-Cart Website",
    goal: "To create an online platform for shopping with a simple cart interface.",
    features: "Product listing, add-to-cart functionality, responsive design.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1585160223393-371424349c17?q=80&w=1932&auto=format&fit=crop"
  },
  {
    title: "Beauty Products E-Commerce Website",
    goal: "To design a frontend website for displaying beauty products with clean UI.",
    features: "Category-wise product gallery, contact form, elegant interface.",
    technologies: ["HTML5", "CSS", "Bootstrap", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop"
  },
  {
    title: "AI News Summarizer",
    goal: "To summarize, analyze and translate news articles using AI technologies.",
    features: "Web scraping, AI-based text summarization, sentimental analysis and multi-language translation.",
    technologies: ["Python", "BeautifulSoup", "Transformers(NLP)", "TextBlob", "Google Translate API"],
    imageUrl: "https://images.unsplash.com/photo-1677756119517-756a1b9d2b2c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Subject Management System",
    goal: "To simplify academic subject data handling through a web dashboard.",
    features: "Admin login, subject CRUD operations, subject list view.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Spam Detection using Machine Learning",
    goal: "To classify emails as spam or not using supervised ML techniques.",
    features: "Text preprocessing, feature extraction, model training and evaluation using accuracy and precision.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NLP"],
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Portfolio Website",
    goal: "To build a personal portfolio to showcase skills and projects.",
    features: "About section, projects display, contact form, responsive layout.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop"
  }
];

export const SKILLS: Skill[] = [
    { name: "Java", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "C", category: "Languages" },
    { name: "JavaScript", category: "Web Development" },
    { name: "HTML5", category: "Web Development" },
    { name: "CSS3", category: "Web Development" },
    { name: "React.js", category: "Web Development" },
    { name: "Node.js", category: "Web Development" },
    { name: "Express.js", category: "Web Development" },
    { name: "MongoDB", category: "Databases" },
    { name: "MERN Stack", category: "Web Development" },
    { name: "Bootstrap", category: "Web Development" },
    { name: "Git & GitHub", category: "Tools" },
    { name: "Postman", category: "Tools" },
    { name: "Machine Learning", category: "AI/ML" },
    { name: "Cybersecurity Basics", category: "Security" },
];

export const EDUCATION_DATA: Education = {
  degree: "Bachelor's of Engineering",
  institution: "S. G. Balekundri institute of Technology, VTU",
  cgpa: "8.5",
  year: "Year of Passing: 2026"
};

export const CERTIFICATIONS: Certification[] = [
    { title: "Cybersecurity Threat and Landscape", issuer: "Self-paced" },
    { title: "Cybersecurity Awareness: CyberSecurity Terminology", issuer: "Microsoft-LinkedIn (May 2024)" },
    { title: "Cybersecurity Foundation", issuer: "Self-paced" },
    { title: "Microsoft Copilot for Security", issuer: "Microsoft-LinkedIn (Nov 2024)" },
    { title: "Penetration Testing Course", issuer: "Infosys Springboard" }
];

export const EXPERIENCES: Experience[] = [
    { role: "Conducted workshop on Basics of Python Programming", description: "Taught core programming concepts including variables, data types, conditionals, and simple logic building.", organization: "Avishkar Minds Pvt.Ltd (2024)" },
    { role: "Conducted Workshops on Cloud Computing", description: "Delivered beginner-level sessions covering AWS, Azure, and GCP fundamentals, deployment models, and cloud service types.", organization: "Self-directed" }
];

export const LANGUAGES_KNOWN = "English, Kannada, Hindi and Marathi";
