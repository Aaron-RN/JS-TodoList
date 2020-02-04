const Project = (id, title) => {
  const todos = [];
  const getID = () => id;
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
    title, getTodos, addTodo, removeTodo, getTodo, getID,
  };
};

// Function creates HTML related to Project object;

export default Project;
