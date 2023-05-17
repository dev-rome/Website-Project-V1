import Swup from "swup";

const swup = new Swup({
  linkSelector: "a.swup-link",
});

swup.on("contentReplaced", () => {
  if (window.location.hash === "#clients") {
    const clientsSection = document.querySelector("#clients");
    if (clientsSection) {
      window.scrollTo(0, clientsSection.offsetTop);
    }
  } else {
    window.scrollTo(0, 0);
  }
});
