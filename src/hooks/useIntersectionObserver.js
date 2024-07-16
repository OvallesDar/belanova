import { useEffect, useState, useRef } from "react";

export default function useIntersectionObserver(threshold = 0.1) {
    const elementRef = useRef(null);
    const [inView, setinView] = useState(false);
  
    useEffect(() => {
      const currentRef = elementRef.current;
      if (currentRef) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setinView(true);
              observer.unobserve(entry.target);
            }
          },
          {
            threshold
          }
        );
  
        if (elementRef) {
          observer.observe(currentRef);
        }
  
        return () => {
          if (elementRef) {
            observer.unobserve(currentRef);
          }
        };
      }
    }, [threshold]);

    return {elementRef, inView}
}