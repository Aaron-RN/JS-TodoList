const initModal = (() => {
  let modal;
  let exitBtn;
  //Project related elements
  let newProjectDiv;
  let projectTitleInput;
  let projectAddBtn;
  //Todo related elements
  let newTodoDiv;
  let todoTitleInput;
  let todoDescriptionInput;
  let todoDueDateInput;
  let todoPriorityInput;
  let todoAddBtn;
  
  const getProjectTitleInput = () => projectTitleInput.value.toString();
  const addProjectBtn = (funct) => projectAddBtn.addEventListener('click', funct);
  const getTodoTitleInput = () => todoTitleInput.value.toString();
  const getTodoDescriptionInput = () => todoDescriptionInput.value.toString();
  const getTodoDueDateInput = () => todoDueDateInput.value;
  const getTodoPriorityInput = () => todoPriorityInput.value;
  const addTodoBtn = (funct) => todoAddBtn.addEventListener('click', funct);
  const ElementHide = (element) => { element.classList = 'hide'; };
  const ElementShow = (element) => { element.classList = ''; };
  const hide = () => { modal.classList = 'modal'; };
  const show = (e) => {
    const btn = e.target;
    const newObject = btn.innerHTML;
    modal.classList = 'modal show';
    projectTitleInput.value = '';
    todoTitleInput.value = '';
    todoDescriptionInput.value = '';
    todoDueDateInput.value = '';
    todoPriorityInput.value = '';
    if (newObject === 'New Project'){
      projectTitleInput.focus();
      ElementHide(newTodoDiv);
      ElementShow(newProjectDiv);
    }
    if (newObject === 'New Todo'){
      ElementHide(newProjectDiv);
      ElementShow(newTodoDiv);
      todoTitleInput.focus();
    }
  };

  const init = () => {
    modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    exitBtn = document.createElement('div');
    exitBtn.classList.add('exit');
    exitBtn.innerHTML = 'x';
    exitBtn.addEventListener('click', hide);

    //  New Project Related Elements
    newProjectDiv = document.createElement('div');
    newProjectDiv.setAttribute('id', 'newProject');

    const header = document.createElement('h2');
    header.innerHTML = 'New Project';

    const projectLabel = NewInputElement('text', projectTitleInput, 'eg. Daily Chores', 'Title');
    projectTitleInput = projectLabel.firstElementChild;
    
    projectAddBtn = NewButtonElement('Add Project', 'New Project');

    //  New Todo Related Elements
    newTodoDiv = document.createElement('div');
    newTodoDiv.setAttribute('id', 'newTodo');

    const header2 = document.createElement('h2');
    header2.innerHTML = 'New Todo';

    const todoTitleLabel = NewInputElement('text', todoTitleInput, 'eg. Wash car', 'Title');
    todoTitleInput = todoTitleLabel.firstElementChild;
    const todoDescriptionLabel = NewInputElement('text', todoDescriptionInput, 'eg. Wash car', 'Description');
    todoDescriptionInput = todoDescriptionLabel.firstElementChild;
    const todoDueDateLabel = NewInputElement('date', todoDueDateInput, 'eg. Wash car', 'Due Date');
    todoDueDateInput = todoDueDateLabel.firstElementChild;
    const todoPriorityLabel = NewInputElement('number', todoPriorityInput, 'eg. 1 for lowest and 3 for highest', 'Priority');
    todoPriorityInput = todoPriorityLabel.firstElementChild;

    todoAddBtn = NewButtonElement('Add Todo', 'New Todo');
    
    modal.appendChild(modalContent);
    modalContent.appendChild(exitBtn);
    // Append Project Elements
    modalContent.appendChild(newProjectDiv);
    newProjectDiv.appendChild(header);
    newProjectDiv.appendChild(projectLabel);
    newProjectDiv.appendChild(projectAddBtn);
    //Append Todo Elements
    modalContent.appendChild(newTodoDiv);
    newTodoDiv.appendChild(header2);
    newTodoDiv.appendChild(todoTitleLabel);
    newTodoDiv.appendChild(todoDescriptionLabel);
    newTodoDiv.appendChild(todoDueDateLabel);
    newTodoDiv.appendChild(todoPriorityLabel);
    newTodoDiv.appendChild(todoAddBtn);

    return modal;
  };
  return {
    init, addProjectBtn, addTodoBtn, show, hide, getProjectTitleInput,
    getTodoTitleInput, getTodoDescriptionInput, getTodoDueDateInput, getTodoPriorityInput,
  };
})();

// Generates two new elements and returns the parent element
function NewInputElement(type, inputElement, placeholder = "", innerhtml){
  const todoTitleLabel = document.createElement('div');
  todoTitleLabel.classList = 'label center';
  todoTitleLabel.innerHTML= innerhtml;

  inputElement = document.createElement('input');
  inputElement.setAttribute('type', type);
  if (type === 'text'){ inputElement.setAttribute('placeholder', placeholder);}
  if (type === 'number'){ inputElement.setAttribute('min', 1);inputElement.setAttribute('max', 3);}
  inputElement.classList = 'center';
  
  todoTitleLabel.appendChild(inputElement);
  
  return todoTitleLabel;
}

// Generates a new button element with possible text within variable
// and a value for data-button attribute
function NewButtonElement(text, dataValue){
  const btn = document.createElement('button');
  btn.classList.add('button');
  btn.classList.add('center');
  btn.setAttribute('data-button', dataValue);
  btn.innerHTML = text; 
  
  return btn;
}

export default initModal;
