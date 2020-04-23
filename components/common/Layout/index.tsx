import React from 'react';

import styles from './styles.scss';

type LayoutProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const Layout = ({
  children,
}: LayoutProps): React.ReactElement => {

  let pageContent = children;

  return (
    <div className={styles.container}>
      {pageContent}
    </div>
  );
};

// eslint-disable-next-line react/display-name
Layout.Content = ({ children, className = '', ...props }: LayoutProps): React.ReactElement => (
  <div className={[styles.contentContainer, className].join(' ')} {...props}>
    {children}
  </div>
);

export default Layout;
