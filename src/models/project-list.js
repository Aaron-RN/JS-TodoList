import Project from './project';
import Todo from './todo';

class ProjectList {
  constructor() {
    // For testing only
    // Replace this with loading projects from local storage
    const project1 = new Project('Project 1');
    project1.addTodo(new Todo('Todo 1', 'Description 1', '2020/02/02', 3));
    project1.addTodo(new Todo('Todo 2', 'Description 2', '2020/02/02', 3));
    const project2 = new Project('Project 1');
    project2.addTodo(new Todo('Todo 3', 'Description 3', '2020/02/02', 3));
    project2.addTodo(new Todo('Todo 4', 'Description 4', '2020/02/02', 3));
    this.projects = [
      project1,
      project2,
    ];
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
