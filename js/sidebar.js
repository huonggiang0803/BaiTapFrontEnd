const SIDEBAR_KEY = "SIDEBAR_COLLAPSED";

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const collapsed = sidebar.classList.toggle("collapsed");

  localStorage.setItem(SIDEBAR_KEY, collapsed);
}

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const isCollapsed = localStorage.getItem(SIDEBAR_KEY) === "true";

  if (isCollapsed) {
    sidebar.classList.add("collapsed");
  }
});

function setupSidebarToggle() {
  const sidebarItems = document.querySelectorAll(".sidebar-item");
  sidebarItems.forEach((item) => {
    item.addEventListener("click", function () {
      sidebarItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    });
  });
}
