import React from 'react';
import CaseStudyItem from './caseStudyItem';
import { workTiles } from '../landing';
import WorkTile from '../WorkTile';
import styles from './styles.module.scss';
import caseStudy1 from '../../assets/images/case-study-1.svg';
import caseStudy2 from '../../assets/images/case-study-2.svg';
import { register } from 'swiper/element/bundle';
import useWindowWidth from '../../hooks/useWindowWidth';
import { textCenter } from '../../assets/_utils.module.scss';

register();

const studies = [
  {
    src: caseStudy1,
    title: 'Army Recruiting Website Redesign',
    body: 'Army was in need of a structural redesign but also a refined user experience. This was a redesign of a large website with hundreds of pages. See what it took for us identify all relevant content we carried over into the redesign while streamlining the entire experience that helped minimize drop off rates. '
  },
  {
    src: caseStudy2,
    title: 'Enfamil Formula Subscription App',
    body: 'Enfamil was in need of a way to seamlessly retain customers while engaging them at the same time during the entire infancy period of their little bundle of joy. As a mom, you never want to miss a milestone or even a feeding. See how we solved for both in this product.'
  }
];

const CaseStudies = () => {
  const isMobileWidth = useWindowWidth() < 1024;
  return (
    <div className={styles.caseStudies} id="caseStudies">
      <h3 className={textCenter} style={{ marginBottom: '4rem' }}>
        Case Studies
      </h3>
      <div>
        {studies.map((studyProps, i) => (
          <CaseStudyItem key={studyProps.src} {...studyProps} index={i + 1} />
        ))}
      </div>
      <div className={styles.moreWork} id="work">
        {isMobileWidth ? <h5>More Client Work</h5> : <h4 style={{ textAlign: !isMobileWidth ? 'center' : '', marginBottom: isMobileWidth ? '0.5rem' : '4rem', marginLeft: isMobileWidth ? 8 : 0 }}>More client work</h4>}
        <div className={styles.workTiles}>
          {isMobileWidth ? (
            <swiper-container slides-per-view="1.075" space-between={isMobileWidth ? 8 : 16} scrollbar="true">
              {workTiles.map(props => (
                <swiper-slide key={props.src}>
                  <WorkTile {...props} />
                </swiper-slide>
              ))}
            </swiper-container>
          ) : (
            workTiles.map(props => <WorkTile key={props.src} {...props} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
