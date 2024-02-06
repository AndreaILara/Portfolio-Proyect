import { highlighters } from '../components/header/header';
import { myExperience } from '../data/experience';
import { myProjects } from '../data/myProjects';
import { createProjectsSection } from '../pages/Projects/Projects';
import { renderSearchResults } from '../pages/searchResults/searchResults';

const searchEngine = (query) => {
  const searchResults = [];

  const processProject = (project, section) => {
    for (const key in project) {
      const projectValue = project[key];
      const isString = typeof projectValue === 'string';

      if (
        (isString &&
          projectValue.toLowerCase().includes(query.toLowerCase())) ||
        (!isString && projectValue.includes(query.toLowerCase()))
      ) {
        if (!searchResults.includes(project)) {
          project['section'] = section;
          searchResults.push(project);
        }
        break;
      }
    }
  };

  myProjects.forEach((project) => processProject(project, 'projects'));
  myExperience.forEach((project) => processProject(project, 'experience'));

  return searchResults;
};
export const search = (e) => {
  const app = document.querySelector('#app');
  const searchResults = searchEngine(e.target.value);
  const navItem = document.querySelector('header li.highlighted');
  navItem?.classList.remove('highlighted');
  const searchInfo = document.createElement('h3');
  searchInfo.classList.add('search-info');
  app.innerHTML = '';
  if (searchResults.length > 0) {
    searchInfo.innerHTML = `Results for: <b>${e.target.value}</b>`;
    console.log(searchResults);
    app.append(searchInfo, renderSearchResults(searchResults));
  } else {
    searchInfo.innerHTML = `No results found for: <b>${e.target.value}</b>`;
    app.append(searchInfo);
  }
  e.target.value = '';
};

