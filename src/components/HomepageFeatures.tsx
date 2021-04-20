import React from 'react';
import clsx from 'clsx';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './HomepageFeatures.module.scss... Remove this comment to see the full error message
import styles from './HomepageFeatures.module.scss';

const FeatureList = [
  {
    title: 'Detailed & Up to Date',
    Svg: require('../../static/img/undraw_Website_setup_re_d4y9.svg').default,
    description: (
      <>
        We're your single source of truth for modern, battle-tested frontend
        and backend strategies.
      </>
    ),
  },
  {
    title: 'Built for Anyone',
    Svg: require('../../static/img/undraw_stand_out_1oag.svg').default,
    description: (
      <>
        Whether you're a newer developer or a seasoned engineer looking to keep
        your skills sharp, you'll find something useful here.
      </>
    ),
  },
  {
    title: 'Completely Open Source',
    Svg: require('../../static/img/undraw_project_team_lc5a.svg').default,
    description: (
      <>
        Want to contribute? Get in touch with us if you have an idea for a
        written guide or code sample, and then make a PR.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
