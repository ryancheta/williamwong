import { useState, useEffect } from 'react';
import { isMobileDevice } from '../utils/index';

export default function useWindowWidth() {
  const init = window.innerWidth;
  const [width, setWidth] = useState(init);

  const handleResize = () => {
    if (isMobileDevice()) {
      setWidth(window.screen.width);
    } else {
      setWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}
