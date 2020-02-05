class Project {
  constructor(title) {
    this.id = `project_${Math.random().toString(36).substr(2, 9)}`;
    this.title = title;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todoId) {
    const index = this.todos.findIndex((todo) => todo.id === todoId);
    this.todos.splice(index, 1);
  }

  toggleTodo(todoId) {
    const todo = this.todos.find((t) => t.id === todoId);
    todo.toggle();
  }
}

export default Project;
