import React from 'react';
import styles from './styles.scss';

import Filter from './Filter';
import CheckboxFilter from './CheckboxFilter';

type ColorFiltersProps = {
  page: 'search';
  search: (e: string) => void;
  checked?: boolean;
  filter?: boolean;
  onCheck: (e: boolean) => void;
  // page props for page mark,
  // search for to setstate for filter component that will be needed for fetch api data,
  // checked for saturation checbox,
  // filter for checkin condition if the main filter state is null or not
  // oncheck for saturation checkbox function
};

const ColorFilters = ({ search, checked, onCheck, filter }: ColorFiltersProps): React.ReactElement => {
  return (
    <div className={styles.container}>
      <div>
        <div className={`${styles.filterSideDrawer}`}>
          <Filter title="Filter by Title" alwaysOpen noCaret>
            <input
              type="text"
              className={styles.searchText}
              name="search"
              placeholder="Input Color Title Here"
              onChange={(event): void => search(event.target.value)}
              // use onchange function to render each filter that been proccess, without any submit function
            />
          </Filter>
          {!filter && (
            <Filter title="Filter by Condition" alwaysOpen noCaret>
              <CheckboxFilter label="Saturation" checked={checked} onChange={(): void => onCheck(!checked)} />
              {/* this component for rendering saturation filter */}
            </Filter>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorFilters;
