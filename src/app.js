//change logo on click
window.addEventListener('DOMContentLoaded', (event) => {
  const logo = document.getElementById('logo');

  logo.addEventListener('click', function() {
    
    if (logo.src.endsWith('ws.png')) {
      logo.src = 'src/images/the_one_and_only.png';

      setTimeout(function() {
        logo.src = 'src/images/ws.png';
      }, 2000);
    }
  });
});

//scrolling to sections
document.getElementById('about_me_but').addEventListener('click', function() {
  document.getElementById('about_me').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('projects_but').addEventListener('click', function() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});
