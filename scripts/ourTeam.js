const bgColorButton = document.getElementById('bgcolor-button');

bgColorButton.addEventListener('click', changeBgColor);
bgColorButton.addEventListener('click', hideBgColorButton);

function changeBgColor() {
  document.body.style.backgroundColor = '#c7c1af';
  setTimeout(() => {
    document.body.style.backgroundColor = '#FCF8EB';
  }, 30000)
}

function hideBgColorButton() {
  bgColorButton.style.opacity = '0';
  setTimeout(() => {
    bgColorButton.style.opacity = '1';
  }, 30000)
}
