(function () {
  const track = document.querySelector('.our-blog-wrapper__slide');
  const slides = Array.from(document.querySelectorAll('.our-blog .slide__card'));
  if (!track || slides.length === 0) return;

  let index = 0;
  let perView = 2;
  let totalPages = 1;
  let interval;

  function updateSettings() {
    perView = window.innerWidth < 1200 ? 1 : 2;
    totalPages = Math.max(1, Math.ceil(slides.length / perView));
    index = 0;
    move();
  }

  function move() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function next() {
    index++;
    if (index >= totalPages) index = 0;
    move();
  }

  function startAutoPlay() {
    stopAutoPlay();
    interval = setInterval(next, 6000); // каждые 4 сек
  }

  function stopAutoPlay() {
    if (interval) clearInterval(interval);
  }

  const onResize = (() => {
    let t;
    return () => { clearTimeout(t); t = setTimeout(updateSettings, 150); };
  })();

  window.addEventListener('resize', onResize);
  updateSettings();
  startAutoPlay();

  // (необязательно) остановка при наведении
  track.addEventListener('mouseenter', stopAutoPlay);
  track.addEventListener('mouseleave', startAutoPlay);
})();
