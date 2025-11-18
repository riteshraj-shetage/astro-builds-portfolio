# 📋 Complete Setup Guide

This guide will walk you through setting up and customizing your portfolio website.

## 🎯 Prerequisites

Before you begin, make sure you have:
- Node.js 18 or higher installed ([Download here](https://nodejs.org/))
- A code editor (VS Code recommended)
- Git installed (optional, for version control)

## 🚀 Installation

### 1. Get the Code

Clone the repository or download the ZIP file:

```bash
git clone https://github.com/riteshraj-shetage/astro-builds-portfolio.git
cd astro-builds-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

This will install all necessary packages including Astro, React, TypeScript, and Tailwind CSS.

### 3. Start Development Server

```bash
npm run dev
```

Your portfolio will be available at `http://localhost:4321`

## ✏️ Customization

### Personal Information

Open `src/data/portfolio.ts` and update the `personalInfo` object:

```typescript
export const personalInfo = {
  name: "Your Full Name",
  title: "Your Job Title (e.g., Full Stack Developer)",
  bio: "A short bio about yourself and what you do",
  location: "City, Country",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};
```

### Skills Section

Add your skills organized by category:

```typescript
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Next.js", icon: "nextjs" },
      // Add more frontend skills
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Python", icon: "python" },
      // Add more backend skills
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      // Add more tools
    ],
  },
];
```

**Icon Reference**: Icons are from [Devicon](https://devicon.dev/). Find your technology and use its name as the `icon` value.

### Projects

Showcase your work:

```typescript
export const projects = [
  {
    title: "Project Name",
    description: "A brief description of what this project does and the problem it solves.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    github: "https://github.com/yourusername/project-repo",
    demo: "https://your-project-demo.com",
    image: "/images/project-screenshot.png",
    status: "Active", // or "In Development"
  },
];
```

### Adding Project Images

1. Add your project screenshots to `public/images/`
2. Reference them in your project data: `image: "/images/my-project.png"`
3. Recommended size: 800x600px or similar aspect ratio

### Education

Add your educational background:

```typescript
export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    period: "2016 - 2020",
    description: "Relevant coursework and achievements",
    gpa: "3.8/4.0", // Optional
  },
];
```

### Credentials & Certifications

Show your professional certifications:

```typescript
export const credentials = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "June 2023", // Include month and year
    credentialId: "ABC123",
    description: "Brief description of the certification",
    certificateImage: "/images/aws-cert.png",
    verificationUrl: "https://www.credly.com/badges/your-badge",
  },
];
```

### Resume

1. Export your resume as a PDF
2. Save it as `public/resume.pdf`
3. The "View Resume" button in the About section will automatically link to it

## 🎨 Styling & Theme

### Default Theme

The portfolio uses a dark theme by default, inspired by GitHub's design. Users can toggle between dark and light themes using the button in the header.

### Customizing Colors

To modify colors, edit `tailwind.config.mjs`:

```javascript
colors: {
  gh: {
    canvas: {
      default: '#0d1117', // Main background
      // ... other color definitions
    },
  },
}
```

## 🏗️ Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

## 🚢 Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel auto-detects Astro and deploys automatically
5. Your site is live! 🎉

### Netlify

1. Build your site: `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `dist/` folder
4. Your site is deployed!

### GitHub Pages

1. Update `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/repository-name',
  // ... other config
});
```

2. Use GitHub Actions or push the `dist/` folder to `gh-pages` branch

## 🔧 Troubleshooting

### Port Already in Use

If port 4321 is busy:
```bash
npm run dev -- --port 3000
```

### Dependencies Issues

Try reinstalling:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Make sure all data in `portfolio.ts` is properly formatted with no missing quotes or commas.

## 📚 Additional Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Devicon Library](https://devicon.dev)

## ✅ Pre-Deployment Checklist

- [ ] Updated all personal information
- [ ] Added all your projects with images
- [ ] Updated skills section
- [ ] Added education and credentials
- [ ] Uploaded your resume as `public/resume.pdf`
- [ ] Tested on mobile devices
- [ ] Tested light/dark theme toggle
- [ ] All links work correctly
- [ ] Built successfully: `npm run build`

## 🎉 You're All Set!

Your portfolio is now ready to showcase your work to the world. Don't forget to share it with potential employers and on your social media!

---

Need help? [Open an issue](https://github.com/riteshraj-shetage/astro-builds-portfolio/issues) on GitHub.
