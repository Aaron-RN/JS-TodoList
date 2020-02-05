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
    const todoTitle = document.createElement('div');
    todoTitle.innerHTML = todo.title;
    const todoDescription = document.createElement('div');
    todoDescription.innerHTML = todo.description;
    todoDescription.classList.add('hide');

    const todoDueDate = document.createElement('div');
    todoDueDate.innerHTML = todo.dueDate;

    todoCard.appendChild(todoTitle);
    todoCard.appendChild(todoDescription);

    this.todoContent.appendChild(this.todoChecked);
    this.todoContent.appendChild(todoCard);
    this.todoContent.appendChild(todoDueDate);

    this.deleteTodoBtn = document.createElement('button');
    this.deleteTodoBtn.innerHTML = 'x';
    this.todoContent.appendChild(this.deleteTodoBtn);

    this.todoContent.addEventListener('click', () => {
      todoDescription.classList.toggle('hide');
    });
  };

  render() {
    const projectDiv = document.querySelector(`#${this.projectId}`);
    projectDiv.appendChild(this.todoContent);
  }
}

export default TodoView;
