const Project = (id, title) => {
  let projElement;
  const setProjElement = (elem) => projElement = elem;
  const getProjElement = () => projElement;
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
    title, getTodos, addTodo, removeTodo, getTodo, getID, setProjElement, getProjElement,
  };
};

// Function creates HTML related to Project object;

export default Project;
