import React from 'react';

type GlobalContextProviderProps = {
  children: React.ReactElement;
};

const GlobalContextProvider = ({ children }: GlobalContextProviderProps): React.ReactElement => (
    <>{children}</>
);

export default GlobalContextProvider;
