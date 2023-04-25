const nav = document.querySelector('.container'); // Seleciona o elemento de navegação
const toggle = document.querySelectorAll('nav .toggle'); // Seleciona os botões de toggle do menu
const links = document.querySelectorAll('nav ul li a'); // Seleciona os links do menu
const header = document.querySelector('#header'); // Seleciona o cabeçalho
const backToTopButton = document.querySelector('.back-to-top'); // Seleciona o botão de "Voltar ao topo"
const navHeight = header.offsetHeight; // Obtém a altura do cabeçalho para ser usada como referência
const sections = document.querySelectorAll('main section[id]'); // Seleciona as seções principais com IDs

function changeHeaderWhenScroll() {
  window.scrollY >= navHeight // Verifica se o valor do scroll vertical é maior ou igual à altura do cabeçalho
    ? header.classList.add('scroll') // Adiciona a classe 'scroll' ao cabeçalho se for verdadeiro
    : header.classList.remove('scroll'); // Remove a classe 'scroll' do cabeçalho se for falso
}

function backToTop() {
  if (window.scrollY >= 560) { // Verifica se o valor do scroll vertical é maior ou igual a 560
    backToTopButton.classList.add('show'); // Adiciona a classe 'show' ao botão de "Voltar ao topo" se for verdadeiro
  } else {
    backToTopButton.classList.remove('show'); // Remove a classe 'show' do botão de "Voltar ao topo" se for falso
  }
}

/* Botão de Toggle */
for (const element of toggle) {
  element.addEventListener('click', () => nav.classList.toggle('show')); // Adiciona um ouvinte de evento de clique aos botões de toggle para alternar a classe 'show' no elemento de navegação
}

/* Links */
for (const link of links) {
  link.addEventListener('click', () => nav.classList.remove('show')); // Adiciona um ouvinte de evento de clique aos links do menu para remover a classe 'show' do elemento de navegação
}

/* Testemunhas - SwiperJS */
const swiper = new Swiper('.swiper', { // Inicializa o SwiperJS para o elemento com a classe 'swiper'
  slidesPerView: 1, // Define o número de slides visíveis por vez como 1
  pagination: {
    el: '.swiper-pagination', // Define o seletor do elemento de paginação
  },
  autoplay: {
    delay: 2500, // Define o tempo de delay do autoplay em milissegundos
    disableOnInteraction: false, // Define se o autoplay é desativado ou não quando há interação do usuário
  },
  mousewheel: false, // Define se o mousewheel é habilitado ou não
  keyboard: true, // Define se o uso do teclado é habilitado ou não
  breakpoints: {
    767: {
      slidesPerView: 2, // Define o número de slides visíveis por vez como 2 quando a largura de tela é menor que 767px
      setWrapperSize: true // Define se o tamanho do wrapper é ajustado automaticamente ou não
    }
  }
});

/* ScrollReveal */
const scrollReveal = ScrollReveal({ // Inicializa o ScrollReveal
  origin: 'top', // Define a origem da animação como sendo o topo
  distance: '30px', // Define a distância de início da animação em relação ao topo
  duration: 700, // Define a duração da animação em milissegundos
  reset: true // Define se a animação é resetada após o scroll ou não
});

scrollReveal.reveal( // Aplica a animação ScrollReveal em cada seção principal selecionada
  main section: not(.grid).content, footer.brand, footer.social, // Define os elementos que serão animados
  { interval: 100 } // Define o intervalo entre cada animação em milissegundos
);

/* Back to Top button */
backToTopButton.addEventListener('click', () => { // Adiciona um ouvinte de evento de clique ao botão de "Voltar ao topo"
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Efetua o scroll suave até o topo da página
});

/* Scroll events */
window.addEventListener('scroll', () => { // Adiciona um ouvinte de evento de scroll à janela do navegador
  changeHeaderWhenScroll(); // Chama a função para alterar o cabeçalho quando o scroll ocorre
  backToTop(); // Chama a função para mostrar ou ocultar o botão de "Voltar ao topo" quando o scroll ocorre
});
