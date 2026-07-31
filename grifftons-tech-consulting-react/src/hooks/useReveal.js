import { useEffect } from 'react';

// Scroll-reveal for elements with the .reveal class (ported from the static site's main.js).
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
