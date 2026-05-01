# Ankan Saha — Portfolio Website

A modern, responsive personal portfolio website showcasing my academic work, research publications, and professional experience.

**Live Site:** [https://ankansaha18.github.io/AnkanSaha-PortfolioWebsite/](https://ankansaha18.github.io/AnkanSaha-PortfolioWebsite/)

---

## Overview

This portfolio website is built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools. It features a modern academic aesthetic with dark/light theme support, smooth animations, and full responsiveness across all devices.

---

## Features

- **Responsive Design** — Optimized for mobile, tablet, and desktop
- **Dark/Light Theme** — Auto-detects system preference with manual toggle
- **Smooth Animations** — Scroll-triggered reveals and transitions
- **Data-Driven Content** — All content managed through a single JavaScript file
- **Accessibility** — Semantic HTML with ARIA labels and keyboard navigation
- **Performance** — Zero dependencies, fast loading, minimal footprint

---

## Tech Stack

- HTML5
- CSS3 (with CSS Custom Properties)
- Vanilla JavaScript (ES6+)
- Google Fonts (Fraunces, Outfit, JetBrains Mono)

---

## Project Structure

```
Portfolio/
├── index.html              ← Main HTML structure
├── README.md               ← This file
│
├── css/
│   ├── style.css           ← Core styles and design tokens
│   ├── animations.css      ← Animation definitions
│   └── responsive.css      ← Media queries
│
├── js/
│   ├── data.js             ← Portfolio content and data
│   ├── main.js             ← DOM rendering and logic
│   └── animations.js       ← Scroll observers and animations
│
└── assets/
    ├── profile.jpg         ← Profile photo
    └── CV.pdf              ← Downloadable CV
```

---

## Content Sections

1. **Hero** — Introduction with profile photo and key statistics
2. **About** — Background and overview
3. **Education** — Academic credentials
4. **Experience** — Professional positions
5. **Publications** — Peer-reviewed research papers
6. **Thesis Work** — Graduate research projects
7. **Projects** — Technical projects with filtering
8. **Certifications** — Professional certifications
9. **Achievements** — Awards and recognitions
10. **Skills** — Technical skills with proficiency levels
11. **Competitive Programming** — Coding platform profiles
12. **References** — Professional references
13. **Contact** — Contact information and social links

---

## Deployment

This site is hosted on GitHub Pages. Here's how it's deployed:

### Step 1: Create GitHub Repository

1. Create a new repository on GitHub named `AnkanSaha18.github.io`
2. Set it to **Public**
3. Do not initialize with README or any other files

### Step 2: Initialize Local Repository

```bash
cd "/Users/ankansaha/Academic Courses/Personal Information/Protfolio/Portfolio"
git init
```

### Step 3: Add Files and Commit

```bash
git add .
git commit -m "Initial commit: Portfolio website"
```

### Step 4: Connect to GitHub

```bash
git branch -M main
git remote add origin https://github.com/AnkanSaha18/AnkanSaha18.github.io.git
```

### Step 5: Push to GitHub

```bash
git push -u origin main
```

### Step 6: Verify Deployment

- GitHub Pages automatically deploys from the `main` branch
- Site goes live at `https://ankansaha18.github.io/AnkanSaha-PortfolioWebsite` within 1-2 minutes
- Check deployment status in repository **Settings → Pages**

---

## Updating the Profile

All portfolio content is centralized in **`js/data.js`**. This is the only file you need to edit for content changes. The structure mirrors each visible section of the site.

### Quick Workflow

```bash
# 1. Edit the relevant section in js/data.js
# 2. Commit and push
git add js/data.js
git commit -m "Update [section name]"
git push
# Changes go live on GitHub Pages within 1–2 minutes
```

For profile photo or CV updates, replace the file in `assets/` and commit that file instead.

---

### Section-by-Section Guide

#### Personal Info & Bio (`personal`)

```js
personal: {
  name: "Your Full Name",
  title: "Your Title Line",          // shown under name in hero
  location: "City, Country",
  email: "you@example.com",
  phone: "+1234567890",
  institution: "Your Institution",
  welcome: "Hi, I'm",                // greeting prefix in hero
  intro: "Short one-liner bio",      // hero subtitle
  photo: "assets/profile.jpg",       // path to profile photo
  about: [                           // paragraphs in About section
    "First paragraph...",
    "Second paragraph..."
  ]
}
```

**To update bio**: edit the strings in `personal.about`.  
**To update profile photo**: replace `assets/profile.jpg` with your new photo (keep the same filename, or update the `photo` path).

---

#### Social Links (`socials`)

```js
socials: {
  linkedin: "https://linkedin.com/in/your-handle",
  github: "https://github.com/YourHandle",
  scholar: "https://scholar.google.com/citations?user=XXXXXXX",
  codeforces: "https://codeforces.com/profile/handle",
  leetcode: "https://leetcode.com/handle",
  codechef: "https://codechef.com/users/handle"
}
```

Update any URL to point to your current profiles.

---

#### Hero Stats (`stats`)

```js
stats: [
  { value: "5+", label: "Publications" },
  { value: "12+", label: "Projects" },
  ...
]
```

Each object renders one stat badge in the hero banner. Update `value` and `label` to reflect current numbers.

---

#### Education (`education`)

```js
{
  degree: "M.Sc. in Computer Science",
  institution: "University Name",
  period: "2024 – Present",
  gpa: "3.57 / 4.00",
  note: "Optional note or thesis title",
  url: "https://university.edu"
}
```

Add a new object to the array for a new degree. Most recent first.

---

#### Experience (`experience`)

```js
{
  role: "Job Title",
  organization: "Organization Name",
  period: "Jan 2024 – Present",
  description: "What you did / responsibilities.",
  url: "https://organization.com"
}
```

Add entries at the top of the array to show most recent positions first.

---

#### Publications (`publications`)

```js
{
  title: "Full Paper Title",
  venue: "Conference or Journal Name, Year",
  year: 2025,
  authors: "Saha, A., Co-Author, B.",
  url: "https://scholar.google.com/..."   // link to paper
}
```

Add new papers at the top of the array. The `url` field should point to the Google Scholar entry, DOI, or publisher page.

---

#### Thesis Work (`thesis`)

```js
{
  level: "M.Sc.",                         // or "B.Sc."
  title: "Thesis Title",
  summary: "One or two sentence summary.",
  supervisor: "Prof. Name",
  institution: "University Name"
}
```

---

#### Projects (`projects`)

```js
{
  title: "Project Name",
  category: "AI/ML",                      // used for filter buttons
  description: "What the project does.",
  tech: ["Python", "PyTorch", "FastAPI"],
  url: "https://github.com/AnkanSaha18/repo"
}
```

Categories currently in use: `AI/ML`, `Web`, `Systems`, `Mobile`, `Game`, `Embedded`. Adding a new category string automatically creates a new filter button.

---

#### Certifications (`certifications`)

```js
{
  title: "Certification Name",
  issuer: "Issuing Organization",
  skills: ["Skill A", "Skill B"],
  url: "https://verify.example.com/cert-id"
}
```

---

#### Achievements (`achievements`)

```js
{
  award: "Award or Recognition Title",
  year: 2025,
  description: "Brief description of the award."
}
```

---

#### Skills (`skills`)

Skills are grouped by category. Each skill has a name and a proficiency level (0–100):

```js
skills: {
  "Programming Languages": [
    { name: "Python", level: 90 },
    { name: "Java", level: 75 }
  ],
  "Frameworks & Libraries": [
    { name: "PyTorch", level: 85 }
  ]
}
```

Add a new key to create a new skill group. The `level` value renders as a percentage bar width.

---

#### Competitive Programming (`competitive`)

```js
{
  platform: "Codeforces",
  handle: "Ankan_Saha",
  rating: "Specialist (1423)",
  solved: "200+",
  url: "https://codeforces.com/profile/Ankan_Saha"
}
```

Update `rating` and `solved` periodically to reflect current stats.

---

#### References (`references`)

```js
{
  name: "Prof. Full Name",
  title: "Professor of ...",
  institution: "University Name",
  email: "prof@university.edu",
  relation: "M.Sc. Supervisor"
}
```

---

#### CV / Resume

Replace `assets/CV.pdf` with your updated CV. Keep the filename as `CV.pdf` so no code changes are needed.

```bash
git add assets/CV.pdf
git commit -m "Update CV"
git push
```

---

### Common Update Scenarios

| What changed | File(s) to edit |
|---|---|
| New publication | `js/data.js` → `publications` array |
| New job or role | `js/data.js` → `experience` array |
| New project | `js/data.js` → `projects` array |
| Updated skills | `js/data.js` → `skills` object |
| New degree | `js/data.js` → `education` array |
| Profile photo | Replace `assets/profile.jpg` |
| Updated CV | Replace `assets/CV.pdf` |
| Bio / about text | `js/data.js` → `personal.about` |
| Social links | `js/data.js` → `socials` object |
| Hero stats | `js/data.js` → `stats` array |

---

## Design System

The site uses CSS custom properties for consistent theming:

| Property | Value | Usage |
|----------|-------|-------|
| `--color-bg` | `#0a0e1a` | Background (dark mode) |
| `--color-accent` | `#d4a056` | Accent color (gold) |
| `--color-text` | `#e8e6e1` | Primary text |
| `--font-display` | `Fraunces` | Headings |
| `--font-body` | `Outfit` | Body text |
| `--font-mono` | `JetBrains Mono` | Code/numbers |

Light mode variants are defined in `[data-theme="light"]` selectors.

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## License

© 2026 Ankan Saha. All rights reserved.

The content (text, images, CV) is proprietary. The code structure and design may be referenced for educational purposes.

---

## Contact

**Ankan Saha**
Lecturer, Bangladesh University of Business and Technology
M.Sc. Researcher, Bangladesh University of Engineering & Technology

- Email: [ankansaha314159@gmail.com](mailto:ankansaha314159@gmail.com)
- LinkedIn: [linkedin.com/in/ankan-saha18](https://www.linkedin.com/in/ankan-saha18/)
- GitHub: [github.com/AnkanSaha18](https://github.com/AnkanSaha18)
- Google Scholar: [scholar.google.com/citations?user=vQKU92kAAAAJ](https://scholar.google.com/citations?user=vQKU92kAAAAJ&hl=en)

---

**Last Updated:** May 2026
