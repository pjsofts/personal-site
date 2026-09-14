const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

// Small parallax effect on the hero portrait — disabled for reduced-motion users.
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const visual = document.querySelector(".hero-visual");
  window.addEventListener("scroll", () => {
    if (window.scrollY < 900) {
      visual.style.transform = `translateY(${window.scrollY * 0.035}px)`;
    }
  }, { passive: true });
}
