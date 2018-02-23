const controls = document.querySelectorAll('input');

function handleInput() {
  const suffix = this.dataset.suffix || '';

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

const controlsArray = Array.from(controls);

controlsArray.forEach(input => input.addEventListener('change', handleInput));

const controlsWithoutColor = controlsArray.filter(input => {
  if (input.name === 'color') return;
  return input;
});

controlsWithoutColor.forEach(input =>
  input.addEventListener('mousemove', handleInput)
);
