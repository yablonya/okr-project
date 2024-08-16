$(document).ready(function () {
  const $bgColorButton = $('#bgcolor-button');

  $bgColorButton.click(changeBgColor);
  $bgColorButton.click(hideBgColorButton);

  function hideBgColorButton() {
    $bgColorButton.css('opacity', '0');
    setTimeout(() => {
      $bgColorButton.css('opacity', '1');
    }, 30000)
  }
})

function changeBgColor() {
  $('body').css('backgroundColor', '#c7c1af');
  setTimeout(() => {
    $('body').css('backgroundColor', '#FCF8EB');
  }, 30000)
}
