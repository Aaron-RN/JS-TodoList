import './main.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Test';
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());
