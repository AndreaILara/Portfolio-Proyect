import { socials } from '../../data/socials';
import './footer.css';

export const renderFooter = (arrayOfSocials) => {
  const body = document.querySelector('body');
  const footer = document.createElement('footer');

  arrayOfSocials.forEach((item) => {
    const socialDiv = createSocialDiv(item);
    footer.appendChild(socialDiv);
  });

  body.appendChild(footer);
};

const createSocialDiv = (item) => {
  const socialDiv = document.createElement('div');
  const anchor = document.createElement('a');
  const image = document.createElement('img');

  anchor.href = item.url;
  anchor.target = '_blank';
  anchor.rel = 'noopener';

  image.src = item.icon;
  image.alt = `My ${item.name}`;

  anchor.appendChild(image);
  socialDiv.appendChild(anchor);

  return socialDiv;
};

