/* eslint-disable no-restricted-globals, prefer-destructuring */

const windows = document.querySelector('html');

// event listener
windows.addEventListener('click', (e) => {
  const eValue = e.target.classList.value;
  if (eValue.includes('article_banner') || eValue.includes('article_title')) {
    const href = e.target.closest('article').querySelector('a').href;
    location.href = `${href}`;
  }

  if (eValue.includes('section_banner_img')) {
    location.href = 'index.php';
  }
});

