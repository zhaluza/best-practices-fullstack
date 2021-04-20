/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Fullstack Best Practices',
  tagline: 'Learn to code better',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'zhaluza',
  projectName: 'best-practices-fullstack',
  themeConfig: {
    navbar: {
      title: 'Fullstack Best Practices',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'backend/intro',
          position: 'left',
          label: 'Backend',
        },
        {
          type: 'doc',
          docId: 'frontend/intro',
          position: 'left',
          label: 'Frontend',
        },

        {
          href: 'https://github.com/zhaluza/best-practices-fullstack',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Backend',
              to: '/docs/backend/intro',
            },
            {
              label: 'Frontend',
              to: '/docs/frontend/intro',
            },
          ],
        },
        { title: 'About', items: [] },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Odesmith. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/scss/custom.scss'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
};
