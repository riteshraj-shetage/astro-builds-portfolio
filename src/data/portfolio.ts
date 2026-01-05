// Type definitions for better type safety and maintainability
export type PersonalInfo = {
  name: string;
  title: string;
  tagLine: string;
  bio: string;
  quote: string;
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
  icon: string;
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
  name: "Riteshraj Shetage",
  title: "Full Stack Developer",
  tagLine: "Passionate about building elegant solutions to complex problems. Open source enthusiast.",
  bio: "Aspiring Full Stack Developer with strong programming foundations, skilled in scalable web applications and mastering modern frontend, backend, and cloud technologies.",
  quote: "Be the change you wish to see in the world.",
  location: "Pune, Maharashtra",
  email: "riteshraj.shetage@outlook.com",
  github: "https://github.com/riteshraj-shetage",
  linkedin: "https://linkedin.com/in/riteshraj-shetage",
  profileImage: "/images/profile.png",
  brandLogo: "/images/brand-logo.svg",
  brandName: "RITESHRAJ.",
};

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "MySQL", "MongoDB"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "GitHub Actions"],
  },
];

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/riteshraj-shetage/",
    demo: "",
    image: "/images/projects/project-placeholder-1.svg",
  },
  {
    title: "AI Code Assistant",
    description: "An intelligent code completion tool powered by machine learning that helps developers write better code faster.",
    technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    github: "https://github.com/riteshraj-shetage/",
    demo: "",
    image: "/images/projects/project-placeholder-2.svg",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and analytics.",
    technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    github: "https://github.com/riteshraj-shetage/",
    demo: "",
    image: "/images/projects/project-placeholder-3.svg",
  },
  {
    title: "Portfolio Template",
    description: "A modern, responsive portfolio template built with Astro and Tailwind CSS. GitHub-inspired design with dark mode.",
    technologies: ["Astro", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/riteshraj-shetage/",
    demo: "",
    image: "/images/projects/project-placeholder-4.svg",
  },
];

export const education: Education[] = [
    {
    degree: "Master of Computer Applications",
    institution: "Rajarshi Shahu College of Engineering, Pune",
    period: "2024 - 2026",
    description: "Advanced studies in computer science, software development, and system design. Engaged in projects involving cloud computing and AI/ML applications.",
    grade: "CGPA: 9.21/10",
    isCurrent: true,
  },
  {
    degree: "Bachelor of Science in Statistics",
    institution: "Rajarshi Chhatrapati Shahu College, Kolhapur",
    period: "2021 - 2024",
    description: "Focused on statistical methods and data analysis. Completed projects on data visualization and predictive modeling.",
    grade: "CGPA: 7.82/10",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt. of Maharashtra's Rajaram College, Kolhapur",
    period: "2020 - 2021",
    description: "Completed HSC with a focus on Science stream, excelling in Physics and Mathematics.",
    grade: "Score: 77.17%",
  },
    {
    degree: "Secondary School Certificate (SSC)",
    institution: "Shaskiya Vidyaniketan Pusegaon, Satara",
    period: "2018 - 2019",
    description: "Completed SSC with a focus on Science stream, achieving high marks in Mathematics and Science.",
    grade: "Score: 95.60%",
  },
];

export const highlights: Highlight[] = [
  {
    title: "Full Stack Development",
    description: "Building scalable web applications and distributed systems",
    icon: "code"
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to various open-source projects",
    icon: "heart"
  },
  {
    title: "Continuous Learner",
    description: "Always exploring new technologies and best practices",
    icon: "book"
  },
  {
    title: "Problem Solver",
    description: "Passionate about tackling complex technical challenges",
    icon: "zap"
  }
];

export const credentials: Credential[] = [
  {
    title: "Oracle Certified Foundations Associate, OCI 2025",
    issuer: "Oracle University",
    date: "October 2025",
    description: "Certification demonstrating foundational knowledge of Oracle Cloud Infrastructure services and solutions.",
    certificateImage: "/images/certificates/oracle-oci-foundations.jpg",
    verificationUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=C01E6C73130827CA3E980423A6120A382E0F1C8BCD10099AE85D1A2B07C65E9D",
    relatedSkills: ["OCI", "Cloud Computing", "Linux", "Docker"],
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    date: "October 2025",
    description: "Certification course covering Python programming, data analysis, and visualization techniques for data science applications.",
    certificateImage: "/images/certificates/nptel-python-data-science.jpg",
    verificationUrl: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS104S44540397809142614",
    relatedSkills: ["Python", "Data Science", "Pandas", "NumPy"],
  },
  {
    title: "AWS Fundamentals",
    issuer: "Amazon Web Services",
    date: "August 2025",
    description: "Certification validating understanding of AWS core services, architecture, and best practices for deploying applications on AWS.",
    certificateImage: "/images/certificates/aws-fundamentals-coursera.jpg",
    verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/H64AESY0QH9A",
    relatedSkills: ["AWS", "Cloud Computing", "EC2", "S3", "IAM"],
  },
  {
    title: "Ubuntu Linux Professional Certificate",
    issuer: "Canonical",
    date: "August 2025",
    description: "Certification demonstrating proficiency in Ubuntu Linux system administration and command-line skills.",
    certificateImage: "/images/certificates/ubuntu-linux-professional-canonical.jpg",
    verificationUrl: "https://www.linkedin.com/learning/certificates/7855d61d8417f980dc9a6350fe7b02324665e9ecbb764a93fd093ceb3f19a11b?trk=share_certificate",
    relatedSkills: ["Linux", "Ubuntu", "System Administration", "Shell Scripting"],
  }
];
