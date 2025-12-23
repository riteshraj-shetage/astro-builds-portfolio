// Type definitions for better type safety and maintainability
export type PersonalInfo = {
  name: string;
  title: string;
  tagLine: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  profileImage: string;
  brandLogo: string;
  brandName: string;
}

export type Skill = {
  category: "Frontend" | "Backend" | "Tools" | "Database";
  items: string[];
}

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  status: string;
}

export type Education = {
  degree: string;
  institution: string;
  period: string;
  description: string;
  grade: string;
  isCurrent?: boolean;
}

export type Highlight = {
  title: string;
  description: string;
}

export type Credential = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  certificateImage: string;
  verificationUrl: string;
  relatedSkills: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Full Stack Developer",
  tagLine: "Passionate about building elegant solutions to complex problems. Open source enthusiast and continuous learner.",
  bio: "Aspiring Full Stack Developer with strong programming and database foundations, skilled in building scalable web applications and proactively mastering modern frontend, backend, and cloud technologies.",
  location: "San Francisco, CA",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  profileImage: "/images/profile-photo.svg",
  brandLogo: "/images/brand-logo.svg",
  brandName: "Your Brand",
};

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Astro", "Tailwind CSS", "Next.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "FastAPI"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "GitHub Actions", "Linux"],
  },
];

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://demo.example.com",
    image: "/images/projects/project-placeholder-1.svg",
    status: "Active",
  },
  {
    title: "AI Code Assistant",
    description: "An intelligent code completion tool powered by machine learning that helps developers write better code faster.",
    technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    github: "https://github.com/yourusername/ai-assistant",
    demo: "https://ai-demo.example.com",
    image: "/images/projects/project-placeholder-2.svg",
    status: "Active",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and analytics.",
    technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    github: "https://github.com/yourusername/taskmanager",
    demo: "https://tasks.example.com",
    image: "/images/projects/project-placeholder-3.svg",
    status: "In Development",
  },
  {
    title: "Portfolio Template",
    description: "A modern, responsive portfolio template built with Astro and Tailwind CSS. GitHub-inspired design with dark mode.",
    technologies: ["Astro", "React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/yourusername/portfolio-template",
    demo: "https://portfolio.example.com",
    image: "/images/projects/project-placeholder-4.svg",
    status: "Active",
  },
];

export const education: Education[] = [
    {
    degree: "Master of Science in Software Engineering",
    institution: "Modern Institute of Technology",
    period: "2024 - 2026",
    description: "Specialized in distributed systems and cloud computing. Research on microservices architecture.",
    grade: "CGPA: 9.5/10",
    isCurrent: true,
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2021 - 2024",
    description: "Focused on software engineering, algorithms, and data structures. Graduated with honors.",
    grade: "CGPA: 8.5/10",
  },
  {
    degree: "High School Diploma in Science",
    institution: "Central High School",
    period: "2020 - 2021",
    description: "Completed advanced coursework in mathematics, physics, and computer science with distinction.",
    grade: "Score: 92%",
  },
];

export const highlights: Highlight[] = [
  {
    title: "Full Stack Development",
    description: "Building scalable web applications and distributed systems"
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to various open-source projects"
  },
  {
    title: "Continuous Learner",
    description: "Always exploring new technologies and best practices"
  },
  {
    title: "Problem Solver",
    description: "Passionate about tackling complex technical challenges"
  }
];

export const credentials: Credential[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "June 2023",
    description: "Professional certification demonstrating expertise in designing distributed systems on AWS.",
    certificateImage: "/images/certificates/certificate-placeholder.svg",
    verificationUrl: "https://www.credly.com/badges/example-aws-badge",
    relatedSkills: ["AWS", "Docker", "Node.js", "PostgreSQL"],
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "March 2022",
    description: "Certification validating proficiency in developing cloud-native applications on GCP.",
    certificateImage: "/images/certificates/certificate-placeholder.svg",
    verificationUrl: "https://www.credential.net/example-gcp-credential",
    relatedSkills: ["Python", "Docker", "FastAPI", "MongoDB"],
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "September 2023",
    description: "Expert-level certification validating skills in deploying, managing, and troubleshooting Kubernetes clusters.",
    certificateImage: "/images/certificates/certificate-placeholder.svg",
    verificationUrl: "https://www.credly.com/badges/example-cka-badge",
    relatedSkills: ["Docker", "AWS", "Linux", "Node.js"],
  },
];
