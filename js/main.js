window.addEventListener("DOMContentLoaded", () => {
  loadComponent("component/header.html", "#header-placeholder");
  loadComponent("component/footer.html", "#footer-placeholder");
});

function loadComponent(path, placeholderSelector) {
  fetch(path)
    .then(res => res.text())
    .then(data => {
      document.querySelector(placeholderSelector).innerHTML = data;
    });
}
