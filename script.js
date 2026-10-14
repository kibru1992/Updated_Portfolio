/**
 * Minimalist Academic Portfolio Controller
 * Supports persistent dark/light theme switching.
 */

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('academic-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
    if (themeToggle) themeToggle.textContent = '☀️';
  } else {
    document.body.classList.remove('dark-mode');
    if (themeToggle) themeToggle.textContent = '🌙';
  }

  // Toggle theme on click
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      themeToggle.textContent = isDark ? '☀️' : '🌙';
      localStorage.setItem('academic-theme', isDark ? 'dark' : 'light');
    });
  }
});