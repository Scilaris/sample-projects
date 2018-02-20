document.addEventListener('keydown', event => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.drum[data-key="${event.keyCode}"]`);

  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
});

const keys = document.querySelectorAll('.drum');

function removeClass(event) {
  if (event.propertyName !== 'transform') return;

  event.target.classList.remove('playing');
}

keys.forEach(key => {
  key.addEventListener('transitionend', removeClass);
});
