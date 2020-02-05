class ProjectView {
  constructor(project) {
    this.content = document.createElement('div');
    this.content.id = project.id;
    this.content.classList.add('project');

    const projectTodoContent = document.createElement('div');
    const header = document.createElement('h3');
    header.innerHTML = project.title;

    this.newTodoBtn = document.createElement('button');
    this.newTodoBtn.classList.add('button-todo');
    this.newTodoBtn.classList.add('btn-plus');
    this.newTodoBtn.setAttribute('data-id', project.id.toString());
    this.newTodoBtn.innerHTML = 'New Todo';

    this.content.appendChild(header);
    this.content.appendChild(projectTodoContent);
    this.content.appendChild(this.newTodoBtn);
  }

  render() {
    document.querySelector('#main').appendChild(this.content);
  }
}

export default ProjectView;
