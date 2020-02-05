import './css/main.css';
import './css/modal.css';
import initHomePage from './home';
import initModal from './modal';
import Todo from './models/todo';
import Project from './models/project';
import AddTodoHTML from './views/todo';
import NewProjectHTML from './views/project';
import projectList from './models/project-list';

// Home Page  + New Todo Button Brings up Modal
const NewTodo = (e) => {
  const todoBtn = e.target;
  const todoBtnID = todoBtn.dataset.id;

  const project = projectList.getProject(todoBtnID);

  initHomePage.setSelectedProject(project);
  initModal.show(e);
};

// Function for Modal Button New Project Button
function AddProject() {
  const title = initModal.getProjectTitleInput();
  const project = new Project(title);
  const projectTodoContent = NewProjectHTML(project);
  projectList.addProject(project);
  initHomePage.allTodos(NewTodo);
  initModal.hide();
}

// Function for Modal Button New Todo Button
function AddTodo(e) {
  const project = initHomePage.getSelectedProject();
  const projectDiv = document.querySelector(`#${project.id}`);
  const title = initModal.getTodoTitleInput();
  const desc = initModal.getTodoDescriptionInput();
  const dueDate = initModal.getTodoDueDateInput();
  const priority = initModal.getTodoPriorityInput();

  const todo = new Todo(title, desc, dueDate, priority);
  project.addTodo(todo);

  AddTodoHTML(todo, projectDiv);

  initModal.hide();
}

document.body.appendChild(initModal.init());
document.body.appendChild(initHomePage.init());

// Add eventlistners 'on click' To all buttons... the two Modal buttons and the homepage New Project Button
initHomePage.newProject(initModal.show);
initModal.addProjectBtn(AddProject);
initModal.addTodoBtn(AddTodo);
