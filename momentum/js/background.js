document.addEventListener('DOMContentLoaded', () => {
  const images = ['01.png', '02.png', '03.png', '04.png', '05.png'];
  const randomIdx = Math.floor(Math.random() * images.length);
  const chosenImg = images[randomIdx];
  const $image = document.createElement('img');
  $image.src = `img/${chosenImg}`;
  document.body.appendChild($image);
});
