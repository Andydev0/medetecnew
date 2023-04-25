// Selecionando elementos do DOM
const nav = document.querySelector('.container'); // Seleciona o elemento do DOM com a classe 'container' e o armazena na constante 'nav'
const toggle = document.querySelectorAll('nav .toggle'); // Seleciona todos os elementos com a classe 'toggle' dentro do elemento 'nav' e os armazena na constante 'toggle'
const links = document.querySelectorAll('nav ul li a'); // Seleciona todos os elementos 'a' dentro de 'nav ul li' e os armazena na constante 'links'
const header = document.querySelector('#header'); // Seleciona o elemento do DOM com o id 'header' e o armazena na constante 'header'
const backToTopButton = document.querySelector('.back-to-top'); // Seleciona o elemento do DOM com a classe 'back-to-top' e o armazena na constante 'backToTopButton'
const navHeight = header.offsetHeight; // Armazena a altura do elemento 'header' na constante 'navHeight'
const sections = document.querySelectorAll('main section[id]'); // Seleciona todos os elementos 'section' que possuem o atributo 'id' dentro do elemento 'main' e os armazena na constante 'sections'

// Função para mudar a aparência do header quando a página é rolada
function changeHeaderWhenScroll() {
  window.scrollY >= navHeight // Se a posição vertical do scroll da janela for maior ou igual à altura do header
    ? header.classList.add('scroll') // Adiciona a classe 'scroll' ao elemento 'header'
    : header.classList.remove('scroll'); // Remove a classe 'scroll' do elemento 'header'
}

// Função para mostrar ou esconder o botão "Voltar ao topo" com base na posição do scroll
function backToTop() {
  if (window.scrollY >= 560) { // Se a posição vertical do scroll da janela for maior ou igual a 560 pixels
    backToTopButton.classList.add('show'); // Adiciona a classe 'show' ao elemento 'backToTopButton'
  } else {
    backToTopButton.classList.remove('show'); // Remove a classe 'show' do elemento 'backToTopButton'
  }
}

/* Botão de alternância (toggle) */
for (const element of toggle) { // Para cada elemento na lista 'toggle'
  element.addEventListener('click', () => nav.classList.toggle('show')); // Adiciona um ouvinte de evento de clique que alterna a classe 'show' no elemento 'nav'
}

/* Links */
for (const link of links) { // Para cada elemento na lista 'links'
  link.addEventListener('click', () => nav.classList.remove('show')); // Adiciona um ouvinte de evento de clique que remove a classe 'show' do elemento 'nav'
}

/* Testimonials - SwiperJS */
// Configuração do SwiperJS para os depoimentos
const swiper = new Swiper('.swiper', { // Inicializa um novo objeto Swiper no elemento com a classe 'swiper'
  slidesPerView: 1, // Define o número de slides visíveis por vez como 1
  pagination: { // Configuração da paginação
    el: '.swiper-pagination', // Seleciona o elemento com a classe 'swiper-pagination' como o container da paginação
  },
  autoplay: {
    delay: 2500, // Define o atraso em milissegundos entre a transição automática dos slides como 2500ms (2,5 segundos)
    disableOnInteraction: false, // Define se a transição automática dos slides deve ser desabilitada quando o usuário interagir com o swiper como falso
  },
  mousewheel: false, // Define se o scroll do mouse deve controlar a transição dos slides como falso
  keyboard: true, // Define se as teclas do teclado devem controlar a transição dos slides como verdadeiro
  breakpoints: { // Configuração dos pontos de quebra (breakpoints) para responsividade
    767: { // Quando a largura da tela for igual ou inferior a 767 pixels
      slidesPerView: 2, // Define o número de slides visíveis por vez como 2
      setWrapperSize: true // Define se o tamanho do wrapper (container) do swiper deve ser ajustado automaticamente com base no tamanho dos slides como verdadeiro
    }
  }
});
