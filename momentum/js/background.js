document.addEventListener('DOMContentLoaded', () => {
  const images = ['01.png', '02.png', '03.png', '04.png', '05.png'];
  const randomIdx = Math.floor(Math.random() * images.length);
  const chosenImg = images[randomIdx];

  document.body.style.background = `url(img/${chosenImg}) no-repeat center / cover`;
});
