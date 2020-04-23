import React from 'react';
import styles from './styles.scss';

type ColorItemProps = {
  name: string;
  id: number;
  saturation: boolean;
};

// this is where the final color item component shows up in main screen
// of course it can be rendered based or without filter

const ColorItem = ({ name, saturation }: ColorItemProps): React.ReactElement => {
  return (
    <div className={styles.container}>
      <a className={styles.link}>
        <div className={styles.imageContainer} style={{ backgroundColor: `${name}` }} />
        <p className={styles.name}>Color Name : {name}</p>
        {saturation && <p className={styles.size}>Saturation : Darker</p>}
      </a>
    </div>
  );
};

export default ColorItem;
