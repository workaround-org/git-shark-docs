import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  users: [
    {
      type: 'category',
      label: 'For users',
      collapsed: false,
      items: [
        'users/organisations',
        'users/collaborators',
        'users/forking',
        'users/comments',
        'users/commits',
        'users/repository-visibility',
        'users/repository-image',
        'users/search',
        'users/profile',
        'users/mirrors',
        'users/federation',
        'users/mcp',
        'users/ci-runners',
      ],
    },
  ],
  admins: [
    {
      type: 'category',
      label: 'For admins',
      collapsed: false,
      items: [
        'admins/getting-started',
        'admins/persistent-data',
        'admins/organisations',
        'admins/collaborators',
        'admins/forking',
        'admins/search',
        'admins/mirrors',
        'admins/federation',
        'admins/ci-runners',
        'admins/renovate',
      ],
    },
  ],
  maintainers: [
    {
      type: 'category',
      label: 'For maintainers',
      collapsed: false,
      items: [
        'maintainers/ssh-transport',
        'maintainers/comments',
        'maintainers/forking',
        'maintainers/avatars',
        'maintainers/repo-images',
        'maintainers/push-mirrors',
        'maintainers/forgefed',
        'maintainers/federation-roadmap',
        'maintainers/ci-runners',
        'maintainers/gitea-api',
      ],
    },
  ],
};

export default sidebars;
