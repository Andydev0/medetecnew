const nav = document.querySelector('.container');
const toggle = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a');
const header = document.querySelector('#header');
const backToTopButton = document.querySelector('.back-to-top');
const navHeight = header.offsetHeight;
const sections = document.querySelectorAll('main section[id]');

function changeHeaderWhenScroll() {
  window.scrollY >= navHeight
    ? header.classList.add('scroll')
    : header.classList.remove('scroll')
}

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

/* alternar botão */
for (const element of toggle) {
  element.addEventListener('click', () => nav.classList.toggle('show'));
}

/* Links */
for (const link of links) {
  link.addEventListener('click', () => nav.classList.remove('show'));
}
