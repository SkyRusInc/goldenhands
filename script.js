document.addEventListener('DOMContentLoaded', () => {
    const serviceLinks = document.querySelectorAll('.services-container a'); // Select all service links
    const serviceDetails = document.querySelectorAll('.service-details'); // Select all service detail sections

    // Add click event listeners to each service link
    serviceLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior

            const targetId = link.getAttribute('href').substring(1); // Extract the target section ID

            // Hide all service detail sections
            serviceDetails.forEach(section => section.classList.remove('active'));

            // Show the corresponding service detail section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Smooth scroll to the detail section
            serviceLinks.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-group');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  menuList.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!menuList.contains(e.target) && !menuToggle.contains(e.target)) {
    menuList.classList.remove('open');
    menuToggle.classList.remove('open');
  }
});