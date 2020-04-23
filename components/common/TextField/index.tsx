import React from 'react';
import styles from './styles.scss';

type TextFieldProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  label?: string;
  error?: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  labelProps?: React.HTMLAttributes<HTMLParagraphElement>;
};

const TextField = ({
  label,
  className = '',
  error,
  inputProps = {},
  labelProps = {},
  ...props
}: TextFieldProps): React.ReactElement => (
  <label className={[styles.container, className].join(' ')} {...props}>
    {label && (
      <div style={{ textAlign: 'left' }}>
        <p className={[styles.label, labelProps.className ?? ''].join(' ')} {...labelProps}>
          {label}
        </p>
      </div>
    )}
    <input className={[styles.textField, inputProps.className ?? ''].join(' ')} {...inputProps} />
    {error && <p className={styles.error}>{error}</p>}
  </label>
);

export default TextField;
