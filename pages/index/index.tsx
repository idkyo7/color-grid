import React from 'react';
import Layout from 'components/common/Layout';
import ColorFilters from 'components/common/ColorFilters';
import ColorListGrid from 'components/common/ColorListGrid';

import useApi from 'utils/useApi';
import colorGridApi from 'services/ColorGridApi';
import styles from './styles.scss';

const ColorGridPage = (): React.ReactElement => {
  // main state for fetching data from api (i use mock api anyway)
  // i fetch data from mock api by using useApi hooks that i created before for better mini and reusable code
  const { sync: colorSync, state: colorData } = useApi(colorGridApi.colorApi.getColor);
  // for filtering state in input text component
  const [filter, setFilter] = React.useState<string>('');
  // for saturation filter
  const [saturation, setSaturation] = React.useState<boolean>(false);

  // main function to fetch api data by using callback
  const loadColorData = React.useCallback((): void => {
    colorSync();
  }, [colorSync]);

  // restart current cycle component if loadcolordata function have some value changes
  React.useEffect(() => {
    loadColorData();
  }, [loadColorData]);

  return (
    // use Layout base component for container
    <Layout>
      <div className={styles.container}>
        <img
          src="assets/images/background/top-right-background-2.svg"
          alt="corner top right background"
          className={styles.cornerTopRightBackground}
        />
        <img
          src="assets/images/background/left-middle-background.svg"
          alt="corner top right background"
          className={styles.leftMiddleBackground}
        />
        <Layout.Content>
          <div className={styles.inside}>
            {/* this component for filtering data control */}
            <ColorFilters
              page="search"
              filter={filter === ''}
              search={(e: string): void => {
                setFilter(e);
              }}
              checked={saturation}
              onCheck={(e: boolean): void => {
                setSaturation(e);
              }}
            />
            {/* this below component to show what currently data that showed up */}
            <ColorListGrid
              loading={colorData.loading}
              error={colorData.error}
              color={colorData.data?.data}
              filter={filter}
              saturation={saturation}
            />
          </div>
        </Layout.Content>
      </div>
    </Layout>
  );
};

const FilteredColorGridPage = (): React.ReactElement => <ColorGridPage />;

export default FilteredColorGridPage;
