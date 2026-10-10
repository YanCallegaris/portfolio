const projects = {
  lobby: {
    featured: true,
    videoFirst: true,
    image: 'images/projects/lobby-photon.png',
    video: 'https://www.youtube.com/embed/DA4fUzyxOcc',
    sourceUrl: 'https://github.com/YanCallegaris/LobbyPrototype',
    technologies: ['Unity', 'C#', 'Photon Fusion'],
    en: {
      title: 'Multiplayer Lobby',
      tag: 'LOBBY PROTOTYPE · PHOTON FUSION / SHARED MODE',
      intro: 'A multiplayer waiting room built in Unity with Photon Fusion. Players join the same session, see who is connected and mark themselves ready before the match begins.',
      role: 'Player data synchronization, ready states and lobby UI',
      format: 'Multiplayer learning prototype',
      build: 'Unity source project on GitHub',
      availabilityLabel: 'PROJECT ACCESS',
      actionLabel: 'VIEW PROJECT ON GITHUB ↗',
      accessNote: 'Source project, not a browser game. Download it from GitHub using Code → Download ZIP and open it in Unity 2022.3.62f3. Configure your own Photon Fusion App ID to test the network session.',
      videoLabel: 'Lobby demonstration',
      videoCaption: 'Recorded with three clients to demonstrate the lobby across multiple instances.',
      overviewHeadline: 'Getting everyone ready before the match',
      contribution: 'I implemented the lobby scene, connecting player names and ready states to the UI, sending changes through RPCs and controlling when the match can begin.',
      contributionBreakdown: 'LOBBY IMPLEMENTATION',
      contributionHeadline: 'From a button click to a shared ready state',
      developmentIteration: 'DEVELOPMENT CONTEXT',
      evolutionTitle: 'Connecting the menu, lobby and match',
      evolution: 'I added a waiting room between the initial menu and the game scene. This flow brings together networked player data, State Authority, RPCs and UI updates so players can see who is connected and confirm they are ready before the match starts.',
      areas: [
        { number: '01', title: 'Player data shared over the network', body: 'LobbyPlayerData groups the player name and ready state. A NetworkDictionary associates that data with each PlayerRef, keeping the information available to the lobby clients.' },
        { number: '02', title: 'Updating ready states through RPCs', body: 'The Ready button sends an RPC to the object with State Authority. That object updates the player data, and OnChangedRender refreshes the interface when the networked values change.' },
        { number: '03', title: 'A readable player list', body: 'The UI sorts entries by player ID, highlights the local player and displays Ready or Not Ready. It also reads the current data when a client joins and removes entries when players leave.' },
        { number: '04', title: 'Starting the match', body: 'The start check requires State Authority, at least one registered player and everyone ready. Starting closes the session to new joins, hides it from discovery and loads the game scene through the NetworkRunner.' }
      ],
      stages: [
        { number: '01', title: 'Start from the sample', body: 'Used Asteroids Shared Simple as the base, keeping the existing game and adapting the menu to enter a lobby first.' },
        { number: '02', title: 'Build the lobby flow', body: 'Connected player entries, ready-state changes and the start and leave buttons to the network session.' },
        { number: '03', title: 'Demonstrate with multiple clients', body: 'Recorded three simultaneous clients to show the ready states and the transition from the lobby into the sample game.' }
      ]
    },
    pt: {
      title: 'Lobby Multiplayer',
      tag: 'PROTÓTIPO DE LOBBY · PHOTON FUSION / SHARED MODE',
      intro: 'Uma sala de espera multiplayer desenvolvida em Unity com Photon Fusion. Os jogadores entram na mesma sessão, veem quem está conectado e confirmam que estão prontos antes do início da partida.',
      role: 'Sincronização dos dados dos jogadores, estado de pronto e UI do lobby',
      format: 'Protótipo de estudo multiplayer',
      build: 'Projeto Unity com código no GitHub',
      availabilityLabel: 'ACESSO AO PROJETO',
      actionLabel: 'VER PROJETO NO GITHUB ↗',
      accessNote: 'O download é do projeto-fonte, sem versão para jogar no navegador. No GitHub, use Code → Download ZIP e abra o projeto na Unity 2022.3.62f3. Configure seu próprio App ID do Photon Fusion para testar a sessão em rede.',
      videoLabel: 'Demonstração do lobby',
      videoCaption: 'Gravação com três clientes para demonstrar o lobby em múltiplas instâncias.',
      overviewHeadline: 'Preparar os jogadores antes de começar a partida',
      contribution: 'Implementei a cena de lobby, conectando os nomes e a confirmação de prontidão dos jogadores à interface, enviando alterações por RPCs e controlando o início da partida.',
      contributionBreakdown: 'IMPLEMENTAÇÃO DO LOBBY',
      contributionHeadline: 'Do clique no botão ao estado compartilhado',
      developmentIteration: 'CONTEXTO DO DESENVOLVIMENTO',
      evolutionTitle: 'Conectar o menu, o lobby e a partida',
      evolution: 'Adicionei uma sala de espera entre o menu inicial e a cena do jogo. Esse fluxo reúne dados dos jogadores em rede, State Authority, RPCs e atualização da interface para que todos possam ver quem está conectado e confirmar que estão prontos antes do início da partida.',
      areas: [
        { number: '01', title: 'Dados dos jogadores em rede', body: 'LobbyPlayerData agrupa o nome e o estado de pronto. Um NetworkDictionary associa esses dados a cada PlayerRef, mantendo as informações disponíveis para os clientes do lobby.' },
        { number: '02', title: 'Mudanças de estado por RPC', body: 'O botão de pronto envia uma RPC ao objeto com State Authority. Esse objeto atualiza os dados do jogador, e OnChangedRender atualiza a interface quando os valores em rede mudam.' },
        { number: '03', title: 'Lista de jogadores na interface', body: 'A UI ordena as entradas pelo ID, destaca o jogador local e exibe Ready ou Not Ready. Também lê os dados atuais quando um cliente entra e remove as entradas de quem sai da sala.' },
        { number: '04', title: 'Início da partida', body: 'A verificação exige State Authority, ao menos um jogador registrado e todos prontos. Ao iniciar, a sessão bloqueia novas entradas, deixa de aparecer na busca e carrega a cena do jogo pelo NetworkRunner.' }
      ],
      stages: [
        { number: '01', title: 'Partir do sample', body: 'Usei Asteroids Shared Simple como base, mantendo o jogo existente e adaptando o menu para entrar primeiro no lobby.' },
        { number: '02', title: 'Construir o fluxo do lobby', body: 'Conectei a lista de jogadores, as mudanças de estado e os botões de iniciar e sair à sessão em rede.' },
        { number: '03', title: 'Demonstrar com múltiplos clientes', body: 'Gravei três clientes simultâneos para mostrar os estados de pronto e a transição do lobby para o jogo do sample.' }
      ]
    }
  },
  login: {
    image: 'images/projects/login.jpg', video: 'https://www.youtube.com/embed/61WCvotVk48',
    en: { title: 'Simple Login System', tag: 'UNITY UI · PUBLIC API · AUTHENTICATION', intro: 'A complete login flow inside Unity, connected to a public authentication API.', body: 'The project explores input validation, request and response handling, loading states and clear interface feedback after authentication.', points: ['Responsive Unity UI flow', 'Public API request handling', 'Success, loading and error feedback'] },
    pt: { title: 'Sistema Simples de Login', tag: 'UI UNITY · API PÚBLICA · AUTENTICAÇÃO', intro: 'Um fluxo completo de login dentro da Unity, conectado a uma API pública de autenticação.', body: 'O projeto explora validação de campos, tratamento de requisições e respostas, estados de carregamento e feedback claro da interface após a autenticação.', points: ['Fluxo responsivo de UI na Unity', 'Requisições para uma API pública', 'Feedback de sucesso, carregamento e erro'] }
  },
  solar: {
    image: 'images/projects/solar.jpg', video: 'https://www.youtube.com/embed/hkn54ohgjBk',
    en: { title: 'Solar System Simulation', tag: 'UNITY 3D · ORBITAL MOTION · VISUALIZATION', intro: 'An interactive 3D study of planetary orbits and rotation.', body: 'Built to explore movement logic, relative scale and camera positioning, making planetary motion easy to follow in an interactive space scene.', points: ['Orbit and self-rotation systems', '3D scene composition', 'Camera positioning experiments'] },
    pt: { title: 'Simulação do Sistema Solar', tag: 'UNITY 3D · MOVIMENTO ORBITAL · VISUALIZAÇÃO', intro: 'Um estudo 3D interativo sobre órbitas e rotação dos planetas.', body: 'Criado para explorar lógica de movimento, escala relativa, posicionamento da câmera e visualização do movimento dos planetas em uma cena espacial interativa.', points: ['Sistemas de órbita e rotação', 'Composição de cena 3D', 'Experimentos de posicionamento da câmera'] }
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
      contribution: 'I implemented movement, shooting, enemy spawning and collisions, along with scoring, a saved high score and the game-over and restart flow.',
      evolution: 'The project started as a simple prototype. I added introductory instructions with fade transitions, a saved high score and a clearer game-over and restart flow. Audio, music and game-over fades followed, before I prepared the playable WebGL build.',
      areas: [
        { number: '01', title: 'Player control & combat', body: 'Implemented player movement, shooting and collision handling. These actions are at the center of every survival attempt.' },
        { number: '02', title: 'Enemy pressure', body: 'Built the enemy spawning system that keeps the play space populated and the player under constant pressure.' },
        { number: '03', title: 'Score & persistence', body: 'Created the scoring system and saved high score, giving players a record to beat on future runs.' },
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
      tag: 'PROTÓTIPO ARCADE DE SOBREVIVÊNCIA · UNITY / C#',
      intro: 'Um pequeno jogo arcade de sobrevivência desenvolvido em Unity e C#. O jogador se movimenta, atira e enfrenta os inimigos enquanto tenta superar sua pontuação.',
      role: 'Movimentação, tiro, inimigos, pontuação e fluxo dos estados do jogo',
      format: 'Protótipo arcade de sobrevivência',
      build: 'WebGL no navegador',
      contribution: 'Implementei movimentação, tiro, geração de inimigos e colisões, além da pontuação, do salvamento do recorde e do fluxo de fim de partida e reinício.',
      evolution: 'O projeto começou como um protótipo simples. Adicionei instruções iniciais com transições suaves, salvamento do recorde e um fluxo mais claro de fim de partida e reinício. Depois, refinei o áudio, a música e as transições no fim da partida e preparei a versão WebGL jogável.',
      areas: [
        { number: '01', title: 'Controle do jogador e combate', body: 'Implementei movimentação, tiro e tratamento de colisões, que são as ações centrais de cada tentativa de sobrevivência.' },
        { number: '02', title: 'Pressão dos inimigos', body: 'Desenvolvi o sistema de geração de inimigos que mantém o jogador sob pressão durante a partida.' },
        { number: '03', title: 'Pontuação e persistência', body: 'Criei o sistema de pontuação e o salvamento do recorde, dando ao jogador uma marca para superar nas próximas partidas.' },
        { number: '04', title: 'Fluxo da partida e feedback', body: 'Implementei instruções iniciais, fim de partida e reinício, com áudio, música e transições suaves de entrada e saída.' }
      ],
      stages: [
        { number: '01', title: 'Protótipo simples', body: 'O projeto começou como um pequeno protótipo de sobrevivência baseado em movimentação, tiro e pressão dos inimigos.' },
        { number: '02', title: 'Pontuação e novas partidas', body: 'Adicionei pontuação, salvamento do recorde, fim de partida e reinício para permitir novas tentativas de superar a melhor marca.' },
        { number: '03', title: 'Polimento e entrega WebGL', body: 'Instruções, fades, áudio e música refinaram a experiência antes da versão jogável no navegador.' }
      ]
    }
  },
  jumper: {
    featured: true,
    image: 'images/projects/jumper.png',
    video: 'https://www.youtube.com/embed/f9xnZKzW-Sw',
    playUrl: 'https://yancallegaris.itch.io/jumper',
    technologies: ['Unity', 'C#', 'WebGL'],
    en: {
      title: 'Jumper',
      tag: 'ARCADE PLATFORMER PROTOTYPE · UNITY / C#',
      intro: 'A small arcade platformer prototype built in Unity and C#. The player runs through a stylized desert, jumps over obstacles and tries to travel as far as possible.',
      role: 'Movement, jumping, obstacle avoidance, distance tracking and restart flow',
      format: 'Arcade platformer prototype',
      build: 'WebGL in the browser',
      overviewHeadline: 'Short runs, quick restarts and another chance to go further',
      contribution: 'I implemented movement and jumping, obstacle avoidance and distance tracking. I also built the game-over screen and quick restart flow, with visual and audio feedback.',
      contributionBreakdown: 'GAMEPLAY SYSTEMS',
      contributionHeadline: 'The systems behind each attempt',
      developmentIteration: 'GAMEPLAY LOOP',
      evolutionTitle: 'Run, jump, track the distance and try again',
      evolution: 'The distance counter tracks progress throughout the run. The game-over screen shows how far the player travelled and lets them quickly restart to try to beat their previous distance.',
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
      overviewHeadline: 'Partidas curtas, com reinício rápido para tentar ir mais longe',
      contribution: 'Implementei movimentação e salto, desvio de obstáculos e acompanhamento da distância. Também desenvolvi a tela de fim de partida e o reinício rápido, com feedback visual e sonoro.',
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
    en: { title: 'Car vs Zombie', tag: 'TOP-DOWN DRIVING · ENEMY PRESSURE · SURVIVAL', intro: 'A top-down driving prototype focused on surviving a zombie pursuit.', body: 'The player drives through the city while trying to escape the zombies chasing the vehicle.', points: ['Vehicle movement system', 'Enemy pursuit behavior', 'City layout and readability'] },
    pt: { title: 'Car vs Zombie', tag: 'DIREÇÃO TOP-DOWN · PRESSÃO DE INIMIGOS · SOBREVIVÊNCIA', intro: 'Um protótipo de direção com visão de cima, focado em sobreviver à perseguição dos zumbis.', body: 'O jogador dirige pela cidade tentando escapar dos zumbis que perseguem o veículo.', points: ['Sistema de movimento do veículo', 'Comportamento de perseguição dos inimigos', 'Layout e legibilidade da cidade'] }
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
      <header><h2>${content.videoLabel || globalCopy.videoLabel}</h2></header>
      <div class="video"><iframe src="${project.video}" title="${content.title}" allowfullscreen></iframe></div>
      ${content.videoCaption ? `<p class="project-media-caption">${content.videoCaption}</p>` : ''}
    </section>` : '';
  const overviewHeadline = content.overviewHeadline || globalCopy.overviewHeadline;
  const contributionBreakdown = content.contributionBreakdown || globalCopy.contributionBreakdown;
  const contributionHeadline = content.contributionHeadline || globalCopy.contributionHeadline;
  const developmentIteration = content.developmentIteration || globalCopy.developmentIteration;
  const evolutionTitle = content.evolutionTitle || globalCopy.evolutionTitle;
  const playAgain = content.playAgain || globalCopy.playAgain;
  const actionUrl = project.playUrl || project.sourceUrl;
  const actionLabel = content.actionLabel || globalCopy.playGame;
  const finalActionLabel = content.actionLabel || playAgain;
  document.getElementById('detail').innerHTML = `
    <section class="city-hero">
      <div class="city-hero-copy">
        <span class="section-label">${content.tag}</span>
        <h1>${content.title}</h1>
        <p>${content.intro}</p>
        <a class="play-link" href="${actionUrl}" target="_blank" rel="noreferrer">${actionLabel}</a>
      </div>
      <div class="city-hero-tech" aria-label="${globalCopy.builtWith}">
        <span>${globalCopy.builtWith}</span>
        <div>${technologyItems}</div>
      </div>
    </section>
    ${project.videoFirst ? videoSection : `<figure class="city-cover"><img src="${project.image}" alt="${content.title}"></figure>`}
    <section class="project-snapshot" aria-label="${globalCopy.projectOverview}">
      <div><span>${globalCopy.myRole}</span><strong>${content.role}</strong></div>
      <div><span>${globalCopy.projectFormat}</span><strong>${content.format}</strong></div>
      <div><span>${content.availabilityLabel || globalCopy.playableBuild}</span><strong>${content.build}</strong></div>
    </section>
    <section class="project-overview">
      <span class="section-label">${globalCopy.projectOverview}</span>
      <div><h2>${overviewHeadline}</h2><p>${content.contribution}</p></div>
    </section>
    ${project.videoFirst ? '' : videoSection}
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
      <a class="play-link final-play" href="${actionUrl}" target="_blank" rel="noreferrer">${finalActionLabel}</a>
      ${content.accessNote ? `<p class="project-access-note">${content.accessNote}</p>` : ''}
    </section>`;
}

window.addEventListener('portfolio-language-change', event => renderProject(event.detail.language));
renderProject(window.portfolioLanguage || getPortfolioLanguage());
