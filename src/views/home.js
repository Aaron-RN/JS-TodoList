import modal from './modal';
import ProjectView from './project';
import TodoView from './todo';

class Home {
  constructor(projectList) {
    this.projectList = projectList;
    this.modal = modal;
    this.modalDiv = this.modal.init();
    this.content = document.createElement('div');
    this.content.setAttribute('id', 'main');
    this.content.classList.add('container');

    const header = document.createElement('h1');
    header.innerHTML = 'Todo List';

    this.newProjectBtn = document.createElement('button');
    this.newProjectBtn.id = 'new-project';
    this.newProjectBtn.classList.add('button');
    this.newProjectBtn.classList.add('btn-plus');
    this.newProjectBtn.innerHTML = 'New Project';
    this.newProjectBtn.addEventListener('click', this.modal.showNewProject);

    this.modal.addProjectBtn(() => {
      const project = this.modal.getNewProject();
      const projectView = new ProjectView(project);
      projectView.newTodoBtn.addEventListener('click', (e) => {
        const projectId = e.target.parentNode.id;
        this.modal.showNewTodo(projectId);
      });

      this.projectList.addProject(project);
      this.modal.hide();
      projectView.render();
    });

    this.modal.addTodoBtn(() => {
      const { projectId, todo } = this.modal.getNewTodo();
      const todoView = new TodoView(todo, projectId);

      this.projectList.getProject(projectId).addTodo(todo);
      this.modal.hide();
      todoView.render();
    });

    this.content.appendChild(header);
    this.content.appendChild(this.newProjectBtn);
  }

  render() {
    document.body.appendChild(this.modalDiv);
    document.body.appendChild(this.content);
  }
}

export default Home;
