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