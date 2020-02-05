class ProjectList {
  constructor() {
    this.projects = [];
  }

  getProject(projectId) {
    return this.projects.find((project) => project.id === projectId);
  }

  addProject(project) {
    this.projects.push(project);
  }

  removeProject(projectId) {
    const index = this.project.findIndex((project) => project.id === projectId);
    this.project.splice(index, 1);
  }
}

export default ProjectList;
