import React from 'react';
import styles from './Home.module.scss';
import clsx from 'clsx';

const Home = () => {
    return (
        <div className={styles.myContainer}>
            <div className={clsx('row', styles.home)}>
                <div className={clsx('col-6 pt-5 mt-5')}>
                    <div className='row d-block h-100'>
                        <div className='col mt-4 mb-4'>
                            Aktualności
                        </div>
                        <div className='col mb-3 mt-3'>
                            <h2>Zrozumienie</h2>
                            <h2>Wsparcie</h2>
                            <h2>Przełom</h2>
                        </div>
                        <div className='col-8 mt-5 p-9'>
                            <p>Odwiedź naszą Poradnię Psychologiczną i odkryj siłę swojego umysłu, 
                                lecząc rany emocjonalne i osągając pełnię życia.
                            </p>
                        </div>
                        <div className='col mt-5 mb-5'>
                            <button type='button'>Czytaj więcej</button>
                        </div>
                        <div className='col-12 d-flex justify-content-between pt-5'>
                            <img src={`${process.env.PUBLIC_URL}/images/home/LPPS.png`} alt="LPPS_logo"/>
                            <img src={`${process.env.PUBLIC_URL}/images/home/KPCU.png`} alt="KPCU_logo"/>
                            <img src={`${process.env.PUBLIC_URL}/images/home/KUL.png`} alt="KUL_logo"/>
                            
                        </div>
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