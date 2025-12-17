import DEFAULT_CANDIDATES from "./candidate-data.js";
import { renderCandidateTable } from "./render-table.js";

export const STORAGE_KEY = "CANDIDATES";
let editingCandidateId = null;

export function initCandidateData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_CANDIDATES));
}
// Lấy danh sách ứng viên
export function getCandidates() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}
// Lưu danh sách
function saveCandidates(candidates) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(candidates));
}

// Thêm sửa sửa ứng viên
export function openModal(candidate = null) {
  const modal = document.getElementById("add-candidate-modal");
  modal.classList.remove("hidden");

  if (candidate) {
    editingCandidateId = candidate.id;
    document.getElementById("candidate-fullname").value =
      candidate.fullname !== "--" ? candidate.fullname : "";
    document.getElementById("candidate-email").value =
      candidate.email !== "--" ? candidate.email : "";
    document.getElementById("candidate-phone").value =
      candidate.phone !== "--" ? candidate.phone : "";
  } 
}

function closeModal() {
  const modal = document.getElementById("add-candidate-modal");
  modal.classList.add("hidden");
}

// Lấy dữ liệu từ form (nếu rỗng => "--")
function getCandidateFromForm() {
  const fullname =
    document.getElementById("candidate-fullname").value.trim() || "--";
  const email = document.getElementById("candidate-email").value.trim() || "--";
  const phone = document.getElementById("candidate-phone").value.trim() || "--";

  return { fullname, email, phone };
}
// Lưu dữ liệu
function saveCandidate() {
  const candidates = getCandidates();
  const formData = getCandidateFromForm();
  const successMessage = document.getElementById("successMessage");

  if (editingCandidateId) {
    // Sửa ứng viên
    const index = candidates.findIndex((c) => c.id === editingCandidateId);
    if (index !== -1) {
      candidates[index] = { ...candidates[index], ...formData };
      successMessage.textContent = "Cập nhật thành công!";
    }
  } else {
    // Thêm mới
    const newId =
      candidates.length > 0 ? Math.max(...candidates.map((c) => c.id)) + 1 : 1;
    candidates.push({ id: newId, ...formData });
    successMessage.textContent = "Thêm thành công!";
  }

  saveCandidates(candidates);
  renderCandidateTable();
  closeModal();

  // Hiển thị thông báo
  successMessage.classList.remove("hidden");

  // Ẩn sau 3 giây
  setTimeout(() => {
    successMessage.classList.add("hidden");
  }, 3000);
}


// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  initCandidateData();
  renderCandidateTable();
  setupSidebarToggle();

  document
    .getElementById("close-modal-button")
    .addEventListener("click", closeModal);
  document
    .getElementById("save-candidate")
    .addEventListener("click", saveCandidate);
});
