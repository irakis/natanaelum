import React from 'react';
import styles from './Footer.module.scss';
import clsx from 'clsx';

const Footer = () => {
    return(
        <div className='container-fluid'>
            <div className={clsx(styles.footer, 'row')}>
                <div className='col-2 '>
                    <div className='row'>
                        <div className='col-3 p-1'>
                            <img src={`${process.env.PUBLIC_URL}/images/call.svg`} alt='call'/>
                        </div>
                        <div className='col-9 p-2'>
                            <div className='row d-block'>
                                <div className={clsx('col-12', styles.footerHeader)}>
                                    BIURO
                                </div>               
                                <div className='col-12'>
                                    <p>+48(12) 333 333 333</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-2 '>
                    <div className='row'>
                        <div className='col-3 p-1'>
                            <img src={`${process.env.PUBLIC_URL}/images/call.svg`} alt='call'/>
                        </div>
                        <div className='col-9 p-2'>
                            <div className='row d-block'>
                                <div className={clsx('col-12', styles.footerHeader)}>
                                    PORADNIA
                                </div>               
                                <div className='col-12'>
                                    <p>+48(12) 444 333 377</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-2 '>
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
                </div>
            </div>
            <div className='row d-flex pb-4'>
                <div className={clsx('col-12 d-flex', styles.copySign)}>
                    &copy; 2023 NATANAELUM. Wszelkie prawa zastrzeżone.
                </div>
            </div>
        </div>
    )
};

export default Footer;