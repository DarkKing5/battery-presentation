/* ═══════════════════════════════════════════════════
   POWER CELLS — Animations v2
   ═══════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Reveal on Scroll ───────────────────────────── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '-20px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  /* ── Counter Animation ──────────────────────────── */
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        if (isNaN(target)) return;

        counterObserver.unobserve(el);

        const duration = 1200;
        const start = performance.now();

        function tick(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out curve
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * target);

          el.textContent = current.toLocaleString('en-US') + suffix;

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        }

        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('[data-counter]').forEach((el) => counterObserver.observe(el));

  /* ── Progress Bars ──────────────────────────────── */
  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.bar-fill-mini').forEach((bar, i) => {
            setTimeout(() => bar.classList.add('animated'), i * 80);
          });
          barObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.comp-table').forEach((el) => barObserver.observe(el));

  /* ── Table Row Stagger ──────────────────────────── */
  const tableObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('tbody tr').forEach((row, i) => {
            row.style.opacity = '0';
            row.style.transform = 'translateY(10px)';
            row.style.transition = `opacity 500ms var(--ease-out) ${i * 80}ms, transform 500ms var(--ease-out) ${i * 80}ms`;
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                row.style.opacity = '1';
                row.style.transform = 'translateY(0)';
              });
            });
          });
          tableObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.comp-table').forEach((el) => tableObserver.observe(el));

  /* ── Battery Type Toggle ────────────────────────── */
  document.querySelectorAll('.toggle-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;

      // Update heading
      const heading = document.querySelector('#anatomy .t-heading');
      if (heading) {
        heading.textContent = type === 'naion' ? 'Анатомия Na-ion' : 'Анатомия LiFePO4';
      }

      document.querySelectorAll('.toggle-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.anatomy-content-group').forEach((group) => {
        if (group.dataset.type === type) {
          group.style.display = 'block';
          group.style.opacity = '0';
          requestAnimationFrame(() => {
            group.style.transition = 'opacity 400ms var(--ease-out)';
            group.style.opacity = '1';
          });

          group.querySelectorAll('.reveal').forEach((el) => {
            el.classList.remove('visible');
            revealObserver.observe(el);
          });
        } else {
          group.style.display = 'none';
        }
      });
    });
  });

  /* ── Parallax on Hero Image ─────────────────────── */
  const heroImg = document.querySelector('.hero-image');
  if (heroImg) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const rate = scrolled * 0.15;
          heroImg.style.transform = `translateY(${rate}px)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
})();
