(function () {
  const root = document.documentElement;
  root.classList.add('js');
  const buttons = document.querySelectorAll('[data-set-lang]');
  const available = ['en', 'ja'];

  function setLanguage(lang, save) {
    if (!available.includes(lang)) lang = 'en';
    root.dataset.currentLang = lang;
    root.lang = lang;
    buttons.forEach((button) => {
      const active = button.dataset.setLang === lang;
      button.setAttribute('aria-pressed', String(active));
    });
    if (save) {
      try { localStorage.setItem('archive-language', lang); } catch (_) {}
    }
  }

  let preferred = 'en';
  try {
    preferred = localStorage.getItem('archive-language') ||
      (navigator.language.toLowerCase().startsWith('ja') ? 'ja' : 'en');
  } catch (_) {}
  setLanguage(preferred, false);

  buttons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.setLang, true));
  });

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
})();
