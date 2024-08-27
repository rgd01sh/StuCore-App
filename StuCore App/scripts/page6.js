// This script is for the sixth page
const currentPage = 6;
const totalPages = 8;

function navigateToPage(pageNumber) {
  if (pageNumber > 0 && pageNumber <= totalPages) {
    window.location.href = `page${pageNumber}.html`;
  }
}

function skipToEnd() {
  window.location.href = `page${totalPages}.html`;
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
