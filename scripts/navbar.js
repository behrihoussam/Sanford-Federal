const navbarButton = document.querySelector(".navbar_mobile--menubutton");
const navbarMenu = document.querySelector(".navbar_mobile--menu");
const navbarAboutusMenu = document.querySelector(".navbar_mobile--aboutus");
const navbarServicesMenu = document.querySelector(".navbar_mobile-services");
const navbarAboutusButton = document.querySelector(".aboutusbutton");
const navbarServicesButton = document.querySelector(".servicesbutton");
const trianglewhoweare = document.querySelector(".trianglewhoweare");
const trianglewhatwedo = document.querySelector(".trianglewhatwedo");

navbarButton.addEventListener("click", () => {
    navbarMenu.classList.toggle("active_menu");
});

const showItemsMenu = (button, menu) => {
    button.addEventListener("click", () => {
        menu.classList.toggle("active_items");
    });
}

navbarAboutusButton.addEventListener("click", () => {
    trianglewhoweare.classList.toggle("triangleRotate");
});
navbarServicesButton.addEventListener("click", () => {
    trianglewhatwedo.classList.toggle("triangleRotate");
});

showItemsMenu(navbarAboutusButton, navbarAboutusMenu);
showItemsMenu(navbarServicesButton, navbarServicesMenu);

document.addEventListener("click", (event) => {
    let menuButton = navbarButton.contains(event.target);
    let menuList = navbarMenu.contains(event.target);
    if (!menuButton && !menuList) {
        navbarMenu.classList.remove("active_menu");
    }
})

window.addEventListener("scroll", () => {
    if (navbarMenu.classList.contains("active_menu")) {
            navbarMenu.classList.remove("active_menu");
    }
})