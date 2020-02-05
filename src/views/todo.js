function AddTodoHTML(todo, projectDiv) {
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
}

export default AddTodoHTML;
