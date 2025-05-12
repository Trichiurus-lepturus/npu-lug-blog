# NPULUG Blog

这是西北工业大学 Linux 用户组 (NPULUG) 的技术博客。

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/NPULUG/blog)

<!-- Add other relevant buttons if needed -->

Features:

- ✅ 基于 Astro 构建，性能优异
- ✅ SEO 友好 (Canonical URLs, OpenGraph)
- ✅ Sitemap 和 RSS Feed 支持
- ✅ Markdown & MDX 内容支持
- ✅ 支持文章多作者展示
- ✅ 可选的原文链接/标题
- ✅ 平滑的页面过渡效果 (View Transitions)
- ✅ 中文日期格式化

## 🚀 项目结构

```text
├── public/         # 静态资源 (图片, favicons等)
├── src/
│   ├── components/   # Astro / UI 框架组件
│   ├── content/      # 内容集合 (博客文章等)
│   │   └── blog/     # 博客文章 Markdown/MDX 文件
│   ├── layouts/      # 页面布局
│   └── pages/        # 页面路由
├── astro.config.mjs  # Astro 配置文件
├── README.md
├── package.json
└── tsconfig.json
```

博客文章存放在 `src/content/blog/` 目录中。每篇文章的元数据 (frontmatter) 在 `src/content/config.ts` 中定义。

静态资源（如图片）可以放在 `public/` 目录下。

## 🧞 命令

所有命令都在项目根目录下运行：

| Command         | Action                                   |
| :-------------- | :--------------------------------------- |
| `bun install`   | 安装依赖                                 |
| `bun dev`       | 启动本地开发服务器 (localhost:4321)      |
| `bun build`     | 构建生产版本到 `./dist/`                 |
| `bun preview`   | 本地预览构建后的站点                     |
| `bun astro ...` | 运行 Astro CLI 命令 (例如 `astro check`) |

## 协议

本项目使用 MIT License。
