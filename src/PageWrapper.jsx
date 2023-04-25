import React from 'react';
import styles from './PageWrapper.module.scss';
import { Link } from 'react-router-dom';
import WordMark from './components/WordMark';
import { flex, centerItems } from './assets/_flex.module.scss';
import { classes } from './utils/index';
import CONSTANTS from './constants';

const {
  styles: {
    spacing: { margin }
  },
  icons
} = CONSTANTS;

const navLinks = [
  { to: { pathname: '/', state: { shouldScrollToWork: true } }, title: 'Work' },
  { to: '/resume', title: 'Resume' },
  { to: '/linked-in', title: 'Linked In' },
  { to: '/contact', title: 'Contact' }
];

const PageWrapper = ({ light, children }) => {
  const wordMarkRef = React.useRef();

  function handleScroll() {
    let hero = document.querySelector("[class*='hero']");
    let nav = document.querySelector('nav');
    let heroText = document.getElementById('heroText');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    nav.style.opacity = 1 - scrollTop / (hero.clientHeight - nav.clientHeight);
    heroText.style.opacity = 1 - scrollTop / ((hero.clientHeight - nav.clientHeight) / 2);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={[styles.wrapper, light ? styles.light : ''].join(' ')}>
      <nav className={styles.nav}>
        <Link className={classes(flex, centerItems)} to={{ pathname: '/', state: { shouldScrollToTop: true } }} ref={wordMarkRef}>
          <img src={icons.logo} />
          <h5 className={styles.wordMark}>&nbsp;&nbsp;William Wong</h5>
        </Link>
        <div style={margin.marginLeftAuto}>
          <Link
            to={{
              pathname: '/',
              state: { shouldScrollToWork: true }
            }}
            style={margin.marginRightMd}
          >
            Work
          </Link>
          <Link to={{ pathname: '/', state: { shouldScrollToAbout: true } }}>About</Link>
        </div>
      </nav>
      {children}
      <Footer />
    </div>
  );
};

function Footer() {
  return (
    <footer className={styles.footer}>
      <WordMark />
      <div className={styles.links}>
        {navLinks.map(({ to, title }) => (
          <Link key={to + title} to={to}>
            {title}
          </Link>
        ))}
      </div>
    </footer>
  );
}

export default PageWrapper;
