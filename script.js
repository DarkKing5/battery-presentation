/* ═══════════════════════════════════════════════════
   POWER CELLS — Light Theme Animations
   ═══════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Reveal on Scroll ───────────────────────────── */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '-30px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  /* ── Progress Bars ──────────────────────────────── */
  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.bar-fill-mini').forEach((bar, i) => {
            setTimeout(() => bar.classList.add('animated'), i * 60);
          });
          barObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.comp-table').forEach((el) => barObserver.observe(el));

  /* ── Table Row Stagger ──────────────────────────── */
  const tableObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('tbody tr').forEach((row, i) => {
            row.style.opacity = '0';
            row.style.transform = 'translateY(8px)';
            row.style.transition = `opacity 400ms var(--ease-out) ${i * 60}ms, transform 400ms var(--ease-out) ${i * 60}ms`;
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

          // Re-observe reveal elements inside
          group.querySelectorAll('.reveal').forEach((el) => {
            el.classList.remove('visible');
            observer.observe(el);
          });
        } else {
          group.style.display = 'none';
        }
      });
    });
  });
})();
