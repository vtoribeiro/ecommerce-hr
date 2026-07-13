/* ============================================================
   HR SHOPTIME — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================
     DATA — Produtos fictícios
     ========================================================== */
  const PRODUCTS = [
    { id: 'p1', brand: 'Armaf', name: 'Club de Nuit Intense', price: 349.90, oldPrice: 429.90, type: 'perfume' },
    { id: 'p2', brand: 'Lattafa', name: 'Khamrah Qahwa', price: 289.90, oldPrice: null, type: 'perfume' },
    { id: 'p3', brand: 'Maison Alhambra', name: 'Highness Noir', price: 399.90, oldPrice: 459.90, type: 'perfume' },
    { id: 'p4', brand: 'French Avenue', name: 'Essence Noire', price: 259.90, oldPrice: null, type: 'perfume' },
    { id: 'p5', brand: 'Al Wataniah', name: 'Oud Al Sultan', price: 319.90, oldPrice: null, type: 'perfume' },
    { id: 'p6', brand: 'HR Timepieces', name: 'Relógio Classic Steel', price: 899.90, oldPrice: 1099.90, type: 'watch' },
    { id: 'p7', brand: 'HR Timepieces', name: 'Relógio Noir Gold', price: 1249.90, oldPrice: null, type: 'watch' },
    { id: 'p8', brand: 'Armaf', name: 'Tres Nuit', price: 279.90, oldPrice: null, type: 'perfume' },
  ];

  const money = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const watchIconSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7"/><polyline points="12 9 12 12 13.5 13.5"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>`;
  const bottleIconSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2h4M9 4h6l1 3-2 2v11a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9L7 7z"/></svg>`;
  const cartIconSmallSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 2-1.58l1.65-7.42H5.12"/></svg>`;
  const trashIconSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`;
  const minusIconSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
  const plusIconSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;

  /* ==========================================================
     NAVBAR — hide on scroll down / show on scroll up
     ========================================================== */
  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY;
  let ticking = false;
  const HIDE_THRESHOLD = 120;

  function handleScroll() {
    const currentY = window.scrollY;
    if (currentY <= HIDE_THRESHOLD) {
      navbar.classList.remove('navbar--hidden');
    } else if (currentY > lastScrollY) {
      navbar.classList.add('navbar--hidden');
    } else if (currentY < lastScrollY) {
      navbar.classList.remove('navbar--hidden');
    }
    lastScrollY = currentY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true });

  /* ==========================================================
     SEARCH TOGGLE
     ========================================================== */
  const navbarSearch = document.getElementById('navbarSearch');
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = navbarSearch.querySelector('input');

  searchBtn.addEventListener('click', () => {
    const isOpen = navbarSearch.classList.toggle('is-open');
    if (isOpen) {
      setTimeout(() => searchInput.focus(), 260);
    } else {
      searchInput.value = '';
    }
  });

  document.addEventListener('click', (e) => {
    if (!navbarSearch.contains(e.target) && navbarSearch.classList.contains('is-open') && searchInput.value === '') {
      navbarSearch.classList.remove('is-open');
    }
  });

  /* ==========================================================
     MOBILE MENU
     ========================================================== */
  const mobileMenu = document.getElementById('mobileMenu');
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

  const openMobileMenu = () => mobileMenu.classList.add('is-open');
  const closeMobileMenu = () => mobileMenu.classList.remove('is-open');

  burgerBtn.addEventListener('click', openMobileMenu);
  mobileMenuClose.addEventListener('click', closeMobileMenu);
  mobileMenuOverlay.addEventListener('click', closeMobileMenu);
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  /* ==========================================================
     SCROLL REVEAL
     ========================================================== */
  const revealTargets = document.querySelectorAll('.reveal, .reveal-left');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealTargets.forEach(el => revealObserver.observe(el));

  // Staggered reveal for note-cards
  const noteCards = document.querySelectorAll('.note-card');
  const noteObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        noteCards.forEach((card, idx) => {
          setTimeout(() => card.classList.add('is-visible'), idx * 120);
        });
        noteObserver.disconnect();
      }
    });
  }, { threshold: 0.2 });
  if (noteCards.length) {
    noteCards.forEach(c => c.classList.add('reveal'));
    noteObserver.observe(noteCards[0]);
  }

  /* ==========================================================
     PARALLAX — fragrance image (disabled on touch)
     ========================================================== */
  const isTouch = window.matchMedia('(hover: none)').matches;
  const fragranceImage = document.getElementById('fragranceImage');
  if (fragranceImage && !isTouch) {
    window.addEventListener('scroll', () => {
      const rect = fragranceImage.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.top < windowH && rect.bottom > 0) {
        const progress = (windowH - rect.top) / (windowH + rect.height);
        const offset = (progress - 0.5) * 24;
        fragranceImage.style.transform = `translateY(${offset}px)`;
      }
    }, { passive: true });
  }

  /* ==========================================================
     PRODUCT CAROUSEL
     ========================================================== */
  const track = document.getElementById('carouselTrack');
  const viewport = document.getElementById('carouselViewport');
  const dotsWrap = document.getElementById('carouselDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  function renderProducts() {
    track.innerHTML = PRODUCTS.map(p => `
      <article class="product-card" data-id="${p.id}">
        <div class="product-card-img">
          <span class="placeholder-icon">${p.type === 'watch' ? watchIconSVG : bottleIconSVG}</span>
          ${p.oldPrice ? '<span class="product-card-tag">Oferta</span>' : ''}
        </div>
        <div class="product-card-body">
          <span class="product-brand">${p.brand}</span>
          <span class="product-name">${p.name}</span>
          <div class="product-price">
            ${p.oldPrice ? `<small>${money(p.oldPrice)}</small>` : ''}${money(p.price)}
          </div>
          <button class="add-to-cart-btn" data-id="${p.id}">
            ${cartIconSmallSVG}
            <span class="btn-label">Adicionar ao Carrinho</span>
          </button>
        </div>
      </article>
    `).join('');
  }
  renderProducts();

  let itemsPerView = 4;
  let currentIndex = 0;
  let cardWidth = 0;
  let gap = 24;

  function computeItemsPerView() {
    const w = window.innerWidth;
    if (w <= 600) return 1;
    if (w <= 900) return 2;
    if (w <= 1180) return 3;
    return 4;
  }

  function measure() {
    const card = track.querySelector('.product-card');
    if (!card) return;
    const style = getComputedStyle(track);
    gap = parseFloat(style.gap) || 24;
    cardWidth = card.getBoundingClientRect().width + gap;
  }

  function maxIndex() {
    return Math.max(0, PRODUCTS.length - itemsPerView);
  }

  function renderDots() {
    const dotCount = maxIndex() + 1;
    dotsWrap.innerHTML = '';
    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement('span');
      dot.className = 'carousel-dot' + (i === currentIndex ? ' is-active' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    }
  }

  function updateArrows() {
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= maxIndex();
  }

  function goTo(index) {
    currentIndex = Math.min(Math.max(index, 0), maxIndex());
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    renderDots();
    updateArrows();
  }

  function initCarousel() {
    itemsPerView = computeItemsPerView();
    measure();
    currentIndex = Math.min(currentIndex, maxIndex());
    goTo(currentIndex);
  }

  prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

  window.addEventListener('resize', () => {
    initCarousel();
  });

  // Drag / swipe support
  let isDragging = false;
  let dragStartX = 0;
  let dragDelta = 0;
  let dragBaseTranslate = 0;

  function pointerDown(x) {
    isDragging = true;
    dragStartX = x;
    dragDelta = 0;
    dragBaseTranslate = -currentIndex * cardWidth;
    track.style.transition = 'none';
    viewport.classList.add('is-dragging');
  }
  function pointerMove(x) {
    if (!isDragging) return;
    dragDelta = x - dragStartX;
    track.style.transform = `translateX(${dragBaseTranslate + dragDelta}px)`;
  }
  function pointerUp() {
    if (!isDragging) return;
    isDragging = false;
    viewport.classList.remove('is-dragging');
    track.style.transition = '';
    const threshold = cardWidth * 0.2;
    if (dragDelta < -threshold) {
      goTo(currentIndex + 1);
    } else if (dragDelta > threshold) {
      goTo(currentIndex - 1);
    } else {
      goTo(currentIndex);
    }
  }

  viewport.addEventListener('mousedown', (e) => { pointerDown(e.clientX); e.preventDefault(); });
  window.addEventListener('mousemove', (e) => pointerMove(e.clientX));
  window.addEventListener('mouseup', pointerUp);

  viewport.addEventListener('touchstart', (e) => pointerDown(e.touches[0].clientX), { passive: true });
  viewport.addEventListener('touchmove', (e) => pointerMove(e.touches[0].clientX), { passive: true });
  viewport.addEventListener('touchend', pointerUp);

  initCarousel();

  /* ==========================================================
     MINI CART
     ========================================================== */
  const cartOverlay = document.getElementById('cartOverlay');
  const miniCart = document.getElementById('miniCart');
  const miniCartBody = document.getElementById('miniCartBody');
  const miniCartClose = document.getElementById('miniCartClose');
  const cartBtn = document.getElementById('cartBtn');
  const cartBadge = document.getElementById('cartBadge');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const continueShoppingBtn = document.getElementById('continueShoppingBtn');
  const goToCartBtn = document.getElementById('goToCartBtn');
  const toast = document.getElementById('toast');

  let cart = {}; // { productId: qty }
  let hasOpenedCartOnce = false;

  function openCart() {
    cartOverlay.classList.add('is-open');
    miniCart.classList.add('is-open');
  }
  function closeCart() {
    cartOverlay.classList.remove('is-open');
    miniCart.classList.remove('is-open');
  }

  function totalItems() {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  }
  function subtotal() {
    return Object.entries(cart).reduce((sum, [id, qty]) => {
      const p = PRODUCTS.find(pr => pr.id === id);
      return sum + (p ? p.price * qty : 0);
    }, 0);
  }

  function renderCart() {
    const entries = Object.entries(cart);
    if (entries.length === 0) {
      miniCartBody.innerHTML = '<p class="mini-cart-empty">Seu carrinho está vazio.</p>';
    } else {
      miniCartBody.innerHTML = entries.map(([id, qty]) => {
        const p = PRODUCTS.find(pr => pr.id === id);
        if (!p) return '';
        return `
          <div class="cart-item" data-id="${id}">
            <div class="cart-item-img">${p.type === 'watch' ? watchIconSVG : bottleIconSVG}</div>
            <div class="cart-item-info">
              <div class="cart-item-brand">${p.brand}</div>
              <div class="cart-item-name">${p.name}</div>
              <div class="cart-item-row">
                <div class="cart-item-qty">
                  <button class="qty-btn qty-minus" data-id="${id}" aria-label="Diminuir quantidade">${minusIconSVG}</button>
                  <span class="qty-value">${qty}</span>
                  <button class="qty-btn qty-plus" data-id="${id}" aria-label="Aumentar quantidade">${plusIconSVG}</button>
                </div>
                <span class="cart-item-price">${money(p.price * qty)}</span>
              </div>
            </div>
            <button class="cart-item-remove" data-id="${id}" aria-label="Remover item">${trashIconSVG}</button>
          </div>
        `;
      }).join('');
    }

    cartSubtotalEl.textContent = money(subtotal());
    const count = totalItems();
    cartBadge.textContent = count;
    cartBadge.classList.toggle('is-active', count > 0);
  }

  function showToast() {
    toast.classList.add('is-visible');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('is-visible'), 2000);
  }

  function addToCart(id, opts = {}) {
    const wasEmpty = totalItems() === 0;
    cart[id] = (cart[id] || 0) + 1;
    renderCart();

    if (!hasOpenedCartOnce) {
      hasOpenedCartOnce = true;
      openCart();
    } else if (!opts.silentToast) {
      showToast();
    }
  }

  track.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-to-cart-btn');
    if (!btn) return;
    const id = btn.dataset.id;
    addToCart(id);

    const label = btn.querySelector('.btn-label');
    const originalText = label.textContent;
    btn.classList.add('is-added');
    label.textContent = '✓ Adicionado';
    setTimeout(() => {
      btn.classList.remove('is-added');
      label.textContent = originalText;
    }, 1500);
  });

  miniCartBody.addEventListener('click', (e) => {
    const plusBtn = e.target.closest('.qty-plus');
    const minusBtn = e.target.closest('.qty-minus');
    const removeBtn = e.target.closest('.cart-item-remove');

    if (plusBtn) {
      const id = plusBtn.dataset.id;
      cart[id] = (cart[id] || 0) + 1;
      renderCart();
    } else if (minusBtn) {
      const id = minusBtn.dataset.id;
      if (cart[id] > 1) {
        cart[id] -= 1;
      } else {
        delete cart[id];
      }
      renderCart();
    } else if (removeBtn) {
      const id = removeBtn.dataset.id;
      delete cart[id];
      renderCart();
    }
  });

  cartBtn.addEventListener('click', openCart);
  miniCartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  continueShoppingBtn.addEventListener('click', () => {
    closeCart();
    document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
  });
  goToCartBtn.addEventListener('click', () => {
    // Sem ação definida — reservado para futura página de carrinho.
  });

  renderCart();

  /* ==========================================================
     TESTIMONIALS — fictício
     ========================================================== */
  const TESTIMONIALS = [
    { name: 'Camila Rocha', role: 'Cliente HR', text: 'Perfume chegou rápido e o aroma é exatamente como esperado. Atendimento excelente pelo WhatsApp.', stars: 5, initials: 'CR' },
    { name: 'Rafael Souza', role: 'Cliente HR', text: 'Comprei um relógio para presentear e a experiência foi impecável, do site à entrega.', stars: 5, initials: 'RS' },
    { name: 'Bianca Lima', role: 'Cliente HR', text: 'Loja séria, produtos originais e um site lindo de navegar. Recomendo demais!', stars: 4, initials: 'BL' },
  ];

  const starSVG = `<svg viewBox="0 0 24 24"><polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9"/></svg>`;

  document.getElementById('testimonialsGrid').innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-stars">${starSVG.repeat(t.stars)}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.initials}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');

  /* ==========================================================
     NEWSLETTER — fake submit
     ========================================================== */
  const newsletterForm = document.getElementById('newsletterForm');
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const button = newsletterForm.querySelector('button');
    const original = button.textContent;
    button.textContent = 'Cadastrado ✓';
    newsletterForm.reset();
    setTimeout(() => { button.textContent = original; }, 2200);
  });

});