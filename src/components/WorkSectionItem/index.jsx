import React from 'react';
import styles from './workSectionItem.module.scss';

const WorkSectionItem = ({ src, title, description, tag, ...rest }) => {
  const Tag = tag || 'div';
  return (
    <Tag className={styles.sectionContainer} {...rest}>
      {(title || description) && (
        <div className={styles.sectionContent}>
          {!!title && <h3>{title}</h3>}
          {!!description && <p>{description}</p>}
        </div>
      )}
      <img src={src} />
    </Tag>
  );
};

export default WorkSectionItem;
