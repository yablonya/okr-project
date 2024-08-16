$(document).ready(function () {
  const certainMountain = confirm('Хочете отримати список турів пов\'язаних з певною вершиною?');

  if (certainMountain) {
    const mountainName = prompt('Введіть назву гори');

    if (mountainName) {
      $('li').each(function() {
        const $this = $(this);
        const mountainsList = $this.find('p').eq(1).text();

        if (mountainsList === 'Вершини') return;

        const tourIncludesMount = mountainsList.includes(mountainName);

        if (!tourIncludesMount) {
          $this.remove();
        }
      });

      alert(`Тури з вершиною ${mountainName} для вас`)
    }
  }
  const  $tourList = $('#tours-list');
  $tourList.click(highlightListItem);

  $(document).click(function(event) {
    const $target = $(event.target);

    if ($target.data('sign') !== undefined) {
      alert('Ви записались на тур');
    }
  });

  function highlightListItem(event) {
    const $clickedElement = $(event.target);
    if ($clickedElement.is('button')) return;

    const $clickedListItem = $clickedElement.closest("li");
    if ($tourList.children().first().is($clickedListItem)) return;

    $clickedListItem.css('backgroundColor', '#e8e8e8');

    setTimeout(() => {
      $clickedListItem.css('backgroundColor', '#FEFCF5');
    }, 3000);
  }
})