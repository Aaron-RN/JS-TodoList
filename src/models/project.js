const Project = (title) => {
  const todos = [];
  const getTodos = () => todos;
  const addTodo = (todo) => {
    todos.push(todo);
  };
  const removeTodo = (todoId) => {
    const index = todos.findIndex((todo) => todo.id === todoId);
    todos.splice(index, 1);
  };
  const getTodo = (todoId) => todos.find((t) => t.id === todoId);

  return {
    title, getTodos, addTodo, removeTodo, getTodo,
  };
};

export default Project;
