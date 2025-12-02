import { useEffect, useRef } from 'react';

export function useClickOutside(onClickOutside, enabled = true) {
  const ref = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [onClickOutside, enabled]);

  return ref;
}
