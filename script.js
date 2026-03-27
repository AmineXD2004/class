// FILTRO
const buttons = document.querySelectorAll('.filter');
const heroes = document.querySelectorAll('.hero');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {

        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        heroes.forEach(h => {
            if(filter === 'all' || h.classList.contains(filter)){
                h.style.display = 'block';
            } else {
                h.style.display = 'none';
            }
        });
    });
});

// ANIMACIÓN AL HACER SCROLL
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

cards.forEach(card => observer.observe(card));
