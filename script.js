const toggle = document.querySelector('.language-toggle');
const translatedElements = document.querySelectorAll('[data-en][data-zh]');
const languageOptions = document.querySelectorAll('.language-option');
let preferredLanguage;

try {
  preferredLanguage = localStorage.getItem('site-language');
} catch {
  preferredLanguage = null;
}
const initialLanguage = preferredLanguage === 'zh' ? 'zh' : 'en';

function setLanguage(language) {
  const isChinese = language === 'zh';

  translatedElements.forEach((element) => {
    element.textContent = element.dataset[language];
  });

  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = isChinese ? '成浩轩 | 数学' : 'Haoxuan Cheng | Mathematics';
  toggle.setAttribute('aria-label', isChinese ? 'Switch to English' : '切换为中文');
  toggle.setAttribute('aria-pressed', String(isChinese));
  languageOptions[0].classList.toggle('is-active', !isChinese);
  languageOptions[1].classList.toggle('is-active', isChinese);
  try {
    localStorage.setItem('site-language', language);
  } catch {
    // The page still works when storage is unavailable.
  }
}

toggle.addEventListener('click', () => {
  setLanguage(document.documentElement.lang.startsWith('zh') ? 'en' : 'zh');
});

setLanguage(initialLanguage);

document.querySelector('#year').textContent = new Date().getFullYear();

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}
