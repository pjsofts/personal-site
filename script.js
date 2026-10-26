const root = document.documentElement;
const themeMeta = document.querySelector('meta[name="theme-color"]');

// The page takes on the colours of whichever section is crossing the middle of the screen.
function applyTheme(section) {
  root.style.setProperty("--bg", section.dataset.bg);
  root.style.setProperty("--ink", section.dataset.ink);
  root.style.setProperty("--accent", section.dataset.accent);
  themeMeta.setAttribute("content", section.dataset.bg);
}

const themeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) applyTheme(entry.target);
  });
}, { rootMargin: "-50% 0px -50% 0px" });

document.querySelectorAll("[data-bg]").forEach((section) => themeObserver.observe(section));

// Only scroll the screenshots while their project is on screen.
const playObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.target.classList.toggle("in-view", entry.isIntersecting));
}, { threshold: 0.2 });

document.querySelectorAll(".project").forEach((project) => playObserver.observe(project));

document.getElementById("year").textContent = new Date().getFullYear();
