let currentPage = 1;

function startSurprise() {
  document.getElementById("bg-music").play();
  nextPage();
}

function nextPage() {
  document.getElementById(`page${currentPage}`).classList.remove("active");
  currentPage++;
  document.getElementById(`page${currentPage}`).classList.add("active");

  if (currentPage < 5) {
    setTimeout(nextPage, 2800);
  }
}
