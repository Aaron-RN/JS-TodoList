import Event from './event';

class ProjectList {
  constructor() {
    this.projects = [];
    this.addProjectEvent = new Event(this);
    this.removeProjectEvent = new Event(this);
  }

  getProject(projectId) {
    return this.projects.find((project) => project.id === projectId);
  }

  addProject(project) {
    this.projects.push(project);
    this.addProjectEvent.notify(project);
  }

  removeProject(projectId) {
    const index = this.project.findIndex((project) => project.id === projectId);
    const removedProject = this.project.splice(index, 1)[0];
    this.removeProjectEvent.notify(removedProject);
  }
}

const projectList = new ProjectList();

export default projectList;
