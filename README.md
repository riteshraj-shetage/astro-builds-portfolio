# 🚀 Astro Portfolio Template

A modern, high-performance portfolio website built with Astro and inspired by GitHub's clean design. Perfect for developers, designers, and anyone looking to showcase their work professionally.

## ✨ Features

- **GitHub-Inspired Design**: Clean dark theme with professional aesthetics
- **Lightning Fast**: Built with Astro for optimal performance (near-perfect Lighthouse scores)
- **Modern Tech Stack**: Astro, React, TypeScript, and Tailwind CSS
- **Fully Responsive**: Mobile-first design that adapts to all screen sizes
- **Easy Customization**: Single data file for all content updates
- **SEO Optimized**: Built-in best practices for search engines

## 📦 What's Inside

- **Hero Section**: Eye-catching introduction with social links
- **About**: Professional bio with resume download
- **Skills**: Organized by Frontend, Backend, and Tools with icons
- **Projects**: Showcase your work with live demos and source code links
- **Credentials**: Display certifications with verification links
- **Education**: Academic background
- **Contact**: Easy ways to get in touch

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/riteshraj-shetage/astro-builds-portfolio.git
cd astro-builds-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

## 🎨 Customization Guide

### Step 1: Update Your Personal Information

Edit `src/data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Job Title",
  bio: "A brief description about yourself",
  location: "Your City, Country",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};
```

### Step 2: Add Your Skills

Update the `skills` array in the same file:

```typescript
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      // Add more skills...
    ],
  },
  // Add Backend and Tools categories...
];
```

**Note**: Icons use [Devicon](https://devicon.dev/) for technology logos.

### Step 3: Add Your Projects

```typescript
export const projects = [
  {
    title: "Project Name",
    description: "Brief project description",
    technologies: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/yourusername/project",
    demo: "https://your-demo-url.com",
    image: "/images/project-screenshot.jpg",
    status: "Active", // or "In Development"
  },
];
```

### Step 4: Add Education & Credentials

Follow the same pattern in `portfolio.ts` for education and credentials sections.

### Step 5: Add Your Resume

Place your resume PDF at `public/resume.pdf`. The "View Resume" button in the About section will automatically link to it.

## 📁 Project Structure

```
astro-builds-portfolio/
├── src/
│   ├── components/       # All UI components
│   ├── data/
│   │   └── portfolio.ts  # Your content (edit this!)
│   ├── layouts/          # Page layouts
│   ├── pages/            # Routes
│   └── styles/           # Global styles
├── public/               # Static assets (images, resume, etc.)
│   ├── images/          # Project images
│   └── resume.pdf       # Your resume
└── package.json
```

## 🛠️ Development Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and import your repository
3. Vercel will automatically detect Astro and deploy

### Deploy to Netlify

1. Build your site: `npm run build`
2. Upload the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

Add to `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/repository-name',
});
```

Then configure GitHub Pages in your repository settings.

## 🎯 Built With

- [Astro](https://astro.build) - Static Site Generator
- [React](https://react.dev) - UI Components
- [TypeScript](https://www.typescriptlang.org) - Type Safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- Inspired by [GitHub](https://github.com) design

## 📄 License

MIT License - feel free to use this template for your portfolio!

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 💬 Support

If you have questions or need help, please open an issue on GitHub.

---

Made with ❤️ using Astro
