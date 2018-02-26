const secret = 'magic';
const pressed = [];
let bg = false;
let counter = 0;

document.addEventListener('keyup', (e) => {
  pressed.push(e.key.toLowerCase());
  pressed.splice(-secret.length - 1, pressed.length - secret.length);
  document.querySelector('h1').innerHTML = e.key;

  if (pressed.join('').includes(secret)) {
    cornify_add();
    bg = true;
  }

  if (bg === true && counter === 0) {
    randomBackground();
    counter++;
  } else {
    clearInterval(randomBackground);
    bg = false;
  }
})

const randomBackground = () => {
  setInterval(() => {
    document.body.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
  }, 1000);
}