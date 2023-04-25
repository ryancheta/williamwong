import React from 'react';

const useIntersectionObserver = (ref, handleObserver, opts = {}) => {
  React.useEffect(() => {
    ref = ref?.current || ref;
    const observer = new IntersectionObserver(handleObserver, opts);
    if (ref) observer.observe(ref);

    //cleanup observer
    return () => observer.disconnect();
  }, []);
};

export default useIntersectionObserver;
