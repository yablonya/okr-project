function logIn() {
  let username = prompt("Введіть своє ім'я для авторизації");
  showUsername(username);
}

function showUsername(username) {
  if (username) {
    document.getElementById('username').outerHTML = `
        <h4 
          style="
              display: flex;
              justify-content: center;
              gap: 8px;
              align-items: center;
              margin: 0;
              "
          >
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
          ${username}
        </h4>
      `;

    if (username === 'yablonya') {
      showDeveloperInfo('Яблонський', 'Данило');
    } else {
      alert(`Вітаємо, ${username}!`);
    }
  } else {
    document.getElementById('username').innerHTML = `
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
         </svg>Не авторизовано`;
  }
}

function showDeveloperInfo(surname, name, position = 'Front-end developer') {
  alert(`Вітаємо нашого розробника!\n\nПрізвище: ${surname}\nІм'я: ${name}\nПосада: ${position}`)
}

function signUpForTour() {
  alert('Ви обрали цей тур!');
}

const menuButton = document.getElementById('menu-button');
const menuBlock = document.getElementById('side-menu');
const menuOverlay = document.getElementById('menu-overlay');

menuButton.addEventListener('click', toggleSideMenu);
menuOverlay.addEventListener('click', toggleSideMenu)

function toggleSideMenu(event) {
  const clickedElement = event.target;

  menuOverlay.style.display = clickedElement === menuButton ? 'block' : 'none';
  menuOverlay.style.opacity = clickedElement === menuButton ? '1' : '0';
  menuBlock.style.left = clickedElement === menuButton ? '0' : '-300px';
}

class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
  }

  becomeInstructor() { alert('Хочу стати інстурктором'); }

  signUpForHike() { alert('Записатись в похід'); }

  searchTour() { alert('Знайти тур'); }

  getConsultation() { alert('Отримати консультацію'); }

  onClick(event) {
    let action = event.target.dataset.action;

    if (action) { this[action](); }
  }
}

new Menu(menuBlock);

