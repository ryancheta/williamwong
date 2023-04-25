import React from 'react';
import styles from './styles.module.scss';
// import { classes } from '../../utils';
// import IconContainer from '../IconContainer';
// import { flex, col } from '../../assets/_flex.module.scss';
// import linkedInIcon from '../../assets/icons/linked-in.svg';
// import emailIcon from '../../assets/icons/email.svg';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { fadeIn } from '../WorkTile/WorkTile.module.scss';

const Hero = () => {
  const ref = React.createRef(null);

  React.useEffect(() => {}, [window.innerWidth]);

  const handleObserver = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add(fadeIn);
        }, 100);
      } else {
        entry.target.classList.remove(fadeIn);
      }
    });
  };

  useIntersectionObserver(ref, handleObserver, { threshold: 0.45 });

  return (
    <main className={styles.hero}>
      <h4 ref={ref} id="heroText">
        I’m William Wong, an experienced Visual UI Designer based in NYC. I’m passionate about creating digital experiences through problem-solving and innovation. Focused on visual storytelling aimed to bring user experiences to life.
      </h4>
    </main>
  );
};

export default Hero;
