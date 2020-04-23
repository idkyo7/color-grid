import React from 'react';
import { Color } from 'services/ColorGridApi/resources/ColorGrid/types';
import ColorItem from '../ColorItem';
import styles from './styles.scss';

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
      {!loading && error && <div className={styles.noDataContainer}>{error.message}</div>}
      {!loading && !error && (color?.length ?? 0) === 0 && (
        <div className={styles.noDataContainer}>Maaf, hasil pencarian untuk warna ini tidak ditemukan</div>
      )}
      {/* started from here is main rendering for each color that been fetch from api, either is filtered data or main data */}
      {!loading && !error && (color?.length ?? 0) > 0 && (
        <div className={styles.productContainer}>
          {filter !== '' ? (
            <>
              {/* i use filter method before mapping data to filter color based on current or on progress query */}
              {saturation
                ? color
                    ?.filter((data) => data.saturation === saturation && data.colorName === filter)
                    .map((filteredColor) => (
                      <ColorItem
                        key={filteredColor.id}
                        name={filteredColor.colorName}
                        id={filteredColor.id}
                        saturation={filteredColor.saturation}
                      />
                    ))
                : color
                    ?.filter((data) => data.colorName === filter)
                    .map((filteredColor) => (
                      <ColorItem
                        key={filteredColor.id}
                        name={filteredColor.colorName}
                        id={filteredColor.id}
                        saturation={filteredColor.saturation}
                      />
                    ))}
            </>
          ) : (
            // if the above condition is false, then it will rendered by using default render (without any filter)
            color?.map((colorData) => (
              <ColorItem
                key={colorData.id}
                name={colorData.colorName}
                id={colorData.id}
                saturation={colorData.saturation}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ColorListGrid;
