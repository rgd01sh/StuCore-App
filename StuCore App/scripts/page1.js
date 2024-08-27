const currentPage = 1;
const totalPages = 8;

function navigateToPage(pageNumber) {
  if (pageNumber > 0 && pageNumber <= totalPages) {
    // Ensure the path is correct relative to the HTML file
    window.location.href = `../pages/page${pageNumber}.html`;
  }
}

function skipToEnd() {
  window.location.href = `../pages/page${totalPages}.html`;
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
