import React from 'react';
import styles from './Home.module.scss';
import clsx from 'clsx';
import Button from './Common/Button.js';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='container mt-5'>
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

            <div className={clsx(styles.home__mission, 'row')}>
                <h2 className='text-center'>NASZA MISJA</h2>
                <div className='col-lg-4 col-sm-12'>
                    <div className='d-flex justify-content-center'>
                        <img src={`${process.env.PUBLIC_URL}/images/home/mission/zdr-psych 1.png`} alt='brain1'></img>
                    </div>
                    <div>
                        <p className='text-uppercase text-center pt-1'>Ochrona zdrowia psychicznego</p>
                    </div>
                </div>    
                <div className='col-lg-4 col-sm-12'>
                    <div className='d-flex justify-content-center'>
                        <img src={`${process.env.PUBLIC_URL}/images/home/mission/wsparcie-wykl-spol 1.png`} alt='brain2'></img>
                    </div>
                    <div>
                        <p className='text-uppercase text-center pt-1'>Wsparcie dla osób zagrożonych wykluczeniem</p>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-12'>
                    <div className='d-flex justify-content-center'>
                        <img src={`${process.env.PUBLIC_URL}/images/home/mission/pomoc-spo-zaw 1.png`} alt='brain3'></img>
                    </div>
                    <div>
                        <p className='text-uppercase text-center pt-1'>Pomoc społeczna i zawodowa</p>
                    </div>
                </div>
            </div>

            {/*------SECTION MISSION--END-----*/}
            {/*------SECTION ACTIVITIES--START-----*/}

            <div className={clsx(styles.home__mission__activities, styles.home__mission, styles.home, 'row')}>
                <h2 className='text-center mb-4 pb-4'>Obszary działalności</h2>
                <div className='col-lg-3 col-sm-12'>
                    <div className='d-flex justify-content-center'>
                        <img src={`${process.env.PUBLIC_URL}/images/home/activities/brain.svg`} alt='brain'></img>
                    </div>
                    <div>
                        <p className='text-uppercase text-center pt-1'>Instytut psychoprofilaktyki i psychoterapii</p>
                    </div>
                </div>    
                <div className='col-lg-3 col-sm-12'>
                    <div className='d-flex justify-content-center'>
                        <img src={`${process.env.PUBLIC_URL}/images/home/activities/Vector.svg`} alt='vector'></img>
                    </div>
                    <div>
                        <p className='text-uppercase text-center pt-1'>Poradnie specjalistyczne</p>
                    </div>
                </div>
                <div className='col-lg-3 col-sm-12'>
                    <div className='d-flex justify-content-center'>
                        <img src={`${process.env.PUBLIC_URL}/images/home/activities/Project.svg`} alt='project'></img>
                    </div>
                    <div>
                        <p className='text-uppercase text-center pt-1'>Szkolenia i projekty</p>
                    </div>
                </div>
                <div className='col-lg-3 col-sm-12'>
                    <div className='d-flex justify-content-center'>
                        <img src={`${process.env.PUBLIC_URL}/images/home/activities/tree.svg`} alt='tree'></img>
                    </div>
                    <div>
                        <p className='text-uppercase text-center pt-1'>Profilaktyka</p>
                    </div>
                </div>
            </div>

            {/*------SECTION ACTIVITIES--END-----*/}

        </>
    )
};

export default Home;