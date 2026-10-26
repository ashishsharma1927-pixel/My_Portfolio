# Ashish Sharma — Python Backend Developer Portfolio

A clean, modern, and recruiter-focused portfolio built with **React**, **TypeScript (TSX)**, and **Vite**.

## 🚀 Live Local Development

```bash
npm install
npm run dev
```

The application will be served locally at `http://localhost:5173` (or `http://localhost:5174`).

## 🛠️ Production Build & Verification

```bash
# Run strict TypeScript & Vite production build
npm run build

# Run Oxlint checks
npm run lint
```

## 📁 Project Architecture

```
d:/Something_new/
├── public/
│   ├── Ashish_Sharma_Resume.pdf    # Direct downloadable resume PDF
├── src/
│   ├── types/
│   │   └── index.ts                # TypeScript data model contracts
│   ├── data/
│   │   └── portfolioData.ts        # Centralized portfolio data (easily add projects here!)
│   ├── components/
│   │   ├── Navbar.tsx              # Responsive navigation & mobile menu
│   │   ├── Hero.tsx                # Two-column hero with backend CSS architecture card
│   │   ├── About.tsx               # Background & key information pills
│   │   ├── Skills.tsx              # Grouped backend, database, caching & tools cards
│   │   ├── Projects.tsx            # Featured HRMS showcase with interactive CSS preview
│   │   ├── Experience.tsx          # Professional experience timeline card
│   │   ├── Education.tsx           # Compact academic credentials
│   │   ├── Contact.tsx             # Mailto, clipboard copy, and social links
│   │   ├── Footer.tsx              # Minimal footer with dynamic current year
│   │   └── Icons.tsx               # Crisp SVG social icons (GitHub, LinkedIn)
│   ├── App.tsx                     # Main page assembly
│   ├── index.css                   # Minimalist CSS design system & color variables
│   └── main.tsx                    # React root mounting
├── index.html                      # SEO metadata & Google Fonts
└── package.json
```

## 💡 How to Add More Projects

All project information is decoupled from the UI. To add a new project:

1. Open [`src/data/portfolioData.ts`](file:///d:/Something_new/src/data/portfolioData.ts).
2. Append a new project object to `projectsData`:

```ts
{
  id: 'new-project',
  title: 'Project Title',
  tagline: 'Short Tagline',
  description: 'Concise explanation of the project.',
  technologies: ['Python', 'Django', 'PostgreSQL', 'Redis'],
  details: [
    'Bullet point contribution 1',
    'Bullet point contribution 2',
  ],
  liveUrl: 'https://...',
  backendUrl: 'https://...',
  githubUrl: 'https://github.com/...',
}
```

The portfolio UI will automatically render the new project card with consistent spacing, badges, and action buttons.
