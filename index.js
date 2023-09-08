const panels = document.querySelectorAll(".panel");

panels.forEach((div) => {
  div.addEventListener("click", () => {
    removeActiveClass();
    div.classList.add("active");
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
