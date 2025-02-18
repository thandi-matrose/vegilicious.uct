function updateActive(link) {
  // Get all navigation links
  const navLinks = document.querySelectorAll('nav a');

  // Update all links to 'inactive'
  navLinks.forEach(nav => {
    nav.classList.remove('active');
    nav.classList.add('inactive');
  });

  // Set the clicked link to 'active'
  link.classList.remove('inactive');
  link.classList.add('active');

  setSectionsInactive();

  const targetId = link.id.replace('nav-', ''); // Extract section ID
  document.querySelector(`section#${targetId}`).classList.replace('inactive', 'active');


}

function setSectionsInactive() {
  // Get all sections
  const content = document.querySelectorAll('main section.content-section');

  // Update all links to 'inactive'
  content.forEach(section => {
    section.classList.remove('active');
    section.classList.add('inactive');
  });
}