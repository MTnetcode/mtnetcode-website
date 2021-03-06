/**
 * function which looks over for mouse over on portfolio to show text
 */
export default function addText() {
  let portfolioImg = document.querySelector(".portfolio-img");
  let portfolioDesc = document.querySelector(".portfolio-description");
  portfolioImg.addEventListener("mouseover", () => {
    portfolioDesc.classList.add("show-desc");
  });
  portfolioImg.addEventListener("mouseleave", () => {
    portfolioDesc.classList.remove("show-desc");
  });
}
