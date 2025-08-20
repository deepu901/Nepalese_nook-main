// Smooth scrolling for navbar links
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Order form submission
const orderForm = document.getElementById('orderForm');
orderForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateForm()) {
    alert('Thank you! Your order has been placed.');
    orderForm.reset();
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

// Fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
});
document.querySelectorAll('.fade-element').forEach(element => observer.observe(element));

// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}



