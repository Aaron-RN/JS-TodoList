import Event from './event';

class Project {
  constructor(title) {
    this.id = `project_${Math.random().toString(36).substr(2, 9)}`;
    this.title = title;
    this.todos = [];
    this.addTodoEvent = new Event(this);
    this.removeTodoEvent = new Event(this);
    this.toggleTodoEvent = new Event(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
    this.addTodoEvent.notify(todo);
  }

  removeTodo(todoId) {
    const index = this.todos.findIndex((todo) => todo.id === todoId);
    const removedTodo = this.todos.splice(index, 1)[0];
    this.removeTodoEvent.notify(removedTodo);
  }

  toggleTodo(todoId) {
    const index = this.todos.findIndex((todo) => todo.id === todoId);
    const toggledTodo = this.todos.splice(index, 1)[0];
    toggledTodo.toggle();
    this.toggleTodoEvent.notify(toggledTodo);
  }
}

export default Project;
