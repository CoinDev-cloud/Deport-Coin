document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Smooth scrolling for anchor links
  const navItems = document.querySelectorAll('a[href^="#"]');
  navItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60, // Adjust for fixed header height
          behavior: "smooth",
        });
      }
      // Close mobile menu if open
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    });
  });

  // Change header style on scroll
  const header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Scroll-to-top button
  const scrollBtn = document.getElementById("scrollToTop");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Initialize AOS (Animate On Scroll)
  AOS.init({
    once: true,
    duration: 1000,
  });

  // Initialize Particles.js for the hero background
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": { "enable": true, "value_area": 800 }
      },
      "color": { "value": "#ff00c8" },
      "shape": {
        "type": "circle",
        "stroke": { "width": 0, "color": "#000" },
        "polygon": { "nb_sides": 5 }
      },
      "opacity": { "value": 0.5, "random": false },
      "size": { "value": 3, "random": true },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#f39c12",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": {
        "grab": { "distance": 200, "line_linked": { "opacity": 1 } },
        "push": { "particles_nb": 4 }
      }
    },
    "retina_detect": true
  });

  // Animated counters for Tokenomics section
  const counters = document.querySelectorAll('.counter');
  const speed = 200; // Lower value = faster count

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  // Trigger counters when Tokenomics section becomes visible
  const tokenomicsSection = document.getElementById("tokenomics");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  observer.observe(tokenomicsSection);
});
