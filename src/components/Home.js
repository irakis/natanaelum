import React from 'react';
import styles from './Home.module.scss';
import clsx from 'clsx';
import LogoStamp from './common/LogoStamp.js';
import Button from './common/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className={styles.myContainer}>
            <div className={clsx('row', styles.home)}>
                <div className={clsx('col-6 p-0 m-0')}>
                    <div className='row d-block h-100'>
                        <div className='col mt-4 mb-4'>
                            Aktualności
                        </div>
                        <div className='col mb-3 mt-3'>
                            <h2>Zrozumienie</h2>
                            <h2>Wsparcie</h2>
                            <h2>Przełom</h2>
                        </div>
                        <div className='col-8 mt-4 p-9'>
                            <p>Odwiedź naszą Poradnię Psychologiczną i odkryj siłę swojego umysłu, 
                                lecząc rany emocjonalne i osągając pełnię życia.
                            </p>
                        </div>
                        <div className='col mt-5 mb-5 pb-5'>
                            <Link to='/clinic'>
                                <Button text='Czytaj więcej' color='green'/>
                            </Link>
                        </div>
                        <LogoStamp/>
                    </div>
                </div>
                <div className={clsx(styles.butterflyParent,'col-6 p-0 m-0 position-relative')}>
                    <img className={clsx(styles.butterfly, 'position-absolute')} src={`${process.env.PUBLIC_URL}/images/home/Motyl_1.png`} alt='motyl_1'/>
                </div>
            </div>
        </div>
    )
};

export default Home;