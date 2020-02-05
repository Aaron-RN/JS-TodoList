class TodoView {
  constructor(todo, projectId) {
    this.projectId = projectId;
    this.todoContent = document.createElement('div');
    this.todoContent.setAttribute('id', todo.id);
    this.todoContent.classList.add('todo');
    this.todoChecked = document.createElement('input');
    this.todoChecked.classList.add('inline-block');
    this.todoChecked.setAttribute('type', 'checkbox');
    const todoTitle = document.createElement('div');
    todoTitle.innerHTML = todo.title;
    const todoDueDate = document.createElement('div');
    todoDueDate.innerHTML = todo.dueDate;

    this.todoContent.appendChild(this.todoChecked);
    this.todoContent.appendChild(todoTitle);
    this.todoContent.appendChild(todoDueDate);
  }

  render() {
    const projectDiv = document.querySelector(`#${this.projectId}`);
    projectDiv.appendChild(this.todoContent);
  }
}

export default TodoView;
