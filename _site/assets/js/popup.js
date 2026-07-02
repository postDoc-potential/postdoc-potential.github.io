const modal = document.getElementById("popup");
const closeBtn = document.querySelector(".close");

window.onload = () => {
  modal.classList.add("show");
};
closeBtn.onclick = () => {
  modal.classList.remove("show");
};
window.onclick = (event) => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
};