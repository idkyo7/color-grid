import React from 'react';
import styles from './styles.scss';

type ColorItemProps = {
  className?: string;
  name: string;
  id:number;
  saturation: boolean;
  flash?: boolean;
};

const ColorItem = ({ name, saturation }: ColorItemProps): React.ReactElement => {
  return (
    <div className={styles.container}>
        <a className={styles.link}>
          <div className={styles.imageContainer} style={{backgroundColor: `${name}`}}>
            
          </div>
          <p className={styles.name}>Color Name : {name}</p>
          {
            saturation && (
              <p className={styles.size}>Saturation : Darker</p>
            )
          }
         </a>
    </div>
  );
};

export default ColorItem;
