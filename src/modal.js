const initModal = (() => {
  let modal;
  let exitBtn;
  let newProjectDiv;
  let projectTitleInput;
  let projectAddBtn;

  const getProjectTitleInput = () => projectTitleInput.value;
  const addProjectBtn = (funct) => projectAddBtn.addEventListener('click', funct);
  const show = () => {
    modal.classList = 'modal show';
    projectTitleInput.value = '';
    projectTitleInput.focus();
  };
  const hide = () => { modal.classList = 'modal'; };

  const init = () => {
    modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    exitBtn = document.createElement('div');
    exitBtn.classList.add('exit');
    exitBtn.innerHTML = 'x';
    exitBtn.addEventListener('click', hide);

    newProjectDiv = document.createElement('div');
    newProjectDiv.setAttribute('id', 'newProject');

    const header = document.createElement('h2');
    header.innerHTML = 'New Project';

    const projectLabel = document.createElement('div');
    projectLabel.classList = 'label center';

    projectTitleInput = document.createElement('input');
    projectTitleInput.setAttribute('type', 'text');
    projectTitleInput.setAttribute('placeholder', 'eg. Daily Chores');
    projectTitleInput.classList = 'center';

    projectAddBtn = document.createElement('button');
    projectAddBtn.classList.add('button');
    projectAddBtn.classList.add('center');
    projectAddBtn.innerHTML = 'Add Project';

    modal.appendChild(modalContent);
    modalContent.appendChild(exitBtn);
    modalContent.appendChild(newProjectDiv);
    newProjectDiv.appendChild(header);
    newProjectDiv.appendChild(projectLabel);
    projectLabel.appendChild(projectTitleInput);
    newProjectDiv.appendChild(projectAddBtn);

    return modal;
  };
  return {
    init, addProjectBtn, show, hide, getProjectTitleInput,
  };
})();

export default initModal;
