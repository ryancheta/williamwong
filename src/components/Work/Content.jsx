import React from 'react';
import styles from './Sunovion/styles.module.scss';
import WorkSectionItem from '../WorkSectionItem';
import Role from './Role';

function Content({ heading, items, body, role }) {
  return (
    <section className={styles.contentContainer}>
      <WorkHeading heading={heading} body={body} role={role} />
      <WorkSectionItems items={items} />
    </section>
  );
}

export function WorkHeading({ heading, body, role }) {
  return (
    <div style={{ padding: '2rem 1rem' }} id="sunovion">
      <div className={styles.heading}>
        <h3 style={{ marginBottom: '2rem', display: 'block' }}>{heading}</h3>
        <div className={styles.headingBody}>
          <p style={{ paddingRight: '1rem' }}>{body}</p>
          <Role roleList={role} />
        </div>
      </div>
    </div>
  );
}

export function WorkSectionItems({ items }) {
  return (
    <ul>
      {items.map((props, i) => (
        <WorkSectionItem key={props.description + i} {...props} tag="li" src={`http://williamwong.info/dsnimg/sunovion_${i + 1}.png`} />
      ))}
    </ul>
  );
}

export default Content;
