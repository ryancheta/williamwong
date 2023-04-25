import React from 'react';
import Hero from './Hero';
import styles from './styles.module.scss';
import About from './About';
import { fadeIn, iconContainer } from '../WorkTile/WorkTile.module.scss';
import PageWrapper from '../../PageWrapper';
import { useLocation } from 'react-router-dom';
import CaseStudies from '../CaseStudies';
import TNF from '../../assets/images/logos/tnf.svg';

export const workTiles = [
  // { src: 'http://williamwong.info/dsnimg/home_work_05_TNF.svg', to: '/tnf' },
  { src: TNF, to: '/tnf' },
  { src: 'http://williamwong.info/dsnimg/home_work_04_sunovion.svg', to: '/sunovion' },
  { src: 'http://williamwong.info/dsnimg/home_work_03_eBay.svg' },
  { src: 'http://williamwong.info/dsnimg/home_work_08_oyko.svg' },
  { src: 'http://williamwong.info/dsnimg/home_work_09_woolite.svg' },
  { src: 'http://williamwong.info/dsnimg/home_work_10_euc.svg' }
  // {
  //   src: 'http://williamwong.info/dsnimg/home_work_01_usarmy.svg'
  // },
  // {
  //   src: 'http://williamwong.info/dsnimg/home_work_02_enfamil.svg'
  // },
  // { src: 'http://williamwong.info/dsnimg/home_work_06_RWJF.svg' },
  // { src: 'http://williamwong.info/dsnimg/home_work_07_acuvue.svg' },
  // { src: 'http://williamwong.info/dsnimg/home_work_11_hasbro.svg' },
  // { src: 'http://williamwong.info/dsnimg/home_work_12_samsung.svg' }
];

const LandingPage = () => {
  const location = useLocation();
  //TODO: Should this live here or at the workTile level?
  React.useEffect(() => {
    const handleObserver = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(fadeIn);
        } else {
          entry.target.classList.remove(fadeIn);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver);
    const workTiles = document.querySelectorAll(`.${iconContainer}`);

    // workTiles.forEach(tile => {
    //   observer.observe(tile);
    // });

    return () => {
      observer.disconnect();
    };
  }, [window.innerWidth, window.innerHeight]);

  React.useEffect(() => {
    if (location.state?.shouldScrollToWork) document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
    if (location.state?.shouldScrollToAbout) document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    if (location.state?.shouldScrollToTop) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.state]);

  return (
    <PageWrapper>
      <Hero />
      <CaseStudies />
      <About />
    </PageWrapper>
  );
};

export default LandingPage;
