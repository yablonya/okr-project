$(document).ready(function () {
  $('#game-button').click(startGame);
  $('#pseudo-link').click(changeLocation).css('cursor', 'pointer');


  $('#encyclopedia-title').addEventListener(objectHandler.handleEvent);

  const $listOfNecessary = $('#list-of-necessary');

  $listOfNecessary.children().on({
    'mouseover': function(event) {
      $(event.target).css('font-weight', '500');

      if ($(event.relatedTarget).parent().is('ul')) {
        $(event.relatedTarget).css('color', '#949494');
      }
    },

    'mouseout': function(event) {
      $(event.target).css('font-weight', '200');
    }
  });
})

function startGame() {
  alert('Зіграємо в гру!');
  const firstMountain = prompt('Введіть назву якоїсь гори');
  const secondMountain = prompt('Введіть іншої гори');

  if (firstMountain && secondMountain) {
    if (firstMountain > secondMountain) {
      alert(`Назва гори "${firstMountain}" більша ніж назва гори "${secondMountain}"`);
    } else if (firstMountain < secondMountain) {
      alert(`Назва гори "${secondMountain}" більша ніж назва гори "${firstMountain}"`);
    } else {
      alert('Оце так! Назви гір однакової величини');
    }
  } else {
    alert('Схоже ви забули ввести назву однієї з гір...');
  }
}

function changeLocation () {
  $(location).attr('href', 'index.html');
}

const objectHandler = {
  handleEvent(object) {
    alert(`${object.currentTarget}\n`)
  }
}
