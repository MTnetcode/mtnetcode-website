export default function animation() {
  let contactForm = document.querySelector(".contact-form");
  let socialLinks = document.querySelectorAll(".change-color");
  let fiverrIcon = document.querySelector(".fiver");
  const handleIntersection = (entries) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        socialLinks.forEach((link) => {
          link.classList.add("social-white");
        });
        fiverrIcon.setAttribute("src", "/icons/fiver-white.svg");
      } else {
        socialLinks.forEach((link) => {
          link.classList.remove("social-white");
        });
        fiverrIcon.setAttribute("src", "/icons/fiver.svg");
      }
    });
  };
  let config = {
    threshold: "0.5",
  };

  const observer = new IntersectionObserver(handleIntersection, config);
  observer.observe(contactForm);

  let about = document.querySelector(".flex-container2");
  let mauketkaContainer = document.getElementById("mauketka");
  let tomiContainer = document.getElementById("tomi");

  const handleIntersectionAbout = (entries) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        tomiContainer.classList.add("bounce-text");
        mauketkaContainer.classList.add("bounce-text");
      }
    });
  };
  let aboutObserver = new IntersectionObserver(handleIntersectionAbout, {
    threshold: "0.2",
  });
  aboutObserver.observe(about);

  let flexContainer = document.querySelector(".flex-container");
  const handleIntersectionServices = (entries) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".container").forEach((element) => {
          element.classList.add("bounce-text");
        });
      }
    });
  };

  let servicesObserver = new IntersectionObserver(handleIntersectionServices, {
    threshold: "0.1",
    rootMargin: "30px",
  });
  servicesObserver.observe(flexContainer);

  let openIcon = document.querySelector(".fa-bars");
  const handleIntersectionIcon = (entries) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        openIcon.style.color = "white";
      } else {
        openIcon.style.color = "black";
      }
    });
  };
  let iconObserver = new IntersectionObserver(handleIntersectionIcon);
  iconObserver.observe(document.getElementById("home"), { threshold: "1" });
}
