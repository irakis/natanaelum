import React from 'react';
import styles from './Footer.module.scss';
import clsx from 'clsx';

const Footer = () => {
    return(
        <>
            <div className={clsx(styles.footer, 'row')}>
                <div className='col-2 '>
                    <div className='row'>
                        <div className='col-3'>
                            <img src={`${process.env.PUBLIC_URL}/images/call.svg`} alt='call'/>
                        </div>
                        <div className='col-9 p-2'>
                            <div className='row d-block'>
                                <div className={clsx('col-12', styles.footerHeader)}>
                                    BIURO
                                </div>               
                                <div className='col-12'>
                                    <p>+48 (12) 3333333333</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-2 '>
                    <div className='row'>
                        <div className='col-3'>
                            <img src={`${process.env.PUBLIC_URL}/images/call.svg`} alt='call'/>
                        </div>
                        <div className='col-9 p-2'>
                            <div className='row d-block'>
                                <div className={clsx('col-12', styles.footerHeader)}>
                                    PORADNIA
                                </div>               
                                <div className='col-12'>
                                    <p>+48 (12) 44433337773</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-2 '>
                    <div className='row'>
                        <div className='col-3'>
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
                </div>
            </div>
            <div className='row d-flex pb-4'>
                <div className={clsx('col-12', styles.copySign, 'd-flex')}>
                    <p className='m-0'>&copy; 2023 NATANAELUM. Wszelkie prawa zastrzeżone.</p>
                </div>
            </div>
        </>
    )
};

export default Footer;