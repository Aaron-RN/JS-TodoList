import '../css/modal.css';
import Project from '../models/project';
import Todo from '../models/todo';

// Generates two new elements and returns the parent element
function NewInputElement(type, innerhtml, placeholder = '') {
  const todoTitleLabel = document.createElement('div');
  todoTitleLabel.classList = 'label center';
  todoTitleLabel.innerHTML = innerhtml;

  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', type);
  if (type === 'text') { inputElement.setAttribute('placeholder', placeholder); }
  if (type === 'number') { inputElement.setAttribute('min', 1); inputElement.setAttribute('max', 3); }
  inputElement.classList = 'center';

  todoTitleLabel.appendChild(inputElement);

  return todoTitleLabel;
}

// Generates a new button element with possible text within variable
// and a value for data-button attribute
function NewButtonElement(text, dataValue) {
  const btn = document.createElement('button');
  btn.classList.add('button');
  btn.classList.add('center');
  btn.setAttribute('data-button', dataValue);
  btn.innerHTML = text;

  return btn;
}

const modal = (() => {
  let modalDiv;
  let exitBtn;
  // Project related elements
  let newProjectDiv;
  let projectTitleInput;
  let projectAddBtn;
  // Todo related elements
  let newTodoDiv;
  let todoProjectIdInput;
  let todoTitleInput;
  let todoDescriptionInput;
  let todoDueDateInput;
  let todoPriorityInput;
  let todoAddBtn;

  const getProjectId = () => todoProjectIdInput.value;
  const setProjectId = (projectId) => { todoProjectIdInput.value = projectId; };
  const getProjectTitleInput = () => projectTitleInput.value.toString();
  const addProjectBtn = (funct) => projectAddBtn.addEventListener('click', funct);
  const getTodoTitleInput = () => todoTitleInput.value.toString();
  const getTodoDescriptionInput = () => todoDescriptionInput.value.toString();
  const getTodoDueDateInput = () => todoDueDateInput.value;
  const getTodoPriorityInput = () => todoPriorityInput.value;
  const addTodoBtn = (funct) => todoAddBtn.addEventListener('click', funct);
  const ElementHide = (element) => { element.classList.add('hide'); };
  const ElementShow = (element) => { element.classList.remove('hide'); };
  const hide = () => { modalDiv.classList = 'modal'; };
  const show = () => {
    modalDiv.classList = 'modal show';
    projectTitleInput.value = '';
    todoTitleInput.value = '';
    todoDescriptionInput.value = '';
    todoDueDateInput.value = '';
    todoPriorityInput.value = '';
  };

  const showNewProject = () => {
    show();
    projectTitleInput.focus();
    ElementHide(newTodoDiv);
    ElementShow(newProjectDiv);
  };

  const showNewTodo = (projectId) => {
    setProjectId(projectId);
    show();
    todoTitleInput.focus();
    ElementHide(newProjectDiv);
    ElementShow(newTodoDiv);
  };

  const getNewProject = () => {
    const title = getProjectTitleInput();
    return new Project(title);
  };

  const getNewTodo = () => {
    const title = getTodoTitleInput();
    const desc = getTodoDescriptionInput();
    const dueDate = getTodoDueDateInput();
    const priority = getTodoPriorityInput();

    return { projectId: getProjectId(), todo: new Todo(title, desc, dueDate, priority) };
  };

  const init = () => {
    modalDiv = document.createElement('div');
    modalDiv.classList.add('modal');

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

    const projectLabel = NewInputElement('text', 'Title', 'eg. Daily Chores');
    projectTitleInput = projectLabel.firstElementChild;

    projectAddBtn = NewButtonElement('Add Project', 'New Project');

    //  New Todo Related Elements
    newTodoDiv = document.createElement('div');
    newTodoDiv.setAttribute('id', 'newTodo');

    const header2 = document.createElement('h2');
    header2.innerHTML = 'New Todo';

    todoProjectIdInput = document.createElement('input');
    todoProjectIdInput.type = 'hidden';
    const todoTitleLabel = NewInputElement('text', 'Title', 'eg. Wash car');
    todoTitleInput = todoTitleLabel.firstElementChild;
    const todoDescriptionLabel = NewInputElement('text', 'Description', 'eg. Wash the car really good');
    todoDescriptionInput = todoDescriptionLabel.firstElementChild;
    const todoDueDateLabel = NewInputElement('date', 'Due Date');
    todoDueDateInput = todoDueDateLabel.firstElementChild;
    const todoPriorityLabel = NewInputElement('number', 'Priority', 'eg. 1 for lowest and 3 for highest');
    todoPriorityInput = todoPriorityLabel.firstElementChild;

    todoAddBtn = NewButtonElement('Add Todo', 'New Todo');

    modalDiv.appendChild(modalContent);
    modalContent.appendChild(exitBtn);
    // Append Project Elements
    modalContent.appendChild(newProjectDiv);
    newProjectDiv.appendChild(header);
    newProjectDiv.appendChild(projectLabel);
    newProjectDiv.appendChild(projectAddBtn);
    // Append Todo Elements
    modalContent.appendChild(newTodoDiv);
    newTodoDiv.appendChild(header2);
    newTodoDiv.appendChild(todoTitleLabel);
    newTodoDiv.appendChild(todoDescriptionLabel);
    newTodoDiv.appendChild(todoDueDateLabel);
    newTodoDiv.appendChild(todoPriorityLabel);
    newTodoDiv.appendChild(todoAddBtn);

    return modalDiv;
  };
  return {
    init,
    addProjectBtn,
    addTodoBtn,
    showNewProject,
    showNewTodo,
    hide,
    getProjectId,
    setProjectId,
    getNewProject,
    getNewTodo,
  };
})();

export default modal;
