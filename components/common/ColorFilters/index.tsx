import React from 'react';
import styles from './styles.scss';

import Filter from './Filter';
import CheckboxFilter from './CheckboxFilter';


type ColorFiltersProps = {
  page: 'search';
  search: (e: string) => void;
  checked?: boolean;
  filter?: boolean;
  onCheck: (e: any) => void;
};

const ColorFilters = ({ search, checked, onCheck, filter }: ColorFiltersProps): React.ReactElement => {
  return (
    <div className={styles.container}>
      <div>
        <div className={`${styles.filterSideDrawer}`}>
            <Filter title="Filter by Title" alwaysOpen noCaret>
              <input type="text" className={styles.searchText} name="search" placeholder="Input Color Title Here" onChange={event => search(event.target.value)} />
            </Filter>
            {
              !filter && (
                <Filter title="Filter by Condition" alwaysOpen noCaret>
                    <CheckboxFilter
                      label="Saturation"
                      checked={checked}
                      onChange={(): void =>
                        onCheck(!checked)
                      }
                    />
                </Filter>
              )
            }
          </div>
        </div>
      </div>
  );
};

export default ColorFilters;
