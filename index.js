console.log('bobbyhadz.com');

const img = document.getElementById('img');

img.addEventListener('error', function handleError() {
  const defaultImage =
    'https://bobbyhadz.com/images/blog/javascript-show-div-on-select-option/banner.webp';

  img.src = defaultImage;
  img.alt = 'default';
});
