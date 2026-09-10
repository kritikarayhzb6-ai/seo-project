const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

const trackEvent = (name, parameters = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, parameters);
  }
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, ...parameters });
  }
};

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
  link.addEventListener('click', () => trackEvent('email_click', { link_url: link.href }));
});

document.querySelectorAll('a[href^="tel:"]').forEach(link => {
  link.addEventListener('click', () => trackEvent('phone_click', { link_url: link.href }));
});

document.querySelectorAll('.btn, .nav-cta').forEach(link => {
  link.addEventListener('click', () => trackEvent('cta_click', { link_text: link.textContent.trim() }));
});

const filterBtns = document.querySelectorAll('.filter-btn');
const portItems = document.querySelectorAll('.port-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterBtns.forEach(filterButton => filterButton.setAttribute('aria-pressed', String(filterButton === btn)));

    const filter = btn.dataset.filter;
    portItems.forEach(item => {
      const show = filter === 'all' || item.dataset.cat === filter;
      item.classList.toggle('hidden', !show);
    });
  });
});
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const formError = document.getElementById('formError');

if (contactForm) {
  contactForm.addEventListener('focusin', () => trackEvent('contact_form_start'), { once: true });
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    contactForm.querySelectorAll('[required]').forEach(field => {
      const group = field.closest('.form-group');
      const isEmpty = !field.value.trim();
      const isBadEmail = field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);

      if (isEmpty || isBadEmail) {
        group.classList.add('invalid');
        valid = false;
      } else {
        group.classList.remove('invalid');
      }
    });

    if (valid) {
      const formData = new FormData(contactForm);
      const subject = encodeURIComponent(`Project enquiry from ${formData.get('name')}`);
      const body = encodeURIComponent([
        `Name: ${formData.get('name')}`,
        `Email: ${formData.get('email')}`,
        `Service: ${formData.get('service')}`,
        `Budget: ${formData.get('budget') || 'Not specified'}`,
        '',
        String(formData.get('message'))
      ].join('\n'));

      window.location.href = `mailto:hello@digidracuaa.com?subject=${subject}&body=${body}`;
      trackEvent('contact_form_submit', { delivery_method: 'mailto' });
      formSuccess.textContent = 'Your email draft is ready. Send it from your email app to complete the enquiry.';
      formSuccess.classList.add('show');
      if (formError) formError.classList.remove('show');
    } else {
      trackEvent('contact_form_error');
      if (formError) formError.classList.add('show');
    }
  });
}