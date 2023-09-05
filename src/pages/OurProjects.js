import React from 'react';
import styles from './OurProjects.module.scss';
import clsx from 'clsx';
import Card from '../components/common/Card';

const OurProjects = () => {
    return (
        <div className={clsx('row mt-5 ml-0 mr-0 d-flex justify-content-center', styles.myContainer)}>
            <div className={clsx('row d-flex', styles.ourProjects)}>
                <div className={clsx(styles.butterflyParent,'col-6 p-0')}>
                    <div className='col-12 mt-4 mb-4 d-flex justify-content-start'>
                        <h2 className={styles.smallGreen}> Projekty</h2>
                    </div>
                    <div className={clsx(styles.main, 'col-12 mb-3 mt-3 d-flex justify-content-start')}>
                        <h2>Nasze Projekty</h2>
                    </div>
                    <div className={clsx(styles.description,'col-12 mt-4 d-flex')}>
                        Stowarzyszenie Natanaelum i Fundacja Rozwoju KUL tworzą skuteczną współpracę, realizując innowacyjne projekty w ramach Regionalnego Programu Operacyjnego Województwa Lubelskiego. Razem generujemy wzrost i postęp naszego regionu.
                        
                    </div>
                </div> 
            </div>
            <div className='row'>
                <div className='col-12 d-flex flex-wrap justify-content-center gap-5'>
                    <Card className='align-self-baseline'
                        img={`${process.env.PUBLIC_URL}/images/cards/plakat002 1.png`}
                        alt='plakat002 1'
                        header='Aktywni i kompetentni na lubelskim rynku pracy'
                        status='AKTYWNY'
                        period='1 marca - 30 czerwca 2023 r.'
                        description='Celem projektu jest aktywizacja zawodowa oraz zwiększenie poziomu zatrudnienia osób biernych zawodowo lub bezrobotnych, zamieszkujących na terenie województwa lubelskiego, posiadających orzeczenie o niepełnosprawności i/lub doświadczających trudności psychicznych, w różnym stopniu nasilenia.'
                        link='project_active_competent'
                    />
                    <Card
                        img={`${process.env.PUBLIC_URL}/images/cards/plakat_fundusz_celowy_420x297_w-1 1.png`}
                        alt='plakat_fundusz_celowy_420x297_w-1 1'
                        header='Wsparcie adaptacji społecznej i zawodowej matek uciekających z Ukrainy objętej wojną'
                        status='AKTYWNY'
                        period='1 sierpnia 2022 r. - 31 grudnia 2023 r.'
                        description='Projekt ma na celu wsparcie adaptacji społecznej i zawodowej matek z Ukrainy oraz ich dzieci poprzez szkolenia, wsparcie psychologiczne, naukę języka polskiego i inne działania integracyjne.'
                        link='/'
                    />
                    <Card
                        img={`${process.env.PUBLIC_URL}/images/cards/plakat_UKR_pr (1)-1 1.png`}
                        alt='plakat_UKR_pr (1)-1 1'
                        header='Wsparcie matek z dziećmi uciekających z Ukrainy objętej wojną'
                        status='ZAKOŃCZONY'
                        period='od 4 lipca 2022 r.'
                        description='Projekt ma na celu wsparcie adaptacji społecznej i zawodowej matek z Ukrainy oraz ich dzieci poprzez szkolenia, wsparcie psychologiczne, naukę języka polskiego i inne działania integracyjne.'
                        link='/'
                    />
                    <Card
                        img={`${process.env.PUBLIC_URL}/images/cards/belka2.png`}
                        alt='belka2'
                        header='Aktywni-Kompetentni-Samodzielni'
                        status='ZAKOŃCZONY'
                        period='sierpień 2017 r. - lipiec 2019 r.'
                        description='Celem jest zapewnienie integracji społecznej i lepszego dostępu do rynku pracy dla osób zagrożonych wykluczeniem i ubóstwem, które doświadczają trudności psychicznych. W ramach projektu oferujemy kompleksowe wsparcie, w tym mentoring, warsztaty rozwoju kompetencji, szkolenia zawodowe, staże oraz wsparcie psychologiczne lub psychoterapeutyczne.'
                        link='/'
                    />
                    <Card
                        img={`${process.env.PUBLIC_URL}/images/cards/belka2.png`}
                        alt='belka2'
                        header='Most do lepszej przyszłości'
                        status='ZAKOŃCZONY'
                        period='wrzesień 2018 r. - sierpień 2020 r.'
                        description='Projekt ma na celu zapewnienie wsparcia osobom z zaburzeniami psychicznymi, które napotykają trudności w dziedzinie zawodowej i społecznej. Oferujemy kompleksowe wsparcie, w tym psychologiczne i terapeutyczne usługi, indywidualne doradztwo zawodowe, mentoring oraz warsztaty rozwoju kompetencji interpersonalnych. Dodatkowo, uczestnicy projektu mają możliwość uczestnictwa w szkoleniach z zakresu kwalifikacji zawodowych oraz odbycia stażu zawodowego.'
                        link='/'
                    />
                    <Card
                        img={`${process.env.PUBLIC_URL}/images/cards/belka2.png`}
                        alt='belka2'
                        header='Kompetentni i Efektywni'
                        status='ZAKOŃCZONY'
                        period='1 września 2019 r. - 31 grudnia 2021 r.'
                        description='W ramach projektu oferujemy kompleksowe programy aktywizacji, usługi reintegracji i rehabilitacji społeczno-zawodowej, które mają na celu wykluczenie społeczne i ubóstwo. Projekt jest dostępny dla osób zamieszkujących teren Województwa Lubelskiego i Lubelskiego Obszaru Funkcjonalnego w wieku 18-64 lat, które są niepracujące i nieaktywne zawodowo.'
                        link='/'
                    />
                </div>
            </div>                  
        </div>
    )
};

export default OurProjects;