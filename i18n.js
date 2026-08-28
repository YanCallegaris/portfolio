const portfolioTranslations = {
  en: {
    pageTitle: 'Yan Callegaris — Unity Gameplay Programmer',
    navExperience: 'EXPERIENCE', navProjects: 'PROJECTS', navContact: 'CONTACT',
    kicker: 'UNITY GAMEPLAY PROGRAMMER', heroTitle: 'Hi! I’m<br>Yan Callegaris.',
    heroBody: 'I build gameplay systems, interactive features, and polished UI in Unity, ranging from production educational games to personal prototypes.',
    currentRole: 'CURRENT ROLE', roleTitle: 'Unity Developer at Educacross',
    roleBody: 'Gameplay features, maintenance, bug fixing, UI flows and content integration for live educational products.',
    officialSite: 'OFFICIAL SITE ↗', selectedWork: 'SELECTED WORK', projectsTitle: 'Projects', credentialsLabel: 'CREDENTIALS', credentialsTitle: 'Badges &amp; learning', letsTalk: 'LET’S TALK',
    allProjects: '← ALL PROJECTS', backProjects: '← Back to all projects', aboutProject: 'ABOUT THE PROJECT', caseTitle: 'Gameplay, systems<br>and iteration.',
    viewProject: 'VIEW PROJECT', playGameShort: 'PLAY GAME ↗', playGame: 'PLAY GAME ↗',
    myRole: 'MY CONTRIBUTION', projectFormat: 'PROJECT', playableBuild: 'PLAYABLE BUILD', projectOverview: 'PROJECT OVERVIEW', overviewHeadline: 'A complete survival loop, built system by system', contributionBreakdown: 'CONTRIBUTION BREAKDOWN', contributionHeadline: 'The systems behind a complete run', developmentIteration: 'DEVELOPMENT & ITERATION', evolutionTitle: 'From a simple prototype to a playable browser build', builtWith: 'BUILT WITH', videoLabel: 'GAMEPLAY VIDEO', playAgain: 'PLAY CITY VS ZOMBIES ↗'
  },
  pt: {
    pageTitle: 'Yan Callegaris — Programador de Gameplay Unity',
    navExperience: 'EXPERIÊNCIA', navProjects: 'PROJETOS', navContact: 'CONTATO',
    kicker: 'PROGRAMADOR DE GAMEPLAY UNITY', heroTitle: 'Olá! Eu sou<br>Yan Callegaris.',
    heroBody: 'Desenvolvo sistemas de gameplay, recursos interativos e interfaces bem estruturadas em Unity, criando desde jogos educacionais em produção até protótipos pessoais.',
    currentRole: 'CARGO ATUAL', roleTitle: 'Desenvolvedor Unity na Educacross',
    roleBody: 'Funcionalidades de gameplay, manutenção, correção de bugs, fluxos de UI e integração de conteúdo em produtos educacionais ativos.',
    officialSite: 'SITE OFICIAL ↗', selectedWork: 'TRABALHOS SELECIONADOS', projectsTitle: 'Projetos', credentialsLabel: 'CREDENCIAIS', credentialsTitle: 'Badges e formação', letsTalk: 'VAMOS CONVERSAR',
    allProjects: '← TODOS OS PROJETOS', backProjects: '← Voltar para todos os projetos', aboutProject: 'SOBRE O PROJETO', caseTitle: 'Gameplay, sistemas<br>e iteração.',
    viewProject: 'VER PROJETO', playGameShort: 'JOGAR ↗', playGame: 'JOGAR ↗',
    myRole: 'MINHA CONTRIBUIÇÃO', projectFormat: 'PROJETO', playableBuild: 'VERSÃO JOGÁVEL', projectOverview: 'VISÃO GERAL DO PROJETO', overviewHeadline: 'Um loop de sobrevivência completo, construído sistema por sistema', contributionBreakdown: 'CONTRIBUIÇÃO EM DETALHES', contributionHeadline: 'Os sistemas por trás de uma partida completa', developmentIteration: 'DESENVOLVIMENTO E ITERAÇÃO', evolutionTitle: 'De um protótipo simples a uma versão jogável no navegador', builtWith: 'DESENVOLVIDO COM', videoLabel: 'VÍDEO DE GAMEPLAY', playAgain: 'JOGAR CITY VS ZOMBIES ↗'
  }
};

const portfolioProjectCards = {
  en: { login: ['Simple Login System', 'UI · API · Authentication'], solar: ['Solar System Simulation', 'Unity 3D · Simulation'], zombie: ['City vs Zombies', 'Arcade survival · Unity / C#'], car: ['Car vs Zombie', 'Driving · Survival'] },
  pt: { login: ['Sistema Simples de Login', 'UI · API · Autenticação'], solar: ['Simulação do Sistema Solar', 'Unity 3D · Simulação'], zombie: ['City vs Zombies', 'Arcade survival · Unity / C#'], car: ['Car vs Zombie', 'Direção · Sobrevivência'] }
};

function getPortfolioLanguage() {
  return localStorage.getItem('portfolio-language') === 'pt' ? 'pt' : 'en';
}

function setPortfolioLanguage(language, notify = true) {
  const selected = language === 'pt' ? 'pt' : 'en';
  const copy = portfolioTranslations[selected];
  localStorage.setItem('portfolio-language', selected);
  document.documentElement.lang = selected === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const value = copy[element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll('[data-language]').forEach(button => {
    const active = button.dataset.language === selected;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('[data-project-title]').forEach(element => {
    const card = portfolioProjectCards[selected][element.dataset.projectTitle];
    if (card) element.textContent = card[0];
  });
  document.querySelectorAll('[data-project-short]').forEach(element => {
    const card = portfolioProjectCards[selected][element.dataset.projectShort];
    if (card) element.textContent = card[1];
  });
  if (!document.body.classList.contains('project-page')) document.title = copy.pageTitle;
  window.portfolioLanguage = selected;
  if (notify) window.dispatchEvent(new CustomEvent('portfolio-language-change', { detail: { language: selected } }));
}

document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setPortfolioLanguage(button.dataset.language)));
setPortfolioLanguage(getPortfolioLanguage(), false);
