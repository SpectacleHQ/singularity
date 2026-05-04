<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

type Lang = 'en' | 'zh'

interface Capability {
  index: string
  title: string
  description: string
  stack: string[]
}

interface Project {
  title: string
  type: string
  year: string
  description: string
  stack: string
  metric: string
  signal: string
}

interface ImpactItem {
  value: string
  label: string
  detail: string
}

interface PageCopy {
  hero: {
    titleLines: string[]
    lead: string
    primary: string
    secondary: string
    locationLabel: string
    location: string
    focusLabel: string
    focus: string
  }
  terminal: {
    statusLabel: string
    status: string
    title: string
    events: string[]
    nodes: string[]
  }
  capabilitiesTitle: string
  capabilitiesIntro: string
  capabilities: Capability[]
  workTitle: string
  workIntro: string
  projects: Project[]
  impactTitle: string
  impactIntro: string
  impact: ImpactItem[]
  contact: {
    title: string
    lead: string
    email: string
    availability: string
  }
}

const { locale } = useI18n()
const activeProject = ref(0)

const copy = {
  en: {
    hero: {
      titleLines: ['Backend systems.', 'AI products.', 'Smart contracts.'],
      lead: 'I design reliable software from protocol-level logic to user-facing systems.',
      primary: 'View work',
      secondary: 'Start a conversation',
      locationLabel: 'Based in',
      location: 'Zhuhai, China',
      focusLabel: 'Current focus',
      focus: 'Distributed services and AI workflows',
    },
    terminal: {
      statusLabel: 'Production signal',
      status: 'Online',
      title: 'request pipeline',
      events: [
        'api.gateway accepted 42k events',
        'langgraph worker resolved 98.7%',
        'contract indexer synced block 19,482,100',
        'observability budget within target',
      ],
      nodes: ['Gateway', 'AI Graph', 'Ledger', 'Workers'],
    },
    capabilitiesTitle: 'Systems that stay readable under pressure.',
    capabilitiesIntro:
      'The redesign turns the portfolio into a working map of the kind of software I like to build: fast services, pragmatic AI, and clear interfaces.',
    capabilities: [
      {
        index: '01',
        title: 'Service architecture',
        description:
          'Django, FastAPI, Spring Boot and event-driven patterns for dependable production systems.',
        stack: ['Python', 'Java', 'PostgreSQL', 'Redis'],
      },
      {
        index: '02',
        title: 'AI application workflows',
        description:
          'LangChain and LangGraph products with tool use, memory, orchestration and human review paths.',
        stack: ['LLM apps', 'RAG', 'Agents', 'Evaluation'],
      },
      {
        index: '03',
        title: 'Frontend product surfaces',
        description:
          'Vue and React interfaces that make complex backend behavior visible without turning noisy.',
        stack: ['Vue', 'React', 'TypeScript', 'Motion'],
      },
      {
        index: '04',
        title: 'Protocol and contract logic',
        description:
          'Solidity smart contracts, indexing, settlement flows and system-level performance work.',
        stack: ['Solidity', 'C/C++', 'Indexers', 'Security'],
      },
    ],
    workTitle: 'Selected builds, written like system logs.',
    workIntro:
      'Rows are intentionally dense: this should feel like engineering evidence, not decoration.',
    projects: [
      {
        title: 'Nebula API',
        type: 'Backend platform',
        year: '2026',
        description:
          'A FastAPI service mesh with worker isolation, queue backpressure and visibility built into every endpoint.',
        stack: 'FastAPI / Redis / PostgreSQL',
        metric: '18 ms p95',
        signal: 'High-throughput API core',
      },
      {
        title: 'Aether AI',
        type: 'AI workflow',
        year: '2025',
        description:
          'A LangGraph reasoning flow with retrieval, tool execution, confidence routing and human checkpoints.',
        stack: 'LangGraph / RAG / Evaluation',
        metric: '98.7% routed',
        signal: 'Agent orchestration layer',
      },
      {
        title: 'Prism DApp',
        type: 'Smart contracts',
        year: '2025',
        description:
          'Solidity settlement contracts with event indexing, admin safeguards and predictable on-chain accounting.',
        stack: 'Solidity / Indexer / Web3',
        metric: '0 drift',
        signal: 'Settlement and ledger logic',
      },
      {
        title: 'Echo Console',
        type: 'Full-stack product',
        year: '2024',
        description:
          'A Vue and Spring Boot operations console with role-aware dashboards and real-time status surfaces.',
        stack: 'Vue / Spring Boot / WebSocket',
        metric: '12 roles',
        signal: 'Enterprise control surface',
      },
    ],
    impactTitle: 'A small surface for serious work.',
    impactIntro:
      'The page is lighter, sharper and easier to scan while keeping the technical personality intact.',
    impact: [
      { value: '5+', label: 'years building', detail: 'Backend, frontend and protocol work' },
      { value: '30+', label: 'projects shipped', detail: 'From prototypes to production' },
      { value: '6', label: 'core stacks', detail: 'Python, Java, C/C++, TS and Solidity' },
      { value: '100%', label: 'quality bias', detail: 'Reliability before spectacle' },
    ],
    contact: {
      title: 'Have a system worth making clearer?',
      lead: 'I am open to backend-heavy products, AI workflows and full-stack builds that need careful engineering taste.',
      email: 'niyouguanyu@gmail.com',
      availability: 'Available for selected collaborations in 2026',
    },
  },
  zh: {
    hero: {
      titleLines: ['后端系统。', 'AI 产品。', '智能合约。'],
      lead: '我从协议级逻辑到用户界面，设计可靠、清晰、可落地的软件系统。',
      primary: '查看作品',
      secondary: '开始沟通',
      locationLabel: '常驻',
      location: '中国珠海',
      focusLabel: '当前专注',
      focus: '分布式服务与 AI 工作流',
    },
    terminal: {
      statusLabel: '生产信号',
      status: '在线',
      title: '请求流水线',
      events: [
        'api.gateway 接收 42k 事件',
        'langgraph worker 完成 98.7% 路由',
        'contract indexer 同步区块 19,482,100',
        'observability 预算保持目标内',
      ],
      nodes: ['网关', 'AI 图谱', '账本', '队列'],
    },
    capabilitiesTitle: '高压之下依然清晰的系统。',
    capabilitiesIntro:
      '这次重设把作品集变成一张可读的工程地图：高性能服务、务实的 AI 应用，以及把复杂逻辑表达清楚的界面。',
    capabilities: [
      {
        index: '01',
        title: '服务端架构',
        description: '使用 Django、FastAPI、Spring Boot 与事件驱动模式构建可靠的生产系统。',
        stack: ['Python', 'Java', 'PostgreSQL', 'Redis'],
      },
      {
        index: '02',
        title: 'AI 应用工作流',
        description: '基于 LangChain 与 LangGraph 构建工具调用、记忆、编排和人工复核路径。',
        stack: ['LLM 应用', 'RAG', 'Agents', '评估'],
      },
      {
        index: '03',
        title: '前端产品界面',
        description: '用 Vue 与 React 把复杂后端行为表达出来，同时保持界面克制、可读。',
        stack: ['Vue', 'React', 'TypeScript', 'Motion'],
      },
      {
        index: '04',
        title: '协议与合约逻辑',
        description: 'Solidity 智能合约、索引、结算流以及系统级性能工作。',
        stack: ['Solidity', 'C/C++', 'Indexers', 'Security'],
      },
    ],
    workTitle: '像系统日志一样呈现的精选项目。',
    workIntro: '项目行刻意保持高信息密度：这里应该像工程证据，而不是装饰。',
    projects: [
      {
        title: 'Nebula API',
        type: '后端平台',
        year: '2026',
        description: 'FastAPI 服务网格，包含 worker 隔离、队列反压以及端点级可观测性。',
        stack: 'FastAPI / Redis / PostgreSQL',
        metric: '18 ms p95',
        signal: '高吞吐 API 核心',
      },
      {
        title: 'Aether AI',
        type: 'AI 工作流',
        year: '2025',
        description: 'LangGraph 推理流程，包含检索、工具执行、置信度路由和人工检查点。',
        stack: 'LangGraph / RAG / Evaluation',
        metric: '98.7% routed',
        signal: 'Agent 编排层',
      },
      {
        title: 'Prism DApp',
        type: '智能合约',
        year: '2025',
        description: 'Solidity 结算合约，配套事件索引、管理保护和可预测的链上记账。',
        stack: 'Solidity / Indexer / Web3',
        metric: '0 drift',
        signal: '结算与账本逻辑',
      },
      {
        title: 'Echo Console',
        type: '全栈产品',
        year: '2024',
        description: 'Vue 与 Spring Boot 运营控制台，提供角色化看板和实时状态界面。',
        stack: 'Vue / Spring Boot / WebSocket',
        metric: '12 roles',
        signal: '企业级控制界面',
      },
    ],
    impactTitle: '更小的界面，更严肃的工作。',
    impactIntro: '页面更轻、更锋利、更便于扫描，同时保留技术型作品集该有的性格。',
    impact: [
      { value: '5+', label: '年开发经验', detail: '后端、前端与协议开发' },
      { value: '30+', label: '项目交付', detail: '从原型到生产环境' },
      { value: '6', label: '核心技术栈', detail: 'Python、Java、C/C++、TS 与 Solidity' },
      { value: '100%', label: '质量倾向', detail: '可靠性先于炫技' },
    ],
    contact: {
      title: '有值得变清晰的系统吗？',
      lead: '我对后端重、AI 工作流、以及需要工程审美的全栈产品保持开放。',
      email: 'niyouguanyu@gmail.com',
      availability: '2026 年开放少量合作档期',
    },
  },
} satisfies Record<Lang, PageCopy>

const currentLang = computed<Lang>(() => (locale.value === 'zh' ? 'zh' : 'en'))
const page = computed(() => copy[currentLang.value])
const selectedProject = computed(
  () => page.value.projects[activeProject.value] ?? page.value.projects[0],
)
</script>

<template>
  <main class="studio-page">
    <section class="hero-section" aria-labelledby="hero-title">
      <div class="hero-copy">
        <h1 id="hero-title">
          <span v-for="line in page.hero.titleLines" :key="line">{{ line }}</span>
        </h1>
        <p class="hero-lead">{{ page.hero.lead }}</p>

        <div class="hero-actions" aria-label="Primary actions">
          <a class="button button--primary" href="#work">
            <span>{{ page.hero.primary }}</span>
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5 10h10M11 6l4 4-4 4" />
            </svg>
          </a>
          <a class="button button--secondary" href="#contact">
            <span>{{ page.hero.secondary }}</span>
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M10 4v12M4 10h12" />
            </svg>
          </a>
        </div>

        <dl class="hero-facts">
          <div>
            <dt>{{ page.hero.locationLabel }}</dt>
            <dd>{{ page.hero.location }}</dd>
          </div>
          <div>
            <dt>{{ page.hero.focusLabel }}</dt>
            <dd>{{ page.hero.focus }}</dd>
          </div>
        </dl>
      </div>

      <aside class="system-panel" aria-label="Live system diagram">
        <div class="panel-topline">
          <div class="window-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span>{{ page.terminal.title }}</span>
          <strong>{{ page.terminal.status }}</strong>
        </div>

        <div class="system-map">
          <span class="connector connector--a" />
          <span class="connector connector--b" />
          <span class="connector connector--c" />
          <div
            v-for="(node, index) in page.terminal.nodes"
            :key="node"
            class="system-node"
            :class="`system-node--${index}`"
          >
            <span>{{ node }}</span>
            <small>{{
              index === 0 ? 'ingress' : index === 1 ? 'reason' : index === 2 ? 'settle' : 'scale'
            }}</small>
          </div>
          <div class="system-core" aria-hidden="true">
            <svg viewBox="0 0 80 80">
              <path d="M40 8v64M8 40h64M17 17l46 46M63 17 17 63" />
              <circle cx="40" cy="40" r="17" />
              <circle cx="40" cy="40" r="4" />
            </svg>
          </div>
        </div>

        <div class="event-stream">
          <div class="stream-heading">
            <span>{{ page.terminal.statusLabel }}</span>
            <i aria-hidden="true" />
          </div>
          <p v-for="event in page.terminal.events" :key="event">{{ event }}</p>
        </div>
      </aside>
    </section>

    <section id="systems" class="content-section section-grid">
      <div class="section-heading">
        <h2>{{ page.capabilitiesTitle }}</h2>
        <p>{{ page.capabilitiesIntro }}</p>
      </div>

      <div class="capability-rails">
        <article
          v-for="capability in page.capabilities"
          :key="capability.index"
          class="capability-row"
        >
          <span class="row-index">{{ capability.index }}</span>
          <div>
            <h3>{{ capability.title }}</h3>
            <p>{{ capability.description }}</p>
          </div>
          <ul>
            <li v-for="item in capability.stack" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section id="work" class="content-section work-section">
      <div class="section-heading section-heading--wide">
        <h2>{{ page.workTitle }}</h2>
        <p>{{ page.workIntro }}</p>
      </div>

      <div class="work-layout">
        <div class="project-list" role="list" aria-label="Selected projects">
          <button
            v-for="(project, index) in page.projects"
            :key="project.title"
            class="project-row"
            :class="{ 'project-row--active': activeProject === index }"
            type="button"
            :aria-pressed="activeProject === index"
            @click="activeProject = index"
          >
            <span class="project-number">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="project-main">
              <strong>{{ project.title }}</strong>
              <small>{{ project.description }}</small>
            </span>
            <span class="project-meta">
              <em>{{ project.type }}</em>
              <b>{{ project.year }}</b>
            </span>
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5 10h10M11 6l4 4-4 4" />
            </svg>
          </button>
        </div>

        <aside v-if="selectedProject" class="project-preview" aria-live="polite">
          <span class="preview-label">{{ selectedProject.signal }}</span>
          <h3>{{ selectedProject.title }}</h3>
          <p>{{ selectedProject.description }}</p>
          <dl>
            <div>
              <dt>Stack</dt>
              <dd>{{ selectedProject.stack }}</dd>
            </div>
            <div>
              <dt>Signal</dt>
              <dd>{{ selectedProject.metric }}</dd>
            </div>
          </dl>
          <pre><code>$ deploy --target {{ selectedProject.title.toLowerCase().replaceAll(' ', '-') }}
status: stable
metric: {{ selectedProject.metric }}</code></pre>
        </aside>
      </div>
    </section>

    <section id="impact" class="content-section impact-section">
      <div class="section-heading">
        <h2>{{ page.impactTitle }}</h2>
        <p>{{ page.impactIntro }}</p>
      </div>

      <div class="impact-strip">
        <article v-for="item in page.impact" :key="item.label">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
          <p>{{ item.detail }}</p>
        </article>
      </div>
    </section>

    <footer id="contact" class="contact-section">
      <div>
        <h2>{{ page.contact.title }}</h2>
        <p>{{ page.contact.lead }}</p>
      </div>
      <div class="contact-actions">
        <a class="button button--primary" :href="`mailto:${page.contact.email}`">
          <span>{{ page.contact.email }}</span>
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M4 6h12v8H4z" />
            <path d="m4 7 6 4 6-4" />
          </svg>
        </a>
        <span>{{ page.contact.availability }}</span>
      </div>
    </footer>
  </main>
</template>

<style scoped>
.studio-page {
  isolation: isolate;
  min-height: 100dvh;
  overflow-x: hidden;
  color: var(--ink);
}

.studio-page::before {
  position: fixed;
  z-index: -2;
  inset: 0;
  content: '';
  background:
    linear-gradient(90deg, color-mix(in oklch, var(--line) 52%, transparent) 1px, transparent 1px),
    linear-gradient(color-mix(in oklch, var(--line) 46%, transparent) 1px, transparent 1px),
    radial-gradient(
      circle at 50% 0%,
      color-mix(in oklch, var(--cyan) 14%, transparent),
      transparent 42%
    ),
    var(--bg);
  background-size:
    88px 88px,
    88px 88px,
    100% 780px,
    auto;
}

.hero-section {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(390px, 0.72fr);
  align-items: center;
  gap: clamp(28px, 4vw, 68px);
  min-height: 100dvh;
  padding: 104px clamp(20px, 5vw, 76px) 34px;
}

.hero-copy {
  max-width: 860px;
}

h1,
h2,
h3,
p {
  margin: 0;
}

.hero-copy h1,
.section-heading h2,
.contact-section h2 {
  color: var(--ink);
  font-family: var(--font-display);
  font-weight: 760;
  line-height: 0.98;
  text-wrap: balance;
}

.hero-copy h1 {
  max-width: 780px;
  font-size: 3.25rem;
}

.hero-copy h1 span {
  display: block;
}

.hero-lead {
  max-width: 590px;
  margin-top: 22px;
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.66;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0 18px;
  font-size: 0.9rem;
  font-weight: 760;
  line-height: 1;
  text-decoration: none;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease;
}

.button svg,
.project-row svg {
  width: 18px;
  height: 18px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.7;
}

.button--primary {
  border-color: var(--ink);
  background: var(--ink);
  color: var(--bg);
}

.button--secondary {
  background: var(--surface);
  color: var(--ink);
}

.button:hover {
  border-color: color-mix(in oklch, var(--cyan) 70%, var(--line));
  transform: translateY(-2px);
}

.hero-facts {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 220px));
  gap: 18px;
  margin: 30px 0 0;
}

.hero-facts div,
.project-preview,
.system-panel {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: color-mix(in oklch, var(--surface) 92%, transparent);
  box-shadow: 0 24px 80px color-mix(in oklch, black 30%, transparent);
}

.hero-facts div {
  padding: 14px;
}

dt {
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 740;
  line-height: 1.1;
}

dd {
  margin: 8px 0 0;
  color: var(--ink);
  font-size: 0.95rem;
  line-height: 1.35;
}

.system-panel {
  min-height: 500px;
  padding: 14px;
}

.panel-topline,
.stream-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 38px;
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 780;
}

.panel-topline strong {
  color: var(--acid);
  font-size: 0.76rem;
}

.window-dots {
  display: flex;
  gap: 6px;
}

.window-dots span {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--line-strong);
}

.window-dots span:nth-child(2) {
  background: var(--coral);
}

.window-dots span:nth-child(3) {
  background: var(--acid);
}

.system-map {
  position: relative;
  min-height: 292px;
  margin-top: 8px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 8px;
  background:
    linear-gradient(90deg, color-mix(in oklch, var(--line) 56%, transparent) 1px, transparent 1px),
    linear-gradient(color-mix(in oklch, var(--line) 54%, transparent) 1px, transparent 1px),
    color-mix(in oklch, var(--surface-strong) 82%, transparent);
  background-size: 32px 32px;
}

.connector {
  position: absolute;
  z-index: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--cyan), var(--acid), transparent);
  opacity: 0.72;
  transform-origin: left center;
}

.connector--a {
  top: 33%;
  left: 20%;
  width: 60%;
}

.connector--b {
  top: 57%;
  left: 19%;
  width: 62%;
  transform: rotate(-17deg);
}

.connector--c {
  top: 26%;
  left: 42%;
  width: 42%;
  transform: rotate(48deg);
}

.system-core {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  display: grid;
  width: 100px;
  height: 100px;
  place-items: center;
  border: 1px solid color-mix(in oklch, var(--cyan) 70%, var(--line));
  border-radius: 8px;
  background: color-mix(in oklch, var(--bg) 72%, transparent);
  transform: translate(-50%, -50%);
}

.system-core svg {
  width: 66px;
  height: 66px;
  fill: none;
  stroke: var(--cyan);
  stroke-linecap: round;
  stroke-width: 1.5;
}

.system-node {
  position: absolute;
  z-index: 3;
  display: grid;
  gap: 6px;
  min-width: 118px;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  padding: 12px;
  background: color-mix(in oklch, var(--bg) 76%, transparent);
}

.system-node span {
  color: var(--ink);
  font-size: 0.86rem;
  font-weight: 790;
}

.system-node small {
  color: var(--muted);
  font-size: 0.72rem;
  line-height: 1;
}

.system-node--0 {
  top: 36px;
  left: 34px;
}

.system-node--1 {
  top: 42px;
  right: 38px;
}

.system-node--2 {
  right: 46px;
  bottom: 34px;
}

.system-node--3 {
  bottom: 40px;
  left: 42px;
}

.event-stream {
  margin-top: 14px;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 14px;
  background: color-mix(in oklch, var(--bg) 34%, transparent);
}

.stream-heading i {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--acid);
  box-shadow: 0 0 22px var(--acid);
}

.event-stream p {
  display: flex;
  align-items: center;
  min-height: 27px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 0.78rem;
}

.event-stream p::before {
  content: '>';
  margin-right: 9px;
  color: var(--coral);
}

.content-section,
.contact-section {
  width: min(100% - 40px, 1320px);
  margin-inline: auto;
  padding-block: 110px;
}

.section-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.74fr) minmax(0, 1fr);
  gap: clamp(32px, 6vw, 88px);
  align-items: start;
  border-top: 1px solid var(--line);
}

.section-heading {
  max-width: 560px;
}

.section-heading--wide {
  display: flex;
  max-width: none;
  align-items: end;
  justify-content: space-between;
  gap: 28px;
  margin-bottom: 42px;
}

.section-heading h2,
.contact-section h2 {
  font-size: 3.2rem;
}

.section-heading p,
.contact-section p {
  margin-top: 18px;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.74;
}

.section-heading--wide p {
  max-width: 420px;
}

.capability-rails {
  display: grid;
  gap: 1px;
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
}

.capability-row {
  display: grid;
  grid-template-columns: 54px minmax(0, 1fr) minmax(170px, 0.42fr);
  gap: 24px;
  align-items: start;
  padding: 24px;
  background: color-mix(in oklch, var(--surface) 80%, transparent);
}

.row-index,
.project-number,
.preview-label {
  color: var(--cyan);
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.capability-row h3 {
  color: var(--ink);
  font-size: 1.16rem;
  font-weight: 780;
}

.capability-row p {
  margin-top: 9px;
  color: var(--muted);
  line-height: 1.65;
}

.capability-row ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 7px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.capability-row li {
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 7px 9px;
  color: var(--ink-soft);
  font-size: 0.74rem;
  font-weight: 720;
}

.work-section {
  border-top: 1px solid var(--line);
}

.work-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(340px, 0.42fr);
  gap: 18px;
}

.project-list {
  display: grid;
  gap: 1px;
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
}

.project-row {
  display: grid;
  grid-template-columns: 46px minmax(0, 1fr) minmax(140px, 0.22fr) 26px;
  gap: 18px;
  align-items: center;
  width: 100%;
  min-height: 118px;
  border: 0;
  border-radius: 0;
  padding: 24px;
  background: color-mix(in oklch, var(--surface) 78%, transparent);
  color: inherit;
  cursor: pointer;
  text-align: left;
  transition:
    background 180ms ease,
    color 180ms ease;
}

.project-row:hover,
.project-row--active {
  background: color-mix(in oklch, var(--cyan) 10%, var(--surface));
}

.project-row--active {
  box-shadow: inset 3px 0 0 var(--acid);
}

.project-main {
  display: grid;
  gap: 9px;
}

.project-main strong {
  color: var(--ink);
  font-size: 1.28rem;
}

.project-main small {
  max-width: 720px;
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.55;
}

.project-meta {
  display: grid;
  justify-items: end;
  gap: 8px;
}

.project-meta em,
.project-meta b {
  color: var(--ink-soft);
  font-size: 0.78rem;
  font-style: normal;
  font-weight: 760;
}

.project-row svg {
  color: var(--cyan);
}

.project-preview {
  position: sticky;
  top: 96px;
  align-self: start;
  padding: 24px;
}

.project-preview h3 {
  margin-top: 20px;
  color: var(--ink);
  font-size: 2rem;
  line-height: 1.05;
}

.project-preview p {
  margin-top: 16px;
  color: var(--muted);
  line-height: 1.7;
}

.project-preview dl {
  display: grid;
  gap: 1px;
  margin: 24px 0;
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
}

.project-preview dl div {
  padding: 14px;
  background: color-mix(in oklch, var(--surface-strong) 80%, transparent);
}

.project-preview pre {
  overflow: auto;
  margin: 0;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 16px;
  background: color-mix(in oklch, black 28%, transparent);
  color: var(--acid);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  line-height: 1.7;
}

.impact-section {
  display: grid;
  grid-template-columns: minmax(0, 0.58fr) minmax(0, 1fr);
  gap: 48px;
  border-top: 1px solid var(--line);
}

.impact-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
}

.impact-strip article {
  min-height: 190px;
  padding: 22px;
  background: color-mix(in oklch, var(--surface) 82%, transparent);
}

.impact-strip article + article {
  border-left: 1px solid var(--line);
}

.impact-strip strong {
  display: block;
  color: var(--acid);
  font-family: var(--font-display);
  font-size: 3rem;
  line-height: 1;
}

.impact-strip span {
  display: block;
  margin-top: 18px;
  color: var(--ink);
  font-size: 0.94rem;
  font-weight: 780;
}

.impact-strip p {
  margin-top: 10px;
  color: var(--muted);
  font-size: 0.84rem;
  line-height: 1.55;
}

.contact-section {
  display: grid;
  grid-template-columns: minmax(0, 0.75fr) auto;
  gap: 34px;
  align-items: end;
  border-top: 1px solid var(--line);
  padding-bottom: 70px;
}

.contact-actions {
  display: grid;
  justify-items: end;
  gap: 14px;
}

.contact-actions span {
  color: var(--muted);
  font-size: 0.86rem;
}

@media (min-width: 1180px) {
  .hero-copy h1 {
    font-size: 4rem;
  }

  .section-heading h2,
  .contact-section h2 {
    font-size: 4.4rem;
  }
}

@media (max-width: 1060px) {
  .hero-section,
  .section-grid,
  .work-layout,
  .impact-section,
  .contact-section {
    grid-template-columns: 1fr;
  }

  .hero-section {
    padding-top: 112px;
  }

  .system-panel {
    min-height: auto;
  }

  .project-preview {
    position: static;
  }

  .contact-actions {
    justify-items: start;
  }
}

@media (max-width: 760px) {
  .hero-section {
    min-height: auto;
    padding: 102px 16px 44px;
  }

  .hero-copy h1 {
    font-size: 3.05rem;
  }

  .section-heading h2,
  .contact-section h2 {
    font-size: 2.5rem;
  }

  .hero-facts,
  .section-heading--wide,
  .capability-row,
  .project-row,
  .impact-strip {
    grid-template-columns: 1fr;
  }

  .section-heading--wide {
    align-items: start;
  }

  .content-section,
  .contact-section {
    width: min(100% - 32px, 1320px);
    padding-block: 78px;
  }

  .system-map {
    min-height: 390px;
  }

  .system-node {
    min-width: 112px;
  }

  .system-node--0 {
    top: 24px;
    left: 20px;
  }

  .system-node--1 {
    top: 94px;
    right: 18px;
  }

  .system-node--2 {
    right: 20px;
    bottom: 30px;
  }

  .system-node--3 {
    bottom: 104px;
    left: 20px;
  }

  .capability-row ul {
    justify-content: flex-start;
  }

  .project-row {
    min-height: 0;
  }

  .project-meta {
    justify-items: start;
  }

  .impact-strip article + article {
    border-top: 1px solid var(--line);
    border-left: 0;
  }
}
</style>
