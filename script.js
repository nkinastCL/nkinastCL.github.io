document.getElementById('toggle-button').addEventListener('click', function () {
  const content = document.getElementById('dropdown-content');
  const isHidden = content.classList.toggle('visible');
  this.textContent = isHidden ? 'Hide Old Content' : 'Show Old Content';
});