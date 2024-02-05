import { headerLinks } from '../../data/headerLinks';
import { toggler } from '../mode-toggler/mode-toggler';
import { searchBar } from '../searchBar/searchBar';
import './header.css';

export const highlighters = ['brown1', 'brown2', 'brown3'];

export const createHeader = () => {
  const body = document.querySelector('body');
  const header = document.createElement('header');
  header.classList.add('header-container');
  const nav = document.createElement('nav');
  const extras = document.createElement('div');
  extras.classList.add('extras-container');
  const ul = document.createElement('ul');
  headerLinks.forEach((link, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = link.name;
    a.href = link.url;
    li.classList.add('highlighter', highlighters[index % highlighters.length]);
    li.append(a);
    ul.append(li);
    li.addEventListener('click', link.page);
  });
  nav.append(ul);
  header.append(nav, extras);
  body.prepend(header);
  searchBar(extras);
  toggler(extras);

  const hamburgerButton = document.createElement('button');
  hamburgerButton.classList.add('hamburger-button');
  const img = document.createElement('img');
  img.src = '/assets/lista.png';
  img.alt = 'Menu';
  img.classList.add('menu-icon');
  hamburgerButton.appendChild(img);
  extras.append(hamburgerButton);

  hamburgerButton.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
};

export const decorateLinks = () => {
  const links = document.querySelectorAll('li.highlighter');
  for (const link of links) {
    link.classList.remove('highlighted');
    link.addEventListener('mouseover', () => {
      link.classList.add('custom-highlight');
    });
    link.addEventListener('mouseout', () => {
      link.classList.remove('custom-highlight');
    });
  }
};