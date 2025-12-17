import { openEditPopup } from "./popup.js";
import { initCandidateData } from "./candidate-service.js";
import { getCandidates } from "./candidate-service.js";

const colorPalette = [
  "#4CAF50",
  "#2196F3",
  "#FF9800",
  "#9C27B0",
  "#00BCD4",
  "#FFC107",
  "#E91E63",
  "#607D8B",
];

let currentPage = 1;
let pageSize = 25;
let currentFilter = "";

function checkNull(value) {
  return value ? value : "--";
}

function getInitials(fullname) {
  if (!fullname) return "??";
  const parts = fullname
    .trim()
    .split(/\s+/)
    .filter((p) => p.length > 0);
  let initials = "";
  if (parts.length > 0) initials += parts[0].charAt(0).toUpperCase();
  if (parts.length > 1)
    initials += parts[parts.length - 1].charAt(0).toUpperCase();
  return initials;
}

function stringToHslColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colorPalette.length;
  return colorPalette[index];
}

//  INIT
document.addEventListener("DOMContentLoaded", () => {
  initCandidateData();
  renderCandidateTable();
  attachPaginationEvents();
  attachSearchEvent();
  attachPageSizeChangeEvent();
});

// SEARCH
export function searchCandidates(query) {
  const candidates = getCandidates() || [];
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return candidates;

  return candidates.filter((c) => {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return true; 
  return Object.values(c).some((value) => {
    return value && value.toString().toLowerCase().includes(normalizedQuery);
  });
  });
}

function attachSearchEvent() {
  const searchInput = document.getElementById("search-candidate");
  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    currentFilter = searchInput.value;
    currentPage = 1;
    renderCandidateTable();
  });
}

//  TABLE
export function renderCandidateTable() {
  const candidates = searchCandidates(currentFilter);
   const totalRecordsElem = document.getElementById("totalRecords");
  if (totalRecordsElem) {
    totalRecordsElem.textContent = candidates.length;
  }
  updatePaginationControls(candidates);
  const finalData = getPageData(candidates);
  renderTableRows(finalData);
  attachEditButtonEvents();
}

function getPageData(candidates) {
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const pageInfo = document.getElementById("pageInfo");
  pageInfo.textContent = `${start + 1} - ${Math.min(
    end,
    candidates.length
  )} bản ghi`;
  return candidates.slice(start, end);
}

function renderTableRows(candidates) {
  const tbody = document.getElementById("candidateTableBody");
  tbody.innerHTML = "";

  candidates.forEach((c) => {
    const tr = createTableRow(c);
    tbody.appendChild(tr);
  });
}

function createTableRow(c) {
  const initials = getInitials(c.fullname);
  const backgroundColor = stringToHslColor(c.fullname);

  const tr = document.createElement("tr");
  tr.className = "table-row";
  if (c.id === 1) tr.classList.add("row-highlight-pink");

  const positionContent =
    c.position && c.position.trim() !== ""
      ? `<div style="color: #48bb56; font-size: 14px; margin-top: 2px;">${c.position}</div>`
      : "";

  tr.innerHTML = `
    <td class="table-td table-checkbox-col">
      <input type="checkbox" class="table-checkbox">
    </td>

    <td class="table-td td-ellipsis candidate-info-cell" title="${c.fullname}">
      <div class="candidate-info">
        <div class="candidate-avatar" style="background-color: ${backgroundColor};">${initials}</div>
        <div class="name-wrapper"><span class="candidate-name">${checkNull(
          c.fullname
        )}</span></div>
      </div>
    </td>

    <td class="table-td td-ellipsis" title="${c.email}">${checkNull(
    c.email
  )}</td>
    <td class="table-td td-ellipsis" title="${c.phone}">${checkNull(
    c.phone
  )}</td>
    <td class="table-td td-ellipsis" title="${
      c.recruitmentCampaign
    }">${checkNull(c.recruitmentCampaign)}</td>
    <td class="table-td td-ellipsis" title="${c.appliedPosition}">${checkNull(
    c.appliedPosition
  )}</td>
    <td class="table-td td-ellipsis" title="${c.jobPost}">${checkNull(
    c.jobPost
  )}</td>
    <td class="table-td td-ellipsis" title="${c.recruitmentStage}">${checkNull(
    c.recruitmentStage
  )}</td>
    <td class="table-td td-ellipsis" title="${c.rating}">${checkNull(
    c.rating
  )}</td>
    <td class="table-td td-ellipsis" title="${c.applyDate}">${checkNull(
    c.applyDate
  )}</td>
    <td class="table-td td-ellipsis" title="${c.candidateSource}">${checkNull(
    c.candidateSource
  )}</td>
    <td class="table-td td-ellipsis" title="${c.educationLevel}">${checkNull(
    c.educationLevel
  )}</td>
    <td class="table-td td-ellipsis" title="${c.educationPlace}">${checkNull(
    c.educationPlace
  )}</td>
    <td class="table-td td-ellipsis" title="${c.major}">${checkNull(
    c.major
  )}</td>
    <td class="table-td td-ellipsis" title="${c.lastCompany}">${checkNull(
    c.lastCompany
  )}</td>
    <td class="table-td td-ellipsis" title="${c.hrOwner}">${checkNull(
    c.hrOwner
  )}</td>
    <td class="table-td td-ellipsis" title="${c.department}">${checkNull(
    c.department
  )}</td>
    <td class="table-td td-ellipsis" title="${c.profileMatching}">${checkNull(
    c.profileMatching
  )}</td>
    <td class="table-td td-ellipsis" title="${c.workingArea}">${checkNull(
    c.workingArea
  )}</td>
    <td class="table-td td-ellipsis" title="${c.referrer}">${checkNull(
    c.referrer
  )}</td>
    <td class="table-td td-ellipsis" title="${c.receiveMethod}">${checkNull(
    c.receiveMethod
  )}</td>
    <td class="table-td td-ellipsis" title="${c.talentPool}">${checkNull(
    c.talentPool
  )}</td>
    <td class="table-td td-ellipsis" title="${c.tags}">${checkNull(c.tags)}</td>
    <td class="table-td td-ellipsis" title="${c.candidateStatus}">${checkNull(
    c.candidateStatus
  )}</td>
    <td class="table-td td-ellipsis" title="${c.gender}">${checkNull(
    c.gender
  )}</td>
    <td class="table-td td-ellipsis" title="${c.dateOfBirth}">${checkNull(
    c.dateOfBirth
  )}</td>
    <td class="table-td td-ellipsis" title="${c.address}">${checkNull(
    c.address
  )}</td>
    <td class="table-td td-ellipsis" title="${c.rejectReason}">${checkNull(
    c.rejectReason
  )}</td>
    <td class="table-td td-ellipsis" title="${c.collaborator}">${checkNull(
    c.collaborator
  )}</td>
    <td class="table-td td-ellipsis" title="${c.receiveDate}">${checkNull(
    c.receiveDate
  )}</td>
    <td class="table-td td-ellipsis" title="${c.offerStatus}">${checkNull(
    c.offerStatus
  )}</td>
    <td class="sticky-action-col">
      <div class="icon hover-btn_edit" data-id="${c.id}"></div>
    </td>
  `;

  return tr;
}

function attachEditButtonEvents() {
  document.querySelectorAll(".hover-btn_edit").forEach((button) => {
    button.addEventListener("click", function () {
      const id = Number(this.getAttribute("data-id"));
      openEditPopup(id);
    });
  });
}

//  PAGINATION 
function updatePaginationControls(candidates) {
  const prevPageBtn = document.getElementById("prevPage");
  const nextPageBtn = document.getElementById("nextPage");
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  prevPageBtn.classList.toggle("disabled", currentPage === 1);
  nextPageBtn.classList.toggle("disabled", end >= candidates.length);
}

function attachPaginationEvents() {
  const prevPageBtn = document.getElementById("prevPage");
  const nextPageBtn = document.getElementById("nextPage");

  prevPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderCandidateTable();
    }
  });

  nextPageBtn.addEventListener("click", () => {
    const candidates = searchCandidates(currentFilter);
    const totalPage = Math.ceil(candidates.length / pageSize);
    if (currentPage < totalPage) {
      currentPage++;
      renderCandidateTable();
    }
  });
}
function attachPageSizeChangeEvent() {
  const pageSizeSelect = document.getElementById("pageSizeSelect");
  if (!pageSizeSelect) return;
  pageSizeSelect.addEventListener("change", () => {
    pageSize = Number(pageSizeSelect.value);
    currentPage = 1;
    renderCandidateTable();
  });
}

// POPUP FORM 
export function fillCandidateForm(c) {
  document.getElementById("candidate-fullname").value = c.fullname || "";
  document.getElementById("candidate-email").value = c.email || "";
  document.getElementById("candidate-phone").value = c.phone || "";
  document.getElementById("candidate-address").value = c.address || "";
  document.getElementById("candidate-applyDate").value = c.applyDate || "";
  document.getElementById("candidate-dob").value = c.dateOfBirth || "";
  document.getElementById("candidate-gender").value =
    c.gender === "Nam" ? "male" : c.gender === "Nữ" ? "female" : "";
}
