import React  from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Footer.module.scss';
import clsx from 'clsx';
import FooterAdress from './Common/FooterAdress';
import FooterClinic from './Common/FooterClinic';
import FooterMail from './Common/FooterMail';
import FooterRegistration from './Common/FooterRegistration';
import FooterOffice from './Common/FooterOffice';

const Footer = () => {

    const location = useLocation();
    console.log('location: ', location, location === '/clinic');

    return(
        <footer>
            <div className={clsx(styles.footer, `${ location.pathname === '/ourteam' ? 'd-none' : ''} row row-cols-2 row-cols-sm-12 row-cols-md-6 m-0`)}>
                <div className='col'>
                    <FooterAdress/>
                    <FooterOffice/>
                </div>
                <div className='col'>
                    <FooterRegistration/>
                    <FooterClinic/>
                </div>
                <div className='col'>
                    <FooterMail/>
                </div>
            </div>
            <div className='row d-flex p-4'>
                <div className={clsx('col-12 d-flex', styles.copySign)}>
                    &copy; 2023 NATANAELUM. Wszelkie prawa zastrzeżone.
                </div>
            </div>
        </footer>
    )
};

export default Footer;