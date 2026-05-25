import { useEffect, useRef, useState } from "react";

export const useInViewAnimation = <T extends HTMLElement = HTMLElement>(threshold = 0.1) => {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el); // Trigger once only
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [threshold]);

  return { ref, isInView };
};
