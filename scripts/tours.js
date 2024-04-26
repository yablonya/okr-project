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
