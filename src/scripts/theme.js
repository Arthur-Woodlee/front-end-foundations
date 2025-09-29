console.log('Theme script loaded'); 

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');

  toggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    toggle.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    console.log(`Switched to ${newTheme} mode`);
  });
});