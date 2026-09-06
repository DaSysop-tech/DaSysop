const line = document.getElementById("tagline");
const btn = document.getElementById("tease");

const A = "Simple landing pages & small site fixes. Fast. Clean. Affordable.";
const B = "Shipping. Slowly. Proudly.";

btn.addEventListener("click", () => {
  line.textContent = line.textContent === A ? B : A;
});
