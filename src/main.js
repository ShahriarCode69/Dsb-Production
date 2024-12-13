import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/home.css';
import '../styles/components/whySection.css';
import '../styles/components/about.css';
import '../styles/components/services.css';
import '../styles/components/contact.css';
import '../styles/components/faq.css';
import '../styles/utils.css';

import mobileNav from './utils/mobile-nav';
mobileNav();
import accordianJs from './utils/accordian';
accordianJs();



const container = document.querySelector(".team-members");

let isDragging = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (event) => {
  isDragging = true;

  startX = event.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
  isDragging = false;
  container.classList.remove("dragging");
});

container.addEventListener("mouseup", () => {
  isDragging = false;
  container.classList.remove("dragging");
});

container.addEventListener("mousemove", (event) => {
  if (!isDragging) return; // Only scroll when dragging
  event.preventDefault();
  const x = event.pageX - container.offsetLeft;
  const walk = (x - startX) * 2; // Multiplier controls scroll speed
  container.scrollLeft = scrollLeft - walk;
});

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("dragstart", (e) => e.preventDefault());
});

