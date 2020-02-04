import './css/main.css';
import './css/modal.css';
import initHomePage from './home';
import initModal from './modal';
import { Todo, AddTodoHTML } from './models/todo';
import { Project, NewProjectHTML, allProjects } from './models/project';

// Home Page  + New Todo Button Brings up Modal
const NewTodo = (e) => {
  const todoBtn = e.target;
  const todoBtnID = parseInt(todoBtn.dataset.id, Math.radix);

  const project = allProjects.find((proj) => proj.getID() === todoBtnID);
  
  initHomePage.setSelectedProject(project);
  initModal.show(e);
};

// Function for Modal Button New Project Button
function AddProject() {
  const id = allProjects.length + 1;
  const title = initModal.getProjectTitleInput();

  const projectTodoContent = NewProjectHTML(id, title);

  const project = Project(id, title);
  project.setProjElement(projectTodoContent);
  allProjects.push(project);
  
  initHomePage.allTodos(NewTodo);
  initModal.hide();
}

//Function for Modal Button New Todo Button
function AddTodo() {
  const project = initHomePage.getSelectedProject();
  const projectDiv = project.getProjElement();
  const title = initModal.getTodoTitleInput();
  const desc = initModal.getTodoDescriptionInput();
  const dueDate = initModal.getTodoDueDateInput();
  const priority = initModal.getTodoPriorityInput();
  
  const todo = Todo(title, desc, dueDate, priority);
  project.addTodo(todo, projectDiv);
  
  AddTodoHTML(todo, projectDiv);

  initModal.hide();
}

document.body.appendChild(initModal.init());
document.body.appendChild(initHomePage.init());

// Add eventlistners 'on click' To all buttons... the two Modal buttons and the homepage New Project Button
initHomePage.newProject(initModal.show);
initModal.addProjectBtn(AddProject);
initModal.addTodoBtn(AddTodo);
