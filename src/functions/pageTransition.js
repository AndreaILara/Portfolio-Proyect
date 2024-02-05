export const fadeTransition = (current, next) => {
  current.style.opacity = '0';
  current.style.transition = 'opacity 0.5s ease-out';
  setTimeout(() => {
    current.style.display = 'none';
    next.style.opacity = '1';
    next.style.transition = 'opacity 0.5s ease-in';
    next.style.display = 'block';
  }, 500);
};
