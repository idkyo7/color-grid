import React from 'react';

type UseApiState<T> = {
  loading: boolean;
  error?: Error;
  data?: T;
};

type UseApiOptions<T> = {
  logoutWhenUnauthorized?: boolean;
  initialData?: T;
  initialLoadingState?: boolean;
  onError?: () => void;
  onSuccess?: () => void;
};

export type UseApiReturnType<T, U extends unknown[]> = {
  state: UseApiState<T>;
  sync: (...args: U) => Promise<void>;
  setData: (data: T | undefined) => void;
};

const useApi = <T, U extends unknown[]>(
  func: (...args: U) => Promise<T>,
  options: UseApiOptions<T> = {}
): UseApiReturnType<T, U> => {
  const { logoutWhenUnauthorized = true, initialData, initialLoadingState = false, onError, onSuccess } = options;

  const [state, setState] = React.useState<UseApiState<T>>({
    loading: initialLoadingState,
    data: initialData,
  });

  // this will be reference to a promise from latest sync() execution
  const validPromise = React.useRef<Promise<T>>();

  const sync = React.useCallback(
    async (...args: U) => {
      const currentPromise = func(...args);
      validPromise.current = currentPromise;
      try {
        setState((prevState) => ({ ...prevState, loading: true, error: undefined }));
        const data = await currentPromise;
        // Cancels when validPromise is not currentPromise.
        // Which means there has been newer sync() execution, making this excecution invalid.
        if (validPromise.current !== currentPromise) return;
        setState((prevState) => ({ ...prevState, loading: false, data }));
        if (onSuccess) onSuccess();
      } catch (error) {
        // Ignores error from invalid promise.
        if (validPromise.current !== currentPromise) return;
        if (logoutWhenUnauthorized && error.response?.status === 401) {
          // logout();
        }
        setState((prevState) => ({ ...prevState, loading: false, data: undefined, error }));
        if (onError) onError();
      }
    },
    [func, 
      // logout, 
      logoutWhenUnauthorized, onError, onSuccess]
  );

  const setData = React.useCallback((data) => {
    setState((prevState) => ({ ...prevState, data }));
  }, []);

  return {
    state,
    sync,
    setData,
  };
};

export default useApi;
