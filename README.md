# Ashish Sharma — Python Backend Developer Portfolio

<div align="center">

  [![Live Demo](https://img.shields.io/badge/Live_Portfolio-myportfolio--one--silk--44.vercel.app-35231B?style=for-the-badge&logo=vercel&logoColor=white)](https://myportfolio-one-silk-44.vercel.app/)
  [![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ashishsharma1927-pixel)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ashish-sharma-742268416)

  <br />

  ### 🌐 **Live Website URL**: **[https://myportfolio-one-silk-44.vercel.app](https://myportfolio-one-silk-44.vercel.app/)**

  <p align="center">
    A minimal, modern, and recruiter-friendly developer portfolio showcasing real backend engineering projects, REST APIs, and database architecture.
  </p>

  ![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=flat-square&logo=vite&logoColor=white)
  ![Python](https://img.shields.io/badge/Python_3-3776AB?style=flat-square&logo=python&logoColor=white)
  ![Django](https://img.shields.io/badge/Django_&_DRF-092E20?style=flat-square&logo=django&logoColor=white)
  ![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## 📌 Overview

Welcome to the personal developer portfolio of **Ashish Sharma**, a **Python Backend Developer** with hands-on experience in building REST APIs, managing relational database schemas, testing endpoints, and debugging backend applications.

- 🌍 **Live URL**: [https://myportfolio-one-silk-44.vercel.app/](https://myportfolio-one-silk-44.vercel.app/)
- 📄 **Resume**: [Download / View Resume PDF](https://myportfolio-one-silk-44.vercel.app/Ashish_Sharma_Resume.pdf)
- 📍 **Location**: Bilaspur, Himachal Pradesh, India
- 🎓 **Education**: B.Sc. in Mathematics — Himachal Pradesh University (HPU), Shimla

---

## 🚀 Key Highlights & Sections

1. **Hero Section**: Clean introductory greeting, title pill, square-framed profile photo, quick action buttons, and direct access to live resume.
2. **About Me**: Focused summary highlighting analytical mathematics background, backend engineering, and API development.
3. **Technical Skills Toolkit**: Clean categorized toolkit:
   - **Backend**: Python, Django, Django REST Framework, REST APIs
   - **Databases**: PostgreSQL, MySQL, MongoDB
   - **Caching & Async**: Redis, Celery
   - **Testing & Quality**: Postman, Debugging, API Status Testing
   - **Deployment & Tools**: Render, Vercel, Docker, Git, GitHub
4. **Featured Projects**:
   - **OmniPilot Studio OS**: All-in-One AI Content Generation & SaaS Growth Operating System featuring real-time WebSockets telemetry, Stripe subscriptions, and sub-second non-blocking email dispatching.
     - 🔗 [Live Studio OS Demo](https://omnipilot-nmko.onrender.com/)
     - 💻 [GitHub Repository](https://github.com/ashishsharma1927-pixel/OmniPilot)
     - 🔑 Instant Demo Account: `test@yopmail.com` | `Test@123`
   - **HRMS — Human Resource Management System**: Employee and department management platform powered by Django REST Framework APIs.
     - 🔗 [Live Frontend Application](https://hrms-frontend-cr1h.vercel.app/login)
     - 🔗 [Backend API Service](https://hrms-backend-yj0q.onrender.com)
5. **Professional Experience**: Backend Developer Intern at **IT Infonity** (May 2026 – October 2026).
6. **Education**: B.Sc. Mathematics, Diploma in Computer Applications (DCA), Class XII & X.
7. **Contact**: Direct working mailto integration, one-click clipboard copy for email, and social profiles.

---

## 🎨 Design System

- **Aesthetic**: Warm Almond Cream & Deep Espresso minimal palette.
- **Main Background**: `#F4EFEA` (Warm soft linen cream)
- **Primary Text**: `#35231B` (Deep roasted espresso)
- **Secondary Text**: `#6E5D53` (Warm mocha)
- **Accents & Pills**: `#EBE1D7` (Warm sand)
- **Cards**: `#FFFFFF` with subtle `#E7DDD3` borders
- **Typography**: Google Fonts **Plus Jakarta Sans**, **Caveat**, and **JetBrains Mono**.
- **Responsive**: Fully optimized for mobile phones, tablets, laptops, and ultra-wide desktop monitors.

---

## 📁 Project Structure

```
My_Portfolio/
├── public/
│   ├── Ashish_Sharma_Resume.pdf    # Direct downloadable resume PDF
│   ├── profile.jpg                 # Profile picture
│   ├── favicon.svg                 # SVG brand favicon
│   └── icons.svg
├── src/
│   ├── types/
│   │   └── index.ts                # TypeScript data interfaces
│   ├── data/
│   │   └── portfolioData.ts        # Single source of truth for all portfolio data
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky header with mobile menu
│   │   ├── Hero.tsx                # Hero section with square portrait frame
│   │   ├── About.tsx               # About me & background cards
│   │   ├── Skills.tsx              # Grouped technical skill categories
│   │   ├── Projects.tsx            # Featured projects with interactive CSS dashboard preview
│   │   ├── Experience.tsx          # Experience timeline card
│   │   ├── Education.tsx           # Academic qualifications
│   │   ├── Contact.tsx             # Contact section & clipboard copy
│   │   ├── Footer.tsx              # Minimal dynamic footer
│   │   └── Icons.tsx               # Custom SVG brand icons (GitHub, LinkedIn)
│   ├── App.tsx                     # Main layout assembly
│   ├── index.css                   # Global CSS variables & styling tokens
│   └── main.tsx                    # React DOM root entry
├── index.html                      # SEO metadata & Google Fonts
├── vercel.json                     # Vercel SPA routing configuration
├── vite.config.ts                  # Vite build configuration
└── package.json
```

---

## 💡 How to Add New Projects in the Future

The portfolio is architected so you can add more projects anytime without redesigning any UI:

1. Open [`src/data/portfolioData.ts`](src/data/portfolioData.ts).
2. Add a new object to the `projectsData` array:

```typescript
{
  id: 'your-project-id',
  title: 'Project Name',
  tagline: 'Short one-line tagline',
  description: 'Concise explanation of the application.',
  technologies: ['Python', 'Django', 'PostgreSQL', 'Redis'],
  details: [
    'Key API endpoints developed',
    'Database schema and query optimizations',
    'Authentication and serializer validation'
  ],
  liveUrl: 'https://your-live-app.vercel.app',
  backendUrl: 'https://your-api.onrender.com',
  githubUrl: 'https://github.com/ashishsharma1927-pixel/your-repo', // optional
  badge: 'New Project'
}
```

The new project card will automatically render in the **Projects** section with matching styles and buttons!

---

## 💻 Local Development

Clone the repository and run locally:

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Run lint checks
npm run lint
```

---

## 📬 Contact & Connect

- **Email**: [ashishsharma1927@gmail.com](mailto:ashishsharma1927@gmail.com)
- **LinkedIn**: [linkedin.com/in/ashish-sharma-742268416](https://linkedin.com/in/ashish-sharma-742268416)
- **GitHub**: [github.com/ashishsharma1927-pixel](https://github.com/ashishsharma1927-pixel)
- **Live Portfolio**: [myportfolio-one-silk-44.vercel.app](https://myportfolio-one-silk-44.vercel.app/)
