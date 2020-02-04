const initHomePage = (() => {
  let content;
  let newProjectBtn;
  let selectedProject;

  const setSelectedProject = (proj) => selectedProject = proj;
  const getSelectedProject = () => selectedProject;
  const newProject = (funct) => newProjectBtn.addEventListener('click', funct);
  const allTodos = (funct) => document.querySelectorAll('.button-todo').forEach((btn) => btn.addEventListener('click', funct));

  const init = () => {
    content = document.createElement('div');
    content.setAttribute('id', 'main');
    content.classList.add('container');

    const header = document.createElement('h1');
    header.innerHTML = 'Todo List';

    newProjectBtn = document.createElement('button');
    newProjectBtn.classList.add('button');
    newProjectBtn.classList.add('btn-plus');
    newProjectBtn.innerHTML = 'New Project';

    content.appendChild(header);
    content.appendChild(newProjectBtn);

    return content;
  };
  return {
    init, newProject, allTodos, setSelectedProject, getSelectedProject,
  };
})();


export default initHomePage;
