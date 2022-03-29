const buttons = document.querySelectorAll('[data-icon]');
const title = document.getElementById('title');
const content = document.getElementById('content');
const icon = document.getElementById('icon');

const handleClick = (button) => {
  title.textContent = button.dataset.title;
  content.textContent = button.dataset.content;
  icon.setAttribute('class', 'fa-solid fa-10x ' + button.dataset.icon);
  buttons.forEach((button) => {
    button.classList.remove('active');
  });
  button.classList.add('active');
};

buttons.forEach((button) => {
  button.addEventListener('click', () => handleClick(button));
});

buttons[0].click();
