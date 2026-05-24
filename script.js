const slides = [...document.querySelectorAll('.slide')];
const counter = document.getElementById('counter');
let index = Number(new URLSearchParams(location.search).get('slide') || 1) - 1;
index = Math.max(0, Math.min(index, slides.length - 1));

function show(nextIndex) {
  slides[index]?.classList.remove('active');
  index = Math.max(0, Math.min(nextIndex, slides.length - 1));
  slides[index].classList.add('active');
  counter.textContent = `${index + 1} / ${slides.length}`;
  history.replaceState(null, '', `?slide=${index + 1}`);
}

document.getElementById('prev').addEventListener('click', () => show(index - 1));
document.getElementById('next').addEventListener('click', () => show(index + 1));
document.addEventListener('keydown', (event) => {
  if (['ArrowRight', 'PageDown', ' '].includes(event.key)) show(index + 1);
  if (['ArrowLeft', 'PageUp'].includes(event.key)) show(index - 1);
});
show(index);
