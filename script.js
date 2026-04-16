let scrollY = 0;

function openPage(id) {
  // 记录当前滚动位置
  scrollY = window.pageYOffset || document.documentElement.scrollTop;

  document.getElementById("home").style.display = "none";

  document.querySelectorAll(".page").forEach(page => {
    page.style.display = "none";
  });

  document.getElementById(id).style.display = "block";

  window.scrollTo(0, 0);
}

function goHome() {
  document.getElementById("home").style.display = "grid"; 
  // ⚠️ 一定要 grid（不能 block）

  document.querySelectorAll(".page").forEach(page => {
    page.style.display = "none";
  });

  // 延迟恢复 scroll（关键）
  setTimeout(() => {
    window.scrollTo(0, scrollY);
  }, 0);
}

function openImage(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
}

function closeImage() {
  document.getElementById("lightbox").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery img");

  images.forEach(img => {
    img.addEventListener("click", function () {
      openImage(this);
    });
  });
});