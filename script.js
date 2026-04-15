function openPage(id) {
  document.getElementById("home").style.display = "none";

  document.querySelectorAll(".page").forEach(page => {
    page.style.display = "none";
  });

  document.getElementById(id).style.display = "block";
}

function goHome() {
  document.getElementById("home").style.display = "block";

  document.querySelectorAll(".page").forEach(page => {
    page.style.display = "none";
  });
}