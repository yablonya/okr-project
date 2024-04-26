document.getElementById('bgcolor-button').addEventListener('click', changeBgColor);

function changeBgColor() {
  document.body.style.backgroundColor = '#c7c1af';
  setTimeout(() => {
    document.body.style.backgroundColor = '#FCF8EB';
  }, 30000)
}
