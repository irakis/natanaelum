import React from 'react';
import clsx from 'clsx';
import styles from './OurTeam.module.scss';

const OurTeam = () => {

    const headTeam = [
        'dr hab. Joanna Barbara Chwaszcz - Prezes',
        'Agnieszka Wyszomirska - Wice Prezes',
        'Stefania Chwaszcz - Skarbnik',
    ]

    const members = [
        'prof. dr hab. Stanisława Steuden',
        'dr hab. Iwona Niewiadomska prof. KUL',
        'dr Michał Wiechetek',
        'dr Bernadeta Lelonek-Kuleta',
        'dr Anna Przenzak',
        'dr n. med. Gustaw Kozak',
        'Małgorzata Kowalcze',
        'Krystyna Pietraszko',
        'Maria Tatarska',
        'Elżbieta Rachowska',
        'Danuta Wiewióra',
        'Iwona Mialik',
        'Amanda Wróbel',
        'Paulina Droździel',
        'Wojciech Chajec',
        'Elżbieta Rydz',
    ]

    return(
        <div className='container'>
                <div className={clsx(styles.ourTeam, 'row mt-2 pt-2')}>
                <div className='col-12'>        
                    <div className={clsx(styles.rowBackground,'row')}>
                        <div className='col-9 d-flex p-4 mx-auto'>
                            <p className={clsx(styles.middle, 'mx-auto')}>
                                ZARZĄD STOWARZYSZENIA
                            </p>
                        </div>
                    </div>
                    <div className='row mt-4 justify-content-center'>
                        {headTeam.map(head => {
                            return(
                                <div className='col-lg-4 col-sm-12' key={head}>
                                    <div className="card mb-3"> 
                                        <div className="card-body">
                                            <h1 className="card-text">{head}</h1>
                                        </div>
                                    </div>
                            </div>
                            )
                        })}  
                    </div>
                </div>
                </div>
                <div className={clsx(styles.ourTeam, 'row mt-2 pt-2')}>
                    <div className='col-12'>
                        <div className={clsx(styles.rowBackground,'row')}>
                            <div className='col-9 d-flex p-4 mx-auto'>
                                <p className={clsx(styles.middle, 'mx-auto')}>
                                    SPECJALIŚCI
                                </p>
                            </div>
                        </div>
                        <div className='row mt-4 d-flex  flex-wrap'>
                            {members.map(member => {
                                return(
                                    <div className='col-lg-3 col-sm-12' key={member}>
                                        <div className="card mb-3">
                                            <img className="card-img-top mx-auto" src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="Card cap"/>
                                            <div className="card-body">
                                                <p className="card-text">{member}</p>
                                            </div>
                                        </div>
                                </div>
                                )
                            })}  
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default OurTeam;