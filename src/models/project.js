const allProjects = [];

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
function NewProjectHTML(id, title){
  const projectContent = document.createElement('div');
  projectContent.setAttribute('id', id);
  projectContent.classList.add('container');

  const projectTodoContent = document.createElement('div');
  
  const header = document.createElement('h3');
  header.innerHTML = title;

  const newTodoBtn = document.createElement('button');
  newTodoBtn.classList.add('button-todo');
  newTodoBtn.classList.add('btn-plus');
  newTodoBtn.setAttribute('data-id', id.toString());
  newTodoBtn.innerHTML = 'New Todo';


  projectContent.appendChild(header);
  projectContent.appendChild(projectTodoContent);
  projectContent.appendChild(newTodoBtn);
  document.body.appendChild(projectContent);
  
  return projectTodoContent;
}

export {Project, NewProjectHTML, allProjects};
