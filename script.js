// script.js
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    // Ouvrir/fermer la sidebar
    menuToggle.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", closeMenu);

    function toggleMenu() {
        menuToggle.classList.toggle("active");
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
    }

    function closeMenu() {
        menuToggle.classList.remove("active");
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    }

    // Optionnel : changement de bouton actif (exemple)
    document.querySelectorAll(".btn-sidebar").forEach(btn => {
        btn.addEventListener("click", function () {
            document.querySelectorAll(".btn-sidebar").forEach(b => b.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
// Bonus : synchroniser l'onglet actif dans la barre du bas quand tu cliques dans la sidebar
    document.querySelectorAll(".btn-sidebar").forEach((btn, index) => {
        btn.addEventListener("click", function () {
            document.querySelectorAll(".btn-sidebar").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
            
            this.classList.add("active");
            const bottomItems = document.querySelectorAll(".nav-item");
            if (bottomItems[index]) bottomItems[index].classList.add("active");
        });
    });

    // Et inversement : si on clique dans la barre du bas
    document.querySelectorAll(".nav-item").forEach((item, index) => {
        item.addEventListener("click", function () {
            document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
            document.querySelectorAll(".btn-sidebar").forEach(b => b.classList.remove("active"));
            
            this.classList.add("active");
            const sidebarBtns = document.querySelectorAll(".btn-sidebar");
            if (sidebarBtns[index]) sidebarBtns[index].classList.add("active");
        });
    });