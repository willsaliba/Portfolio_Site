//change logo on click
window.addEventListener('DOMContentLoaded', (event) => {
  const logo = document.getElementById('logoImage');

  logo.addEventListener('click', function() {
    
    if (logo.src.endsWith('ws.png')) {
      logo.src = 'src/images/the_one_and_only.png';

      setTimeout(function() {
        logo.src = 'src/images/ws.png';
      }, 2000);
    }
  });
});

