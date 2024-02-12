import React from 'react';
import clsx from 'clsx';
import styles from './OurTeam.module.scss';

const OurTeam = () => {

    const headTeam = [
        'dr hab. Joanna Barbara Chwaszcz Prezes',
        'mgr Agnieszka Wyszomirska Wice prezes',
        'Stefania Chwaszcz Skarbnik',
    ]

    const members = [
        'dr hab. Joanna Barbara Chwaszcz Prezes',
        'mgr Agnieszka Wyszomirska Wice prezes',
        'Stefania Chwaszcz Skarbnik',
        'prof. dr hab. Stanisława Steuden',
        'dr hab. Iwona Niewiadomska prof. KUL',
        'dr Rafał Bartczuk',
        'dr Michał Wiechetek',
        'dr Karina Steinbarth-Chmielewska',
        'dr Bernadeta Lelonek-Kuleta',
        'dr Joanna Chwaszcz',
        'dr Weronika Augustynowicz',
        'dr Elżbieta Trubiłowicz',
        'dr n. med. Aleksandra Radoń',
        'dr Anna Przenzak',
        'dr Krzysztof Ciepliński',
        'dr Robert Modrzyński',
        'dr Wiesław Błaszczak',
        'dr n. med. Gustaw Kozak',
        'dr n. med. Sławomir Jakima',
        'lek. med. Zofia Wieczerzak',
        'mgr Urszula Grodzka',
        'mgr Małgorzata Fatek-Skobel',
        'mgr Beata Cybulak',
        'mgr Małgorzata Kowalcze',
        'mgr Krystyna Pietraszko',
        'mgr Maria Tatarska',
        'mgr Elżbieta Rachowska',
        'mgr Izabela Sawicka',
        'mgr Danuta Wiewióra',
        'mgr Lidia Woć',
        'mgr Iwona Mialik',
        'mgr Mira Olszewska',
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
                    <div className='row mt-4 d-flex justify-content-center '>
                        {headTeam.map(head => {
                            return(
                                <div className='col-lg-3 col-sm-12' key={head}>
                                    <div className="card mb-3">
                                        <img className="card-img-top" src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="Card cap"/>
                                        <div className="card-body">
                                            <p className="card-text">{head}</p>
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
                                            <img className="card-img-top" src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="Card cap"/>
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