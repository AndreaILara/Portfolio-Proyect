import { Experience } from '../Experience/Experience';
import { Projects } from '../Projects/Projects';
import './searchResults.css';

export const renderSearchResults = (listOfResults) => {
  const searchResults$$ = document.createElement('section');
  searchResults$$.classList.add('fade-in', 'flex-container', 'search-results');
  for (const result of listOfResults) {
    const container = document.createElement('article');
    const section = document.createElement('a');
    const title = document.createElement('h2');
    const description = document.createElement('p');
    section.textContent = `In: ${result.section}`;
    title.textContent = result.title;
    description.innerHTML = result.description;
    result.section === 'projects'
      ? section.addEventListener('click', Projects)
      : section.addEventListener('click', Experience);
    container.append(section, title, description);
    searchResults$$.append(container);
  }
  return searchResults$$;
};
