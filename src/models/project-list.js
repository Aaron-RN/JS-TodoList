import Project from './project';
import Todo from './todo';

class ProjectList {
  constructor() {
    const storedProjects = localStorage.getItem('projects')
    if (storedProjects) {
      this.projects = JSON.parse(storedProjects).map((storedProject) => {
        const project = Object.assign(new Project(), storedProject);
        project.todos = project.todos.map((storedTodo) => Object.assign(new Todo(), storedTodo));

        return project;
      });
    } else {
      this.projects = [];
    }
  }

  getProject(projectId) {
    return this.projects.find((project) => project.id === projectId);
  }

  addProject(project) {
    this.projects.push(project);
    this.save();
  }

  removeProject(projectId) {
    const index = this.project.findIndex((project) => project.id === projectId);
    this.project.splice(index, 1);
    this.save();
  }

  save() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }
}

export default ProjectList;
