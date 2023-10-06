import React from 'react';
import styles from './Home.module.scss';
import clsx from 'clsx';
import LogoStamp from './Common/LogoStamp.js';
import Button from './Common/Button.js';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
            <div className={clsx('row', styles.home)}>
                <div className={clsx('col-6 p-0 m-0 col-sm-12 col-md-7')}>
                    <div className='row d-block '>
                        <div className='col mt-4 mb-4'>
                            Aktualności
                        </div>
                        <div className='col mb-3 mt-3'>
                            <h2>Zrozumienie</h2>
                            <h2>Wsparcie</h2>
                            <h2>Przełom</h2>
                        </div>
                        <div className='col mt-4 p-9'>
                            <p>Odwiedź naszą Poradnię Psychologiczną i odkryj siłę swojego umysłu, 
                                lecząc rany emocjonalne i osiągając pełnię życia.
                            </p>
                        </div>
                        <div className='col mt-3 m-0 mb-4 pb-4'>
                            <Link to='/clinic'>
                                <Button text='Czytaj więcej' color='green'/>
                            </Link>
                        </div>
                        <div className='col'>
                            <LogoStamp/>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.butterflyParent,'d-block col-6 p-0 m-0 col-sm-12 col-md-5')}>
                    <img className={clsx(styles.butterfly)} src={`${process.env.PUBLIC_URL}/images/home/Motyl_1B.png`} alt='motyl_1'/>
                </div>
            </div>
        </div>
    )
};

export default Home;