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
        {name:'prof. dr hab. Stanisława Steuden', avatar: ''},
        {name:'dr hab. Iwona Niewiadomska prof. KUL',avatar:''},
        {name:'dr Michał Wiechetek',avatar:''},
        {name:'dr Bernadeta Lelonek-Kuleta',avatar:''},
        {name:'dr Anna Przenzak',avatar:''},
        {name:'dr n. med. Gustaw Kozak',avatar:''},
        {name:'Małgorzata Kowalcze',avatar:'kowalcze2.avif'},
        {name:'Krystyna Pietraszko',avatar:''},
        {name:'Maria Tatarska',avatar:''},
        {name:'Elżbieta Rachowska',avatar:''},
        {name:'Danuta Wiewióra',avatar:''},
        {name:'Iwona Mialik',avatar:''},
        {name:'Amanda Wróbel',avatar:''},
        {name:'Paulina Droździel',avatar:''},
        {name:'Wojciech Chajec',avatar:''},
        {name:'Elżbieta Rydz',avatar:''},
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
                                    <div className={clsx(styles.ourTeam__headFrame,"card mb-3")}> 
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
                                    <div className='col-lg-3 col-sm-12' key={member.name}>
                                        <div className="card mb-3">
                                            <img className="card-img-top mx-auto" src={member.avatar===''? `${process.env.PUBLIC_URL}/images/avatar.png` : `${process.env.PUBLIC_URL}/images/ourTeam/${member.avatar}`} alt="Card cap"/>
                                            <div className="card-body">
                                                <p className="card-text text-center">{member.name}</p>
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