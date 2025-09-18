// Smooth Scroll Effect

document.querySelectorAll('.nav-links a').forEach(link => {

  link.addEventListener('click', e => {

    e.preventDefault();

    document.querySelector(link.getAttribute('href')).scrollIntoView({

      behavior: 'smooth'

    });

  });

});

// Contact Form Submit

document.getElementById("contactForm").addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Thank you, Kajendran will get back to you soon!");

  this.reset();

});