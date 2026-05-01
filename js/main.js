/* ===================================================================
   MAIN.JS — theme toggle, navigation, content rendering
   Reads `portfolioData` (defined in data.js) and populates the DOM.
=================================================================== */

(function () {
  'use strict';

  /* -------------------------------------------------------------------
     1. SAFE DOM HELPERS
  ------------------------------------------------------------------- */

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /** Escape user-supplied content before injecting as HTML. */
  function esc(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }


  /* -------------------------------------------------------------------
     2. PAGE LOADER
  ------------------------------------------------------------------- */

  window.addEventListener('load', () => {
    const loader = $('#loader');
    if (!loader) return;
    setTimeout(() => loader.classList.add('hidden'), 600);
  });


  /* -------------------------------------------------------------------
     3. THEME TOGGLE  (with localStorage persistence)
  ------------------------------------------------------------------- */

  const themeToggle = $('#themeToggle');
  const html = document.documentElement;

  // Initialise from stored preference, else respect system theme.
  const stored = localStorage.getItem('portfolio-theme');
  if (stored === 'light' || stored === 'dark') {
    html.setAttribute('data-theme', stored);
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    html.setAttribute('data-theme', 'light');
  }

  themeToggle?.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.classList.add('theme-flipping');
    html.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
    setTimeout(() => document.body.classList.remove('theme-flipping'), 700);
  });


  /* -------------------------------------------------------------------
     4. MOBILE NAV TOGGLE
  ------------------------------------------------------------------- */

  const burger  = $('#navBurger');
  const navMenu = $('#navMenu');
  burger?.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });
  // Close the mobile menu when a link is tapped.
  $$('#navMenu a').forEach(a => a.addEventListener('click', () => {
    navMenu.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }));


  /* -------------------------------------------------------------------
     5. NAV BACKGROUND ON SCROLL  +  ACTIVE-LINK HIGHLIGHTING
  ------------------------------------------------------------------- */

  const nav = $('#nav');
  const navLinks = $$('#navMenu a');
  const sections = navLinks
    .map(a => $(a.getAttribute('href')))
    .filter(Boolean);

  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 30);

    // Determine active section (the topmost section whose top is within 200px of viewport top)
    let activeId = null;
    for (const s of sections) {
      if (s.getBoundingClientRect().top - 120 < 0) activeId = s.id;
    }
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + activeId);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();


  /* -------------------------------------------------------------------
     6. CUSTOM CURSOR  (desktop-only)
  ------------------------------------------------------------------- */

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const dot  = $('#cursorDot');
    const ring = $('#cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;

    window.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform  = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    });

    function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    }
    loop();

    // Hover-state on links/buttons
    const hoverables = 'a, button, .filter-chip, .project, .pub, .cert, .achievement, .cp-card, .ref-card, .thesis-card';
    document.body.addEventListener('mouseover', e => {
      if (e.target.closest(hoverables)) ring.classList.add('hover');
    });
    document.body.addEventListener('mouseout', e => {
      if (e.target.closest(hoverables)) ring.classList.remove('hover');
    });
  }


  /* ===================================================================
     7. CONTENT RENDERING
     ===================================================================
     Each render function takes data from `portfolioData` and populates
     the corresponding section. Keeps the HTML purely structural.
  =================================================================== */

  if (typeof portfolioData === 'undefined') {
    console.error('portfolioData missing — make sure /js/data.js loads first.');
    return;
  }

  const D = portfolioData;

  /* ---- 7.1  Hero, footer, basic personal info ---- */
  function renderPersonal() {
    const p = D.personal;
    $('#heroName')   && ($('#heroName').textContent   = p.name);
    $('#heroTitle')  && ($('#heroTitle').textContent  = p.title);
    $('#heroWelcome')&& ($('#heroWelcome').textContent= p.welcome);
    $('#heroIntro')  && ($('#heroIntro').textContent  = p.intro);
    $('#heroPhoto')  && ($('#heroPhoto').src          = p.photo);
    $('#cvBtn')      && ($('#cvBtn').href             = p.cv);
    $('#footerName') && ($('#footerName').textContent = p.name);
    $('#footerYear') && ($('#footerYear').textContent = new Date().getFullYear());
    $('#contactEmailBtn') && ($('#contactEmailBtn').href = 'mailto:' + p.email);
    document.title = `${p.name} — Portfolio`;
  }

  /* ---- 7.2  SVG icons (small library) ---- */
  const ICONS = {
    email:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z"/></svg>',
    github:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.74.08-.73.08-.73 1.21.09 1.85 1.25 1.85 1.25 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18a4.65 4.65 0 0 1 1.24 3.22c0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.83.58A12 12 0 0 0 12 .3"/></svg>',
    scholar:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 14.4 0 5.5l12-8.9 12 8.9-12 8.9zM2.4 7.86l9.6 7.07v6.41a4.8 4.8 0 1 1-3.36-7.13L4.2 11.07v-3.2zm19.2 0v3.2l-7.92 5.81L8 21.34a4.8 4.8 0 0 1 3.92-8.41L21.6 7.86z"/></svg>',
    code:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    leetcode: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.484 5.484 0 0 0 1.157 1.624l4.354 4.354c.205.205.45.405.7.572.36.247.733.434 1.121.572.388.137.789.218 1.193.244.404.026.81 0 1.2-.078.39-.078.762-.213 1.108-.4a5.273 5.273 0 0 0 .961-.643c.275-.224.523-.49.738-.788.215-.299.396-.625.532-.967.137-.343.235-.7.286-1.067a5.317 5.317 0 0 0 0-1.114 5.27 5.27 0 0 0-.286-1.067 5.273 5.273 0 0 0-.532-.967 5.273 5.273 0 0 0-.738-.788l-1.51-1.51 4.197-4.196c.59-.59.59-1.547 0-2.137l-1.51-1.51L17.4 3.262a1.374 1.374 0 0 0-.961-.438c-.349 0-.7.146-.961.438l-2.025 2.025-.97-.97L13.483 0zM10.5 9.65l3.65 3.65-3.65 3.65a2.275 2.275 0 0 1-3.214 0L4.5 14.464a2.275 2.275 0 0 1 0-3.214l2.786-2.786a2.275 2.275 0 0 1 3.214 0l-.001-.814z"/></svg>',
    map:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    phone:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    arrow:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>',
    book:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    award:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>',
    cert:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
    check:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
  };

  /* ---- 7.3  Socials (hero + footer) ---- */
  function renderSocials() {
    const s = D.socials;
    const items = [
      { href: s.email,    label: 'Email',          icon: ICONS.email },
      { href: s.linkedin, label: 'LinkedIn',       icon: ICONS.linkedin },
      { href: s.github,   label: 'GitHub',         icon: ICONS.github },
      { href: s.scholar,  label: 'Google Scholar', icon: ICONS.scholar }
    ];
    const html = items.map(i =>
      `<a class="hero-social-btn" href="${esc(i.href)}" target="_blank" rel="noopener" aria-label="${esc(i.label)}" title="${esc(i.label)}">${i.icon}</a>`
    ).join('');
    $('#heroSocials')   && ($('#heroSocials').innerHTML   = html);
    $('#footerSocials') && ($('#footerSocials').innerHTML = html);
    $('#scholarLink')   && ($('#scholarLink').href = s.scholar);
  }

  /* ---- 7.4  Hero stats ---- */
  function renderStats() {
    const root = $('#heroStats');
    if (!root) return;
    root.innerHTML = D.stats.map(s => `
      <div class="hero-stat">
        <div class="hero-stat-value" data-target="${esc(s.value)}">${esc(s.value)}</div>
        <div class="hero-stat-label">${esc(s.label)}</div>
      </div>
    `).join('');
  }

  /* ---- 7.5  About section ---- */
  function renderAbout() {
    const text = $('#aboutText');
    if (text) text.innerHTML = D.personal.about.map(p => `<p>${esc(p)}</p>`).join('');

    const facts = $('#aboutFacts');
    if (facts) {
      const f = D.personal;
      const items = [
        { label: 'Based in',    value: esc(f.location) },
        { label: 'Email',       value: `<a href="mailto:${esc(f.email)}">${esc(f.email)}</a>` },
        { label: 'Phone',       value: esc(f.phone) },
        { label: 'Currently',   value: esc(f.institution) + ' · M.Sc. at BUET' },
        { label: 'Languages',   value: 'Bangla, English' }
      ];
      facts.innerHTML = items.map(i => `
        <li><strong>${i.label}</strong><span>${i.value}</span></li>
      `).join('');
    }
  }

  /* ---- 7.6  Education timeline ---- */
  function renderEducation() {
    const root = $('#educationTimeline');
    if (!root) return;
    root.classList.add('stagger');
    root.innerHTML = D.education.map(e => `
      <article class="tl-item">
        <span class="tl-period">${esc(e.period)}</span>
        <h3 class="tl-title">${esc(e.degree)}</h3>
        <p class="tl-org">
          ${e.url
            ? `<a href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.institution)}</a>`
            : esc(e.institution)
          }
        </p>
        <span class="tl-grade">${esc(e.grade)}</span>
        ${e.note ? `<p class="tl-note">${esc(e.note)}</p>` : ''}
      </article>
    `).join('');
  }

  /* ---- 7.7  Experience timeline ---- */
  function renderExperience() {
    const root = $('#experienceTimeline');
    if (!root) return;
    root.classList.add('stagger');
    root.innerHTML = D.experience.map(x => `
      <article class="tl-item">
        <span class="tl-period">${esc(x.period)}</span>
        <h3 class="tl-title">${esc(x.role)}</h3>
        <p class="tl-org">
          ${x.url
            ? `<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.organization)}</a>`
            : esc(x.organization)
          }
        </p>
        ${x.points && x.points.length ? `
          <ul class="tl-points">
            ${x.points.map(p => `<li>${esc(p)}</li>`).join('')}
          </ul>
        ` : ''}
      </article>
    `).join('');
  }

  /* ---- 7.8  Publications ---- */
  function renderPublications() {
    const root = $('#publicationsList');
    if (!root) return;
    root.classList.add('stagger');
    root.innerHTML = D.publications.map(pub => {
      const authors = pub.authors.map(a =>
        a === D.personal.name
          ? `<strong>${esc(a)}</strong>`
          : esc(a)
      ).join(', ');
      return `
        <article class="pub">
          <div class="pub-year">${esc(pub.year)}</div>
          <div class="pub-body">
            <div class="pub-venue">
              <span class="pub-type-tag">${esc(pub.type)}</span>
              ${esc(pub.venue)}
            </div>
            <h3 class="pub-title">${esc(pub.title)}</h3>
            <p class="pub-authors">${authors}</p>
          </div>
          ${pub.url ? `
            <a class="pub-link" href="${esc(pub.url)}" target="_blank" rel="noopener" aria-label="Open publication">
              ${ICONS.arrow}
            </a>
          ` : ''}
        </article>
      `;
    }).join('');
  }

  /* ---- 7.9  Thesis ---- */
  function renderThesis() {
    const root = $('#thesisList');
    if (!root) return;
    root.classList.add('stagger');
    root.innerHTML = D.thesis.map(t => `
      <article class="thesis-card">
        <span class="thesis-level">${esc(t.level)}</span>
        <h3 class="thesis-title">${esc(t.title)}</h3>
        <p class="thesis-summary">${esc(t.summary)}</p>
        <div class="thesis-meta">
          <span>${[t.supervisor, t.institution].filter(Boolean).map(esc).join(' · ')}</span>
          ${t.url ? `
            <a href="${esc(t.url)}" target="_blank" rel="noopener">
              View on GitHub ${ICONS.external}
            </a>
          ` : ''}
        </div>
      </article>
    `).join('');
  }

  /* ---- 7.10  Projects (with category filter) ---- */
  function renderProjects() {
    const grid    = $('#projectsGrid');
    const filters = $('#projectFilters');
    if (!grid || !filters) return;

    const cats = ['All', ...new Set(D.projects.map(p => p.category))];
    filters.innerHTML = cats.map((c, i) =>
      `<button class="filter-chip ${i === 0 ? 'active' : ''}" data-filter="${esc(c)}">${esc(c)}</button>`
    ).join('');

    function paint(filter = 'All') {
      const list = (filter === 'All')
        ? D.projects
        : D.projects.filter(p => p.category === filter);
      grid.classList.remove('stagger', 'in-view');
      grid.innerHTML = list.map(p => `
        <article class="project">
          <div class="project-head">
            <span class="project-cat">${esc(p.category)}</span>
            ${p.url ? `
              <a class="project-link" href="${esc(p.url)}" target="_blank" rel="noopener" aria-label="Open ${esc(p.title)}">
                ${ICONS.arrow}
              </a>
            ` : ''}
          </div>
          <h3 class="project-title">${esc(p.title)}</h3>
          <p class="project-desc">${esc(p.description)}</p>
          <div class="project-tech">
            ${p.tech.map(t => `<span class="chip">${esc(t)}</span>`).join('')}
          </div>
        </article>
      `).join('');
      // Re-trigger reveal for new cards
      requestAnimationFrame(() => {
        grid.classList.add('stagger');
        grid.classList.add('in-view');
      });
    }

    filters.addEventListener('click', e => {
      const btn = e.target.closest('.filter-chip');
      if (!btn) return;
      $$('.filter-chip', filters).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      paint(btn.dataset.filter);
    });

    paint();
  }

  /* ---- 7.11  Certifications ---- */
  function renderCertifications() {
    const root = $('#certsGrid');
    if (!root) return;
    root.classList.add('stagger');
    root.innerHTML = D.certifications.map(c => `
      <article class="cert">
        <div class="cert-head">
          <span class="cert-icon">${ICONS.cert}</span>
          ${c.url ? `
            <a class="cert-verify" href="${esc(c.url)}" target="_blank" rel="noopener">
              Verify ${ICONS.external}
            </a>
          ` : ''}
        </div>
        <h3 class="cert-title">${esc(c.title)}</h3>
        <p class="cert-issuer">${esc(c.issuer)}</p>
        <div class="cert-skills">
          ${c.skills.map(s => `<span class="chip">${esc(s)}</span>`).join('')}
        </div>
      </article>
    `).join('');
  }

  /* ---- 7.12  Achievements ---- */
  function renderAchievements() {
    const root = $('#achievementsGrid');
    if (!root) return;
    root.classList.add('stagger');
    root.innerHTML = D.achievements.map(a => `
      <article class="achievement">
        <span class="achievement-trophy">${ICONS.award}</span>
        <span class="achievement-year">${esc(a.year)}</span>
        <h3 class="achievement-title">${esc(a.title)}</h3>
        <p class="achievement-issuer">${esc(a.issuer)}</p>
        <p class="achievement-desc">${esc(a.description)}</p>
      </article>
    `).join('');
  }

  /* ---- 7.13  Skills (with animated bars) ---- */
  function renderSkills() {
    const root = $('#skillsGrid');
    if (!root) return;
    root.classList.add('stagger');
    root.innerHTML = Object.entries(D.skills).map(([group, list]) => `
      <article class="skill-group">
        <h3>${esc(group)}</h3>
        ${list.map(s => `
          <div class="skill-row">
            <div class="skill-meta">
              <strong>${esc(s.name)}</strong>
              <span>${esc(s.level)}%</span>
            </div>
            <div class="skill-bar">
              <span class="skill-fill" data-fill="${esc(s.level)}" style="--target:${esc(s.level)}%"></span>
            </div>
          </div>
        `).join('')}
      </article>
    `).join('');
  }

  /* ---- 7.14  Competitive programming ---- */
  function renderCompetitive() {
    const root = $('#cpGrid');
    if (!root) return;
    root.classList.add('stagger');
    root.innerHTML = D.competitive.map(c => `
      <article class="cp-card">
        <span class="cp-icon">${esc(c.icon)}</span>
        <h3 class="cp-platform">${esc(c.platform)}</h3>
        <p class="cp-handle">@${esc(c.handle)}</p>
        <p class="cp-stat">${esc(c.stat)}</p>
        ${c.url ? `
          <a class="cp-link" href="${esc(c.url)}" target="_blank" rel="noopener">
            View profile ${ICONS.arrow}
          </a>
        ` : ''}
      </article>
    `).join('');
  }

  /* ---- 7.15  References ---- */
  function renderReferences() {
    const root = $('#refsGrid');
    if (!root) return;
    root.classList.add('stagger');
    root.innerHTML = D.references.map(r => `
      <article class="ref-card">
        <h3 class="ref-name">${esc(r.name)}</h3>
        <span class="ref-title">${esc(r.title)}</span>
        <p class="ref-dept">${esc(r.department)}</p>
        <p class="ref-inst">${esc(r.institution)}</p>
        <div class="ref-contacts">
          <a class="ref-contact" href="mailto:${esc(r.email)}">${ICONS.email} ${esc(r.email)}</a>
          ${r.phone ? `<span class="ref-contact">${ICONS.phone} ${esc(r.phone)}</span>` : ''}
          ${r.profileUrl ? `<a class="ref-contact" href="${esc(r.profileUrl)}" target="_blank" rel="noopener">${ICONS.external} Profile page</a>` : ''}
        </div>
      </article>
    `).join('');
  }

  /* ---- 7.16  Contact section ---- */
  function renderContact() {
    const root = $('#contactGrid');
    if (!root) return;
    const p = D.personal;
    const items = [
      { icon: ICONS.email, label: 'Email',    value: p.email,    href: 'mailto:' + p.email },
      { icon: ICONS.phone, label: 'Phone',    value: p.phone,    href: 'tel:'    + p.phone.replace(/\s/g, '') },
      { icon: ICONS.map,   label: 'Location', value: p.location, href: '#' },
      { icon: ICONS.github,label: 'GitHub',   value: '@AnkanSaha18', href: D.socials.github }
    ];
    root.innerHTML = items.map(i => `
      <a class="contact-item" ${i.href ? `href="${esc(i.href)}"` : ''} ${i.href && i.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>
        <span class="contact-item-icon">${i.icon}</span>
        <div>
          <div class="contact-item-label">${esc(i.label)}</div>
          <div class="contact-item-value">${esc(i.value)}</div>
        </div>
      </a>
    `).join('');
  }


  /* -------------------------------------------------------------------
     8. RENDER ALL  +  EXPOSE FOR DEBUG
  ------------------------------------------------------------------- */

  function renderAll() {
    renderPersonal();
    renderSocials();
    renderStats();
    renderAbout();
    renderEducation();
    renderExperience();
    renderPublications();
    renderThesis();
    renderProjects();
    renderCertifications();
    renderAchievements();
    renderSkills();
    renderCompetitive();
    renderReferences();
    renderContact();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAll);
  } else {
    renderAll();
  }

  // For interactive debugging in dev tools
  window.__portfolio = { renderAll, data: D };

})();
