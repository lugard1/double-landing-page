const containerEl = document.querySelector('.container');

const leftEl = document.querySelector('.left');
const rightEl = document.querySelector('.right');

// Add 'active-left' on mouseenter and remove it on mouseleave for the left split
leftEl.addEventListener('mouseenter', () => {
  containerEl.classList.add('active-left');
  containerEl.classList.remove('active-right'); // Ensure the right side isn't active
});

leftEl.addEventListener('mouseleave', () => {
  containerEl.classList.remove('active-left');
});

// Add 'active-right' on mouseenter and remove it on mouseleave for the right split
rightEl.addEventListener('mouseenter', () => {
  containerEl.classList.add('active-right');
  containerEl.classList.remove('active-left'); // Ensure the left side isn't active
});

rightEl.addEventListener('mouseleave', () => {
  containerEl.classList.remove('active-right');
});
