// Use type definitions for better type safety and maintainability (if needed)

export const personalInfo = {
  name: "Riteshraj Shetage",
  title: "Python Developer | Open Source Enthusiast",
  tagLine: "Passionate about building elegant solutions to complex problems.",
  bio: "Aspiring Full Stack Developer with strong programming foundations, skilled in scalable web applications and mastering modern frontend, backend, and cloud technologies.",
  quote: "Be the change you wish to see in the world.",
  location: "Pune, Maharashtra",
  email: "riteshraj.shetage@outlook.com",
  github: "https://github.com/riteshraj-shetage",
  linkedin: "https://linkedin.com/in/riteshraj-shetage",
  profileImage: "/images/profile-image.png",
  brandLogo: "/images/brand-logo.svg",
  brandName: "iteshraj",
};

export const skills = [
  {
    category: "Frontend & Web",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Astro"],
  },
  {
    category: "Backend & Database",
    items: ["Node.js", "Python", "FastAPI", "MySQL", "MongoDB"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "AWS", "GitHub Actions", "Ubuntu"],
  },
];

export const projects = [
  {
    title: "IT Flashcards API",
    description: "A RESTful API for IT flashcards built with FastAPI and MongoDB, providing endpoints for CRUD operations and user authentication.",
    technologies: ["Python", "FastAPI", "Pydantic", "PyMongo", "MongoDB",],
    github: "https://github.com/riteshraj-shetage/cards-crudapi",
    demo: "",
    image: "/images/projects/project-placeholder-1.svg",
  },
  {
    title: "Academic Portal Utility",
    description: "A Python-based utility to scrape academic portal for new updates, sending real-time alerts via ntfy.",
    technologies: ["Python", "Playwright", "Beautiful Soup", "ntfy", "SQLite"],
    github: "https://github.com/riteshraj-shetage/edusync",
    demo: "https://ntfy.riteshrajshetage.me/",
    image: "/images/projects/project-placeholder-2.svg",
  },
  {
    title: "Private Automation Stack",
    description: "A self-hostable stack that runs n8n as a private automation backend with persistence, HTTPS, and backups built in.",
    technologies: ["Docker", "n8n", "Traefik", "Ubuntu 24.04", "Bash Scripts"],
    github: "https://github.com/riteshraj-shetage/n8n-compose",
    demo: "https://n8n.riteshrajshetage.me",
    image: "/images/projects/project-placeholder-3.svg",
  },
  {
    title: "Developer Portfolio Template",
    description: "A modern, responsive portfolio template built with Astro and Tailwind CSS. GitHub-inspired design with CI/CD integration.",
    technologies: ["Astro", "Tailwind CSS", "TypeScript", "GitHub CI/CD"],
    github: "https://github.com/riteshraj-shetage/astro-builds-portfolio",
    demo: "https://riteshraj-shetage.github.io",
    image: "/images/projects/project-placeholder-4.svg",
  },
];

export const education = [
    {
    degree: "Master of Computer Applications",
    institution: "JSPM's Rajarshi Shahu College of Engineering, Pune",
    instituteURL: "https://www.jspmrscoe.edu.in/",
    period: "2024 - 2026",
    description: "Advanced studies in computer science, software development, and system design. Engaged in projects involving cloud computing and AI/ML applications.",
    grade: "CGPA: 9.21",
    isCurrent: true,
  },
  {
    degree: "Bachelor of Science in Statistics",
    institution: "Rajarshi Chhatrapati Shahu College, Kolhapur",
    instituteURL: "https://www.rcsc.ac.in/",
    period: "2021 - 2024",
    description: "Focused on statistical methods and data analysis. Completed projects on data visualization and predictive modeling.",
    grade: "CGPA: 7.82",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Govt. of Maharashtra's Rajaram College, Kolhapur",
    instituteURL: "https://rajaramcollege.com/",
    period: "2020 - 2021",
    description: "Completed HSC with a focus on Science stream, excelling in Physics and Mathematics.",
    grade: "Score: 77.17%",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Shaskiya Vidyaniketan Pusegaon, Satara",
    instituteURL: "",
    period: "2018 - 2019",
    description: "Completed SSC with a focus on Science stream, achieving high marks in Mathematics and Science.",
    grade: "Score: 95.60%",
  },
];

export const highlights = [
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

export const credentials = [
  {
    title: "Oracle Certified Foundations Associate, OCI 2025",
    issuer: "Oracle University",
    date: "October 2025",
    description: "Certification demonstrating foundational knowledge of Oracle Cloud Infrastructure services, security model, compliance, billing, and governance.",
    certificateImage: "/images/certificates/oracle-oci-foundations.jpg",
    verificationUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=C01E6C73130827CA3E980423A6120A382E0F1C8BCD10099AE85D1A2B07C65E9D",
    relatedSkills: ["OCI", "Cloud Computing", "Networking", "Security"],
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    date: "October 2025",
    description: "Certification course covering Python programming, data analysis, and visualization techniques for data science applications.",
    certificateImage: "/images/certificates/nptel-python-data-science.jpg",
    verificationUrl: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS104S44540397809142614",
    relatedSkills: ["Python", "Spyder", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    title: "AWS Fundamentals",
    issuer: "Coursera",
    date: "August 2025",
    description: "Certification validating understanding of AWS core services, architecture, and best practices for deploying applications on AWS.",
    certificateImage: "/images/certificates/aws-fundamentals-coursera.jpg",
    verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/H64AESY0QH9A",
    relatedSkills: ["AWS", "Cloud Computing", "EC2", "S3", "IAM"],
  },
  {
    title: "Ubuntu Linux Professional Certificate",
    issuer: "LinkedIn Learning",
    date: "August 2025",
    description: "Certification demonstrating proficiency in Ubuntu Linux system administration and command-line skills.",
    certificateImage: "/images/certificates/ubuntu-linux-professional-canonical.jpg",
    verificationUrl: "https://www.linkedin.com/learning/certificates/7855d61d8417f980dc9a6350fe7b02324665e9ecbb764a93fd093ceb3f19a11b?trk=share_certificate",
    relatedSkills: ["Linux", "Ubuntu", "System Administration", "Bash Scripting"],
  }
];
