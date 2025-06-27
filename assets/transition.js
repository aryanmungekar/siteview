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
