import { decorateLinks } from '../../components/header/header';
import './About.css';
export const About = () => {
  decorateLinks();
  const aboutNav = document.querySelector('a[href="#aboutMe"]');
  aboutNav.parentElement.classList.add('highlighted');
  const profilePic = '/assets/image0.jpeg';
  const main = document.querySelector('#app');
  const $aboutContainer = document.createElement('section');
  $aboutContainer.id = 'main-section';
  $aboutContainer.innerHTML = `
    <div><img src="${profilePic}" alt="Andrea"></div>
    <div class="description">
      <h2 class="fade-in show">Welcome to My Portfolio</h2>
      <p>I'm Andrea, a 25-year-old FullStack programmer with a background in business administration. I excel in both front-end and back-end development, creating high-quality applications. I've mastered various programming languages and frameworks, making me versatile in tackling diverse projects. With a strong business foundation and a passion for coding, I bring a unique blend of creativity, analytical thinking, and problem-solving skills to my work. I thrive in collaborative environments and enjoy challenging projects that drive my learning and growth.</p>
    </div>
  `;
  main.innerHTML = '';
  main.append($aboutContainer);
};
