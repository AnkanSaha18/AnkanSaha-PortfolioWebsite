/* ============================================================================
   ANIMATIONS.JS
   ----------------------------------------------------------------------------
   Handles all scroll-triggered animations using IntersectionObserver.
   Works in tandem with css/animations.css — the JS adds the `in-view` class
   and sets inline widths for skill bars; the CSS does the actual visual work.

   What it animates:
     - .reveal           → fade + translate elements as they scroll into view
     - .stagger          → sequential reveal of child elements
     - .section-head     → headline + rule + view-all link cascade
     - .skill-fill       → animated width fill on skill bars
     - .hero-stat-value  → count-up number animation in hero

   Respects `prefers-reduced-motion: reduce` — skips animation, reveals
   everything instantly so content remains accessible.
   ============================================================================ */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Reduced-motion check
  // --------------------------------------------------------------------------
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  // --------------------------------------------------------------------------
  // 2. Reveal hero elements immediately on load
  //    Hero already has staggered transition delays in CSS; we just need to
  //    flip them into the .in-view state once the DOM is interactive.
  // --------------------------------------------------------------------------
  function revealHero() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const heroReveals = hero.querySelectorAll('.reveal');
    heroReveals.forEach((el, i) => {
      // Tiny stagger so they cascade in
      setTimeout(() => el.classList.add('in-view'), prefersReducedMotion ? 0 : 80 * i);
    });

    // Hero stats count-up + skill-bar fill (if any are inside hero)
    const heroStatsWrap = hero.querySelector('.hero-stats');
    if (heroStatsWrap) {
      setTimeout(() => {
        heroStatsWrap.classList.add('in-view');
        animateCountUps(heroStatsWrap);
      }, prefersReducedMotion ? 0 : 600);
    }
  }

  // --------------------------------------------------------------------------
  // 3. Count-up animation for hero statistics
  //    Reads data-target on each .hero-stat-value, parses the numeric portion,
  //    preserves any suffix (e.g. "+", "★", "k"), and tweens from 0 → target.
  // --------------------------------------------------------------------------
  function animateCountUps(scope) {
    const targets = scope.querySelectorAll('.hero-stat-value[data-target]');
    targets.forEach((el) => {
      if (el.dataset.counted === 'true') return; // run once
      el.dataset.counted = 'true';

      const raw = el.getAttribute('data-target') || el.textContent || '';
      const match = raw.match(/(-?\d+(?:\.\d+)?)/);
      if (!match) return;

      const targetNum = parseFloat(match[1]);
      const suffix = raw.slice(match.index + match[0].length);
      const prefix = raw.slice(0, match.index);
      const isFloat = match[1].includes('.');

      if (prefersReducedMotion) {
        el.textContent = raw;
        return;
      }

      const duration = 1500; // ms
      const startTime = performance.now();

      function tick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutCubic for a nice decelerating finish
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = targetNum * eased;
        const display = isFloat ? current.toFixed(2) : Math.round(current).toString();
        el.textContent = `${prefix}${display}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = raw; // final exact value
      }
      requestAnimationFrame(tick);
    });
  }

  // --------------------------------------------------------------------------
  // 4. Skill-bar fill animation
  //    When a skill group enters view, set inline width on each .skill-fill
  //    based on its data-fill attribute. CSS handles the transition.
  // --------------------------------------------------------------------------
  function fillSkillBars(scope) {
    const bars = scope.querySelectorAll('.skill-fill[data-fill]');
    bars.forEach((bar, i) => {
      if (bar.dataset.filled === 'true') return;
      bar.dataset.filled = 'true';
      const value = parseFloat(bar.getAttribute('data-fill'));
      if (isNaN(value)) return;
      // Stagger the fills slightly for visual rhythm
      const delay = prefersReducedMotion ? 0 : i * 60;
      setTimeout(() => {
        bar.style.width = `${value}%`;
      }, delay);
    });
  }

  // --------------------------------------------------------------------------
  // 5. Main IntersectionObserver
  //    Observes anything with .reveal, .stagger, or .section-head and
  //    flips the .in-view class once it crosses the threshold. Also triggers
  //    skill-bar fills and any nested count-ups.
  // --------------------------------------------------------------------------
  function setupObserver() {
    const targets = document.querySelectorAll(
      '.reveal, .stagger, .section-head, .skills-group, .stat-item'
    );

    if (targets.length === 0) return;

    // Reduced motion → just reveal everything immediately, skip the observer
    if (prefersReducedMotion) {
      targets.forEach((el) => {
        el.classList.add('in-view');
        fillSkillBars(el);
      });
      return;
    }

    // Fallback for browsers without IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => {
        el.classList.add('in-view');
        fillSkillBars(el);
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add('in-view');

          // Trigger skill-bar fills if the element contains them
          fillSkillBars(el);

          // Trigger count-ups if the element contains them
          animateCountUps(el);

          // One-shot: stop watching once revealed
          observer.unobserve(el);
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    targets.forEach((el) => observer.observe(el));
  }

  // --------------------------------------------------------------------------
  // 6. Re-observation hook for dynamically rendered content
  //    main.js renders content into the DOM after page load (e.g. project
  //    filter re-renders the grid). Expose a small global so main.js can ask
  //    us to re-scan a specific subtree without re-creating the observer.
  // --------------------------------------------------------------------------
  window.PortfolioAnimations = {
    refresh: function (root) {
      const scope = root || document;
      const targets = scope.querySelectorAll(
        '.reveal:not(.in-view), .stagger:not(.in-view), .section-head:not(.in-view)'
      );
      // For dynamic re-renders, just snap them into view —
      // the user is interacting, they don't need to re-watch the same animation
      targets.forEach((el) => {
        el.classList.add('in-view');
        fillSkillBars(el);
      });
    },
  };

  // --------------------------------------------------------------------------
  // 7. Boot
  // --------------------------------------------------------------------------
  function init() {
    revealHero();
    setupObserver();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM already parsed — but main.js may still be rendering. Wait a tick.
    setTimeout(init, 50);
  }
})();
