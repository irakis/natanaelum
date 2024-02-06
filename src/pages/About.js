import React from 'react';
import styles from './About.module.scss';
import clsx from 'clsx';
import Button from '../components/Common/Button.js';
import { Link } from 'react-router-dom';

const About = () => {
    return (
            <>
                <div>
                    <div className={clsx(styles.about,'row flex-nowrap')}>
                        <div className={clsx(styles.butterflyParent,'col-lg-12 col-sm-12 p-0')}>
                            <img className={clsx(styles.butterflyParent)} src={`${process.env.PUBLIC_URL}/images/about/background/o-nas-natanaeulum-1.png`} alt='motyl_niebieski_1'/>
                        </div>
                        <div className={clsx(styles.myContainer,'col-lg-5 col-sm-12')}>
                            <div className='row d-block'>
                                <div className='col-12 mt-4 mb-4 d-flex justify-content-end'>
                                    O nas
                                </div>
                                <div className='col-12 mb-3 mt-3 d-flex justify-content-end'>
                                    <h2>NATANAELUM</h2>
                                </div>
                                <div className={clsx(styles.description,'col-12 mt-4 d-flex')}>
                                    <p className='text-end'>W naszym Stowarzyszeniu wspólnie kształtujemy środowisko, w którym znalezienie wsparcia w chwilach potrzeby jest dostępne dla każdego. 
                                        Nasze stowarzyszenie powstało z zaangażowania pracowników Instytutu Psychologii Katolickiego Uniwersytetu Lubelskiego Jana Pawła II, 
                                        z myślą o tym, by oferować wsparcie w najbardziej potrzebnych momentach i obszarach dla naszego społeczeństwa.
                                    </p>
                                </div>
                                <div className='col-12 mt-2 mb-1 pb-1 d-flex justify-content-end'>
                                    <div className='d-lg-flex d-sm-block' aria-disabled="false">
                                        <Link to='https://www.facebook.com/profile.php?id=100057365451899' className='m-2' target='blank'>
                                            <Button color='gray' text='Strona FB' imageName=''/>
                                        </Link>
                                        <Link to='/ourteam' className='m-2'>
                                            <Button color='green' text='Nasz zespół' imageName=''/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/*------SECTION MISSION--START-----*/}

                <div className={clsx(styles.about__mission, 'row')}>
                    <h2 className='text-center'>Stowarzyszenie NATANAELUM kieruje swoją działalność 
                        prospołeczną w stronę obszarów, w których najbardziej potrzebne jest wsparcie. 
                        Naszym celem jest:
                    </h2>
                    <div className='col-lg-4 col-sm-12'>
                        <div className='d-flex justify-content-center'>
                            <img src={`${process.env.PUBLIC_URL}/images/home/mission/zdr-psych 1.png`} alt='brain1'></img>
                        </div>
                        <div>
                            <p className='text-uppercase text-center pt-1'>Ochrona zdrowia psychicznego</p>
                        </div>
                        <div>
                            <p className='text-center p-3'>Nasze działania skierowane są na dostarczanie indywidualnej pomocy, 
                                wspieranie procesu zdrowienia psychicznego oraz eliminowanie barier społecznych w obszarze 
                                opieki psychologicznej.
                            </p>
                        </div>
                    </div>    
                    <div className='col-lg-4 col-sm-12'>
                        <div className='d-flex justify-content-center'>
                            <img src={`${process.env.PUBLIC_URL}/images/home/mission/wsparcie-wykl-spol 1.png`} alt='brain2'></img>
                        </div>
                        <div>
                            <p className='text-uppercase text-center pt-1'>Wsparcie dla osób zagrożonych wykluczeniem</p>
                        </div>
                        <div>
                            <p className='text-center p-3'>Realizujemy pomoc poprzez działania readaptacyjne, 
                                resocjalizacyjne oraz eliminowanie uprzedzeń 
                                społecznych w stosunku do osób zagrożonych wykluczeniem.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12'>
                        <div className='d-flex justify-content-center'>
                            <img src={`${process.env.PUBLIC_URL}/images/home/mission/pomoc-spo-zaw 1.png`} alt='brain3'></img>
                        </div>
                        <div>
                            <p className='text-uppercase text-center pt-1'>Pomoc społeczna i zawodowa</p>
                        </div>
                        <div>
                            <p className='text-center p-3'>Dostarczamy kompleksowe wsparcie pracownikom i wolontariuszom instytucji,
                                 łącząc działania w obszarze pomocy społecznej, a także rozwijania zasobów ludzkich zawodowo.
                            </p>
                        </div>
                    </div>
                </div>

                {/*------SECTION MISSION--END-----*/}

                <div className={clsx(styles.about__section)}>
                    <div className='container'>
                        <div className={clsx('row d-flex')}>
                            <div className='col-12 p-4 mt-5'>
                                <p className={clsx(styles.middle, styles.middleHeight)}><span>NATANAELUM</span> - Integralne wsparcie w kryzysie
                                </p>
                            </div>
                        </div>
                        <div className={clsx(styles.rowButterfly,'row')}>
                            <div className={clsx(styles.helpInfo, 'col-lg-3 col-md-6 col-sm-12 d-block')}>
                                <div className='col-12 pb-3 text-center'>
                                    <img src={`${process.env.PUBLIC_URL}/images/about/icons/Vector.png`} alt='cognition'/>
                                </div>
                                <div>
                                    <p className='text-center'>Problemy psychiczne, osobowościowe</p>
                                </div>
                            </div>
                            <div className={clsx(styles.helpInfo, 'col-lg-3 col-md-6 col-sm-12 d-block')}>
                                <div className='col-12 pb-3 text-center'>
                                    <img src={`${process.env.PUBLIC_URL}/images/about/icons/fontisto_paralysis-disability.png`} alt='accessible'/>
                                </div>
                                <div>
                                    <p className='text-center'>Niepełnosprawność</p>
                                </div>
                            </div>
                            <div className={clsx(styles.helpInfo, 'col-lg-3 col-md-6 col-sm-12 d-block')}>
                                <div className='col-12 pb-3 text-center'>
                                    <img src={`${process.env.PUBLIC_URL}/images/about/icons/healthicons_alcohol.png`} alt='all_inclusive'/>
                                </div>
                                <div>
                                    <p className='text-center'>Uzależnienia i ryzyko uzależnień</p>
                                </div>
                            </div>
                            <div className={clsx(styles.helpInfo, 'col-lg-3 col-md-6 col-sm-12 d-block')}>
                                <div className='col-12 pb-3 text-center'>
                                    <img src={`${process.env.PUBLIC_URL}/images/about/icons/ic_round-people-alt.png`} alt='sports_kabaddi'/>
                                </div>
                                <div>
                                    <p className='text-center'>Społeczne i zawodowe trudności</p>
                                </div>
                            </div>
                            <div className={clsx(styles.helpInfo, 'col-lg-3 col-md-6 col-sm-12 d-block')}>
                                <div className='col-12 pb-3 text-center'>
                                    <img src={`${process.env.PUBLIC_URL}/images/about/icons/octicon_law-16.png`} alt='gavel'/>
                                </div>
                                <div>
                                    <p className='text-center'>Konflikt z prawem karnym</p>
                                </div>
                            </div>
                            <div className={clsx(styles.helpInfo, 'col-lg-3 col-md-6 col-sm-12 p-5 d-block')}>
                                <div className='col-12 pb-3 text-center'>
                                    <img src={`${process.env.PUBLIC_URL}/images/about/icons/healthicons_hiv-self-test.png`} alt='pill'/>
                                </div>
                                <div>
                                    <p className='text-center'>Choroby np.: HIV/AIDS</p>
                                </div>
                            </div>
                            <div className={clsx(styles.helpInfo, 'col-lg-3 col-md-6 col-sm-12 d-block')}>
                                <div className='col-12 pb-3 text-center'>
                                    <img src={`${process.env.PUBLIC_URL}/images/about/icons/mdi_mother.png`} alt='family_restroom'/>
                                </div>
                                <div>
                                    <p className='text-center'>Rozwód, samotne rodzicielstwo</p>
                                </div>
                            </div>
                            <div className={clsx(styles.helpInfo, 'col-lg-3 col-md-6 col-sm-12 d-block')}>
                                <div className='col-12 pb-3 text-center'>
                                    <img src={`${process.env.PUBLIC_URL}/images/about/icons/ic_round-work-off.png`} alt='escalator_warning'/>
                                </div>
                                <div>
                                    <p className='text-center'>Bezrobocie, brak pracy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container'>   
                    <div className={clsx(styles.about,'row mt-5 pt-5')}>
                        <div className='col-lg-6 col-sm-12'>
                            <img className={clsx(styles.butterflyParent, styles.butterflyParent__img)} src={`${process.env.PUBLIC_URL}/images/about/Motyl niebieski 1B.png`} alt='motyl_niebieski_1'/>
                        </div>
                        <div className={clsx('col-lg-6 col-sm-12')}>
                            <div className='row d-block'>
                                <div className='col-12 mt-4 mb-4 d-flex justify-content-end'>
                                    IPIP
                                </div>
                                <div className='col-12 mb-3 mt-3 d-flex justify-content-end'>
                                    <h2>Instytut</h2>
                                </div>
                                <div className={clsx(styles.description, styles.description__ipip, 'col-12 mt-4 d-flex ')}>
                                    <p>Psychoprofilaktyki i Psychoterapii IPIP, powołany do życia w ramach działań statutowych Stowarzyszenia NATANAELUM w dniu 1 czerwca 2011 roku, ma za zadanie dostarczanie merytorycznego wsparcia osobom i instytucjom, które działają 
                                        na rzecz grup i jednostek zagrożonych wykluczeniem społecznym.
                                        W szczególności, Instytut koncentruje się na wspieraniu osób uzależnionych od substancji psychoaktywnych i czynności, poprzez prowadzenie badań naukowych 
                                        o charakterze epidemiologicznym, społecznym i klinicznym, opracowywanie wyników badań oraz organizowanie szkoleń, warsztatów i innych form edukacji specjalistycznej z zakresu psychologii, psychoprofilaktyki i psychoterapii.
                                    </p>
                                </div>
                                <div className='col-12 mt-3 mb-2 pb-2 d-flex justify-content-end'>
                                    <div>
                                        <Button text='Strona instytutu' color='green' imageName=''/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>

            </>
    )
};

export default About;