import { openModal} from "./candidate-service.js";
import { STORAGE_KEY } from "./candidate-service.js";

document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.querySelector(".add-candidate");
  const modal = document.getElementById("add-candidate-modal");
  const closeModalButton = document.getElementById("close-modal-button");

//   function openModal() {
//   if (modal) modal.classList.remove("hidden");
// }


  function closeModal() {
    modal.classList.add("hidden");
  }

  if (openButton) {
    openButton.addEventListener("click", () => openModal());
  }

  if (closeModalButton) {
    closeModalButton.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  if (modal) {
    modal.classList.add("hidden");
  }
});

export function openEditPopup(id) {
  
  const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const candidate = storageData.find((c) => c.id === id);

  if (!candidate) return;

  const popupTitle = document.querySelector(".modal-title");
  if (popupTitle) popupTitle.innerText = "Chỉnh sửa thông tin ứng viên";

  const fullnameInput = document.getElementById("candidate-fullname");
  const phoneInput = document.getElementById("candidate-phone");

  if (fullnameInput) fullnameInput.value = candidate.fullname || "";
  if (phoneInput) phoneInput.value = candidate.phone || "";

  openModal(candidate); 
}