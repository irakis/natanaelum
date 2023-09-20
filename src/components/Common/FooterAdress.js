import React from "react";
import styles from '../Footer.module.scss';
import clsx from 'clsx';

const FooterAdress = () => {
    return(
        <div className= 'row'>
            <div className='col-3 p-1'>
                <img src={`${process.env.PUBLIC_URL}/images/Vector.svg`} alt='vector'/>
            </div>
            <div className='col-9 p-2'>
                <div className='row d-block'>
                    <div className={clsx('col-12', styles.footerHeader)}>
                        ADRES
                    </div>               
                    <div className='col-12'>
                        <p>ul. Bohaterów Monte Cassino 16 w Lublinie</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterAdress;