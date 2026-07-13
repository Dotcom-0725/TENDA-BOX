import { useEffect, useState } from "react";

/** Reports whether the page has moved beyond a vertical scroll position. */
export function useScrollThreshold(threshold: number) {
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEffect(() => {
    const updateThreshold = () => setIsPastThreshold(window.scrollY > threshold);
    updateThreshold();
    window.addEventListener("scroll", updateThreshold, { passive: true });
    return () => window.removeEventListener("scroll", updateThreshold);
  }, [threshold]);

  return isPastThreshold;
}