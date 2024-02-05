import { decorateLinks } from '../../components/header/header';
import { myExperience } from '../../data/experience';
import './Experience.css';

const experienceCard = (experienceInfo) => {
  const container = document.createElement('article');
  container.classList.add('experience-card');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('experience-image');
  imageContainer.style.backgroundImage = `url(${experienceInfo.image})`;

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('experience-content');

  const title = document.createElement('h2');
  title.innerText = experienceInfo.title;

  const duration = document.createElement('p');
  duration.innerText = experienceInfo.description;

  const description = document.createElement('p');
  description.innerText = experienceInfo.company;

  contentContainer.append(title, duration, description);
  container.append(imageContainer, contentContainer);

  return container;
};

const createExperienceSection = (experienceList) => {
  const main = document.querySelector('#app');
  const $experienceContainer = document.createElement('section');
  $experienceContainer.id = 'experiencia';
  $experienceContainer.classList.add('flex-container', 'experience-section');

  experienceList.forEach((element) => {
    $experienceContainer.append(experienceCard(element));
  });

  main.innerHTML = '';
  main.append($experienceContainer);
  $experienceContainer.classList.add('fade-in');
};

export const Experience = () => {
  decorateLinks();
  const experienceNav = document.querySelector('a[href="#Experience"]');
  experienceNav.parentElement.classList.add('highlighted');
  return createExperienceSection(myExperience);
};
