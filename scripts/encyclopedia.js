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

const listOfNecessary = document.getElementById('list-of-necessary');

for (let item of listOfNecessary.children) {
  item.addEventListener('mouseover', {
    handleEvent(event) {
      event.target.style.fontWeight = '500';
      if (event.relatedTarget.parentElement.tagName === 'UL') {
        event.relatedTarget.style.color = '#949494';
      }
    }
  })

  item.addEventListener('mouseout', {
    handleEvent(event) {
      event.target.style.fontWeight = '200';
    }
  })
}

