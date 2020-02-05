class Todo {
  constructor(title, description, dueDate, priority) {
    this.id = `todo_${Math.random().toString(36).substr(2, 9)}`;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = false;
  }

  toggle() {
    this.checked = !this.checked;
  }
}

export default Todo;
