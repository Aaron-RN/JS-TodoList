import '../css/todo.css';
import { format } from 'date-fns'

class TodoView {
  constructor(todo, projectId) {
    this.projectId = projectId;
    this.todoContent = document.createElement('div');
    this.todoContent.setAttribute('id', todo.id);
    this.todoContent.classList.add('todo');
    this.todoChecked = document.createElement('input');
    this.todoChecked.classList.add('inline-block');
    this.todoChecked.setAttribute('type', 'checkbox');
    this.todoChecked.checked = todo.checked;
    const todoCard = document.createElement('div');
    todoCard.className = 'todo-card';
    if(todo.checked) {
      todoCard.classList.add('striked');
    }
    const todoTitle = document.createElement('p');
    todoTitle.innerHTML = todo.title;
    todoTitle.classList.add('todo-title');

    const todoPriority = document.createElement('span');
    todoPriority.classList.add('priority');
    todoPriority.classList.add(`priority-${todo.priority}`);
    todoTitle.appendChild(todoPriority);

    const todoDescription = document.createElement('p');
    todoDescription.innerHTML = todo.description;
    todoDescription.classList.add('todo-description');
    todoDescription.classList.add('hide');

    const todoDueDate = document.createElement('div');
    todoDueDate.classList.add('due-date');
    todoDueDate.innerHTML = format(new Date(todo.dueDate), "MMM do");

    todoCard.appendChild(todoTitle);
    todoCard.appendChild(todoDescription);

    this.todoContent.appendChild(this.todoChecked);
    this.todoContent.appendChild(todoCard);
    this.todoContent.appendChild(todoDueDate);

    this.deleteTodoBtn = document.createElement('button');
    this.deleteTodoBtn.innerHTML = '&times;';
    this.todoContent.appendChild(this.deleteTodoBtn);

    todoCard.addEventListener('click', () => {
      todoDescription.classList.toggle('hide');
    });

    this.todoChecked.addEventListener('click', () => {
      todoCard.classList.toggle('striked');
    });
  };

  render() {
    const projectDiv = document.querySelector(`#${this.projectId}`);
    projectDiv.appendChild(this.todoContent);
  }
}

export default TodoView;
