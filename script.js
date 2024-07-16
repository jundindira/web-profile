document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-btn");
  const sidebar = document.querySelector(".sidebar");

  toggleBtn.addEventListener("click", function () {
      sidebar.classList.toggle("expanded");
  });

  const navLinks = document.querySelectorAll(".sidebar nav a");
  const pages = document.querySelectorAll(".content-page");

  navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const targetId = link.getAttribute("data-target");
          const targetPage = document.getElementById(targetId);

          pages.forEach((page) => {
              page.classList.remove("active");
          });

          if (targetPage) {
              pages.forEach((page) => {
                  page.style.display = "none"; // sembunyikan semua halaman terlebih dahulu
              });
              targetPage.style.display = "block"; // tampilkan halaman target
              targetPage.classList.add("active");
          }
      });
  });
});
