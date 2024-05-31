import { useEffect, useRef } from 'react';

const useIntersectionObserver = (setVisibleClass) => {
  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(setVisibleClass);
          } else {
            entry.target.classList.remove(setVisibleClass);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the icon is visible
    );

    return () => observerRef.current.disconnect();
  }, [setVisibleClass]);

  return observerRef;
};

export default useIntersectionObserver;
