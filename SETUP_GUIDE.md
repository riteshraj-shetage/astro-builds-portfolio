# 🚀 Quick Setup Guide

Follow these steps to get your portfolio up and running in minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Customize Your Portfolio

Edit `src/data/portfolio.ts` to add your personal information:

```typescript
export const personalInfo = {
  name: "Your Name",              // Replace with your name
  title: "Your Title",            // Your professional title
  bio: "Your bio...",             // Brief description about you
  location: "Your Location",      // Where you're based
  email: "your.email@example.com", // Your email address
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
};
```

### Add Your Skills

Update the `skills` array with your actual skills:

```typescript
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },    // Skill name and proficiency (0-100)
      { name: "TypeScript", level: 85 },
      // Add more skills...
    ],
  },
  // Add more categories...
];
```

### Add Your Projects

Update the `projects` array with your actual projects:

```typescript
export const projects = [
  {
    title: "Project Name",
    description: "What does your project do?",
    technologies: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/yourusername/project",
    demo: "https://demo.example.com",  // Optional
    stars: 124,   // GitHub stars
    forks: 32,    // GitHub forks
  },
  // Add more projects...
];
```

### Add Your Education

Update the `education` array:

```typescript
export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Your University",
    period: "2016 - 2020",
    description: "Brief description of your studies...",
    gpa: "3.8/4.0",  // Optional
  },
  // Add more education entries...
];
```

### Add Your Experience

Update the `experience` array in the same file.

## Step 3: Start Development Server

```bash
npm run dev
```

Visit http://localhost:4321 to see your portfolio!

## Step 4: Build for Production

When you're ready to deploy:

```bash
npm run build
```

The static files will be generated in the `dist/` folder.

## Step 5: Deploy

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Astro and deploy!

### Option 2: Netlify

1. Run `npm run build`
2. Drag and drop the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

### Option 3: GitHub Pages

Add to `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/repository-name',
  // ... rest of config
});
```

Then use the GitHub Pages deployment action.

## Customization Tips

### Change Colors

Edit `tailwind.config.mjs` to modify the GitHub-inspired color palette:

```javascript
colors: {
  gh: {
    canvas: {
      default: '#0d1117',  // Background color
      // ... modify other colors
    },
  },
},
```

### Add More Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/pages/index.astro`
3. Update the navigation in `src/components/Header.astro`

### Modify Animations

Edit `tailwind.config.mjs` to add or modify animations in the `keyframes` section.

## Need Help?

- Check the [Astro Documentation](https://docs.astro.build)
- Open an issue on GitHub
- Review the component code for examples

## Next Steps

- [ ] Replace placeholder content with your information
- [ ] Add your actual projects and skills
- [ ] Customize colors if desired
- [ ] Test on mobile devices
- [ ] Deploy to your preferred platform
- [ ] Share your portfolio! 🎉
