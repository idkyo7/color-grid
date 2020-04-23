import React from 'react';
import styles from './styles.scss';

type CheckboxFilterProps = {
  label: string;
  checked?: boolean;
  onChange?: () => void;
};

const CheckboxFilter = ({ label, checked, onChange }: CheckboxFilterProps): React.ReactElement => {
  return (
    <label className={styles.checkboxFilterContainer} htmlFor={label}>
      <span className={styles.labelText}>{label}</span>
      <input type="checkbox" id={label} checked={checked} onChange={onChange} />
      <span className={styles.checkmark} />
    </label>
  );
};

export default CheckboxFilter;
