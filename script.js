// intentionally missing semicolon to trigger ESLint "semi" rule
document.addEventListener('DOMContentLoaded', function() {
  const p = document.createElement('p')
  p.textContent = "Page loaded — this JS file is intentionally missing a semicolon to fail the linter"
  document.querySelector('main').appendChild(p)
});




