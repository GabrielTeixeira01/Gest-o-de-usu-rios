
const RH_USERS = [
  { usuario: "rh@empresa.com", senha: "rh2024", nome: "Ana Costa", cargo: "Coordenadora de RH" },
  { usuario: "admin", senha: "admin123", nome: "Carlos Mendes", cargo: "Diretor de RH" },
];

const DB_KEY = "rh_funcionarios";

const CARGOS = [
  "Analista de Sistemas",
  "Analista de Dados",
  "Desenvolvedor Frontend",
  "Desenvolvedor Backend",
  "Desenvolvedor Fullstack",
  "Designer UX/UI",
  "Gerente de Projetos",
  "Coordenador de RH",
  "Assistente Administrativo",
  "Diretor de Tecnologia",
  "Outro",
];

const CARGO_COLORS = {
  "Analista": "#2563eb",
  "Desenvolvedor": "#7c3aed",
  "Designer": "#db2777",
  "Gerente": "#d97706",
  "Coordenador": "#059669",
  "Assistente": "#0891b2",
  "Diretor": "#dc2626",
  "Outro": "#6b7280",
};

const VIEW_ORDER = ["home", "dashboard", "cadastro", "rh"];

const VIEW_LABELS = {
  "home": "Dashboard Inicial",
  "dashboard": "Indicadores & Analytics",
  "cadastro": "Cadastrar Colaborador",
  "login-rh": "Controle de Acesso",
  "rh": "Gestão de Equipe"
};

/* ---------- Elegant Inline SVG Icons ---------- */
const Icons = {
  home: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  userAdd: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>`,
  users: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  lock: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  lockOpen: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`,
  search: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  trash: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>`,
  edit: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  check: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  logout: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`,
  chart: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>`,
  bell: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
  user: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  plus: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
  eye: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`,
  arrowRight: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`
};

/* ---------- Global State ---------- */
const state = {
  rhUser: { usuario: "admin", nome: "Carlos Mendes", cargo: "Diretor de RH" },
  view: "cadastro",
  editTarget: null,
  prevView: null,
  funcionarios: [],
  form: { nome: "", cpf: "", cargo: "", dataNascimento: "", endereco: "", salario: "", dataAdmissao: "" },
  errors: {},
  submitted: null,
  search: "",
  filterCargo: "",
  sortBy: "data",
  login: { usuario: "", senha: "", showSenha: false, erro: "", loading: false },
  isAnimating: false,
  showNotifications: false
};

/* ---------- Helpers ---------- */
function getDB() {
  try { return JSON.parse(localStorage.getItem(DB_KEY) || "[]"); }
  catch { return []; }
}

function saveDB(data) {
  localStorage.setItem(DB_KEY, JSON.stringify(data));
}

function formatCPF(v) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  return d
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function validateCPF(cpf) {
  return cpf.replace(/\D/g, "").length === 11;
}

function getInitials(name) {
  return name.split(" ").filter(Boolean).slice(0, 2).map(n => n[0].toUpperCase()).join("");
}

function getCargoColor(cargo) {
  for (const key of Object.keys(CARGO_COLORS)) {
    if (cargo.includes(key)) return CARGO_COLORS[key];
  }
  return "#2563eb";
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;").replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function getAnimationDirection(fromView, toView) {
  const fi = VIEW_ORDER.indexOf(fromView);
  const ti = VIEW_ORDER.indexOf(toView);
  if (fi === -1 || ti === -1) return "right";
  return ti >= fi ? "right" : "left";
}

/* ---------- SVG Headcount Growth Chart Generator ---------- */
function generateGrowthChart() {
  const emps = [...state.funcionarios].sort((a,b) => a.id - b.id);
  if (emps.length === 0) {
    return `<div class="empty-chart-msg">Sem registros ativos para gerar o gráfico</div>`;
  }
  
  const width = 500;
  const height = 150;
  const padding = 20;
  const points = [];
  const total = emps.length;
  
  if (total === 1) {
    points.push({ x: padding, y: height - padding });
    points.push({ x: width - padding, y: height - padding });
  } else {
    emps.forEach((emp, index) => {
      const x = padding + (index / (total - 1)) * (width - 2 * padding);
      const y = height - padding - ((index + 1) / total) * (height - 2 * padding);
      points.push({ x, y });
    });
  }
  
  let dPath = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    dPath += ` L ${points[i].x} ${points[i].y}`;
  }
  
  let fillPath = `${dPath} L ${points[points.length-1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;
  
  return `
    <svg viewBox="0 0 ${width} ${height}" class="svg-growth-chart">
      <defs>
        <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--primary)" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="var(--primary)" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <!-- Grid lines -->
      <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="var(--border-default)" stroke-width="1"/>
      <line x1="${padding}" y1="${padding}" x2="${width - padding}" y2="${padding}" stroke="var(--border-default)" stroke-width="1" stroke-dasharray="3"/>
      
      <!-- Area fill -->
      <path d="${fillPath}" fill="url(#chart-grad)"/>
      
      <!-- Growth line -->
      <path d="${dPath}" fill="none" stroke="var(--primary)" stroke-width="2"/>
      
      <!-- Point dots -->
      ${points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="3.5" fill="var(--primary)" stroke="#ffffff" stroke-width="1.5"/>`).join("")}
    </svg>
  `;
}

/* ---------- SVG Circular Donut Chart Generator ---------- */
function generateDonutChart(activeCargos, totalCount) {
  if (totalCount === 0) {
    return `<div class="empty-chart-msg">Sem dados para gerar gráfico circular</div>`;
  }
  
  const r = 40;
  const cx = 60;
  const cy = 60;
  const C = 2 * Math.PI * r; // ~251.327
  let accumulatedPercent = 0;
  
  const segments = activeCargos.map(item => {
    const pct = (item.count / totalCount) * 100;
    const color = getCargoColor(item.cargo);
    const strokeDashArray = `${(pct / 100) * C} ${C}`;
    const rotateAngle = -90 + (accumulatedPercent / 100) * 360;
    accumulatedPercent += pct;
    
    return `
      <circle cx="${cx}" cy="${cy}" r="${r}"
        fill="transparent"
        stroke="${color}"
        stroke-width="10"
        stroke-dasharray="${strokeDashArray}"
        stroke-dashoffset="0"
        transform="rotate(${rotateAngle}, ${cx}, ${cy})"
        style="transition: stroke-dasharray 0.5s ease-in-out;">
      </circle>
    `;
  });
  
  return `
    <div style="display: flex; align-items: center; justify-content: center; gap: 24px; flex-wrap: wrap; padding: 10px 0;">
      <svg width="150" height="150" viewBox="0 0 120 120" style="display: block; overflow: visible;">
        <circle cx="${cx}" cy="${cy}" r="${r + 5}" fill="transparent" stroke="var(--border-default)" stroke-width="1"></circle>
        <circle cx="${cx}" cy="${cy}" r="${r - 5}" fill="transparent" stroke="var(--border-default)" stroke-width="1"></circle>
        ${segments.join("")}
        <text x="${cx}" y="${cy + 4}" text-anchor="middle" font-size="12" font-weight="700" fill="var(--text-main)" font-family="inherit">${totalCount}</text>
        <text x="${cx}" y="${cy + 13}" text-anchor="middle" font-size="7" font-weight="500" fill="var(--text-muted)" font-family="inherit" letter-spacing="0.5">COLAB.</text>
      </svg>
      
      <div style="display: flex; flex-direction: column; gap: 6px; flex: 1; min-width: 140px;">
        ${activeCargos.slice(0, 5).map(item => {
          const color = getCargoColor(item.cargo);
          const pct = ((item.count / totalCount) * 100).toFixed(0);
          return `
            <div style="display: flex; align-items: center; gap: 6px; font-size: 12px;">
              <span style="display: inline-block; width: 8px; height: 8px; border-radius: var(--radius-full); background-color: ${color}; flex-shrink: 0;"></span>
              <span style="color: var(--text-secondary); text-overflow: ellipsis; overflow: hidden; white-space: nowrap; max-width: 120px;" title="${escapeHtml(item.cargo)}">${escapeHtml(item.cargo)}</span>
              <span style="margin-left: auto; font-weight: 600; color: var(--text-main);">${pct}%</span>
            </div>
          `;
        }).join("")}
        ${activeCargos.length > 5 ? `<div style="font-size: 11px; color: var(--text-muted); text-align: right;">+ ${activeCargos.length - 5} outros</div>` : ""}
      </div>
    </div>
  `;
}

/* ---------- Actions ---------- */
function goRH() {
  changeViewWithAnimation("rh");
}

function handleLogin() {
  const { usuario, senha } = state.login;
  if (!usuario || !senha) { state.login.erro = "Preencha usuário e senha."; render(); return; }

  state.login.loading = true;
  state.login.erro = "";
  render();

  setTimeout(() => {
    const user = RH_USERS.find(u => u.usuario === usuario.trim() && u.senha === senha);
    if (user) { state.rhUser = user; changeViewWithAnimation("rh"); return; }
    else { state.login.erro = "Usuário ou senha incorretos."; }
    state.login.loading = false;
    render();
  }, 750);
}

function handleLogout() {
  state.rhUser = null;
  changeViewWithAnimation("home");
}

function validateForm() {
  const errs = {};
  const { nome, cpf, cargo } = state.form;
  if (!nome.trim() || nome.trim().length < 3) errs.nome = "Nome deve ter ao menos 3 caracteres.";
  if (!validateCPF(cpf)) errs.cpf = "CPF inválido. Informe os 11 dígitos.";
  if (!cargo) errs.cargo = "Selecione um cargo.";
  if (!state.form.dataNascimento) errs.dataNascimento = "Informe a data de nascimento.";
  if (!state.form.endereco.trim()) errs.endereco = "Informe o endereço.";
  if (!state.form.salario.trim()) errs.salario = "Informe o salário.";
  if (!state.form.dataAdmissao) errs.dataAdmissao = "Informe a data de admissão.";
  const dup = state.funcionarios.find(f => f.cpf.replace(/\D/g, "") === cpf.replace(/\D/g, ""));
  if (dup) errs.cpf = "Este CPF já está cadastrado.";
  return errs;
}

function handleSubmit() {
  const errs = validateForm();
  state.errors = errs;
  if (Object.keys(errs).length > 0) { render(); return; }

  const novo = {
    id: Date.now(),
    nome: state.form.nome.trim(),
    cpf: state.form.cpf,
    cargo: state.form.cargo,
    dataNascimento: state.form.dataNascimento,
    endereco: state.form.endereco.trim(),
    salario: state.form.salario,
    dataAdmissao: state.form.dataAdmissao,
    data: new Date().toLocaleDateString("pt-BR"),
    hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
  };

  state.funcionarios.push(novo);
  saveDB(state.funcionarios);
  state.submitted = novo;
  state.form = { nome: "", cpf: "", cargo: "", dataNascimento: "", endereco: "", salario: "", dataAdmissao: "" };
  state.errors = {};
  render();
}

function handleDelete(id) {
  state.funcionarios = state.funcionarios.filter(f => f.id !== id);
  saveDB(state.funcionarios);
  render();
}

/* ---------- Filter ---------- */
function getCargosUnicos() {
  return [...new Set(state.funcionarios.map(f => f.cargo))];
}

function getFilteredFuncionarios() {
  const q = state.search.toLowerCase();
  return state.funcionarios
    .filter(f => {
      const ms = f.nome.toLowerCase().includes(q) || f.cpf.includes(q) || f.cargo.toLowerCase().includes(q);
      const mc = state.filterCargo ? f.cargo === state.filterCargo : true;
      return ms && mc;
    })
    .sort((a, b) => {
      if (state.sortBy === "nome") return a.nome.localeCompare(b.nome);
      if (state.sortBy === "cargo") return a.cargo.localeCompare(b.cargo);
      return b.id - a.id;
    });
}

/* ==========================================================================
   TEMPLATES RENDER
   ========================================================================== */
function renderTopbar() {
  const label = VIEW_LABELS[state.view] || "Dashboard";
  const userInitials = state.rhUser ? getInitials(state.rhUser.nome) : "V";
  const userName = state.rhUser ? state.rhUser.nome : "Visitante";

  return `
    <div class="topbar">
      <div class="topbar-left">
        <div class="topbar-breadcrumb">CorpSystem / <span>${label}</span></div>
      </div>
      <div class="topbar-right">
        <div class="notif-wrapper">
          <button class="topbar-icon-btn" id="btn-notifications" title="Notificações">
            ${Icons.bell}
            ${state.funcionarios.length > 0 ? '<div class="notification-dot"></div>' : ""}
          </button>
          ${state.showNotifications ? renderNotifications() : ""}
        </div>
        <div class="topbar-divider"></div>
        <div class="topbar-profile">
          <div class="topbar-avatar">${userInitials}</div>
          <span class="topbar-name">${userName}</span>
        </div>
      </div>
    </div>
  `;
}

function renderNotifications() {
  const recent = [...state.funcionarios].sort((a, b) => b.id - a.id).slice(0, 5);
  if (recent.length === 0) {
    return `
      <div class="notif-dropdown">
        <div class="notif-header">Notificações</div>
        <div class="notif-empty">Nenhum colaborador cadastrado ainda.</div>
      </div>
    `;
  }
  return `
    <div class="notif-dropdown">
      <div class="notif-header">Últimos cadastros</div>
      <div class="notif-list">
        ${recent.map((f, i) => `
          <div class="notif-item ${i === 0 ? "notif-new" : ""}">
            <div class="notif-avatar" style="background:${getCargoColor(f.cargo)}">${getInitials(f.nome)}</div>
            <div class="notif-info">
              <div class="notif-name">${escapeHtml(f.nome)}</div>
              <div class="notif-detail">${escapeHtml(f.cargo)} · ${escapeHtml(f.data)}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderLoginScreen() {
  return `
    <div class="login-root">
      <div class="login-left">
        <div class="login-left-content">
          <div class="brand">
            <div class="brand-icon">CS</div>
            <div>
              <div class="brand-title">CorpSystem</div>
              <div class="brand-sub">Portal Administrativo</div>
            </div>
          </div>

          <h1 class="login-headline">Gestão inteligente e segura de colaboradores</h1>
          <p class="login-desc">
            Acesse ferramentas de cadastro, consulta, auditoria e gerenciamento estratégico do capital humano.
          </p>

          <div class="login-features">
            <div class="feature-item">${Icons.lock} Acesso seguro de ponta a ponta</div>
            <div class="feature-item">${Icons.users} Central de gerenciamento unificada</div>
            <div class="feature-item">${Icons.chart} Métricas de time em tempo real</div>
          </div>
        </div>
      </div>

      <div class="login-right">
        <div class="login-card login-card-enter">
          <div class="card-logo-container">
            <div class="lock-badge-icon">${Icons.lock}</div>
          </div>
          <h2 class="card-title">Área Administrativa</h2>
          <p class="card-sub">Informe as credenciais corporativas</p>

          <div class="field">
            <label class="label-login">E-mail ou Usuário</label>
            <input id="login-usuario" class="input-login" placeholder="rh@empresa.com" value="${escapeHtml(state.login.usuario)}" />
          </div>

          <div class="field">
            <label class="label-login">Senha</label>
            <div class="password-wrap">
              <input id="login-senha" class="input-login" type="${state.login.showSenha ? "text" : "password"}" placeholder="••••••••" value="${escapeHtml(state.login.senha)}" />
              <button id="toggle-senha" class="eye-btn" type="button">
                ${state.login.showSenha ? Icons.eyeOff : Icons.eye}
              </button>
            </div>
          </div>

          ${state.login.erro ? `<div class="error-box"><span style="flex-shrink:0;">⚠️</span> ${escapeHtml(state.login.erro)}</div>` : ""}

          <button id="btn-login" class="btn-login">${state.login.loading ? "Autenticando..." : "Entrar no Sistema"}</button>

          <div class="hint">
            <strong>Credenciais de Demonstração:</strong><br>
            Usuário: <code class="code">admin</code><br>
            Senha: <code class="code">admin123</code>
          </div>

          <button id="btn-voltar-login" class="btn-back">Voltar ao Início</button>
        </div>
      </div>
    </div>
  `;
}

function renderSidebar() {
  const cargosUnicos = getCargosUnicos();
  const navItems = ["home", "dashboard", "cadastro", "rh"];
  const activeIndex = navItems.indexOf(state.view === "login-rh" ? "rh" : state.view);
  const indicatorTop = activeIndex >= 0 ? activeIndex * 42 : 0;
  const showIndicator = activeIndex >= 0;

  return `
    <aside class="sidebar">
      <div class="sidebar-brand">
        <div class="sidebar-brand-icon">CS</div>
        <div>
          <div class="sidebar-brand-title">CorpSystem</div>
          <div class="sidebar-brand-sub">Gestão de Pessoas</div>
        </div>
      </div>

      <nav class="nav">
        ${showIndicator ? `<div class="nav-indicator" style="top: ${indicatorTop}px; height: 38px;"></div>` : ""}

        <button class="nav-btn ${state.view === "home" ? "active" : ""}" data-view="home">
          ${Icons.home} Início
        </button>
        <button class="nav-btn ${state.view === "dashboard" ? "active" : ""}" data-view="dashboard">
          ${Icons.chart} Analytics
        </button>
        <button class="nav-btn ${state.view === "cadastro" ? "active" : ""}" data-view="cadastro">
          ${Icons.userAdd} Cadastro
        </button>
        <button class="nav-btn ${state.view === "rh" || state.view === "login-rh" ? "active" : ""}" id="btn-rh">
          ${Icons.users} Painel RH
          ${!state.rhUser ? `<span class="lock-badge">${Icons.lock}</span>` : ""}
        </button>
      </nav>

      ${state.rhUser ? `
        <div class="rh-user-card">
          <div class="rh-user-avatar">${getInitials(state.rhUser.nome)}</div>
          <div class="rh-user-info">
            <div class="rh-user-name">${escapeHtml(state.rhUser.nome)}</div>
            <div class="rh-user-cargo">${escapeHtml(state.rhUser.cargo)}</div>
          </div>
        </div>
      ` : ""}

      <div class="sidebar-stats">
        <div class="stat-card">
          <div class="stat-label-wrap">
            <span class="stat-num">${state.funcionarios.length}</span>
            <span class="stat-label">Colaboradores</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-label-wrap">
            <span class="stat-num">${cargosUnicos.length}</span>
            <span class="stat-label">Setores</span>
          </div>
        </div>
      </div>
    </aside>
  `;
}

function renderHome() {
  const cargosUnicos = getCargosUnicos();
  const totalCount = state.funcionarios.length;
  const recentEmployees = [...state.funcionarios].sort((a,b) => b.id - a.id).slice(0, 3);

  return `
    <div class="page">
      <div class="dashboard-grid">
        <div class="dashboard-main-col">
          <div class="hero-section stagger-item">
            <div class="hero-tag">CorpSystem ERP</div>
            <h1 class="hero-title">Painel Geral de Gestão de Pessoas</h1>
            <p class="hero-desc">
              Gerencie toda a força de trabalho da empresa. Efetue novos cadastros de colaboradores ou acesse a área administrativa do time de Recursos Humanos.
            </p>
            <div class="hero-actions">
              <button class="btn-primary" id="go-cadastro">
                ${Icons.plus} Adicionar Colaborador
              </button>
              <button class="btn-secondary" id="go-rh">
                ${state.rhUser ? Icons.users : Icons.lock} ${state.rhUser ? "Acessar Painel RH" : "Acesso Restrito RH"}
              </button>
            </div>
          </div>

          <div class="metrics-row stagger-item">
            <div class="metric-card">
              <div class="metric-header">
                <span class="metric-title">Colaboradores</span>
                <div class="metric-icon-wrap">${Icons.users}</div>
              </div>
              <span class="metric-val">${totalCount}</span>
              <div class="metric-footer">
                <span class="metric-trend-up">↑ Total</span>
                <span class="metric-trend-label">ativos no banco</span>
              </div>
            </div>

            <div class="metric-card">
              <div class="metric-header">
                <span class="metric-title">Cargos / Setores</span>
                <div class="metric-icon-wrap">${Icons.chart}</div>
              </div>
              <span class="metric-val">${cargosUnicos.length}</span>
              <div class="metric-footer">
                <span class="metric-trend-up">Distribuídos</span>
                <span class="metric-trend-label">em setores</span>
              </div>
            </div>

            <div class="metric-card">
              <div class="metric-header">
                <span class="metric-title">Analytics</span>
                <div class="metric-icon-wrap">${Icons.chart}</div>
              </div>
              <button class="btn-secondary" id="go-analytics" style="padding: 4px 10px; font-size: 11px; margin-top: 4px;">
                Ver Indicadores
              </button>
              <div class="metric-footer">
                <span class="metric-trend-up" style="color: var(--primary);">Interativo</span>
                <span class="metric-trend-label">e dinâmico</span>
              </div>
            </div>
          </div>
        </div>

        <div class="dashboard-side-col stagger-item">
          <div class="panel-card">
            <div class="panel-header">
              <span class="panel-title">Últimas Contratações</span>
            </div>
            <div class="recent-activity-list">
              ${recentEmployees.length === 0 ? `
                <span style="color: var(--text-muted); font-size: 13px;">Nenhum colaborador registrado.</span>
              ` : recentEmployees.map(emp => `
                <div class="activity-item">
                  <div class="activity-avatar">${getInitials(emp.nome)}</div>
                  <div class="activity-details">
                    <div class="activity-text"><strong>${escapeHtml(emp.nome)}</strong> contratado como <strong>${escapeHtml(emp.cargo)}</strong></div>
                    <div class="activity-time">${emp.data} às ${emp.hora}</div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="panel-card">
            <div class="panel-header">
              <span class="panel-title">Ações Rápidas</span>
            </div>
            <div class="quick-actions">
              <button class="action-row-btn" id="qa-cadastro">
                ${Icons.userAdd} Cadastrar novo colaborador
              </button>
              <button class="action-row-btn" id="qa-rh">
                ${Icons.lock} Acessar central de RH
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDashboard() {
  const totalCount = state.funcionarios.length;
  const cargosUnicos = getCargosUnicos();
  
  // Calculate dynamic cargo distributions
  const cargoDistribution = {};
  CARGOS.forEach(c => cargoDistribution[c] = 0);
  state.funcionarios.forEach(f => {
    if (cargoDistribution[f.cargo] !== undefined) {
      cargoDistribution[f.cargo]++;
    }
  });

  const activeCargos = CARGOS
    .map(c => ({ cargo: c, count: cargoDistribution[c] }))
    .filter(item => item.count > 0)
    .sort((a,b) => b.count - a.count);

  const lastAdded = [...state.funcionarios].sort((a,b) => b.id - a.id)[0];
  const lastAddedName = lastAdded ? lastAdded.nome : "Nenhum";

  return `
    <div class="page">
      <div class="page-header stagger-item">
        <div>
          <h2 class="page-title">Indicadores &amp; Analytics</h2>
          <p class="page-subtitle">Métricas demográficas e crescimento da base de colaboradores.</p>
        </div>
      </div>

      <div class="metrics-row stagger-item" style="margin-bottom: 24px;">
        <div class="metric-card">
          <div class="metric-title">Mão de Obra Total</div>
          <div class="metric-val" style="margin-top: 4px;">${totalCount}</div>
          <div class="metric-footer" style="color: var(--text-secondary);">Cadastros ativos</div>
        </div>
        <div class="metric-card">
          <div class="metric-title">Setores com Alocação</div>
          <div class="metric-val" style="margin-top: 4px;">${activeCargos.length}</div>
          <div class="metric-footer" style="color: var(--text-secondary);">Setores ativos</div>
        </div>
        <div class="metric-card">
          <div class="metric-title">Admissão Mais Recente</div>
          <div class="metric-val" style="font-size: 15px; margin-top: 12px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${escapeHtml(lastAddedName)}
          </div>
          <div class="metric-footer" style="color: var(--text-secondary);">Último contratado</div>
        </div>
      </div>

      <div class="analytics-grid">
        <!-- Circular/Round Donut Chart Panel -->
        <div class="chart-card stagger-item">
          <div class="chart-card-header">
            <div>
              <span class="chart-card-title">Representação Setorial (Donut)</span>
              <div class="chart-card-subtitle">Percentual de alocação de equipe por cargo</div>
            </div>
          </div>
          <div style="margin-top: 10px;">
            ${generateDonutChart(activeCargos, totalCount)}
          </div>
        </div>

        <!-- Headcount Evolution Panel -->
        <div class="chart-card stagger-item">
          <div class="chart-card-header">
            <div>
              <span class="chart-card-title">Evolução do Headcount</span>
              <div class="chart-card-subtitle">Registros acumulativos na plataforma</div>
            </div>
          </div>
          <div style="margin-top: 10px;">
            ${generateGrowthChart()}
          </div>
        </div>

        <!-- Detailed Progress Bars Panel -->
        <div class="chart-card analytics-full-width stagger-item">
          <div class="chart-card-header">
            <div>
              <span class="chart-card-title">Detalhamento Numérico de Cargos</span>
              <div class="chart-card-subtitle">Volume absoluto de funcionários por função</div>
            </div>
          </div>
          <div class="bar-chart-container">
            ${activeCargos.length === 0 ? `
              <div class="empty-chart-msg">Cadastre colaboradores para visualizar a distribuição</div>
            ` : activeCargos.map(item => {
              const pct = totalCount > 0 ? (item.count / totalCount) * 100 : 0;
              const color = getCargoColor(item.cargo);
              return `
                <div class="bar-row">
                  <span class="bar-label" title="${escapeHtml(item.cargo)}">${escapeHtml(item.cargo)}</span>
                  <div class="bar-track">
                    <div class="bar-fill" style="width: ${pct}%; background-color: ${color};"></div>
                  </div>
                  <span class="bar-value">${item.count}</span>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderCadastro() {
  if (state.submitted) {
    const s = state.submitted;
    return `
      <div class="page">
        <div class="success-card stagger-item">
          <div class="success-check">${Icons.check}</div>
          <h3 class="success-title">Colaborador Cadastrado</h3>
          <div class="avatar-large" style="background:${getCargoColor(s.cargo)}">${getInitials(s.nome)}</div>
          <div class="success-name">${escapeHtml(s.nome)}</div>
          <div class="success-cargo">${escapeHtml(s.cargo)}</div>
          <div class="success-cpf">CPF: ${escapeHtml(s.cpf)}</div>
          <div class="success-date">Nascimento: ${escapeHtml(s.dataNascimento)}</div>
          <div class="success-date">Endereço: ${escapeHtml(s.endereco)}</div>
          <div class="success-date">Salário: R$ ${escapeHtml(s.salario)}</div>
          <div class="success-date">Admissão: ${escapeHtml(s.dataAdmissao)}</div>
          <div class="success-date">Cadastrado em ${s.data} às ${s.hora}</div>
          <div class="success-actions">
            <button class="btn-primary" id="novo-cadastro">Cadastrar Outro</button>
            <button class="btn-primary btn-success-alt" id="ver-painel">Ir para o Painel</button>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="page">
      <div class="page-header stagger-item">
        <div>
          <h2 class="page-title">Cadastrar Novo Colaborador</h2>
          <p class="page-subtitle">Preencha o formulário administrativo para iniciar o registro.</p>
        </div>
      </div>

      <div class="form-card stagger-item">
        <div class="form-field">
          <label class="label">Nome Completo</label>
          <input id="nome" class="input ${state.errors.nome ? "input-error" : ""}" placeholder="Ex: Maria Silva Santos" value="${escapeHtml(state.form.nome)}" />
          ${state.errors.nome ? `<span class="error-msg">⚠️ ${escapeHtml(state.errors.nome)}</span>` : ""}
        </div>
        <div class="form-field">
          <label class="label">CPF (Cadastro de Pessoa Física)</label>
          <input id="cpf" class="input ${state.errors.cpf ? "input-error" : ""}" placeholder="000.000.000-00" value="${escapeHtml(state.form.cpf)}" />
          ${state.errors.cpf ? `<span class="error-msg">⚠️ ${escapeHtml(state.errors.cpf)}</span>` : ""}
        </div>
        <div class="form-field">
          <label class="label">Cargo / Função</label>
          <select id="cargo" class="input ${state.errors.cargo ? "input-error" : ""}">
            <option value="">Selecione o cargo...</option>
            ${CARGOS.map(c => `<option value="${escapeHtml(c)}" ${state.form.cargo === c ? "selected" : ""}>${escapeHtml(c)}</option>`).join("")}
          </select>
          ${state.errors.cargo ? `<span class="error-msg">⚠️ ${escapeHtml(state.errors.cargo)}</span>` : ""}
        </div>
        <div class="form-field">
          <label class="label">Data de Nascimento</label>
          <input id="dataNascimento" type="date" class="input ${state.errors.dataNascimento ? "input-error" : ""}" value="${escapeHtml(state.form.dataNascimento)}" />
          ${state.errors.dataNascimento ? `<span class="error-msg">⚠️ ${escapeHtml(state.errors.dataNascimento)}</span>` : ""}
        </div>
        <div class="form-field">
          <label class="label">Endereço</label>
          <input id="endereco" class="input ${state.errors.endereco ? "input-error" : ""}" placeholder="Ex: Rua Principal, 123" value="${escapeHtml(state.form.endereco)}" />
          ${state.errors.endereco ? `<span class="error-msg">⚠️ ${escapeHtml(state.errors.endereco)}</span>` : ""}
        </div>
        <div class="form-field">
          <label class="label">Salário (R$)</label>
          <input id="salario" class="input ${state.errors.salario ? "input-error" : ""}" placeholder="Ex: 3500,00" value="${escapeHtml(state.form.salario)}" />
          ${state.errors.salario ? `<span class="error-msg">⚠️ ${escapeHtml(state.errors.salario)}</span>` : ""}
        </div>
        <div class="form-field">
          <label class="label">Data de Admissão</label>
          <input id="dataAdmissao" type="date" class="input ${state.errors.dataAdmissao ? "input-error" : ""}" value="${escapeHtml(state.form.dataAdmissao)}" />
          ${state.errors.dataAdmissao ? `<span class="error-msg">⚠️ ${escapeHtml(state.errors.dataAdmissao)}</span>` : ""}
        </div>
        <button class="btn-submit" id="btn-submit">Salvar Registro</button>
      </div>
    </div>
  `;
}

function renderRH() {
  const filtered = getFilteredFuncionarios();
  const cargosUnicos = getCargosUnicos();

  return `
    <div class="page">
      <div class="page-header stagger-item">
        <div>
          <h2 class="page-title">Gestão de Equipe (RH)</h2>
          <p class="page-subtitle">Visualização de registros cadastrais e exportação de relatórios.</p>
        </div>
        <div class="rh-session-info">
          <div class="rh-session-avatar">${getInitials(state.rhUser.nome)}</div>
          <div>
            <div class="rh-session-name">${escapeHtml(state.rhUser.nome)}</div>
            <div class="rh-session-cargo">${escapeHtml(state.rhUser.cargo)}</div>
          </div>
        </div>
      </div>

      <div class="rh-toolbar stagger-item">
        <div class="search-input-wrapper">
          ${Icons.search}
          <input id="search" class="search-input" placeholder="Buscar por colaborador, CPF ou cargo..." value="${escapeHtml(state.search)}" />
        </div>
        <select id="filterCargo" class="filter-select">
          <option value="">Todos os cargos</option>
          ${cargosUnicos.map(c => `<option value="${escapeHtml(c)}" ${state.filterCargo === c ? "selected" : ""}>${escapeHtml(c)}</option>`).join("")}
        </select>
        <select id="sortBy" class="filter-select">
          <option value="data" ${state.sortBy === "data" ? "selected" : ""}>Recém-adicionados</option>
          <option value="nome" ${state.sortBy === "nome" ? "selected" : ""}>Nome (A-Z)</option>
          <option value="cargo" ${state.sortBy === "cargo" ? "selected" : ""}>Cargo (A-Z)</option>
        </select>
      </div>

      ${filtered.length === 0 ? `
        <div class="empty-state stagger-item">
          <div class="empty-icon-wrap">${Icons.user}</div>
          <div class="empty-title">${state.funcionarios.length === 0 ? "Nenhum colaborador registrado" : "Busca sem resultados"}</div>
          <div class="empty-desc">${state.funcionarios.length === 0 ? "Inicie cadastrando o primeiro colaborador." : "Ajuste os filtros ou o termo pesquisado."}</div>
          ${state.funcionarios.length === 0 ? `<button class="btn-primary" id="empty-go-cadastro">${Icons.plus} Novo Cadastro</button>` : ""}
        </div>
      ` : `
        <div class="table-wrap stagger-item">
          <table class="table">
            <thead>
              <tr>
                <th>Funcionário</th>
                <th>CPF</th>
                <th>Cargo / Setor</th>
                <th>Nascimento</th>
                <th>Endereço</th>
                <th>Salário</th>
                <th>Admissão</th>
                <th>Cadastro</th>
                <th style="width: 100px; text-align: center;">Ações</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.map((f, i) => `
                <tr class="row-enter" style="animation-delay:${i * 0.03}s">
                  <td>
                    <div class="func-cell">
                      <div class="avatar" style="background:${getCargoColor(f.cargo)}">${getInitials(f.nome)}</div>
                      <span class="func-name">${escapeHtml(f.nome)}</span>
                    </div>
                  </td>
                  <td class="td-mono">${escapeHtml(f.cpf)}</td>
                  <td>
                    <span class="badge" style="background:${getCargoColor(f.cargo)}12; color:${getCargoColor(f.cargo)}">
                      ${escapeHtml(f.cargo)}
                    </span>
                  </td>
                  <td style="color:var(--text-muted); font-size:12px;">${escapeHtml(f.dataNascimento || "-")}</td>
                  <td style="color:var(--text-muted); font-size:12px;">${escapeHtml(f.endereco || "-")}</td>
                  <td style="color:var(--text-muted); font-size:12px;">R$ ${escapeHtml(f.salario || "-")}</td>
                  <td style="color:var(--text-muted); font-size:12px;">${escapeHtml(f.dataAdmissao || "-")}</td>
                  <td style="color:var(--text-muted); font-size:12px;">${escapeHtml(f.data)}</td>
                  <td>
                    <div style="display: flex; justify-content: center; gap: 4px;">
                      <button class="edit-btn" data-edit="${f.id}" title="Editar Colaborador">
                        ${Icons.edit || '<span style="font-size:14px">✎</span>'}
                      </button>
                      <button class="delete-btn" data-delete="${f.id}" title="Excluir Colaborador">
                        ${Icons.trash}
                      </button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `}
    </div>
  `;
}

/* ---------- Edit Modal ---------- */
function renderEditModal() {
  if (!state.editTarget) return "";
  const f = state.funcionarios.find(e => e.id === state.editTarget);
  if (!f) return "";

  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal-card">
        <div class="modal-header">
          <h3 class="modal-title">Editar Colaborador</h3>
          <button class="modal-close" id="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-field">
            <label class="label">Nome Completo</label>
            <input id="edit-nome" class="input" value="${escapeHtml(f.nome || "")}" />
          </div>
          <div class="form-field">
            <label class="label">CPF</label>
            <input id="edit-cpf" class="input" value="${escapeHtml(f.cpf || "")}" />
          </div>
          <div class="form-field">
            <label class="label">Cargo</label>
            <select id="edit-cargo" class="input">
              <option value="">Selecione o cargo...</option>
              ${CARGOS.map(c => `<option value="${escapeHtml(c)}" ${f.cargo === c ? "selected" : ""}>${escapeHtml(c)}</option>`).join("")}
            </select>
          </div>
          <div class="form-field">
            <label class="label">Data de Nascimento</label>
            <input id="edit-dataNascimento" type="date" class="input" value="${escapeHtml(f.dataNascimento || "")}" />
          </div>
          <div class="form-field">
            <label class="label">Endereço</label>
            <input id="edit-endereco" class="input" value="${escapeHtml(f.endereco || "")}" />
          </div>
          <div class="form-field">
            <label class="label">Salário (R$)</label>
            <input id="edit-salario" class="input" value="${escapeHtml(f.salario || "")}" />
          </div>
          <div class="form-field">
            <label class="label">Data de Admissão</label>
            <input id="edit-dataAdmissao" type="date" class="input" value="${escapeHtml(f.dataAdmissao || "")}" />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-secondary" id="modal-cancel">Cancelar</button>
          <button class="btn-primary" id="modal-save">Salvar Alterações</button>
        </div>
      </div>
    </div>
  `;
}

function bindModalEvents() {
  document.getElementById("modal-overlay")?.addEventListener("click", e => {
    if (e.target === e.currentTarget) { state.editTarget = null; render(); }
  });
  document.getElementById("modal-close")?.addEventListener("click", () => { state.editTarget = null; render(); });
  document.getElementById("modal-cancel")?.addEventListener("click", () => { state.editTarget = null; render(); });
  document.getElementById("modal-save")?.addEventListener("click", async () => {
    const id = state.editTarget;
    const data = {
      nome: document.getElementById("edit-nome").value.trim(),
      cpf: document.getElementById("edit-cpf").value.trim(),
      cargo: document.getElementById("edit-cargo").value,
      dataNascimento: document.getElementById("edit-dataNascimento").value,
      endereco: document.getElementById("edit-endereco").value.trim(),
      salario: document.getElementById("edit-salario").value.trim(),
      dataAdmissao: document.getElementById("edit-dataAdmissao").value,
    };
    if (!data.nome || !data.cpf || !data.cargo) {
      alert("Preencha nome, CPF e cargo.");
      return;
    }
    const ok = await handleUpdate(id, data);
    if (ok) {
      state.editTarget = null;
      render();
    }
  });
}

function renderApp() {
  let content = "";
  if (state.view === "home") content = renderHome();
  if (state.view === "dashboard") content = renderDashboard();
  if (state.view === "cadastro") content = renderCadastro();
  if (state.view === "login-rh") content = renderLoginScreen();
  if (state.view === "rh" && state.rhUser) content = renderRH();

  return `
    <div class="app-root">
      ${renderSidebar()}
      <div class="main-wrapper">
        ${renderTopbar()}
        <main class="main" id="main-content">${content}</main>
      </div>
    </div>
    ${state.editTarget ? renderEditModal() : ""}
  `;
}

/* ==========================================================================
   RENDER SYSTEM
   ========================================================================== */
function render(animDir) {
  const app = document.getElementById("app");

  if (state.view === "login-rh") {
    app.innerHTML = renderLoginScreen();
    bindLoginEvents();
    return;
  }

  app.innerHTML = renderApp();
  bindAppEvents();

  if (animDir) {
    const main = document.getElementById("main-content");
    if (main) {
      const cls = animDir === "right" ? "page-transition-enter-right" : "page-transition-enter-left";
      main.classList.add(cls);
      main.addEventListener("animationend", () => main.classList.remove(cls), { once: true });
    }
  }
}

/* ==========================================================================
   PAGE VIEW TRANSITION SYSTEM
   ========================================================================== */
function changeViewWithAnimation(nextView) {
  if (state.isAnimating) return;
  const currentView = state.view;
  if (currentView === nextView) return;
  const dir = getAnimationDirection(currentView, nextView);

  if (currentView === "login-rh") {
    state.prevView = currentView; state.view = nextView; state.submitted = null;
    render(dir); return;
  }

  const main = document.getElementById("main-content");
  if (!main) {
    state.prevView = currentView; state.view = nextView; state.submitted = null;
    render(dir); return;
  }

  state.isAnimating = true;
  main.classList.add(dir === "right" ? "page-transition-exit-left" : "page-transition-exit-right");

  setTimeout(() => {
    state.prevView = currentView; state.view = nextView; state.submitted = null;
    render(dir); state.isAnimating = false;
  }, 190);
}

/* ==========================================================================
   EVENT BINDERS
   ========================================================================== */
function bindLoginEvents() {
  const u = document.getElementById("login-usuario");
  const s = document.getElementById("login-senha");
  u?.addEventListener("input", e => { state.login.usuario = e.target.value; state.login.erro = ""; });
  s?.addEventListener("input", e => { state.login.senha = e.target.value; state.login.erro = ""; });
  s?.addEventListener("keydown", e => { if (e.key === "Enter") handleLogin(); });
  u?.addEventListener("keydown", e => { if (e.key === "Enter") handleLogin(); });
  document.getElementById("toggle-senha")?.addEventListener("click", () => { state.login.showSenha = !state.login.showSenha; render(); });
  document.getElementById("btn-login")?.addEventListener("click", handleLogin);
  document.getElementById("btn-voltar-login")?.addEventListener("click", () => { state.login.erro = ""; changeViewWithAnimation("home"); });
}

function bindAppEvents() {
  document.querySelectorAll("[data-view]").forEach(b => b.addEventListener("click", () => changeViewWithAnimation(b.dataset.view)));
  document.getElementById("btn-rh")?.addEventListener("click", () => { state.submitted = null; goRH(); });
  document.getElementById("logout-btn")?.addEventListener("click", handleLogout);
  
  // Dashboard & Navigation Click Helpers
  document.getElementById("go-cadastro")?.addEventListener("click", () => changeViewWithAnimation("cadastro"));
  document.getElementById("go-rh")?.addEventListener("click", goRH);
  document.getElementById("go-analytics")?.addEventListener("click", () => changeViewWithAnimation("dashboard"));
  document.getElementById("qa-cadastro")?.addEventListener("click", () => changeViewWithAnimation("cadastro"));
  document.getElementById("qa-rh")?.addEventListener("click", goRH);
  
  // Form input listeners
  document.getElementById("nome")?.addEventListener("input", e => { state.form.nome = e.target.value; });
  document.getElementById("cpf")?.addEventListener("input", e => { state.form.cpf = formatCPF(e.target.value); e.target.value = state.form.cpf; });
  document.getElementById("cargo")?.addEventListener("change", e => { state.form.cargo = e.target.value; });
  document.getElementById("dataNascimento")?.addEventListener("change", e => { state.form.dataNascimento = e.target.value; });
  document.getElementById("endereco")?.addEventListener("input", e => { state.form.endereco = e.target.value; });
  document.getElementById("salario")?.addEventListener("input", e => { state.form.salario = e.target.value; });
  document.getElementById("dataAdmissao")?.addEventListener("change", e => { state.form.dataAdmissao = e.target.value; });
  document.getElementById("btn-submit")?.addEventListener("click", handleSubmit);
  
  // Success state buttons
  document.getElementById("novo-cadastro")?.addEventListener("click", () => { state.submitted = null; render(); });
  document.getElementById("ver-painel")?.addEventListener("click", () => { state.submitted = null; goRH(); });
  
  // Filters & Table operations
  const searchInput = document.getElementById("search");
  if (searchInput) {
    let searchTimer;
    searchInput.addEventListener("input", e => {
      state.search = e.target.value;
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => render(), 500);
    });
  }
  document.getElementById("filterCargo")?.addEventListener("change", e => { state.filterCargo = e.target.value; render(); });
  document.getElementById("sortBy")?.addEventListener("change", e => { state.sortBy = e.target.value; render(); });
  document.getElementById("empty-go-cadastro")?.addEventListener("click", () => changeViewWithAnimation("cadastro"));
  
  // Notifications
  document.getElementById("btn-notifications")?.addEventListener("click", e => {
    e.stopPropagation();
    state.showNotifications = !state.showNotifications;
    render();
  });
  // Edit action hooks
  document.querySelectorAll("[data-edit]").forEach(b => b.addEventListener("click", () => {
    state.editTarget = Number(b.dataset.edit);
    render();
  }));

  // Delete action hooks
  document.querySelectorAll("[data-delete]").forEach(b => b.addEventListener("click", () => handleDelete(Number(b.dataset.delete))));

  // Modal events (if modal is open)
  bindModalEvents();
}

// FIX: Listener global de clique registrado UMA única vez, fora de bindAppEvents()
document.addEventListener("click", () => {
  if (state.showNotifications) {
    state.showNotifications = false;
    render();
  }
});

/* ==========================================================================
   INITIALIZATION ENTRIES
   ========================================================================== */
async function init() {
  await fetchFuncionarios();
  render("right");
}
