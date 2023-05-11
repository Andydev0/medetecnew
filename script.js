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

/* ScrollReveal */
// Criação de uma instância do ScrollReveal (plugin de animação de scroll)
const scrollReveal = ScrollReveal({
  origin: 'top', // Define a origem da animação como o topo da página
  distance: '30px', // Define a distância de deslocamento dos elementos animados como 30 pixels
  duration: 700, // Define a duração da animação em milissegundos como 700ms (0,7 segundos)
  reset: true // Define se a animação deve ser resetada quando o elemento sair da tela como verdadeiro
});

// Aplica a animação ScrollReveal aos elementos selecionados
scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  `,
  { interval: 100 } // Define o intervalo de tempo entre cada animação como 100ms (0,1 segundos)
);

/* Active menu */
// Função para ativar o item de menu correspondente à seção atual
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4; // Calcula o ponto de verificação (checkpoint) com base na posição atual do scroll e na altura da janela

  for (const section of sections) { // Percorre todas as seções selecionadas
    const sectionTop = section.offsetTop; // Obtém a posição superior da seção em relação ao topo da página
    const sectionHeight = section.offsetHeight; // Obtém a altura da seção
    const sectionId = section.getAttribute('id'); // Obtém o ID da seção
    const checkpointStart = checkpoint >= sectionTop; // Verifica se o checkpoint está depois do início da seção
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight; // Verifica se o checkpoint está antes do fim da seção

    if (checkpointStart && checkpointEnd) { // Se o checkpoint estiver dentro dos limites da seção
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']') // Seleciona o item de menu correspondente à seção atual com base no ID
        .classList.add('active'); // Adiciona a classe 'active' ao item de menu
    } else { // Caso contrário
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']') // Seleciona o item de menu correspondente à seção atual com base no ID
        .classList.remove('active'); // Remove a classe 'active' do item de menu
    }
  }
}

/* Change scroll and Back to top button*/
window.addEventListener('scroll', function() { // Adiciona um ouvinte de evento de rolagem na janela
  changeHeaderWhenScroll(); // Chama a função para alterar o estilo do cabeçalho quando o scroll ocorre
  backToTop(); // Chama a função para mostrar ou ocultar o botão "Voltar ao topo" com base na posição do scroll
  activateMenuAtCurrentSection(); // Chama a função para ativar o item de menu correspondente à seção atual com base na posição do scroll
});




// Captura o elemento de login na navbar
const loginBtn = document.querySelector("#loginBtn");

// Captura o popup de login
const loginPopup = document.querySelector("#loginPopup");

// Adiciona um evento de clique ao elemento de login na navbar
loginBtn.addEventListener("click", function(e) {
  e.preventDefault();
  loginPopup.style.display = "flex";
});

// Fecha o popup de login quando o usuário clica fora dele
loginPopup.addEventListener("click", function(e) {
  if (e.target === loginPopup) {
    loginPopup.style.display = "none";
  }
});
