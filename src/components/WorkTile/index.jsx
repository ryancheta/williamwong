import React, { useRef, useEffect } from 'react';
import styles from './WorkTile.module.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const WorkTile = ({ src, to }) => {
  const ref = useRef();

  // useEffect(() => {
  //   const observerOpts = {
  //     threshold: 0.5
  //   };

  //   const handleObserver = entries => {
  //     for (let entry of entries) {
  //       if (entry.isIntersecting) {
  //         ref.current.classList.add(styles.fadeIn);
  //       } else {
  //         ref.current.classList.remove(styles.fadeIn);
  //       }
  //     }
  //   };

  //   const observer = new IntersectionObserver(handleObserver, observerOpts);
  //   observer?.observe(ref.current);

  //   return () => observer.disconnect();
  // }, []);

  return (
    <Link to={to || '/'} className={styles.iconContainer}>
      <img src={src} />
    </Link>
  );
};

export default WorkTile;
