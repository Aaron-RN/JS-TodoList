import './main.css';
import Todo from './models/todo';
import Project from './models/project';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Test changed!';
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());

const project = Project('Project!');
console.log(project.title);

project.addTodo(Todo('title', 'description', 'due date', 5));
project.addTodo(Todo('title 2', 'description', 'due date', 3));
project.addTodo(Todo('title 3', 'description', 'due date', 2));
project.addTodo(Todo('title 4', 'description', 'due date', 1));

project.removeTodo(project.getTodos()[0].id);
console.log(project.getTodos()[1]);
project.getTodo(project.getTodos()[1].id).toggle();
console.log(project.getTodos());
