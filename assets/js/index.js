const themeToggle = document.getElementById("theme-toggle");
const menuToggle = document.getElementById("menu-toggle");

const themeSettings = localStorage.getItem("theme");
if (themeSettings === "dark") {
  document.body.classList.add("dark-theme");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }
});

menuToggle.addEventListener("change", () => {
  document.body.classList.toggle("mobile-menu-active");
});