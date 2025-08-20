// main.js

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form validation and submission
  const orderForm = document.getElementById('orderForm');
  orderForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    if (validateForm()) {
      // Redirect to confirmation page if form is valid
      window.location.href = 'confirmation.html';
    }
  });

  function validateForm() {
    const name = document.getElementById('name').value;
    const foodItem = document.getElementById('foodItem').value;
    const quantity = document.getElementById('quantity').value;
    const pickupTime = document.getElementById('pickupTime').value;
    const spiciness = document.querySelector('input[name="spiciness"]:checked');

    if (!name || !foodItem || !quantity || !pickupTime || !spiciness) {
      alert('Please fill out all fields before submitting the form.');
      return false;
    }
    return true;
  }

  // Add some animations on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  });

  document.querySelectorAll('.fade-element').forEach(element => {
    observer.observe(element);
  });

  // Back to top button
  const backToTopBtn = document.getElementById("backToTopBtn");
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});
