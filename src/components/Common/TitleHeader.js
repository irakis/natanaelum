import React from "react";
import clsx from "clsx";
import styles from './TitleHeader.module.scss';

const TitleHeader = (data) => {
    return (
        <div className={clsx('row d-flex m-2', styles.titleHeader)}>
        <div className={clsx('col-lg-6 col-md-12 p-0')}>
            <div className='col-12 mt-4 mb-4 d-flex justify-content-start'>
                <h2 className={styles.smallGreen}>{data.titleSmall}</h2>
            </div>
            <div className={clsx(styles.main, 'col-12 mb-3 mt-3 d-flex justify-content-start')}>
                <h2>{data.titleMain}</h2>
            </div>
            <div className={clsx(styles.description,'col-12 mt-4 d-flex')}>
                {data.description}
            </div>
        </div>
        <div className={clsx(styles.titleHeader__imageBackground,'col-lg-6 col-md-12')}>
        </div> 
    </div>
    )
}

export default TitleHeader;