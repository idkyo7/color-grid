import React from 'react';
import styles from './styles.scss';

type CheckBoxProps = {
  label: React.ReactNode;
  name: string;
  id: string;
  classLabel?: string;
  classContainer?: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  error?: string;
  checked?: boolean;
};

const CheckBox = ({
  label,
  name,
  id,
  classContainer,
  classLabel,
  inputProps,
  error,
  checked,
}: CheckBoxProps): React.ReactElement => {
  return (
    <div className={`${styles.container} ${classContainer ?? ''}`}>
      <input type="checkbox" className={`${styles.checkBox}`} id={id} name={name} {...inputProps} checked={checked} />
      <label htmlFor={id} className={`${classLabel ?? ''}`}>
        <span>{label}</span>
      </label>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default CheckBox;
