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
    technologies: ['Unity', 'C#', 'WebGL'],
    en: {
      title: 'City vs Zombies',
      tag: 'ARCADE SURVIVAL PROTOTYPE · UNITY / C#',
      intro: 'A small arcade survival game developed in Unity and C#. The player moves, shoots and handles constant enemy pressure while trying to improve the score.',
      role: 'Movement, shooting, enemies, scoring and game-state flow',
      format: 'Arcade survival prototype',
      build: 'WebGL in the browser',
      contribution: 'I implemented the systems that connect each survival attempt from the first input to the final score: player actions, enemy pressure, collisions, progression, game states and feedback.',
      evolution: 'The project started as a simple prototype. I refined it with initial instructions and fade, persistent high score, a clearer game-over and restart flow, audio and music, a game-over fade, and finally a playable WebGL build.',
      areas: [
        { number: '01', title: 'Player control & combat', body: 'Implemented player movement, shooting and collision handling. These actions are at the center of every survival attempt.' },
        { number: '02', title: 'Enemy pressure', body: 'Built the enemy spawning system that keeps the play space populated and the player under constant pressure.' },
        { number: '03', title: 'Score & persistence', body: 'Created the score system and persistent high score so every finished run leaves a clear result for the next attempt.' },
        { number: '04', title: 'Session flow & feedback', body: 'Implemented initial instructions with fade, game over, restart, audio, music and the final game-over fade.' }
      ],
      stages: [
        { number: '01', title: 'Simple prototype', body: 'The project began as a small survival prototype built around movement, shooting and enemy pressure.' },
        { number: '02', title: 'Complete session loop', body: 'Score, persistent high score, game over and restart connected the mechanics into a repeatable run.' },
        { number: '03', title: 'Polish & WebGL delivery', body: 'Instructions, fades, audio and music refined the experience before the playable browser build.' }
      ]
    },
    pt: {
      title: 'City vs Zombies',
      tag: 'PROTÓTIPO ARCADE SURVIVAL · UNITY / C#',
      intro: 'Um pequeno arcade survival desenvolvido em Unity e C#. O jogador se movimenta, atira e lida com a pressão constante dos inimigos enquanto tenta melhorar sua pontuação.',
      role: 'Movimentação, tiro, inimigos, pontuação e fluxo dos estados do jogo',
      format: 'Protótipo arcade survival',
      build: 'WebGL no navegador',
      contribution: 'Implementei os sistemas que conectam cada tentativa de sobrevivência, do primeiro comando à pontuação final: ações do jogador, pressão dos inimigos, colisões, progressão, estados do jogo e feedback.',
      evolution: 'O projeto começou como um protótipo simples. Ele foi refinado com instruções iniciais e fade, recorde persistente, um fluxo mais claro de game over e restart, áudio e música, fade no game over e, por fim, uma versão WebGL jogável.',
      areas: [
        { number: '01', title: 'Controle do jogador e combate', body: 'Implementei movimentação, tiro e tratamento de colisões, que são as ações centrais de cada tentativa de sobrevivência.' },
        { number: '02', title: 'Pressão dos inimigos', body: 'Desenvolvi o sistema de spawning que mantém o espaço de jogo ocupado e o jogador sob pressão constante.' },
        { number: '03', title: 'Pontuação e persistência', body: 'Criei o sistema de score e o recorde persistente para que cada partida deixe um resultado claro a ser superado.' },
        { number: '04', title: 'Fluxo da partida e feedback', body: 'Implementei instruções iniciais com fade, game over, restart, áudio, música e o fade final de game over.' }
      ],
      stages: [
        { number: '01', title: 'Protótipo simples', body: 'O projeto começou como um pequeno protótipo de sobrevivência baseado em movimentação, tiro e pressão dos inimigos.' },
        { number: '02', title: 'Loop completo da partida', body: 'Score, recorde persistente, game over e restart conectaram as mecânicas em uma experiência repetível.' },
        { number: '03', title: 'Polimento e entrega WebGL', body: 'Instruções, fades, áudio e música refinaram a experiência antes da versão jogável no navegador.' }
      ]
    }
  },
  jumper: {
    featured: true,
    image: 'images/projects/jumper.png',
    playUrl: 'https://yancallegaris.itch.io/jumper',
    technologies: ['Unity', 'C#', 'WebGL'],
    en: {
      title: 'Jumper',
      tag: 'ARCADE PLATFORMER PROTOTYPE · UNITY / C#',
      intro: 'A small arcade platformer prototype built in Unity and C#. The player runs through a stylized desert, jumps over obstacles and tries to reach the greatest distance possible.',
      role: 'Movement, jumping, obstacle avoidance, distance tracking and restart flow',
      format: 'Arcade platformer prototype',
      build: 'WebGL in the browser',
      overviewHeadline: 'A short arcade loop built for quick retries',
      contribution: 'I implemented the systems that connect each attempt: player movement and jumping, obstacle avoidance, distance tracking, game over and quick restart. Visual and audio feedback make the result of each run clear.',
      contributionBreakdown: 'GAMEPLAY SYSTEMS',
      contributionHeadline: 'The systems behind each attempt',
      developmentIteration: 'GAMEPLAY LOOP',
      evolutionTitle: 'Run, jump, track the distance and try again',
      evolution: 'Each run begins immediately, tracks the distance travelled and ends with a clear result. From the game-over screen, the player can quickly start another attempt and try to improve the previous distance.',
      playAgain: 'PLAY JUMPER ↗',
      areas: [
        { number: '01', title: 'Movement and jumping', body: 'Implemented the player movement and jump controls that drive every attempt through the desert course.' },
        { number: '02', title: 'Obstacle avoidance', body: 'Connected movement and jumping to a simple challenge based on reading and avoiding obstacles.' },
        { number: '03', title: 'Distance tracking', body: 'Created the distance counter that follows the run and gives the player a clear result at game over.' },
        { number: '04', title: 'Game over and quick restart', body: 'Connected failed attempts to the game-over screen, visual and audio feedback, and a fast way to begin another run.' }
      ],
      stages: [
        { number: '01', title: 'Start the run', body: 'The player begins moving through the desert and uses jumping to respond to incoming obstacles.' },
        { number: '02', title: 'Track the attempt', body: 'Distance is measured during the run so progress remains visible and each attempt produces a result.' },
        { number: '03', title: 'See the result and retry', body: 'Game over presents the travelled distance and immediately offers another attempt.' }
      ]
    },
    pt: {
      title: 'Jumper',
      tag: 'PROTÓTIPO DE PLATAFORMA ARCADE · UNITY / C#',
      intro: 'Um pequeno protótipo de plataforma arcade desenvolvido em Unity e C#. O jogador atravessa um deserto estilizado, pula sobre obstáculos e tenta alcançar a maior distância possível.',
      role: 'Movimentação, salto, desvio de obstáculos, distância e fluxo de reinício',
      format: 'Protótipo de plataforma arcade',
      build: 'WebGL no navegador',
      overviewHeadline: 'Um loop arcade curto, criado para novas tentativas rápidas',
      contribution: 'Implementei os sistemas que conectam cada tentativa: movimentação e salto do jogador, desvio de obstáculos, acompanhamento da distância, game over e reinício rápido. O feedback visual e sonoro deixa claro o resultado de cada partida.',
      contributionBreakdown: 'SISTEMAS DE GAMEPLAY',
      contributionHeadline: 'Os sistemas por trás de cada tentativa',
      developmentIteration: 'LOOP DE GAMEPLAY',
      evolutionTitle: 'Correr, pular, acompanhar a distância e tentar novamente',
      evolution: 'Cada partida começa imediatamente, acompanha a distância percorrida e termina com um resultado claro. Na tela de game over, o jogador pode iniciar rapidamente uma nova tentativa e buscar uma distância maior.',
      playAgain: 'JOGAR JUMPER ↗',
      areas: [
        { number: '01', title: 'Movimentação e salto', body: 'Implementei os controles de movimentação e salto que conduzem cada tentativa pelo percurso no deserto.' },
        { number: '02', title: 'Desvio de obstáculos', body: 'Conectei movimentação e salto a um desafio simples baseado em identificar e evitar obstáculos.' },
        { number: '03', title: 'Acompanhamento da distância', body: 'Criei o contador que acompanha a partida e apresenta ao jogador um resultado claro no game over.' },
        { number: '04', title: 'Game over e reinício rápido', body: 'Conectei o fim da tentativa à tela de game over, ao feedback visual e sonoro e a uma forma rápida de começar novamente.' }
      ],
      stages: [
        { number: '01', title: 'Iniciar a partida', body: 'O jogador começa a atravessar o deserto e usa o salto para responder aos obstáculos do percurso.' },
        { number: '02', title: 'Acompanhar a tentativa', body: 'A distância é medida durante a partida para manter o progresso visível e produzir um resultado.' },
        { number: '03', title: 'Ver o resultado e tentar novamente', body: 'O game over apresenta a distância percorrida e oferece imediatamente uma nova tentativa.' }
      ]
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
  document.title = `${content.title} | Yan Callegaris`;
  document.getElementById('detail').classList.toggle('city-detail', Boolean(project.featured));
  if (project.featured) {
    renderFeaturedProject(content, globalCopy);
    return;
  }
  const playLink = project.playUrl ? `<a class="play-link" href="${project.playUrl}" target="_blank" rel="noreferrer">${globalCopy.playGame}</a>` : '';
  document.getElementById('detail').innerHTML = `<section class="detail-hero"><span>${content.tag}</span><h1>${content.title}</h1><p>${content.intro}</p>${playLink}</section><img class="detail-cover" src="${project.image}" alt="${content.title}"><section class="case"><div><span class="section-label">${globalCopy.aboutProject}</span><h2>${globalCopy.caseTitle}</h2></div><div><p>${content.body}</p><ul>${content.points.map(point => `<li>${point}</li>`).join('')}</ul></div></section><div class="video"><iframe src="${project.video}" title="${content.title}" allowfullscreen></iframe></div>`;
}

function renderFeaturedProject(content, globalCopy) {
  const contributionAreas = content.areas.map(area => `<article class="contribution-area"><span>${area.number}</span><h3>${area.title}</h3><p>${area.body}</p></article>`).join('');
  const developmentStages = content.stages.map(stage => `<article class="development-stage"><span>${stage.number}</span><h3>${stage.title}</h3><p>${stage.body}</p></article>`).join('');
  const technologyItems = project.technologies.map(technology => `<span>${technology}</span>`).join('');
  const videoSection = project.video ? `
    <section class="city-video">
      <header><h2>${globalCopy.videoLabel}</h2></header>
      <div class="video"><iframe src="${project.video}" title="${content.title}" allowfullscreen></iframe></div>
    </section>` : '';
  const overviewHeadline = content.overviewHeadline || globalCopy.overviewHeadline;
  const contributionBreakdown = content.contributionBreakdown || globalCopy.contributionBreakdown;
  const contributionHeadline = content.contributionHeadline || globalCopy.contributionHeadline;
  const developmentIteration = content.developmentIteration || globalCopy.developmentIteration;
  const evolutionTitle = content.evolutionTitle || globalCopy.evolutionTitle;
  const playAgain = content.playAgain || globalCopy.playAgain;
  document.getElementById('detail').innerHTML = `
    <section class="city-hero">
      <div class="city-hero-copy">
        <span class="section-label">${content.tag}</span>
        <h1>${content.title}</h1>
        <p>${content.intro}</p>
        <a class="play-link" href="${project.playUrl}" target="_blank" rel="noreferrer">${globalCopy.playGame}</a>
      </div>
      <div class="city-hero-tech" aria-label="${globalCopy.builtWith}">
        <span>${globalCopy.builtWith}</span>
        <div>${technologyItems}</div>
      </div>
    </section>
    <figure class="city-cover"><img src="${project.image}" alt="${content.title}"></figure>
    <section class="project-snapshot" aria-label="${globalCopy.projectOverview}">
      <div><span>${globalCopy.myRole}</span><strong>${content.role}</strong></div>
      <div><span>${globalCopy.projectFormat}</span><strong>${content.format}</strong></div>
      <div><span>${globalCopy.playableBuild}</span><strong>${content.build}</strong></div>
    </section>
    <section class="project-overview">
      <span class="section-label">${globalCopy.projectOverview}</span>
      <div><h2>${overviewHeadline}</h2><p>${content.contribution}</p></div>
    </section>
    ${videoSection}
    <section class="contribution-showcase">
      <header><span class="section-label">${contributionBreakdown}</span><h2>${contributionHeadline}</h2></header>
      <div class="contribution-grid">${contributionAreas}</div>
    </section>
    <section class="development-section">
      <header>
        <span class="section-label">${developmentIteration}</span>
        <h2>${evolutionTitle}</h2>
        <p>${content.evolution}</p>
      </header>
      <div class="development-timeline">${developmentStages}</div>
    </section>
    <section class="city-final-cta">
      <a class="play-link final-play" href="${project.playUrl}" target="_blank" rel="noreferrer">${playAgain}</a>
    </section>`;
}

window.addEventListener('portfolio-language-change', event => renderProject(event.detail.language));
renderProject(window.portfolioLanguage || getPortfolioLanguage());
