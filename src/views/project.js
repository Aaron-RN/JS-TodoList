// Function creates HTML related to Project object;
function NewProjectHTML(project) {
  const projectContent = document.createElement('div');
  projectContent.setAttribute('id', project.id);
  projectContent.classList.add('project');

  const projectTodoContent = document.createElement('div');

  const header = document.createElement('h3');
  header.innerHTML = project.title;

  const newTodoBtn = document.createElement('button');
  newTodoBtn.classList.add('button-todo');
  newTodoBtn.classList.add('btn-plus');
  newTodoBtn.setAttribute('data-id', project.id.toString());
  newTodoBtn.innerHTML = 'New Todo';


  projectContent.appendChild(header);
  projectContent.appendChild(projectTodoContent);
  projectContent.appendChild(newTodoBtn);
  document.querySelector('#main').appendChild(projectContent);

  return projectTodoContent;
}

export default NewProjectHTML;
