// getting reference to the element
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navCollapse = document.querySelector('.navbar-collapse');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('is-active');
  if (hamburger.classList.contains('is-active')) {
    const newHeight = navList.clientHeight + 20;
    navCollapse.style.height = `${newHeight}px`;
  } else {
    navCollapse.style.height = `0`;
  }
});

window.addEventListener('click', function (e) {
  const navCollapse = document.querySelector('.navbar-collapse');
  if(e.target && e.target.className == "nav-link") {
    navCollapse.style.height = `0`;
  }
});
