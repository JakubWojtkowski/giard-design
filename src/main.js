const btn = document.getElementById("expand-btn");
const gallery = document.querySelector(".gallery-container");
const galleryCover = document.querySelector(".gallery-cover");
const btnText = document.getElementById("expand-btn-text");

let isExpanded = false;

// functions

const expandGallery = () => {
  isExpanded = !isExpanded;
  btnText.textContent = "Zwiń";

  gallery.style.maxHeight = `${4000}px`;
  galleryCover.style.display = "none";
  gallery.style.marginBottom = `${100}px`;
  btn.style.bottom = `${40}px`;
  const arrow = (document.getElementById("expand-btn-arrow").style.transform =
    "rotate(180deg)");
};

const hideGallery = () => {
  isExpanded = !isExpanded;
  document.getElementById("expand-btn-text").textContent = "Rozwiń";
  gallery.style.maxHeight = `${600}px`;
  galleryCover.style.display = "block";

  gallery.style.marginBottom = `${0}px`;
  btn.style.bottom = `${80}px`;
  const arrow = document.getElementById("expand-btn-arrow").style.transform =
    "rotate(180deg)";
};

// listeners

btn.addEventListener("click", () => {
  isExpanded ? hideGallery() : expandGallery();
});

btn.addEventListener("mousemove", () => {
  document
    .getElementById("expand-btn-arrow-path")
    .setAttribute("fill", "#f9f9f9");
});

btn.addEventListener("mouseleave", () => {
  document
    .getElementById("expand-btn-arrow-path")
    .setAttribute("fill", "#111111");
});

// menu

const navLinks = document.querySelector(".nav-links");
const onToggleMenu = (e) => {
  e.name = e.name === "menu" ? "close" : "menu";

  const isOpen = e.name;

  navLinks.classList.toggle("top-[-100vh]");
  navLinks.classList.toggle("top-[0vh]");

  console.log(e.name);
};
