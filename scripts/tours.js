const certainMountain = confirm('Хочете отримати список турів пов\'язаних з певною вершиною?');

if (certainMountain) {
  const mountainName = prompt('Введіть назву гори');

  if (mountainName) {
    const allTours = document.querySelectorAll('li');

    for (let tour of allTours) {
      const mountainsList = tour.querySelectorAll('p')[1].textContent;

      if (mountainsList === 'Вершини') continue;

      const tourIncludesMount = mountainsList.includes(mountainName);

      if (!tourIncludesMount) {
        tour.remove();
      }
    }

    alert(`Тури з вершиною ${mountainName} для вас`)
  }
}

const tourList = document.getElementById('tours-list');
tourList.addEventListener('click', highlightListItem);

function highlightListItem(event) {
  const clickedElement = event.target;
  if (clickedElement.tagName === 'BUTTON') return;

  const clickedListItem = clickedElement.closest("li");
  if (tourList.children[0] === clickedListItem) return;

  clickedListItem.style.backgroundColor = '#e8e8e8';

  setTimeout(() => {
    clickedListItem.style.backgroundColor = '#FEFCF5';
  }, 3000);
}

document.addEventListener('click', function(event) {
  if (event.target.dataset.sign !== undefined) {
    alert('Ви записались на тур');
  }
})

