import { search } from '../../functions/search';
import './searchBar.css';

export const searchBar = (parentElement) => {
  const searchBarContainer = document.createElement('div');
  searchBarContainer.id = 'search';
  searchBarContainer.className = 'flex-container';
  const searchIcon = document.createElement('img');
  searchIcon.src = '/assets/lupa.png';
  searchIcon.alt = 'Search';
  const searchBar = document.createElement('input');
  searchBar.placeholder = 'Search...';
  searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('visible');
  });
  searchBar.addEventListener('change', search);
  searchBarContainer.append(searchIcon, searchBar);
  parentElement.append(searchBarContainer);
};