import './style.css';

const btns = document.querySelectorAll('.dropdown');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btns.forEach((obtn) => {
      if (btn !== obtn) {
        obtn.querySelector('.dropdown-content').classList.add('hidden');
      }
    });
    btn.querySelector('.dropdown-content').classList.toggle('hidden');
  });
  btn.addEventListener('mouseover', () => {
    btns.forEach((obtn) => {
      if (btn !== obtn) {
        obtn.querySelector('.dropdown-content').classList.add('hidden');
      }
    });
    btn.querySelector('.dropdown-content').classList.remove('hidden');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('dropdown-button')) {
    btns.forEach((btn) => {
      btn.querySelector('.dropdown-content').classList.add('hidden');
    });
  }
});
