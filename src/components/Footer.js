import React from 'react';
import styles from './Footer.module.scss';
import clsx from 'clsx';

const Footer = () => {
    return(
        <footer>
            <div className={clsx(styles.footer, 'row row-cols-2 row-cols-sm-12 row-cols-md-6 m-0')}>
                <div className='col'>
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
                <div className='col'>
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
                <div className='col'>
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
        </footer>
    )
};

export default Footer;