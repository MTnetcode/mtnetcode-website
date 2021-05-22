export default function mobileMenu() {
  let openIcon = document.querySelector(".mobile-menu-icon");
  let closeIcon = document.querySelector(".mobile-menu-close");
  let mobileMenu = document.querySelector(".mobile-menu");
  let links = document.querySelectorAll(".mobile-links");
  openIcon.addEventListener("click", () => {
    mobileMenu.classList.add("mobile-menu-show");
    openIcon.style.zIndex = 1;
  });
  closeIcon.addEventListener("click", () => {
    mobileMenu.classList.remove("mobile-menu-show");
  });
  links.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("mobile-menu-show");
    });
  });
}
