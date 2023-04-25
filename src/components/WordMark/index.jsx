import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import useWindowWidth from '../../hooks/useWindowWidth';

const WordMark = () => {
  const wordMarkRef = useRef();
  const isMobileWidth = useWindowWidth() < 430;
  return (
    <Link className={styles.link} to={{ pathname: '/', state: { shouldScrollToTop: true } }} ref={wordMarkRef}>
      <img src="http://williamwong.info/williamwong.design/assets/w2_logo.svg" />
      {!isMobileWidth && <h5 className={styles.wordMark}>&nbsp;&nbsp;William Wong</h5>}
    </Link>
  );
};

export default WordMark;
