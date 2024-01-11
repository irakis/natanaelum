import React from 'react';
import styles from './About.module.scss';
import clsx from 'clsx';
import LogoStamp from '../components/Common/LogoStamp.js';
import Button from '../components/Common/Button.js';
import { Link } from 'react-router-dom';
import TitleHeader from '../components/Common/TitleHeader.js';

const About = () => {
    return (
        <div className='container'>
            <div className={clsx(styles.about,'row')}>
                <div className={clsx(styles.myContainer,'col-12')}>
                    <TitleHeader
                        titleSmall='Aktualności'
                        titleMain='Stowarzyszenie'
                        description='powstało z inicjatywy pracowników Instytutu Psychologii Katolickiego Uniwersytetu Lubelskiego Jana Pawła II. 
                            Do istnienia powołane zostało na zebraniu założycielskim w dniu 20.12.2010 roku w Lublinie.
                            Stowarzyszenie zarejestrowane zostało przez sąd Rejonowy Lublin-Wschód w Lublinie w dniu 12 maja 2011 roku.'
                    />
                    <div className='row d-block'>
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
            <div className={clsx('row justify-content-center')}>
                <div className={clsx(styles.rowBackground,'col-12 col-md-12 d-flex p-4')}>
                    <p className={clsx(styles.middle)}>Celem głównym Stowarzyszenia NATANAELUM jest prowadzenie działalności prospołecznej ukierunkowanej 
                        na działania pożytku 
                        publicznego i społecznie użyteczne, takie jak:
                    </p>
                </div>
            </div>
            <div className={clsx('row g-2')}>
                <div className={clsx(styles.helpInfo, "card text-dark bg-light mb-3 p-0 col-lg-4 col-md-6 col-sm-12 shadow rounded")}>
                    <div className="card-header">
                        <img src={`${process.env.PUBLIC_URL}/images/about/person_apron.svg`} alt='person_apron'/>
                    </div>
                    <div className="card-body">
                        <h5 className='mt-3 mb-3'>Pomoc indywidualna</h5>
                        <p>Wszechstronna pomoc świadczona na rzecz pracowników i wolontariuszy instytucji 
                            integracji i pomocy społecznej oraz instytucji działających w obszarze rozwoju 
                            zasobów ludzkich</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, "card text-dark bg-light mb-3 p-0 col-lg-4 col-md-6 col-sm-12 shadow rounded")}>
                    <div className="card-header">
                        <img src={`${process.env.PUBLIC_URL}/images/about/diversity_3.svg`} alt='diversity_3'/>
                    </div>
                    <div className="card-body">
                        <h5 className='mt-3 mb-3'>Pomoc dla grup</h5>
                        <p>Pomoc dla osób i grup zagrożonych wykluczeniem społecznym i zawodowym oraz 
                            wykluczonych społecznie poprzez działania readaptacyjne i resocjalizacyjne 
                            oraz niwelujące uprzedzenia społeczne w stosunku do osób zagrożonych wykluczeniem</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, "card text-dark bg-light mb-3 p-0 col-lg-4 col-md-6 col-sm-12 shadow rounded")}>
                    <div className="card-header">
                        <img src={`${process.env.PUBLIC_URL}/images/about/add_moderator.svg`} alt='add_moderator'/>
                    </div>
                    <div className="card-body">
                    <h5 className='mt-3 mb-3'>Ochrona zdrowia</h5>
                        <p>Ochrona zdrowia społecznego</p>
                    </div>
                </div>
            </div>
            <div className={clsx('row d-flex')}>
                <div className={clsx(styles.rowBackground, 'col-12 p-4')}>
                    <p className={clsx(styles.middle, styles.middleHeight)}>Pomoc oferowana przez Stowarzyszenie NATANAELUM obejmuje:
                    </p>
                </div>
            </div>
            <div className={clsx('row g-2')}>
                <div className={clsx(styles.helpInfo, "card text-dark bg-light mb-3 p-0 col-lg-4 col-md-6 col-sm-12 shadow rounded")}>
                    <div className="card-header">
                        <img src={`${process.env.PUBLIC_URL}/images/about/cognition.svg`} alt='cognition'/>
                    </div>
                    <div  className="card-body">
                        <h5 className='mt-3 mb-3'>Ochrona zdrowia</h5>
                        <p>Osoby z problemami psychicznymi i osobowościowymi</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, "card text-dark bg-light mb-3 p-0 col-lg-4 col-md-6 col-sm-12 shadow rounded")}>
                    <div className="card-header">
                        <img src={`${process.env.PUBLIC_URL}/images/about/accessible.svg`} alt='accessible'/>
                    </div>
                    <div className="card-body">
                        <h5 className='mt-3 mb-3'>Ochrona zdrowia</h5>
                        <p>Osoby z niepełnosprawnością</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, "card text-dark bg-light mb-3 p-0 col-lg-4 col-md-6 col-sm-12 shadow rounded")}>
                    <div className="card-header">
                        <img src={`${process.env.PUBLIC_URL}/images/about/all_inclusive.svg`} alt='all_inclusive'/>
                    </div>
                    <div className="card-body">
                        <h5 className='mt-3 mb-3'>Ochrona zdrowia</h5>
                        <p>Osoby z uzależnieniami i zagrożone różnymi typami uzależnień (od substancji psychoaktywnych i czynności)</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, "card text-dark bg-light mb-3 p-0 col-lg-4 col-md-6 col-sm-12 shadow rounded")}>
                    <div className="card-header">
                        <img src={`${process.env.PUBLIC_URL}/images/about/sports_kabaddi.svg`} alt='sports_kabaddi'/>
                    </div>
                    <div className="card-body">
                        <h5 className='mt-3 mb-3'>Ochrona zdrowia</h5>
                        <p>Osoby wykorzystywane i niezaradne społecznie i zawodowo</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, "card text-dark bg-light mb-3 p-0 col-lg-4 col-md-6 col-sm-12 shadow rounded")}>
                    <div className="card-header">
                        <img src={`${process.env.PUBLIC_URL}/images/about/gavel.svg`} alt='gavel'/>
                    </div>
                    <div className="card-body">
                        <h5 className='mt-3 mb-3'>Ochrona zdrowia</h5>
                        <p>Osoby po konflikcie z prawem karnym</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, "card text-dark bg-light mb-3 p-0 col-lg-4 col-md-6 col-sm-12 shadow rounded")}>
                    <div className="card-header">
                        <img src={`${process.env.PUBLIC_URL}/images/about/pill.svg`} alt='pill'/>
                    </div>
                    <div className="card-body">
                        <h5 className='mt-3 mb-3'>Ochrona zdrowia</h5>
                        <p>Osoby żyjące z wirusem HIV i chore na AIDS</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, "card text-dark bg-light mb-3 p-0 col-lg-4 col-md-6 col-sm-12 shadow rounded")}>
                    <div className="card-header">
                        <img src={`${process.env.PUBLIC_URL}/images/about/family_restroom.svg`} alt='family_restroom'/>
                    </div>
                    <div className="card-body">
                        <h5 className='mt-3 mb-3'>Ochrona zdrowia</h5>
                        <p>Kobiety, mężczyzn i dzieci w sytuacji rozwodowej i po rozwodzie</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, "card text-dark bg-light mb-3 p-0 col-lg-4 col-md-6 col-sm-12 shadow rounded")}>
                    <div className="card-header">
                        <img src={`${process.env.PUBLIC_URL}/images/about/escalator_warning.svg`} alt='escalator_warning'/>
                    </div>
                    <div className="card-body">
                        <h5 className='mt-3 mb-3'>Ochrona zdrowia</h5>
                        <p>Osoby samotnie wychowujące dzieci i dzieci z rodzin dysfunkcyjnych oraz ze środowisk społecznie zaniedbanych</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, "card text-dark bg-light mb-3 p-0 col-lg-4 col-md-6 col-sm-12 shadow rounded")}>
                    <div className="card-header">
                        <img src={`${process.env.PUBLIC_URL}/images/about/flightsmode.svg`} alt='flightsmode'/>
                    </div>
                    <div className="card-body">
                        <h5 className='mt-3 mb-3'>Ochrona zdrowia</h5>
                        <p>Osoby chore będące uchodźcami politycznymi</p>
                    </div>
                </div>
                <div className={clsx(styles.helpInfo, "card text-dark bg-light mb-3 p-0 col-lg-4 col-md-6 col-sm-12 shadow rounded")}>
                    <div className="card-header">
                        <img src={`${process.env.PUBLIC_URL}/images/about/work_alert.svg`} alt='work_alert'/>
                    </div>
                    <div className="card-body">
                        <h5 className='mt-3 mb-3'>Ochrona zdrowia</h5>
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
                <div className={clsx('col-12')}>
                    <div className='row d-block'>
                        <TitleHeader
                            titleSmall='IPIP'
                            titleMain='Instytut'
                            description='Psychoprofilaktyki i Psychoterapii IPIP, powołany do życia w ramach działań statutowych Stowarzyszenia NATANAELUM w dniu 1 czerwca 2011 roku, ma za zadanie dostarczanie merytorycznego wsparcia osobom i instytucjom, które działają 
                                na rzecz grup i jednostek zagrożonych wykluczeniem społecznym.
                                W szczególności, Instytut koncentruje się na wspieraniu osób uzależnionych od substancji psychoaktywnych i czynności, poprzez prowadzenie badań naukowych 
                                o charakterze epidemiologicznym, społecznym i klinicznym, opracowywanie wyników badań oraz organizowanie szkoleń, warsztatów i innych form edukacji specjalistycznej z zakresu psychologii, psychoprofilaktyki i psychoterapii.'
                        />
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