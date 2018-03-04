const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.className = 'highlight';

document.body.appendChild(highlight);

function followAlong() {
  const coords = this.getBoundingClientRect();

  highlight.style.width = `${coords.width + 10}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left + window.scrollX - 5}px, ${coords.top + window.scrollY}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', followAlong));