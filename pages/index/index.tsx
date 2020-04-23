import React from 'react';
import Layout from 'components/common/Layout';
import ColorFilters from 'components/common/ColorFilters';
import ColorListGrid from 'components/common/ColorListGrid';

import useApi from 'utils/useApi';
import colorGridApi from 'services/ColorGridApi';
import styles from './styles.scss';

const ColorGridPage = (): React.ReactElement => {
  const { sync: colorSync, state: colorData } = useApi(colorGridApi.colorApi.getColor);
  const [filter, setFilter] = React.useState<string>('');
  const [saturation, setSaturation] = React.useState<boolean>(false);

  const loadColorData = React.useCallback((): void => {
    colorSync();
  }, [colorSync]);

  React.useEffect(() => {
    loadColorData();
  }, [loadColorData]);

  return (
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
