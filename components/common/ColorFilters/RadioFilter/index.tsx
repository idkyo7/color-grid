import React, { ChangeEvent } from 'react';
import styles from './styles.scss';

type RadioFilterProps = {
  label: string;
  checked?: boolean;
  radioName: string;
  value: number | string;
  onChange: (event: ChangeEvent) => void;
};

const RadioFilter = ({ label, checked, radioName, value, onChange }: RadioFilterProps): React.ReactElement => {
  const formattedId = `${radioName}-${value}`;

  return (
    <label className={styles.radioFilterContainer} htmlFor={formattedId}>
      {label}
      <input type="radio" id={formattedId} checked={checked} name={radioName} value={value} onChange={onChange} />
      <span className={styles.checkmark} />
    </label>
  );
};

export default RadioFilter;
