document.getElementById('game-button').addEventListener('click', startGame);
document.getElementById('pseudo-link').addEventListener('click', changeLocation);

function startGame() {
  alert('Зіграємо в гру!')
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
  location.href = 'index.html';
}

const objectHandler = {
  handleEvent(object) {
    alert(`${object.currentTarget}\n`)
  }
}

document.getElementById('encyclopedia-title').addEventListener('click', objectHandler);
//document.getElementById('encyclopedia-title').removeEventListener('click', objectHandler);

