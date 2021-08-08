const product1 = document.getElementById("product-1");
const product2 = document.getElementById("product-2");
const product3 = document.getElementById("product-3");
const overlay1 = document.getElementById("overlay-1");
const overlay2 = document.getElementById("overlay-2");
const overlay3 = document.getElementById("overlay-3");

product1.addEventListener("mouseenter", () => moveOverlay(overlay1, 1));
product1.addEventListener("mouseleave", () => moveOverlay(overlay1, 0));
product2.addEventListener("mouseenter", () => moveOverlay(overlay2, 1));
product2.addEventListener("mouseleave", () => moveOverlay(overlay2, 0));
product3.addEventListener("mouseenter", () => moveOverlay(overlay3, 1));
product3.addEventListener("mouseleave", () => moveOverlay(overlay3, 0));

function moveOverlay(overlay, val) {
  overlay.style.opacity = val;
}
