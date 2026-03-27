document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const heroCards = document.querySelectorAll('.hero-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Manejo de botones activos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            heroCards.forEach(card => {
                // Quitamos la animación para resetearla
                card.classList.remove('fade-in');
                
                if (filterValue === 'all' || card.classList.contains(filterValue)) {
                    card.style.display = 'flex';
                    // Forzamos un pequeño delay para que la animación se vea bien
                    setTimeout(() => {
                        card.classList.add('fade-in');
                    }, 10);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
