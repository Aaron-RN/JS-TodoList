import './css/main.css';
import './css/modal.css';
import initHomePage from './home';
import initModal from './modal';
import Todo from './models/todo';
import Project from './models/project';

// Refacture later
const allProjects = [];

// Home Page New Todo Button Brings up Modal
const NewTodo = (e) => {
  const todoBtn = e.target;
  const todoBtnID = parseInt(todoBtn.dataset.id, Math.radix);

  const project = allProjects.find((proj) => proj.getID() === todoBtnID);
  
  initHomePage.setSelectedProject(project);
  initModal.show(e);
};

// Function for Modal New Project Button
function AddProject() {
  const id = allProjects.length + 1;
  const title = initModal.getProjectTitleInput();

  const projectContent = document.createElement('div');
  projectContent.setAttribute('id', id);
  projectContent.classList.add('container');

  const projectTodoContent = document.createElement('div');
  
  const header = document.createElement('h3');
  header.innerHTML = title;

  const newTodoBtn = document.createElement('button');
  newTodoBtn.classList.add('button-todo');
  newTodoBtn.classList.add('btn-plus');
  newTodoBtn.setAttribute('data-id', id.toString());
  newTodoBtn.innerHTML = 'New Todo';


  projectContent.appendChild(header);
  projectContent.appendChild(projectTodoContent);
  projectContent.appendChild(newTodoBtn);
  document.body.appendChild(projectContent);

  const project = Project(id, title);
  project.setProjElement(projectTodoContent);
  allProjects.push(project);
  
  initHomePage.allTodos(NewTodo);
  initModal.hide();
}

//Function for Modal New Todo Button
function AddTodo() {
  const project = initHomePage.getSelectedProject();
  const projectDiv = project.getProjElement();
  const title = initModal.getTodoTitleInput();
  const desc = initModal.getTodoDescriptionInput();
  const dueDate = initModal.getTodoDueDateInput();
  const priority = initModal.getTodoPriorityInput();
  
  const todo = Todo(title, desc, dueDate, priority);
  project.addTodo(todo);
  
  const todoContent = document.createElement('div');
  todoContent.setAttribute('id', todo.id);
  todoContent.classList.add('todo');
  const todoChecked = document.createElement('input');
  todoChecked.classList.add('inline-block');
  todoChecked.setAttribute('type', 'checkbox');
  const todoTitle = document.createElement('div');
  todoTitle.innerHTML = todo.title;
  const todoDueDate = document.createElement('div');
  todoDueDate.innerHTML = todo.dueDate;

  todoContent.appendChild(todoChecked);
  todoContent.appendChild(todoTitle);
  todoContent.appendChild(todoDueDate);
  projectDiv.appendChild(todoContent);

  initModal.hide();
}

document.body.appendChild(initHomePage.init());
document.body.appendChild(initModal.init());

// Add eventlistner on click NewProject to New Project HTML Button
initHomePage.newProject(initModal.show);
initModal.addProjectBtn(AddProject);
initModal.addTodoBtn(AddTodo);
