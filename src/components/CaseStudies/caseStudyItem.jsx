import React from 'react';
import styles from './styles.module.scss';
import useWindowWidth from '../../hooks/useWindowWidth';

const CaseStudyItem = ({ title, body, src, index = 1 }) => {
  const isMobileWidth = useWindowWidth() <= 768;
  return isMobileWidth ? <MobileCaseStudyItem title={title} body={body} src={src} /> : <DesktopCaseStudyItem title={title} body={body} src={src} index={index} />;
};

const MobileCaseStudyItem = ({ title, body, src }) => {
  return (
    <div className={styles.container}>
      <img src={src} />
      <div className={styles.mobileTextContent}>
        <h4>{title}</h4>
        <p>{body}</p>
        <button>View Case Study</button>
      </div>
    </div>
  );
};

const DesktopCaseStudyItem = ({ title, body, src, index }) => {
  const isMobileWidth = useWindowWidth() <= 768;
  const leftRef = React.useRef();
  const rightRef = React.useRef();

  React.useEffect(() => {
    function handleObserver(entries, className, ref) {
      entries.forEach(entry => {
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add(className);
        }
      });
    }

    const leftObserver = new IntersectionObserver(entries => handleObserver(entries, styles.slideInLeft, leftRef));
    const rightObserver = new IntersectionObserver(entries => handleObserver(entries, styles.slideInRight, rightRef));

    if (leftRef.current) {
      leftObserver.observe(leftRef.current);
    }
    if (rightRef.current) {
      rightObserver.observe(rightRef.current);
    }
  }, []);

  return (
    <div className={styles.container}>
      {index % 2 !== 0 && !isMobileWidth && (
        <div className={styles.column}>
          <img ref={index % 2 !== 0 && !isMobileWidth ? leftRef : undefined} src={src} />
        </div>
      )}
      <div className={styles.column}>
        <div className={styles.content}>
          <h4>{title}</h4>
          <p>{body}</p>
          <button>View Case Study</button>
        </div>
      </div>
      {index % 2 === 0 && !isMobileWidth && (
        <div className={styles.column}>
          <img ref={index % 2 === 0 && !isMobileWidth ? rightRef : undefined} src={src} />
        </div>
      )}
    </div>
  );
};

export default CaseStudyItem;
