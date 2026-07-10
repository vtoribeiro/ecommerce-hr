/* ==========================================================================
   HR SHOP TIME — Interações
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- Lucide Icons ---------- */
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const isTouchDevice = window.matchMedia('(hover: none)').matches;

  /* ==========================================================================
     NAVBAR — esconder ao descer, exibir ao subir (após 120px)
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const SCROLL_THRESHOLD = 120;
  const SCROLL_DELTA = 8; // evita "piscar" com pequenos movimentos

  let lastScrollY = window.scrollY;
  let ticking = false;

  function handleNavbarScroll() {
    const currentY = window.scrollY;

    if (currentY <= SCROLL_THRESHOLD) {
      navbar.classList.remove('navbar--hidden');
    } else if (Math.abs(currentY - lastScrollY) > SCROLL_DELTA) {
      if (currentY > lastScrollY) {
        navbar.classList.add('navbar--hidden');
      } else {
        navbar.classList.remove('navbar--hidden');
      }
    }

    lastScrollY = currentY;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(handleNavbarScroll);
      ticking = true;
    }
  }, { passive: true });

  /* ==========================================================================
     SCROLL REVEAL — uma única execução, com stagger nos grupos
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const parent = el.parentElement;

      // Stagger: irmãos .reveal dentro do mesmo contêiner surgem em sequência
      const siblings = Array.from(parent.querySelectorAll(':scope > .reveal'));
      const index = siblings.indexOf(el);
      const delay = index > 0 ? index * 120 : 0;

      setTimeout(function () {
        el.classList.add('reveal--visible');
      }, delay);

      observer.unobserve(el);
    });
  }, { threshold: 0.15 });

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ==========================================================================
     PARALLAX — imagem da seção educativa (desativado em touch)
     ========================================================================== */
  const parallaxImage = document.getElementById('parallaxImage');

  if (parallaxImage && !isTouchDevice) {
    let parallaxTicking = false;

    function handleParallax() {
      const rect = parallaxImage.getBoundingClientRect();
      const viewportH = window.innerHeight;

      if (rect.top < viewportH && rect.bottom > 0) {
        // progresso de -1 (abaixo) a 1 (acima)
        const progress = (rect.top + rect.height / 2 - viewportH / 2) / (viewportH / 2);
        const offset = progress * -16; // deslocamento sutil
        parallaxImage.style.transform = 'translateY(' + offset.toFixed(1) + 'px)';
      }

      parallaxTicking = false;
    }

    window.addEventListener('scroll', function () {
      if (!parallaxTicking) {
        window.requestAnimationFrame(handleParallax);
        parallaxTicking = true;
      }
    }, { passive: true });
  }

  /* ==========================================================================
     MINI CART
     ========================================================================== */
  const miniCart = document.getElementById('miniCart');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartToggle = document.getElementById('cartToggle');
  const cartClose = document.getElementById('cartClose');
  const continueShopping = document.getElementById('continueShopping');
  const cartCount = document.getElementById('cartCount');
  const cartItemsEl = document.getElementById('cartItems');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const toast = document.getElementById('toast');

  const cart = {
    items: {}, // name -> { brand, price, qty }
    count: 0,
    subtotal: 0,
    firstAddDone: false
  };

  function formatBRL(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function openCart() {
    miniCart.classList.add('mini-cart--open');
    cartOverlay.classList.add('cart-overlay--visible');
    miniCart.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    miniCart.classList.remove('mini-cart--open');
    cartOverlay.classList.remove('cart-overlay--visible');
    miniCart.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function renderCart() {
    cartCount.textContent = cart.count;
    cartSubtotalEl.textContent = formatBRL(cart.subtotal);

    // Limpa itens (mantém o placeholder de vazio)
    cartItemsEl.querySelectorAll('.cart-item').forEach(function (el) { el.remove(); });

    const names = Object.keys(cart.items);
    cartEmpty.style.display = names.length ? 'none' : '';

    names.forEach(function (name) {
      const item = cart.items[name];
      const el = document.createElement('div');
      el.className = 'cart-item';
      el.innerHTML =
        '<div>' +
          '<div class="cart-item__name"></div>' +
          '<div class="cart-item__qty">Qtd: ' + item.qty + '</div>' +
        '</div>' +
        '<div class="cart-item__price">' + formatBRL(item.price * item.qty) + '</div>';
      el.querySelector('.cart-item__name').textContent = name;
      cartItemsEl.appendChild(el);
    });
  }

  let toastTimer = null;
  function showToast() {
    toast.classList.add('toast--visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('toast--visible');
    }, 2000);
  }

  function addToCart(card, button) {
    const name = card.dataset.name;
    const brand = card.dataset.brand;
    const price = parseFloat(card.dataset.price);

    if (!cart.items[name]) {
      cart.items[name] = { brand: brand, price: price, qty: 0 };
    }
    cart.items[name].qty += 1;
    cart.count += 1;
    cart.subtotal += price;

    renderCart();

    // Feedback no botão: ✓ Adicionado
    const label = button.querySelector('.product-card__btn-label');
    const originalText = label.textContent;
    button.classList.add('product-card__btn--added');
    button.disabled = true;
    label.textContent = '✓ Adicionado';

    setTimeout(function () {
      label.textContent = originalText;
      button.classList.remove('product-card__btn--added');
      button.disabled = false;
    }, 1500);

    // Primeira adição: abre automaticamente. Demais: apenas toast.
    if (!cart.firstAddDone) {
      cart.firstAddDone = true;
      openCart();
    } else if (!miniCart.classList.contains('mini-cart--open')) {
      showToast();
    }
  }

  document.querySelectorAll('.js-add-to-cart').forEach(function (button) {
    button.addEventListener('click', function () {
      const card = button.closest('.product-card');
      addToCart(card, button);
    });
  });

  cartToggle.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  continueShopping.addEventListener('click', function () {
    closeCart();
    document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && miniCart.classList.contains('mini-cart--open')) {
      closeCart();
    }
  });

  /* ==========================================================================
     NEWSLETTER — apenas protótipo
     ========================================================================== */
  const newsletterForm = document.getElementById('newsletterForm');

  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    toast.textContent = '✓ Cadastro realizado com sucesso!';
    showToast();
    setTimeout(function () {
      toast.textContent = '✓ Produto adicionado ao carrinho';
    }, 2200);
    newsletterForm.reset();
  });

})();
