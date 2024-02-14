const todoArray = JSON.parse(localStorage.getItem('array')) || [{
  name: 'dishes',
  date: 'The fourth'
}];
renderTodo(); // just in case there's stuff in todoArray on first opening the page.


function getInfo() {
  const inputElement = document.querySelector('.js-todo-name-input');
  const name = inputElement.value;
  const dateElement = document.querySelector('.js-date-input');
  const date = dateElement.value;
  todoArray.push({
    name,
    date
  });
  inputElement.value = '';

  renderTodo();

  localStorage.setItem('array', JSON.stringify(todoArray));
}

function renderTodo() {
  let htmlList = '';   // gotta make a fresh empty html each time we call this function.
  for(let i = 0; i < todoArray.length; i++) {
    const current = todoArray[i];
    const { name, date } = current;
    const html = `
    <div>${name}</div>
    <div>${date}</div>
    <button class="delete-button" onclick="
      todoArray.splice(${i}, 1);
      renderTodo();
    ">Delete</button>
    `;
    htmlList += html;

  }

  document.querySelector('.js-space').innerHTML = htmlList;
  
}