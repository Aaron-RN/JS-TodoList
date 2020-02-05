import './css/main.css';
import Home from './views/home';
import ProjectList from './models/project-list';

const home = new Home(new ProjectList());

home.render();
