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

    this.content.appendChild(header);
    this.content.appendChild(this.newProjectBtn);

    this.modal.addProjectBtn(() => {
      const project = this.modal.getNewProject();
      if (!project) { return; }

      this.projectList.addProject(project);
      this.renderNewProject(project);
      this.modal.hide();
    });

    this.modal.addTodoBtn(() => {
      const { todo, projectId } = this.modal.getNewTodo();
      if (!todo || !projectId) { return; }

      this.projectList.getProject(projectId).addTodo(todo);
      this.projectList.save();
      this.renderNewTodo(todo, projectId);
      this.modal.hide();
    });
  }

  renderNewTodo(todo, projectId) {
    const todoView = new TodoView(todo, projectId);

    todoView.todoChecked.addEventListener('click', () => {
      const project = this.projectList.getProject(projectId);
      project.toggleTodo(todo.id);
      this.projectList.save();
    });

    todoView.deleteTodoBtn.addEventListener('click', () => {
      const project = this.projectList.getProject(projectId);
      todoView.todoContent.remove();
      project.removeTodo(todo.id);
      this.projectList.save();
    });

    todoView.render();
  }

  renderNewProject(project) {
    const projectView = new ProjectView(project);
    projectView.newTodoBtn.addEventListener('click', (e) => {
      const projectId = e.target.parentNode.id;
      this.modal.showNewTodo(projectId);
    });
    projectView.render();
    project.todos.forEach((todo) => { this.renderNewTodo(todo, project.id); });
  }

  render() {
    document.body.appendChild(this.modalDiv);
    document.body.appendChild(this.content);
    this.projectList.projects.forEach((project) => { this.renderNewProject(project); });
  }
}

export default Home;
