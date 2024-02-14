const toDoArray = [{
  name: 'make dishes', 
  dueDate: '2024-02-11'}, {
  name: 'wash food',
  dueDate: '2024-02-06'}];

renderTodoList();

function renderTodoList () {    // (2) This function takes the array and gets all the values into a variable that stores HTML format.
  let todoListHTML = '';


  toDoArray.forEach(function(todoObject, index) {    
    const { name, dueDate } = todoObject;     
    const html = `            
    <div>${name}</div>             
    <div>${dueDate}</div>
    <button class="delete-todo-button" onclick="
      toDoArray.splice(${index}, 1);
      renderTodoList();
    " >Delete</button>             
    `;
    todoListHTML += html;   
  });
 

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;  // (4) Putting the paragraphs into an already made div.
}


function toDo() {     // (1) This function takes the input text and pushes it into the array.
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  toDoArray.push({
    //name: name,     // pushing answers into an object.
    //dueDate: dueDate
    name,       // if variable and property are the same, we can do shorthand.
    dueDate});

  inputElement.value = '';  // This takes the value out of the input box once we push the value into the array.

  renderTodoList();
}


// Within renderTodoList, we are generating the HTML with Javascript.
