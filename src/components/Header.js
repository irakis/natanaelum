import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <nav className={clsx('navbar navbar-expand-md navbar-light gb-light position-sticky', styles.header)}>
                    <a className={clsx('navbar-brand', styles.logo)} href="/">
                        <img src={`${process.env.PUBLIC_URL}/images/logo_3.png`} alt='logo natanaelum'/>
                    </a>
                    <div className='col-9' role='navigation'>
                        <ul className='nav-list navbar nav'>
                            <li className='nav-item'>
                                <a href="/">
                                    <div>
                                        Dom
                                    </div>
                                    <p className={clsx(styles.dot, 'rounded-circle')}></p>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href="/">
                                    <div>
                                        IPIP
                                    </div>
                                    <p className={clsx(styles.dot, 'rounded-circle')}></p>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href="/about">
                                    <div>
                                        O nas
                                    </div>
                                    <p className={clsx(styles.dot, 'rounded-circle')}></p>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href="/ourprojects">
                                    <div>
                                        Projekty
                                    </div>
                                    <p className={clsx(styles.dot, 'rounded-circle')}></p>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href="/ourtrainings">
                                    <div>
                                        Szkolenia
                                    </div>
                                    <p className={clsx(styles.dot, 'rounded-circle')}></p>
                                </a>
                            </li>
                            <li className='m-0 nav-item'>
                                <a href="/clinic">
                                    <div>
                                        Poradnia
                                    </div>
                                    <p className={clsx(styles.dot, 'rounded-circle')}></p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={clsx(styles.loginLink, 'text-center col-2')}>
                        <a className={clsx(styles.loginLink)} href="/">Zaloguj się</a>
                    </div>
                </nav>
            </div>
        </header>
    )
};

export default Header;