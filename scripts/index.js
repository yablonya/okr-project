let username = prompt("Введіть своє ім'я для авторизації");

function showUsername() {
  if (username) {
    document.getElementById('username').outerHTML = `
        <h4 
          style="
              display: flex;
              justify-content: center;
              gap: 8px;
              align-items: center;"
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