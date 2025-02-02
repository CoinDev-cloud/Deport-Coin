document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  // Toggle mobile menu
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
          top: targetSection.offsetTop - 60, // Adjust offset for fixed header
          behavior: "smooth",
        });
      }
      // Close mobile menu after clicking a link
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    });
  });
});
