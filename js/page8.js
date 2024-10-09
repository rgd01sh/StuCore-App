// This script is for the eighth page
const currentPage = 8;
const totalPages = 8;

function navigateToPage(pageNumber) {
  if (pageNumber > 0 && pageNumber <= totalPages) {
    window.location.href = `pages/page${pageNumber}.html`;
  }
}

function finish() {
  window.location.href = "index.html"; // Correct path to index.html in the root directory
}

function updateFooter(pageNumber) {
  const progressWidth = (pageNumber / totalPages) * 100;
  document.getElementById("footerProgress").style.width = progressWidth + "%";
  document.getElementById(
    "pageNumber"
  ).textContent = `${pageNumber}/${totalPages}`;
}

// Update the footer when the page loads
document.addEventListener("DOMContentLoaded", () => {
  updateFooter(currentPage);
});
