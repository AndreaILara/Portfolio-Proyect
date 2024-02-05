import './mode-toggler.css';

export const toggler = (parentElement) => {
  const lightIcon = '/assets/light.png';
  const darkIcon = '/assets/dark.png';
  const togglerContainer = document.createElement('div');
  togglerContainer.id = 'mode-toggler';

  togglerContainer.innerHTML = `
    <div class="mode-icons">
      <div id="mode-light">
        <img src="${lightIcon}" alt="light mode">
      </div>
      <div id="mode-dark">
        <img src="${darkIcon}" alt="dark mode">
      </div>
    </div>
  `;

  parentElement.append(togglerContainer);

  const modeLight = document.getElementById('mode-light');
  const modeDark = document.getElementById('mode-dark');

  togglerContainer.addEventListener('mouseenter', () => {
    modeLight.style.opacity = 1;
    modeDark.style.opacity = 0;
  });

  togglerContainer.addEventListener('mouseleave', () => {
    modeLight.style.opacity = 0;
    modeDark.style.opacity = 1;
  });

  togglerContainer.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.className === 'dark') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', '');
    }
  });
}
