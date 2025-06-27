// Get direction from sessionStorage
const direction = sessionStorage.getItem('navDirection');

if (direction === 'forward') {
  document.body.classList.add('slide-in-right');
} else if (direction === 'backward') {
  document.body.classList.add('slide-in-left');
}

// Animate in
window.requestAnimationFrame(() => {
  document.body.classList.add('animate-in');
});

// Intercept link clicks
document.addEventListener('click', function (e) {
  const link = e.target.closest('a');
  if (!link || !link.href || link.target === '_blank') return;

  const isSamePage = new URL(link.href).pathname === location.pathname;
  if (isSamePage) return;

  const isBack = link.classList.contains('back');

  e.preventDefault();
  sessionStorage.setItem('navDirection', isBack ? 'backward' : 'forward');
  document.body.classList.remove('animate-in');
  document.body.classList.add(isBack ? 'slide-out-right' : 'slide-out-left');

  setTimeout(() => {
    window.location.href = link.href;
  }, 400);
});

// Clear direction after load
window.addEventListener('pageshow', () => {
  sessionStorage.removeItem('navDirection');
});

// transition.js

function slideTo(url, direction = 'left') {
  const transition = document.createElement('div');
  transition.className = 'page-transition slide-in';
  document.body.appendChild(transition);

  // Trigger reflow to apply animation
  void transition.offsetWidth;

  transition.classList.remove('slide-in');
  transition.classList.add('slide-out');

  setTimeout(() => {
    window.location.href = url;
  }, 300); // Match with CSS transition duration
}

window.addEventListener('pageshow', () => {
  const transition = document.querySelector('.page-transition');
  if (transition) transition.remove();
});

