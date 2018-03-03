const hero = document.querySelector('.hero');
const target = hero.querySelector('.target');
const walk = 30;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  const { offsetLeft: left, offsetTop: top } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = (x + e.target.offsetLeft) - left;
    y = (y + e.target.offsetTop) - top;
  }

  const xWalk = Math.floor((x / width) * walk) - (walk / 2);
  const yWalk = Math.floor((y / height) * walk) - (walk / 2);

  target.style.textShadow = `${xWalk}px ${yWalk}px 5px #00000599`;
}

hero.addEventListener('mousemove', shadow);
