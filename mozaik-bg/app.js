document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.rooms-module')
    .forEach(module => module.classList.add('ready'));
});

const OPTS = {
  blocks: 99,
  delay: 10,
  delayIncrement: 10
};

const container = document.querySelectorAll('.rooms-module__inner');
container.forEach(module => {
  for (let i = 0; i <= OPTS.blocks; i++) {
    const block = document.createElement('div');
    block.className = 'rooms-block';
    block.style.transitionDelay = `${OPTS.delay}ms`;

    OPTS.delay += OPTS.delayIncrement;
    module.appendChild(block);
  }

  OPTS.delay = 5;
});
