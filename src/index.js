import './css/main.css';
import './css/modal.css';
import initHomePage from './home';
import initModal from './modal';
import Todo from './models/todo';
import Project from './models/project';

// Refacture later
const allProjects = [];

// Home Page New Todo Button
const NewTodo = (e) => {
  const todoBtn = e.target;
  const todoBtnID = parseInt(todoBtn.dataset.id, Math.radix);
  const projectElem = todoBtn.parentElement;

  const project = allProjects.find((proj) => proj.getID() === todoBtnID);
  alert(`This todo will be assigned to the Project: ID: ${project.getID()} Title: ${project.title}`);
  initModal.show('Todo');
};

// Function for Modal New Project Button
function NewProject() {
  const title = initModal.getProjectTitleInput().toString();
  const id = allProjects.length + 1;

  const projectContent = document.createElement('div');
  projectContent.setAttribute('id', id);
  projectContent.classList.add('container');

  const header = document.createElement('h3');
  header.innerHTML = title;

  const newTodoBtn = document.createElement('button');
  newTodoBtn.classList.add('button-todo');
  newTodoBtn.classList.add('btn-plus');
  newTodoBtn.setAttribute('data-id', id.toString());
  newTodoBtn.innerHTML = 'New Todo';


  projectContent.appendChild(header);
  projectContent.appendChild(newTodoBtn);
  document.body.appendChild(projectContent);

  const project = Project(id, title);
  allProjects.push(project);
  initHomePage.allTodos(NewTodo);

  initModal.hide();
}

document.body.appendChild(initHomePage.init());
document.body.appendChild(initModal.init());

// Add eventlistner on click NewProject to New Project HTML Button
initHomePage.newProject(initModal.show);
initModal.addProjectBtn(NewProject);
