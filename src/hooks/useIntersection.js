import { useState, useLayoutEffect } from 'react';

export const useIntersection = (element, rootMargin = '0px') => {
  const [isIntersecting, setIntersecting] = useState(false);
  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );

    element.current && observer.observe(element.current);
    return () => observer.unobserve(element.current);
  }, []);

  return isIntersecting;
};
