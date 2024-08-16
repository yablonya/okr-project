$(document).ready(function () {
  let username = prompt("Введіть своє ім'я для авторизації");
  showUsername(username);

  $('#menu-button').click(function () {
    $('#menu-overlay').css({ 'display': 'block', 'opacity': '1' });
    $('#side-menu').css('left', '0px')
  });

  $('#menu-overlay').click(function () {
    $('#menu-overlay').css({ 'display': 'none', 'opacity': '0' });
    $('#side-menu').css('left', '-300px')
  });

  const $menuBlock = $('#side-menu');
  new Menu($menuBlock);

  const $stickman = $('#stickman');
  const $stickmanField = $('#stickman-field');

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  $stickman.on('mousedown', function(event) {
    event.preventDefault();
    isDragging = true;

    offsetX = event.clientX - $stickman.position().left;
    offsetY = event.clientY - $stickman.position().top;
    $stickman.css('cursor', 'grabbing');
  });

  $stickmanField.on({
    'mousemove': function (event) {
      if (isDragging) {
        let newX = event.clientX - offsetX;
        let newY = event.clientY - offsetY;

        $stickman.css({ 'left': `${newX}px`, 'top':  `${newY}px`})
      }
    },

    'mouseup': function () {
      isDragging = false;
      $stickman.css('cursor', 'grab');
    }
  })
})

function showUsername(username) {
  if (username) {
    $('#username').html(`
      <svg
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke="currentColor" 
        class="w-6 h-6"
        style="width: 24px;"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
      <h4 style="margin: 0">${username}</h4>
    `);

    if (username === 'yablonya') {
      showDeveloperInfo('Яблонський', 'Данило');
    } else {
      alert(`Вітаємо, ${username}!`);
    }
  } else {
    $('#username').html(`
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke="currentColor" 
        class="w-6 h-6" 
        style="width: 24px"
      > 
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
      Не авторизовано
    `);
  }
}

function showDeveloperInfo(surname, name, position = 'Front-end developer') {
  alert(`Вітаємо нашого розробника!\n\nПрізвище: ${surname}\nІм'я: ${name}\nПосада: ${position}`)
}

function signUpForTour() {
  alert('Ви обрали цей тур!');
}

class Menu {
  constructor($elem) {
    this.$elem = $elem;
    this.$elem.on('click', this.onClick.bind(this));
  }

  becomeInstructor() { alert('Хочу стати інструктором'); }

  signUpForHike() { alert('Записатись в похід'); }

  searchTour() { alert('Знайти тур'); }

  getConsultation() { alert('Отримати консультацію'); }

  onClick(event) {
    const action = $(event.target).data('action');

    if (action) { this[action](); }
  }
}
