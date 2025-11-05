// Runaway Button Feature
document.addEventListener('DOMContentLoaded', function() {
  const fakeButton = document.getElementById('fakeButton');
  const realButton = document.getElementById('realButton');
  const message = document.getElementById('message');
  const mainContent = document.getElementById('main-content');
  const gateSection = document.getElementById('gate-section');

  let runCount = 0;
  const maxRuns = 5; // number of times the fake button escapes

  if (fakeButton) {
    fakeButton.addEventListener('mouseover', () => {
      if (runCount < maxRuns) {
        const newX = Math.random() * 80;
        const newY = Math.random() * 80;
        fakeButton.style.left = `${newX}%`;
        fakeButton.style.top = `${newY}%`;
        runCount++;
      } else {
        fakeButton.classList.add('hidden');
        message.classList.remove('hidden');
        realButton.classList.remove('hidden');
      }
    });
  }

  // Original ESLint test paragraph
  const p = document.createElement('p');
  p.textContent =
    "Page loaded — this JS file is intentionally missing a semicolon to fail the linter";
  document.querySelector('main').appendChild(p);
});

// Function to reveal the main content
function revealContent() {
  document.getElementById('main-content').classList.remove('hidden');
  document.getElementById('gate-section').classList.add('hidden');
}

