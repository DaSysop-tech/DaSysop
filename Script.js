const line = document.getElementById("tagline");
const btn = document.getElementById("tease");

btn.addEventListener("click", () => {
  line.textContent =
    line.textContent === "Building something. Stay tuned."
      ? "Shipping. Slowly. Proudly."
      : "Building something. Stay tuned.";
});
