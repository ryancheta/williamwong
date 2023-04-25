import React from 'react';
import styles from './Role.module.scss';

const Role = ({ roleList }) => {
  if (!roleList?.length) return null;
  return (
    <div>
      <h5>Role:</h5>
      <ul className={styles.role}>
        {roleList?.map(role => (
          <li key={role}>
            <p>{role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Role;
