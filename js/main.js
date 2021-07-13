const btn = document.getElementById('btt-btn');

window.onscroll = () => {
  onScroll();
}

function onScroll() {
  if (document.body.scrollTop >= 30 || document.documentElement.scrollTop >= 30) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}

function backToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
