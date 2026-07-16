import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'git-shark',
  tagline: 'Self-hosted Git platform as a single, natively-compiled Quarkus service',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://docs.gitshark.ha1nz.de',
  baseUrl: '/',

  organizationName: 'workaround-org',
  projectName: 'git-shark-docs',

  onBrokenLinks: 'throw',

  markdown: {
    // .md files (ported verbatim from the git-shark repo) are CommonMark, not MDX —
    // they use bare <url> autolinks and <placeholder> text that MDX would misparse.
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/workaround-org/git-shark/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/shark-logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'git-shark',
      logo: {
        alt: 'git-shark logo',
        src: 'img/shark-logo.png',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'users', position: 'left', label: 'Users'},
        {type: 'docSidebar', sidebarId: 'admins', position: 'left', label: 'Admins'},
        {type: 'docSidebar', sidebarId: 'maintainers', position: 'left', label: 'Maintainers'},
        {href: 'https://gitshark.ha1nz.de', label: 'gitshark.ha1nz.de', position: 'right'},
        {href: 'https://github.com/workaround-org/git-shark', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'For users', to: '/docs/users/organisations'},
            {label: 'For admins', to: '/docs/admins/getting-started'},
            {label: 'For maintainers', to: '/docs/maintainers/forgefed'},
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'git-shark instance', href: 'https://gitshark.ha1nz.de'},
            {label: 'Source on GitHub', href: 'https://github.com/workaround-org/git-shark'},
            {label: 'ForgeFed', href: 'https://forgefed.org'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} workaround-org.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'bash', 'yaml', 'properties', 'json', 'docker'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
