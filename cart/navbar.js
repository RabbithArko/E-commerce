const hamburgerMenu = document.querySelector(".hamburger__menu");
const headerDropdownMenu = document.querySelector(".header__dropdown");
const headerDropCloseButton = document.querySelector(".header__dropdownClose");
const mobileHamburgerMenu = document.getElementById("mobile__hamburgerMenu");

mobileHamburgerMenu.addEventListener("click", () => {
    console.log("CLICKED")
    headerDropdownMenu.classList.add("active__headerDropdown");
});

hamburgerMenu.addEventListener("click", () => {
    console.log("hamburger CLICKED!");
    headerDropdownMenu.classList.add("active__headerDropdown");
});

headerDropCloseButton.addEventListener("click", () => {
    headerDropdownMenu.classList.remove("active__headerDropdown");
});

