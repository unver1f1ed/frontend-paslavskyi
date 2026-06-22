document.addEventListener('DOMContentLoaded', () => {
    const iconBlock = document.getElementById('iconBlock');
    const mainMenu = document.getElementById('mainMenu');
    const iconOpen = document.getElementById('iconOpen');
    const iconClose = document.getElementById('iconClose');

    if (iconBlock && mainMenu) {
        iconBlock.addEventListener('click', () => {
            // Перемикаємо клас active для виїзду меню
            mainMenu.classList.toggle('active');
            
            // Змінюємо іконку (Бургер <-> Хрестик)
            iconOpen.classList.toggle('d-none');
            iconClose.classList.toggle('d-none');
            
            // Запобігаємо скролінгу фону, коли меню відкрите
            if (mainMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Елементи
    const loginBtn = document.getElementById('loginBtn');
    const modalWrap = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');

    // Функція відкриття
    const openModal = () => {
        modalWrap.classList.remove('d-none');
        document.body.style.overflow = 'hidden'; // Забираємо скрол сторінки
    };

    // Функція закриття
    const hideModal = () => {
        modalWrap.classList.add('d-none');
        document.body.style.overflow = ''; // Повертаємо скрол
    };

    // Слухачі подій
    if (loginBtn && modalWrap && closeModal) {
        // Клік по кнопці "Login"
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });

        // Клік по хрестику
        closeModal.addEventListener('click', hideModal);

        // Клік по темному фону (повз форму)
        modalWrap.addEventListener('click', (e) => {
            if (e.target === modalWrap) {
                hideModal();
            }
        });

        // Закриття клавішею Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modalWrap.classList.contains('d-none')) {
                hideModal();
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const tickerContainer = document.querySelector('.compare-ticker');
  const originalTextElement = document.querySelector('.ticker-text');
  
  if (!tickerContainer || !originalTextElement) return;

  if (!originalTextElement.querySelector('.dot:last-child')) {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.textContent = ' •';
    originalTextElement.appendChild(dot);
  }

  const textTemplateHTML = originalTextElement.outerHTML;
  let animationId = null;

  function setupTicker() {
    if (animationId) cancelAnimationFrame(animationId);

    tickerContainer.innerHTML = '';

    const tickerTrack = document.createElement('div');
    tickerTrack.className = 'ticker-track';
    tickerContainer.appendChild(tickerTrack);

    tickerTrack.innerHTML = textTemplateHTML;
    const singleItem = tickerTrack.querySelector('.ticker-text');
    
    const originalWidth = singleItem.getBoundingClientRect().width;

    const clonesNeeded = Math.ceil(window.innerWidth / originalWidth) + 2;

    for (let i = 0; i < clonesNeeded; i++) {
      tickerTrack.insertAdjacentHTML('beforeend', textTemplateHTML);
    }

    let currentX = 0;
    const speed = 1.2;

    function animate() {
      currentX -= speed;
      
      if (Math.abs(currentX) >= originalWidth) {
        currentX += originalWidth; 
      }
      
      tickerTrack.style.transform = `translate3d(${currentX}px, 0, 0)`;
      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(setupTicker);
  } else {
    window.addEventListener('load', setupTicker);
  }

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(setupTicker, 200);
  });
});