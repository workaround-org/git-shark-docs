import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const audiences = [
  {
    title: 'For users',
    to: '/docs/users/organisations',
    description:
      'Everyday workflows on a git-shark instance: organisations, collaborators, forks, ' +
      'push mirrors, federation, profile settings, and connecting AI clients over MCP.',
  },
  {
    title: 'For admins',
    to: '/docs/admins/getting-started',
    description:
      'Deploy and operate an instance: Docker Compose setup, TLS and OIDC, persistent data, ' +
      'the configuration reference, federation operations, and CI runner registration.',
  },
  {
    title: 'For maintainers',
    to: '/docs/maintainers/forgefed',
    description:
      'Architecture notes and design decisions: ForgeFed internals, push-mirror queue design, ' +
      'fork mechanics, the runner protocol, and the federation roadmap.',
  },
];

const features = [
  'Bare Git repositories served over smart HTTP and SSH',
  'Single natively-compiled Quarkus service — one container, fast startup',
  'Server-rendered Qute web UI, fully functional without JavaScript',
  'OIDC login with PostgreSQL metadata and per-repository access control',
  'Organisations, collaborators, forks, issues, and merge requests with line comments',
  'Push mirrors to external remotes with encrypted credentials',
  'Opt-in ForgeFed / ActivityPub federation between instances',
  'JSON REST API and an MCP server sharing one token model',
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <img
          className={styles.heroLogo}
          src={useBaseUrl('/img/shark-logo.png')}
          alt="git-shark logo"
        />
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title} 🦈
        </Heading>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/admins/getting-started">
            Get started
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://github.com/workaround-org/git-shark">
            View source
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Documentation"
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <div className="container">
          <div className={styles.cards}>
            {audiences.map((audience) => (
              <Link key={audience.title} className={styles.card} to={audience.to}>
                <Heading as="h3">{audience.title}</Heading>
                <p>{audience.description}</p>
              </Link>
            ))}
          </div>
          <section className={styles.features}>
            <Heading as="h2">What git-shark does</Heading>
            <ul className={styles.featureList}>
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </Layout>
  );
}
