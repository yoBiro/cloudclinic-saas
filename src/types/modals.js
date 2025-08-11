const modal = getElementById("myModal");
const openModal = getElementById("openModal");
const closeModal = getElementById(".close");

function openModal() {
    modal.style.display = "block";
}

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
