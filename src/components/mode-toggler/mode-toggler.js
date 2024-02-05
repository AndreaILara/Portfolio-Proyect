import './mode-toggler.css';
export const toggler = (parentElement) => {
  const lightIcon = '/assets/light.png';
  const darkIcon = '/assets/dark.png';
  const togglerContainer = document.createElement('div');
  togglerContainer.id = 'mode-toggler';

  togglerContainer.innerHTML = `
  <div class="flip-card-inner">
    <div id="mode-light">
      <img src="${lightIcon}" alt="light mode">
    </div>
    <div id="mode-dark">
      <img src="${darkIcon}" alt="dark mode">
    </div>
  </div>
  `;

  parentElement.append(togglerContainer);
  togglerContainer.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.className === 'dark') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', '');
    }
  });
};