import React from 'react';

const useDebouncedEffect = (duration: number, callback: React.EffectCallback, deps: unknown[]): void => {
  const firstMount = React.useRef(true);
  const memoizedCallback = React.useCallback(callback, deps);
  React.useEffect((): void | (() => void) => {
    if (firstMount.current) {
      firstMount.current = false;
      return undefined;
    }
    if (duration <= 0) {
      return memoizedCallback();
    }
    const timeoutID = setTimeout(memoizedCallback, duration);
    return (): void => clearTimeout(timeoutID);
  }, [duration, memoizedCallback]);
};

export default useDebouncedEffect;
