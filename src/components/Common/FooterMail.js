import React from "react";
import clsx from 'clsx';
import styles from '../Footer.module.scss';

const FooterMail = () => {
    return(
        <div className='row'>
            <div className='col-3 p-1'>
                <img src={`${process.env.PUBLIC_URL}/images/alternate_email.svg`} alt='call'/>
            </div>
            <div className='col-9 p-2'>
                <div className='row d-block'>
                    <div className={clsx('col-12', styles.footerHeader)}>
                        POCZTA
                    </div>               
                    <div className='col-12'>
                        <p>sekretariat@natanaelum.pl</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterMail