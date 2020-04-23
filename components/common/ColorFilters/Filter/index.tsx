import React, { useState } from 'react';
import styles from './styles.scss';

type FilterProps = {
  title?: string;
  noCaret?: boolean;
  alwaysOpen?: boolean;
  scrollY?: boolean;
  children?: React.ReactNode;
};

const Filter = ({ title, noCaret, alwaysOpen, scrollY, children }: FilterProps): React.ReactElement => {
  const [open, setOpen] = useState(!!alwaysOpen);

  return (
    <div className={styles.filterContainer}>
      <button
        className={`${styles.optionTitle} ${!title && styles.noTitle}`}
        type="button"
        onClick={(): void => {
          if (!alwaysOpen) {
            setOpen((prevState) => !prevState);
          }
        }}
      >
        <span>{title}</span>
      </button>
      {open && (
        <div className={styles.optionContent}>
          {title && <div className={styles.lilSeparator} />}

          <div className={`${styles.filterContent} ${scrollY ? styles.scrollY : ''}`}>{children}</div>
        </div>
      )}
    </div>
  );
};

export default Filter;
