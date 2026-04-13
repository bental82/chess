import { useEffect, useState } from 'react';

/**
 * Returns a board size in pixels that fits comfortably within the viewport.
 * Clamps between `min` and `max`, responds to viewport width changes.
 */
export function useBoardSize(min = 280, max = 420): number {
  const compute = () => {
    if (typeof window === 'undefined') return max;
    const w = window.innerWidth;
    // On small screens use most of the width; on larger, leave room for sidebar text.
    const target = w < 640 ? w - 48 : Math.min(max, Math.floor(w * 0.45));
    return Math.max(min, Math.min(max, target));
  };
  const [size, setSize] = useState(compute);
  useEffect(() => {
    const handler = () => setSize(compute());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return size;
}
