# Ankan Saha — Portfolio Website

A modern, responsive personal portfolio website showcasing my academic work, research publications, and professional experience.

**Live Site:** [ankansaha18.github.io](https://ankansaha18.github.io)

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
- Site goes live at `https://ankansaha18.github.io` within 1-2 minutes
- Check deployment status in repository **Settings → Pages**

---

## Updating Content

All portfolio content is centralized in `js/data.js`. To update:

1. Edit the relevant section in `data.js`
2. Commit and push changes:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
3. Changes go live automatically within 1-2 minutes

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

© 2024 Ankan Saha. All rights reserved.

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
