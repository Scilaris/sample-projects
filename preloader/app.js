function preloader(selector, { images = true, scripts = false } = {}) {
  const preloader = document.querySelector(selector);
  document.body.style.overflow = 'hidden';
  let sourceArray = [];
  let loadsCompleted = null;
  let percentage = null;

  if (images) {
    sourceArray.push(...document.images);
  }

  if (scripts) {
    sourceArray.push(...document.scripts);
  }

  function sourcesLoaded(e) {
    loadsCompleted++;
    console.log(e);
    percentage = Math.floor((100 / sourceArray.length) * loadsCompleted);
    if (percentage >= 100) percentage = 100;
    preloader.textContent = percentage + '%';

    if (sourceArray.length <= loadsCompleted) {
      preloader.classList.add('ready');
      document.body.style.overflow = '';
    }
  }

  sourceArray.forEach(src => {
    if (src.nodeName === 'IMG') {
      const clone = new Image();
      clone.onload = sourcesLoaded;
      clone.onerror = sourcesLoaded;
      clone.src = src.src
    } else {
      src.onload = sourcesLoaded;
      src.onerror = sourcesLoaded;
    }
  });
}

preloader('.preloader', {
  scripts: true
});