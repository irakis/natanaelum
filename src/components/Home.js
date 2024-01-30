import React from 'react';
import styles from './Home.module.scss';
import clsx from 'clsx';
import Button from './Common/Button.js';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='container'>
                <div className={clsx('row mb-4 pb-4', styles.home)}>
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

            {/*------SECTION MISSION--START-----*/}

            <div className={clsx(styles.home__mission, styles.home, 'row')}>
                    <h2 className='text-center'>NASZA MISJA</h2>
                <div className='d-lg-flex d-sm-block justify-content-around'>
                    <img src={`${process.env.PUBLIC_URL}/images/home/mission/zdr-psych 1.png`}></img>
                    <img src={`${process.env.PUBLIC_URL}/images/home/mission/wsparcie-wykl-spol 1.png`}></img>
                    <img src={`${process.env.PUBLIC_URL}/images/home/mission/pomoc-spo-zaw 1.png`}></img>
                </div>
                <div className='d-lg-flex d-sm-block justify-content-around '>
                    <div className='d-block'>
                        <div>
                            <p className='text-uppercase text-center'>Ochrona zdrowia</p>
                        </div>
                        <div>
                            <p className='text-uppercase text-center'>psychicznego</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='text-uppercase text-center'>Wsparcie dla osób</p>
                        </div>
                        <div>
                            <p className='text-uppercase text-center'>zagrożonych wykluczeniem</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='text-uppercase text-center'>Pomoc społeczna</p>
                        </div>
                        <div>
                            <p className='text-uppercase text-center'>i zawodowa</p>
                        </div>
                    </div>
                </div>   
            </div>

            {/*------SECTION MISSION--END-----*/}
            {/*------SECTION ACTIVITIES--START-----*/}

            <div className={clsx(styles.home__mission__activities, styles.home__mission, styles.home, 'row')}>
                    <h2 className='text-center mb-4'>NASZA MISJA</h2>
                <div className='d-lg-flex d-sm-block justify-content-around mt-4 mb-4'>
                    <img src={`${process.env.PUBLIC_URL}/images/home/activities/brain.svg`}></img>
                    <img src={`${process.env.PUBLIC_URL}/images/home/activities/Vector.svg`}></img>
                    <img src={`${process.env.PUBLIC_URL}/images/home/activities/Project.svg`}></img>
                    <img src={`${process.env.PUBLIC_URL}/images/home/activities/tree.svg`}></img>
                </div>
                <div className='d-lg-flex d-sm-block justify-content-around mt-4'>
                    <div className='d-block'>
                        <div>
                            <p className='text-center'>Instytut psychoprofilaktyki</p>
                        </div>
                        <div>
                            <p className='text-center'>i psychoterapii</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='text-center'>Poradnia psychologiczna</p>
                        </div>
                        <div>
                            <p className='text-center'>dla dzieci i dorosłych</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='text-center'>Szkolenia // Projekty</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='text-center'>Profilaktyka zdrowia</p>
                        </div>
                        <div>
                            <p className='text-center'>psychicznego</p>
                        </div>
                    </div>
                </div>   
            </div>

            {/*------SECTION ACTIVITIES--END-----*/}

        </>
    )
};

export default Home;