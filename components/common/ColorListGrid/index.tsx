import React from 'react';
import { Color } from 'services/ColorGridApi/resources/ColorGrid/types';
import ColorItem from '../ColorItem';
import styles from './styles.scss';
import Spinner from '../Spinner';

type ColorListGridProps = {
  loading?: boolean;
  error?: Error;
  color?: Color[];
  filter?: string;
  saturation: boolean;
};

const ColorListGrid = ({ loading, error, color, filter, saturation }: ColorListGridProps): React.ReactElement => {

  return (
    <div className={styles.colorListGridContainer}>
      {loading && (
        <div className={styles.noDataContainer}>
          <Spinner />
        </div>
      )}
      {!loading && error && <div className={styles.noDataContainer}>{error.message}</div>}
      {!loading && !error && (color?.length ?? 0) === 0 && (
        <div className={styles.noDataContainer}>
          Maaf, hasil pencarian untuk warna ini tidak ditemukan
        </div>
      )}
        {!loading && !error && (color?.length ?? 0) > 0 && (
            <div className={styles.productContainer}>
              {filter !== '' ?  
              <>
                {
                  saturation ? color?.filter((data) => data.saturation === saturation && data.colorName === filter).map(filteredColor => (
                    <ColorItem key={filteredColor.id} className={styles.itemList}
                      name={filteredColor.colorName} id={filteredColor.id} saturation={filteredColor.saturation} />
                  )) 
                  :
                    color?.filter((data) => data.colorName === filter).map(filteredColor => (
                      <ColorItem key={filteredColor.id} className={styles.itemList}
                        name={filteredColor.colorName} id={filteredColor.id} saturation={filteredColor.saturation} />
                    )) 
                }
              </>
              :
              color?.map((color) => (
                <ColorItem key={color.id} className={styles.itemList} 
                name={color.colorName} id={color.id} saturation={color.saturation} />
              ))}
            </div>
        )}
    </div>
  );
};

export default ColorListGrid;
