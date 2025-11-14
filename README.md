# 🚀 GitHub-Inspired Portfolio Template

A modern, high-performance portfolio website built with Astro and inspired by GitHub's sleek design and color scheme. Features a modular architecture with easy customization and setup.

![Portfolio Preview](https://github.com/user-attachments/assets/e0cb6c51-dbba-40fa-8d60-668aa53f0d6a)

## ✨ Features

- **GitHub-Inspired Design**: Dark theme with GitHub's signature color palette
- **Lightning Fast**: Built with Astro for optimal performance and SEO
- **Modern Stack**: React 19, TypeScript, and Tailwind CSS
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Modular Architecture**: Easy to customize and extend
- **Type-Safe**: Full TypeScript support throughout
- **Smooth Animations**: Engaging animations and transitions

## 📦 Key Sections

- **Home**: Eye-catching hero section with social links
- **About**: Professional background and experience showcase
- **Skills**: Interactive skill bars with proficiency levels
- **Projects**: GitHub-style project cards with stats
- **Education**: Academic background and achievements
- **Contact**: Multiple ways to get in touch with a contact form

## 🛠️ Tech Stack

- [Astro 5.15+](https://astro.build) - Static Site Generator
- [React 19](https://react.dev) - UI Components
- [TypeScript 5.9+](https://www.typescriptlang.org) - Type Safety
- [Tailwind CSS 3.4+](https://tailwindcss.com) - Styling with GitHub color palette

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/riteshraj-shetage/astro-builds-portfolio.git
cd astro-builds-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your portfolio.

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### 1. Update Personal Information

Edit `src/data/portfolio.ts` to customize your portfolio content:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  location: "Your Location",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
};
```

### 2. Add Your Projects

Update the `projects` array in `src/data/portfolio.ts`:

```typescript
export const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    technologies: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/yourusername/project",
    demo: "https://demo.example.com",
    stars: 124,
    forks: 32,
  },
  // Add more projects...
];
```

### 3. Update Skills

Customize your skills and proficiency levels:

```typescript
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      // Add more skills...
    ],
  },
  // Add more categories...
];
```

### 4. Modify Colors (Optional)

The GitHub color palette is defined in `tailwind.config.mjs`. You can adjust colors while maintaining the GitHub aesthetic.

## 📁 Project Structure

```
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Projects.astro
│   │   ├── Education.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── data/           # Portfolio content
│   │   └── portfolio.ts
│   ├── layouts/        # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/          # Routes
│   │   └── index.astro
│   └── styles/         # Global styles
│       └── global.css
├── public/             # Static assets
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (includes type checking)
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## 🎯 Performance

- **100% Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Zero JavaScript by Default**: Only interactive components use JavaScript
- **Optimized Images**: Automatic image optimization
- **Fast Page Loads**: Static site generation for instant page loads

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspired by [GitHub](https://github.com)
- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- UI components using [React](https://react.dev)

## 📧 Contact

For questions or feedback, feel free to reach out or open an issue on GitHub.
