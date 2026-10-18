(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const chips = [...document.querySelectorAll('.filter-chip')];
  const cards = [...document.querySelectorAll('.design-card')];
  const search = document.querySelector('#design-search');
  const empty = document.querySelector('#empty-state');
  let activeFilter = 'Todos';

  function applyFilters() {
    const query = (search?.value || '').trim().toLocaleLowerCase('es');
    let visible = 0;
    cards.forEach(card => {
      const categoryMatch = activeFilter === 'Todos' || card.dataset.category === activeFilter;
      const textMatch = `${card.dataset.title} ${card.dataset.category}`.toLocaleLowerCase('es').includes(query);
      const show = categoryMatch && textMatch;
      card.hidden = !show;
      if (show) visible++;
    });
    if (empty) empty.hidden = visible !== 0;
  }
  function chooseFilter(filter) {
    activeFilter = filter;
    chips.forEach(chip => {
      const selected = chip.dataset.filter === filter;
      chip.classList.toggle('selected', selected);
      chip.setAttribute('aria-pressed', String(selected));
    });
    applyFilters();
  }
  chips.forEach(chip => chip.addEventListener('click', () => chooseFilter(chip.dataset.filter)));
  document.querySelectorAll('.category-card').forEach(card => card.addEventListener('click', () => {
    chooseFilter(card.dataset.filter);
    document.querySelector('#inspiracion')?.scrollIntoView({behavior:'smooth'});
  }));
  search?.addEventListener('input', applyFilters);
  document.querySelector('#show-all')?.addEventListener('click', e => { e.preventDefault(); chooseFilter('Todos'); if (search) search.value=''; applyFilters(); });
  document.querySelector('#load-more')?.addEventListener('click', e => {
    const button = e.currentTarget;
    button.innerHTML = '¡Estás al día con estas ideas! <span>♡</span>';
    button.disabled = true;
    button.style.opacity = '.75';
  });

  const savedNote = document.querySelector('#saved-note');
  let saved = JSON.parse(localStorage.getItem('ideasdeunas-favorites') || '[]');
  function syncSavedButtons() {
    document.querySelectorAll('.save-button').forEach(button => {
      const title = button.closest('.design-card')?.dataset.title;
      const isSaved = saved.includes(title);
      button.setAttribute('aria-pressed', String(isSaved));
      button.textContent = isSaved ? '♥' : '♡';
      button.setAttribute('aria-label', `${isSaved ? 'Quitar de favoritos' : 'Guardar'} ${title}`);
    });
    if (savedNote) savedNote.textContent = saved.length ? `${saved.length} diseño${saved.length === 1 ? '' : 's'} guardado${saved.length === 1 ? '' : 's'} en tus favoritos de este dispositivo.` : '';
  }
  document.querySelectorAll('.save-button').forEach(button => button.addEventListener('click', () => {
    const title = button.closest('.design-card')?.dataset.title;
    if (!title) return;
    saved = saved.includes(title) ? saved.filter(item => item !== title) : [...saved, title];
    try { localStorage.setItem('ideasdeunas-favorites', JSON.stringify(saved)); } catch (_) {}
    syncSavedButtons();
  }));
  syncSavedButtons();

  document.querySelector('#newsletter-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const message = document.querySelector('#newsletter-message');
    if (message) message.textContent = '¡Gracias! El formulario es una demo; conecta un servicio de email para recibir suscripciones.';
    e.currentTarget.reset();
  });
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();