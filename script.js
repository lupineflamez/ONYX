// Fade out splash screen when clicked
function enterSite() {
  const splash = document.getElementById('splash');
  splash.style.opacity = '0';
  splash.style.pointerEvents = 'none';

  // Optional: remove splash from layout after fade
  setTimeout(() => {
    splash.style.display = 'none';
  }, 1000); // matches CSS transition duration
}

