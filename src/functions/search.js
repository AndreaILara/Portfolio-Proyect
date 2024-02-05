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

      const includesQuery =
        isString
          ? projectValue.toLowerCase().includes(query.toLowerCase())
          : projectValue.includes(query.toLowerCase());

      if (includesQuery) {
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
  const query = e.target.value.trim();
  const searchResults = searchEngine(query);
  const navItem = document.querySelector('header li.highlighted');
  navItem?.classList.remove('highlighted');
  const searchInfo = document.createElement('h3');
  searchInfo.classList.add('search-info');
  app.innerHTML = '';

  if (searchResults.length > 0) {
    searchInfo.innerHTML = `Results for: <b>${query}</b>`;
    console.log(searchResults);
    app.append(searchInfo, renderSearchResults(searchResults));
  } else {
    searchInfo.innerHTML = `No results found for: <b>${query}</b>`;
    app.append(searchInfo);
  }

  e.target.value = '';
};
