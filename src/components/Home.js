import React from 'react';
import styles from './Home.module.scss';
import clsx from 'clsx';
import Button from './Common/Button.js';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
            <div className={clsx('row', styles.home)}>
                <div className={clsx('col-6 p-0 m-0 col-sm-12 col-md-6')}>
                    <div className='row d-block '>
                        <div className='col mt-4 mb-4'>
                            Stowarzyszenie Natanaelum
                        </div>
                        <div className='col mb-3 mt-3'>
                            <h2>Łączymy Siły</h2>
                            <h2>Dla Zdrowia</h2>
                            <h2>Psychicznego</h2>
                        </div>
                        <div className='col mt-4 p-9'>
                            <p>Twoje centrum wsparcia psychologicznego - skuteczne poradnictwo, 
                                innowacyjne projekty rozwojowe i szkolenia dla specjalistów.
                            </p>
                        </div>
                        <div className='col mt-3 m-0 mb-4 pb-4'>
                            <Link to='/clinic'>
                                <Button text='Czytaj więcej' color='green' imageName=''/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.butterflyParent,'col-6 p-0 m-0 col-sm-12 col-md-6')}>
                    <img className={clsx(styles.butterfly)} src={`${process.env.PUBLIC_URL}/images/home/natanaelum-motyl-ziel-nieb 1.png`} alt='motyl_1'/>
                </div>
            </div>
        </div>
    )
};

export default Home;