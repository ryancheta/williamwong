import React, { useEffect, useRef } from 'react';
import styles from './About.module.scss';
import IconContainer from '../IconContainer';
import { email, linkedIn } from './styles.module.scss';
import { fadeIn } from '../WorkTile/WorkTile.module.scss';
import linkedInIcon from '../../assets/icons/linked-in.svg';
import emailIcon from '../../assets/icons/email.svg';
import documentIcon from '../../assets/icons/document-icon.svg';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Footer = () => {
  const ref = useRef(null);

  const observerOpts = {
    threshold: 0.25
  };

  const handleObserver = entries => {
    for (let entry of entries) {
      if (entry.isIntersecting) {
        ref.current.classList.add(fadeIn);
      } else {
        ref.current.classList.remove(fadeIn);
      }
    }
  };

  useIntersectionObserver(ref, handleObserver, observerOpts);
  useEffect(() => {
    // const observerOpts = {
    //   threshold: 0.25
    // };
    // const handleObserver = entries => {
    //   for (let entry of entries) {
    //     if (entry.isIntersecting) {
    //       ref.current.classList.add(fadeIn);
    //     } else {
    //       ref.current.classList.remove(fadeIn);
    //     }
    //   }
    // };
    // const observer = new IntersectionObserver(handleObserver, observerOpts);
    // observer?.observe(ref.current);
    // return () => observer?.unobserve(ref.current);
  }, []);

  return (
    <section className={styles.sectionContainer} id="about">
      <div ref={ref} className={styles.sectionContent}>
        <img className={styles.sectionContentAvatar} src="http://williamwong.info/dsnimg/home_profilepic.png" />
        <div>
          <h3>I'm William Wong</h3>
          <p>Pleased to meet you. I am a Creative/Design Director with over 20 years of invaluable experience which I can lean on no matter the circumstance. Originally from the SF Bay Area/Silicon Valley, which gives me a unique bi-coastal perspective of the industry and in life. I am passionate about my family, photography, all forms of art, but most of all, the work I’ve had a pleasure being a part of throughout my career.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
