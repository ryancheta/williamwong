import React from 'react';
import PageWrapper from '../../../PageWrapper';
import styles from './styles.module.scss';
import Content from '../Content';
import { data, items } from './config';
import { scrollToTopSmooth } from '../../../utils/index';
import Hero from '../Hero';

const Sunovion = () => {
  React.useEffect(() => {
    scrollToTopSmooth();
  }, []);

  return (
    <PageWrapper light>
      <Hero className={styles.heroImage} />
      <Content heading={data.content.heading.title} body={data.content.heading.body} role={data.roles} items={items} />
    </PageWrapper>
  );
};

export default Sunovion;
