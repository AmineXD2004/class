// FILTRO
// FILTROS
const buttons = document.querySelectorAll('.filter');
const characters = document.querySelectorAll('.character');

buttons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        buttons.forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        characters.forEach(char=>{
            if(filter === 'all' || char.classList.contains(filter)){
                char.style.display = 'block';
            } else {
                char.style.display = 'none';
            }
        });
    });
});

// MODAL
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');

characters.forEach(char=>{
    char.addEventListener('click', ()=>{
        modal.style.display = 'flex';
        modalTitle.textContent = char.dataset.name;
        modalText.textContent = char.dataset.info;
    });
});

closeBtn.onclick = ()=> modal.style.display = 'none';

window.onclick = (e)=>{
    if(e.target === modal){
        modal.style.display = 'none';
    }
};
