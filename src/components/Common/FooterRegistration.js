import React from "react";
import clsx from 'clsx';
import styles from '../Footer.module.scss';

const FooterRegistration = () => {
    return(
        <div className='row'>
            <div className='col-3 p-1'>
                <img src={`${process.env.PUBLIC_URL}/images/call.svg`} alt='call'/>
            </div>
            <div className='col-9 p-2'>
                <div className='row d-block'>
                    <div className={clsx('col-12', styles.footerHeader)}>
                        REJESTRACJA
                    </div>               
                    <div className='col-12'>
                        <p>(+48) 531 687 761</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterRegistration;