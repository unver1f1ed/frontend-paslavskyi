/* script.js */
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