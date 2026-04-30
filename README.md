# Singularity — Digital Frontiers

个人作品集 / Portfolio，展示全栈开发与后端架构能力。

**在线访问** https://singularity.ynyg.cloud  
**联系邮箱** niyouguanyu@gmail.com

## 技术栈

- **Vue 3** + TypeScript（Composition API）
- **Tailwind CSS v4**（via Vite plugin）
- **vue-i18n** 中英双语
- **Vue Router** HTML5 history mode
- **CSS 动画** 纯 CSS 关键帧动画，无第三方动画库依赖

## 开发

```bash
npm install        # 安装依赖
npm run dev        # 启动开发服务器 (http://localhost:5173)
npm run build      # 类型检查 + 生产构建
npm run lint       # OxLint + ESLint
npm run format     # Prettier 格式化
```

## 项目结构

```
src/
├── assets/           # 全局样式 (base.css, main.css)
├── components/       # 页面组件
│   ├── NavigationBar.vue
│   ├── HeroSection.vue
│   ├── MarqueeDivider.vue
│   ├── BentoGrid.vue
│   ├── StatsSection.vue
│   ├── ShowcaseSection.vue
│   ├── FooterSection.vue
│   └── ParticleCanvas.vue
├── i18n/lang/        # 国际化 (en.ts, zh.ts)
├── router/           # 路由配置
├── views/            # 页面视图
├── App.vue
└── main.ts
```

## 部署

```bash
npm run build
# 产物在 dist/ 目录，可部署到任意静态托管服务
```
