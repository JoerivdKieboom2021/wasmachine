// Variables
let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
let items = document.querySelectorAll(".item");

// Toggle Mobile Menu
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // Adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");

        //  Adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

// Activate Submenu
function toggleItem() {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    } else {
        this.classList.add("submenu-active");
    }
}

// Close Submenu From Anywhere
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active")
    }
}

// Event listeners
// Navigation
toggle.addEventListener("click", toggleMenu, false);

// Submenu
for (let item of items) {
    if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
    }
}
// Submenu closing
document.addEventListener("click", closeSubmenu, false);