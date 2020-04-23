import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './styles.scss';

const ProductItemSkeleton = (): React.ReactElement => (
  <>
    <div className={styles.productItemSkeletonContainer} id="listProduct">
      <div className={styles.discContainer}>
        <div className={styles.content}>
          <Skeleton />
        </div>
      </div>
      <div className={styles.img}>
        <Skeleton />
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.iconImg}>
          <Skeleton />
        </div>
        <div className={styles.desc}>
          <Skeleton />
        </div>
      </div>
      <div className={styles.name}>
        <Skeleton />
      </div>
      <div className={styles.size}>
        <Skeleton />
      </div>
      <div className={styles.brand}>
        <Skeleton />
      </div>
      <div className={styles.disc}>
        <Skeleton />
      </div>
      <div className={styles.priceContainer}>
        <Skeleton />
      </div>
      <div className={styles.grocery}>
        <Skeleton />
      </div>
      <div className={styles.toolsContainer}>
        <div className={styles.textLeft}>
          <span>
            <Skeleton />
          </span>
        </div>
        <div className={styles.textRight}>
          <Skeleton />
        </div>
      </div>
    </div>
  </>
);

export default ProductItemSkeleton;
