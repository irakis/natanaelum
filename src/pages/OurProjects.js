import React from 'react';
import styles from './OurProjects.module.scss';
import clsx from 'clsx';
import Card from '../components/common/Card';

const OurProjects = () => {
    return (
        <div className={clsx('row mt-5 ml-0 mr-0 d-flex', styles.myContainer)}>
            <div className={clsx('row d-flex', styles.ourProjects)}>
                <div className={clsx(styles.butterflyParent,'col-6 p-0')}>
                    <div className='col-12 mt-4 mb-4 d-flex justify-content-start'>
                                <h2 className={styles.smallGreen}> Projekty</h2>
                    </div>
                    <div className={clsx(styles.main, 'col-12 mb-3 mt-3 d-flex justify-content-start')}>
                        <h2 >Nasze Projekty</h2>
                    </div>
                    <div className={clsx(styles.description,'col-12 mt-4 d-flex')}>
                        <p>Stowarzyszenie Natanaelum i Fundacja Rozwoju KUL tworzą skuteczną współpracę, realizując innowacyjne projekty w ramach Regionalnego Programu Operacyjnego Województwa Lubelskiego. Razem generujemy wzrost i postęp naszego regionu.
                        </p>
                    </div>
                </div> 
            </div>
            <div className='row d-flex'>
                {/*Card*/}
                <Card
                    img={`${process.env.PUBLIC_URL}/images/cards/plakat002 1.png`}
                    alt='plakat002 1'
                    header='Aktywni i kompetentni na lubelskim rynku pracy'
                    status='AKTYWNY'
                    period='1 marca - 30 czerwca 2023 r.'
                    description='Celem projektu jest aktywizacja zawodowa oraz zwiększenie poziomu zatrudnienia osób biernych zawodowo lub bezrobotnych, zamieszkujących na terenie województwa lubelskiego, posiadających orzeczenie o niepełnosprawności i/lub doświadczających trudności psychicznych, w różnym stopniu nasilenia.'
                    link='/'
                />

            </div>                  
        </div>
    )
};

export default OurProjects;