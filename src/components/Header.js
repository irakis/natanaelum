import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';

const Header = () => {
    return (
        <div className={clsx('row mb-5','sticky-top', 'container fluid',styles.header)}>
            <div className={clsx('col-1', styles.logo)}>
                <img src={`${process.env.PUBLIC_URL}/images/logo_3.png`} alt='logo natanaelum'/>
            </div>
            <div className='col-9'>
                <ul className='d-flex align-items-center'>
                    <li>
                        <a href="/">
                            <div>
                                Dom
                            </div>
                            <p className={clsx(styles.dot, 'rounded-circle')}>
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <div>
                                IPIP
                            </div>
                            <p className={clsx(styles.dot, 'rounded-circle')}></p>
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            <div>
                                O nas
                            </div>
                            <p className={clsx(styles.dot, 'rounded-circle')}></p>
                        </a>
                    </li>
                    <li>
                        <a href="/ourprojects">
                            <div>
                                Projekty
                            </div>
                            <p className={clsx(styles.dot, 'rounded-circle')}></p>
                        </a>
                    </li>
                    <li>
                        <a href="/ourtrainings">
                            <div>
                                Szkolenia
                            </div>
                            <p className={clsx(styles.dot, 'rounded-circle')}></p>
                        </a>
                    </li>
                    <li className='m-0'>
                        <a href="/">
                            <div>
                                Poradnia
                            </div>
                            <p className={clsx(styles.dot, 'rounded-circle')}></p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={clsx(styles.loginLink, 'text-center', 'col-2')}>
                <a className={styles.loginLink} href="/">Zaloguj się</a>
            </div>
        </div>
    )
};

export default Header;