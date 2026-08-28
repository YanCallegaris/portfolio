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
    featured: true,
    image: 'images/projects/city-vs-zombies.jpg',
    video: 'https://www.youtube.com/embed/QPnMC0v4kpc',
    playUrl: 'https://yancallegaris.itch.io/city-vs-zombies',
    technologies: ['Unity', 'C#', 'WebGL', 'Gameplay Programming'],
    en: {
      title: 'City vs Zombies',
      tag: 'ARCADE SURVIVAL PROTOTYPE · UNITY / C#',
      intro: 'A small arcade survival game developed in Unity and C#. The player moves, shoots and handles constant enemy pressure while trying to improve the score.',
      role: 'Core gameplay programming',
      format: 'Arcade survival prototype',
      build: 'WebGL in the browser',
      contribution: 'I worked on the core gameplay and implemented the systems that turn the prototype into a complete playable loop, from player controls and enemy spawning to scoring, game states, feedback and delivery.',
      evolution: 'The project started as a simple prototype. I refined it with initial instructions and fade, persistent high score, a clearer game-over and restart flow, audio and music, a game-over fade, and finally a playable WebGL build.',
      systems: ['Movement and shooting', 'Enemy spawning', 'Collisions', 'Score system', 'Persistent high score', 'Game over and restart', 'Initial instructions with fade', 'Audio, music and game-over fade']
    },
    pt: {
      title: 'City vs Zombies',
      tag: 'PROTÓTIPO ARCADE SURVIVAL · UNITY / C#',
      intro: 'Um pequeno arcade survival desenvolvido em Unity e C#. O jogador se movimenta, atira e lida com a pressão constante dos inimigos enquanto tenta melhorar sua pontuação.',
      role: 'Programação do core gameplay',
      format: 'Protótipo arcade survival',
      build: 'WebGL no navegador',
      contribution: 'Trabalhei no core gameplay e implementei os sistemas que transformam o protótipo em um loop jogável completo, dos controles do jogador e spawning de inimigos até pontuação, estados do jogo, feedback e entrega.',
      evolution: 'O projeto começou como um protótipo simples. Ele foi refinado com instruções iniciais e fade, recorde persistente, um fluxo mais claro de game over e restart, áudio e música, fade no game over e, por fim, uma versão WebGL jogável.',
      systems: ['Movimentação e tiro', 'Spawning de inimigos', 'Colisões', 'Sistema de score', 'Recorde persistente', 'Game over e restart', 'Instruções iniciais com fade', 'Áudio, música e fade no game over']
    }
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
  document.getElementById('detail').classList.toggle('city-detail', Boolean(project.featured));
  if (project.featured) {
    renderFeaturedProject(content, globalCopy);
    return;
  }
  const playLink = project.playUrl ? `<a class="play-link" href="${project.playUrl}" target="_blank" rel="noreferrer">${globalCopy.playGame}</a>` : '';
  document.getElementById('detail').innerHTML = `<section class="detail-hero"><span>${content.tag}</span><h1>${content.title}</h1><p>${content.intro}</p>${playLink}</section><img class="detail-cover" src="${project.image}" alt="${content.title}"><section class="case"><div><span class="section-label">${globalCopy.aboutProject}</span><h2>${globalCopy.caseTitle}</h2></div><div><p>${content.body}</p><ul>${content.points.map(point => `<li>${point}</li>`).join('')}</ul></div></section><div class="video"><iframe src="${project.video}" title="${content.title}" allowfullscreen></iframe></div>`;
}

function renderFeaturedProject(content, globalCopy) {
  const systemItems = content.systems.map(system => `<li>${system}</li>`).join('');
  const technologyItems = project.technologies.map(technology => `<li>${technology}</li>`).join('');
  document.getElementById('detail').innerHTML = `
    <section class="detail-hero city-hero">
      <span>${content.tag}</span>
      <h1>${content.title}</h1>
      <p>${content.intro}</p>
      <div class="detail-actions">
        <a class="play-link" href="${project.playUrl}" target="_blank" rel="noreferrer">${globalCopy.playGame}</a>
      </div>
    </section>
    <img class="detail-cover" src="${project.image}" alt="${content.title}">
    <section class="project-snapshot" aria-label="Project summary">
      <div><span>${globalCopy.myRole}</span><strong>${content.role}</strong></div>
      <div><span>${globalCopy.projectFormat}</span><strong>${content.format}</strong></div>
      <div><span>${globalCopy.playableBuild}</span><strong>${content.build}</strong></div>
    </section>
    <section class="city-story">
      <article class="story-card contribution-card">
        <span class="section-label">${globalCopy.whatIWorkedOn}</span>
        <h2>${globalCopy.contributionTitle}</h2>
        <p>${content.contribution}</p>
        <ul class="systems-grid">${systemItems}</ul>
      </article>
      <article class="story-card iteration-card">
        <span class="section-label">${globalCopy.developmentIteration}</span>
        <h2>${globalCopy.evolutionTitle}</h2>
        <p>${content.evolution}</p>
      </article>
      <article class="story-card skills-card">
        <span class="section-label">${globalCopy.systemsSkills}</span>
        <ul class="technology-list">${technologyItems}</ul>
      </article>
    </section>
    <section class="city-video">
      <span class="section-label">${globalCopy.videoLabel}</span>
      <div class="video"><iframe src="${project.video}" title="${content.title}" allowfullscreen></iframe></div>
    </section>`;
}

window.addEventListener('portfolio-language-change', event => renderProject(event.detail.language));
renderProject(window.portfolioLanguage || getPortfolioLanguage());
