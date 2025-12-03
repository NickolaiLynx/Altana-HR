import { useEffect, useRef, useState, useMemo } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Мемоизация options для стабильности ссылки и предотвращения лишних ререндеров
  const stableOptions = useMemo(
    () => ({
      threshold: 0.1,
      ...options,
    }),
    [options?.threshold, options?.root, options?.rootMargin]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once the element is in view, we can stop observing
          observer.unobserve(element);
        }
      },
      stableOptions
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [stableOptions]);

  return { ref, isInView };
}
