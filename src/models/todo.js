const Todo = (title, description, dueDate, priority) => {
  const id = Math.random().toString(36).substr(2, 9);
  let checked = false;
  const getChecked = () => checked;
  const toggle = () => {
    checked = !checked;
  };

  return {
    id, title, description, dueDate, priority, getChecked, toggle,
  };
};

export default Todo;
