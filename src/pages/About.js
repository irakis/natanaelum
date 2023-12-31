import React from 'react';
import styles from './About.module.scss';
import clsx from 'clsx';
import LogoStamp from '../components/Common/LogoStamp.js';
import Button from '../components/Common/Button.js';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='container'>
            <div className={clsx(styles.about,'row')}>
                <div className={clsx(styles.butterflyParent,'col-lg-6 col-sm-12 p-0 z-n1')}>
                    <img className={clsx(styles.butterflyParent, styles.butterflyParent__img)} src={`${process.env.PUBLIC_URL}/images/about/Motyl niebieski 1B.png`} alt='motyl_niebieski_1'/>
                </div>
                <div className={clsx(styles.myContainer,'col-lg-6 col-sm-12 z-n2')}>
                    <div className='row d-block'>
                        <div className='col-12 mt-4 mb-4 d-flex justify-content-end'>
                            Aktualności
                        </div>
                        <div className='col-12 mb-3 mt-3 d-flex justify-content-end'>
                            <h2>Stowarzyszenie</h2>
                        </div>
                        <div className={clsx(styles.description,'col-12 mt-4 d-flex')}>
                            <p>powstało z inicjatywy pracowników Instytutu Psychologii Katolickiego Uniwersytetu Lubelskiego Jana Pawła II. 
                                Do istnienia powołane zostało na zebraniu założycielskim w dniu 20.12.2010 roku w Lublinie.
                                Stowarzyszenie zarejestrowane zostało przez sąd Rejonowy Lublin-Wschód w Lublinie w dniu 12 maja 2011 roku.
                            </p>
                        </div>
                        <div className='col-12 mt-2 mb-1 pb-1 d-flex justify-content-start'>
                            <div className='d-flex' aria-disabled="false">
                                <Link to='https://www.facebook.com/profile.php?id=100057365451899' className='m-2' target='blank'>
                                    <Button color='gray' text='Strona Facebook'/>
                                </Link>
                                <Link to='/ourteam' className='m-2'>
                                    <Button color='green' text='Nasz zespół'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.rowButterfly,'row justify-content-center')}>
                <div className='col-9 col-md-12 d-flex p-4'>
                    <p className={clsx(styles.middle)}>Celem głównym Stowarzyszenia NATANAELUM jest prowadzenie działalności prospołecznej ukierunkowanej 
                        na działania pożytku 
                        publicznego i społecznie użyteczne, takie jak:
                    </p>
                </div>
            </div>
            <div className={clsx(styles.rowButterfly,'row')}>
                <div className={clsx(styles.helpInfo,'col-lg-4 d-block col-sm-12 col-md-6')}>
                    <div className='col-12 pb-3'>
                        <img src={`${process.env.PUBLIC_URL}/images/about/person_apron.svg`} alt='person_apron'/>
                    </div>
                    <div>
                        <p>Wszechstronna pomoc świadczona na rzecz pracowników i wolontariuszy instytucji integracji i pomocy społecznej oraz instytucji działających w obszarze rozwoju zasobów ludzkich</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo,'col-lg-4 col-md-6 d-block col-sm-12')}>
                    <div className='col-12 pb-3'>
                        <img src={`${process.env.PUBLIC_URL}/images/about/diversity_3.svg`} alt='diversity_3'/>
                    </div>
                    <div>
                        <p>Pomoc dla osób i grup zagrożonych wykluczeniem społecznym i zawodowym oraz wykluczonych społecznie poprzez działania readaptacyjne i resocjalizacyjne oraz niwelujące uprzedzenia społeczne w stosunku do osób zagrożonych wykluczeniem</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo,'col-lg-4 col-md-6 d-block col-sm-12')}>
                    <div className='col-12 pb-3'>
                        <img src={`${process.env.PUBLIC_URL}/images/about/add_moderator.svg`} alt='add_moderator'/>
                    </div>
                    <div>
                        <p>Ochrona zdrowia społecznego</p>
                        <div className={styles.butterfly2}>
                            <img className={clsx(styles.butterflyParent__img, 'p-0')} src={`${process.env.PUBLIC_URL}/images/about/Motyl niebieski 2B.png`} alt='Motyl niebieski 2'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx('row d-flex')}>
                <div className='col-12 p-4'>
                    <p className={clsx(styles.middle, styles.middleHeight)}>Pomoc oferowana przez Stowarzyszenie NATANAELUM obejmuje:
                    </p>
                </div>
            </div>
            <div className={clsx(styles.rowButterfly,'row')}>
                <div className={clsx(styles.helpInfo, 'col-lg-4 col-md-6 col-sm-12 d-block')}>
                    <div className='col-12 pb-3'>
                        <img src={`${process.env.PUBLIC_URL}/images/about/cognition.svg`} alt='cognition'/>
                    </div>
                    <div>
                        <p>Osoby z problemami psychicznymi i osobowościowymi</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, 'col-lg-4 col-md-6 col-sm-12 d-block')}>
                    <div className='col-12 pb-3'>
                        <img src={`${process.env.PUBLIC_URL}/images/about/accessible.svg`} alt='accessible'/>
                    </div>
                    <div>
                        <p>Osoby z niepełnosprawnością</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, 'col-lg-4 col-md-6 col-sm-12 d-block')}>
                    <div className='col-12 pb-3'>
                        <img src={`${process.env.PUBLIC_URL}/images/about/all_inclusive.svg`} alt='all_inclusive'/>
                    </div>
                    <div>
                        <p>Osoby z uzależnieniami i zagrożone różnymi typami uzależnień (od substancji psychoaktywnych i czynności)</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, 'col-lg-4 col-md-6 col-sm-12 d-block')}>
                    <div className='col-12 pb-3'>
                        <img src={`${process.env.PUBLIC_URL}/images/about/sports_kabaddi.svg`} alt='sports_kabaddi'/>
                    </div>
                    <div>
                        <p>Osoby wykorzystywane i niezaradne społecznie i zawodowo</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, 'col-lg-4 col-md-6 col-sm-12 d-block')}>
                    <div className='col-12 pb-3'>
                        <img src={`${process.env.PUBLIC_URL}/images/about/gavel.svg`} alt='gavel'/>
                    </div>
                    <div>
                        <p>Osoby po konflikcie z prawem karnym</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, 'col-lg-4 col-md-6 col-sm-12 p-5 d-block')}>
                    <div className='col-12 pb-3'>
                        <img src={`${process.env.PUBLIC_URL}/images/about/pill.svg`} alt='pill'/>
                    </div>
                    <div>
                        <p>Osoby żyjące z wirusem HIV i chore na AIDS</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, 'col-lg-4 col-md-6 col-sm-12 d-block')}>
                    <div className='col-12 pb-3'>
                        <img src={`${process.env.PUBLIC_URL}/images/about/family_restroom.svg`} alt='family_restroom'/>
                    </div>
                    <div>
                        <p>Kobiety, mężczyzn i dzieci w sytuacji rozwodowej i po rozwodzie</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, 'col-lg-4 col-md-6 col-sm-12 d-block')}>
                    <div className='col-12 pb-3'>
                        <img src={`${process.env.PUBLIC_URL}/images/about/escalator_warning.svg`} alt='escalator_warning'/>
                    </div>
                    <div>
                        <p>Osoby samotnie wychowujące dzieci i dzieci z rodzin dysfunkcyjnych oraz ze środowisk społecznie zaniedbanych</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, 'col-lg-4 col-md-6 col-sm-12 d-block')}>
                    <div className='col-12 pb-3'>
                        <img src={`${process.env.PUBLIC_URL}/images/about/flightsmode.svg`} alt='flightsmode'/>
                    </div>
                    <div>
                        <p>Osoby chore będące uchodźcami politycznymi</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, 'col-lg-4 col-md-6 col-sm-12 p-5 d-block')}>
                    <div className='col-12 pb-3'>
                        <img src={`${process.env.PUBLIC_URL}/images/about/work_alert.svg`} alt='work_alert'/>
                    </div>
                    <div>
                        <p>Osoby długotrwale pozostające bez pracy</p>
                    </div>
                </div>
            </div>
            <div className='row d-flex flex-nowrap justify-content-center'>
                <div className='col-9'>
                    <p className={clsx(styles.middle, 'p-4')}>Współprace:</p>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <LogoStamp/>
                </div>
            </div>
            <div className={clsx('row mt-5 pt-5', styles.about)}>
                <div className='col-lg-7 col-sm-12 position-relative'>
                    <img className={clsx(styles.butterflyParent, styles.butterflyParent__img,'position-absolute z-n1')} src={`${process.env.PUBLIC_URL}/images/about/Motyl niebieski 1B.png`} alt='motyl_niebieski_1'/>
                </div>
                <div className={clsx('col-lg-5 col-sm-12')}>
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
                        <div className='col-12 mt-3 mb-2 pb-2 d-flex justify-content-start'>
                            <div>
                                <Button text='Strona instytutu' color='green'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;