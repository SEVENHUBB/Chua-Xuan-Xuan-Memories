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