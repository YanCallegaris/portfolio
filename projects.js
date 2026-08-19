const projects = {
  login: {
    image: 'images/projects/login.jpg', video: 'https://www.youtube.com/embed/61WCvotVk48',
    en: { title: 'Simple Login System', tag: 'UNITY UI · PUBLIC API · AUTHENTICATION', intro: 'A complete login flow inside Unity, connected to a public authentication API.', body: 'The project explores input validation, request and response handling, loading states and clear interface feedback after authentication.', points: ['Responsive Unity UI flow', 'Public API request handling', 'Success, loading and error feedback'] },
    pt: { title: 'Sistema Simples de Login', tag: 'UI UNITY · API PÚBLICA · AUTENTICAÇÃO', intro: 'Um fluxo completo de login dentro da Unity, conectado a uma API pública de autenticação.', body: 'O projeto explora validação de campos, tratamento de requisições e respostas, estados de carregamento e feedback claro da interface após a autenticação.', points: ['Fluxo responsivo de UI na Unity', 'Requisições para uma API pública', 'Feedback de sucesso, carregamento e erro'] }
  },
  solar: {
    image: 'images/projects/solar.jpg', video: 'https://www.youtube.com/embed/hkn54ohgjBk',
    en: { title: 'Solar System Simulation', tag: 'UNITY 3D · ORBITAL MOTION · VISUALIZATION', intro: 'An interactive 3D study of planetary orbit, rotation and spatial presentation.', body: 'Built to explore movement logic, relative scale, camera presentation and readable motion in an interactive space scene.', points: ['Orbit and self-rotation systems', '3D scene composition', 'Camera and presentation experiments'] },
    pt: { title: 'Simulação do Sistema Solar', tag: 'UNITY 3D · MOVIMENTO ORBITAL · VISUALIZAÇÃO', intro: 'Um estudo 3D interativo sobre órbitas, rotação dos planetas e apresentação espacial.', body: 'Criado para explorar lógica de movimento, escala relativa, apresentação de câmera e movimentos legíveis em uma cena espacial interativa.', points: ['Sistemas de órbita e rotação', 'Composição de cena 3D', 'Experimentos de câmera e apresentação'] }
  },
  zombie: {
    image: 'images/projects/city-vs-zombies.jpg', video: 'https://www.youtube.com/embed/QPnMC0v4kpc', playUrl: 'https://yancallegaris.itch.io/city-vs-zombies',
    en: { title: 'City vs Zombies', tag: 'COMBAT · ENEMY BEHAVIOR · PLAYABLE', intro: 'A playable combat prototype built around enemy pressure and moment-to-moment survival.', body: 'The project focuses on shooting, movement, readable feedback and rapid gameplay iteration inside Unity.', points: ['Combat-focused gameplay loop', 'Enemy chase and pressure', 'Playable build on itch.io'] },
    pt: { title: 'City vs Zombies', tag: 'COMBATE · COMPORTAMENTO DE INIMIGOS · JOGÁVEL', intro: 'Um protótipo jogável de combate construído em torno da pressão dos inimigos e da sobrevivência a cada momento.', body: 'O projeto é focado em tiro, movimentação, feedback visual claro e iteração rápida de gameplay dentro da Unity.', points: ['Loop de gameplay focado em combate', 'Perseguição e pressão dos inimigos', 'Versão jogável no itch.io'] }
  },
  car: {
    image: 'images/projects/car.jpg', video: 'https://www.youtube.com/embed/PUs0ZjHHkqs',
    en: { title: 'Car vs Zombie', tag: 'TOP-DOWN DRIVING · ENEMY PRESSURE · SURVIVAL', intro: 'A top-down survival prototype where staying in motion is the key to survival.', body: 'Zombies constantly chase the vehicle while the player navigates a city, balancing control, space and pressure.', points: ['Vehicle movement system', 'Enemy pursuit behavior', 'City layout and readability'] },
    pt: { title: 'Car vs Zombie', tag: 'DIREÇÃO TOP-DOWN · PRESSÃO DE INIMIGOS · SOBREVIVÊNCIA', intro: 'Um protótipo de sobrevivência top-down em que continuar em movimento é a chave para sobreviver.', body: 'Os zumbis perseguem o veículo constantemente enquanto o jogador atravessa a cidade, equilibrando controle, espaço e pressão.', points: ['Sistema de movimento do veículo', 'Comportamento de perseguição dos inimigos', 'Layout e legibilidade da cidade'] }
  }
};

const projectId = new URLSearchParams(location.search).get('id');
const project = projects[projectId] || projects.login;
document.body.classList.add('project-page');

function renderProject(language) {
  const selected = language === 'pt' ? 'pt' : 'en';
  const content = project[selected];
  const globalCopy = portfolioTranslations[selected];
  document.title = `${content.title} — Yan Callegaris`;
  const playLink = project.playUrl ? `<a class="play-link" href="${project.playUrl}" target="_blank" rel="noreferrer">${globalCopy.playGame}</a>` : '';
  document.getElementById('detail').innerHTML = `<section class="detail-hero"><span>${content.tag}</span><h1>${content.title}</h1><p>${content.intro}</p>${playLink}</section><img class="detail-cover" src="${project.image}" alt="${content.title}"><section class="case"><div><span class="section-label">${globalCopy.aboutProject}</span><h2>${globalCopy.caseTitle}</h2></div><div><p>${content.body}</p><ul>${content.points.map(point => `<li>${point}</li>`).join('')}</ul></div></section><div class="video"><iframe src="${project.video}" title="${content.title}" allowfullscreen></iframe></div>`;
}

window.addEventListener('portfolio-language-change', event => renderProject(event.detail.language));
renderProject(window.portfolioLanguage || getPortfolioLanguage());
