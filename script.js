document.addEventListener("DOMContentLoaded", () => {
  console.log("🌴 Royal Shangrelia site loaded successfully");

  // פתיחת תפריט במובייל
  const toggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // סגירת התפריט בלחיצה על קישור
  document.querySelectorAll("#nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
});
