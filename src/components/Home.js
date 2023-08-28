import React from 'react';
import styles from './Home.module.scss';
import clsx from 'clsx';

const Home = () => {
    return (
        <div className={clsx('row', styles.home)}>
            <div className={clsx('col-12')}>
                <h1>Home</h1>
            </div>
        </div>
    )
};

export default Home;