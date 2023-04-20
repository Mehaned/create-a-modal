const close = document.querySelector('.closeBtn');
const btn = document.querySelector('.button');
const modal = document.querySelector('.modal');

const openModal = () => {
    modal.style.display = 'block';
}

const closeModal = () => {
    modal.style.display='none';
}

function outSideClick(e){
    if (e.target === modal) {
        modal.style.display = 'none';
      }
}

btn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
window.addEventListener('click', outSideClick);
