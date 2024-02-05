import { decorateLinks, highlighters } from '../../components/header/header';
import { myProjects } from '../../data/myProjects';
import './Projects.css';

const createProjectTemplate = (project, color) => `
<article class="project-container flex-container">
  <h2 class="project-name ${color} slidein">${project.title}</h2>
  <div class="project-description flex-container">
    <div class="project-image-container">
      <div>
        <img src="${project.screenshot}" alt="${project.imgDescription}">
        <a href="${project.liveUrl}" class="overlay" target="_blank" rel="noopener">
          <span>Go to the website</span>
        </a>
      </div>
      <div class="drawer">
        <a href="${project.gitHubUrl}" class="view-code" target="_blank" rel="noopener">
          <img src="/assets/codigo.png">
          See web code
        </a>
      </div>
    </div>
    <div class="project-details">
      <p>${project.description}</p>
    </div>
  </div>
</article>
`;

export const createProjectsSection = (projectList, colorList) => {
  const main = document.querySelector('#app');
  const $projectsContainer = document.createElement('section');
  $projectsContainer.id = 'proyectos';
  $projectsContainer.classList.add('article-container', 'flex-container');

  projectList.forEach((element, index) => {
    const colorIndex = index % colorList.length;
    $projectsContainer.innerHTML += createProjectTemplate(
      element,
      colorList[colorIndex]
    );
  });

  main.innerHTML = '';
  main.append($projectsContainer);
  $projectsContainer.classList.add('fade-in');
};

export const Projects = () => {
  decorateLinks();
  const projectsNav = document.querySelector('a[href="#Projects"]');
  projectsNav.parentElement.classList.add('highlighted');
  return createProjectsSection(myProjects, highlighters);
};
