import React, { useState } from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import Button from './Common/Button';

const Header = () => {

    const [isListCollapsed, setIsListCollapsed] = useState(false);
    const handleClick = () => setIsListCollapsed(!isListCollapsed);

    return (
        <header>
            <div className='shadow-sm mb-5 bg-white rounded'>
                <nav className={clsx('navbar navbar-expand-md navbar-light gb-light position-sticky', styles.header)}>
                    <a className={clsx('navbar-brand', styles.logo)} href="/">
                        <img src={`${process.env.PUBLIC_URL}/images/logo_3.png`} alt='logo natanaelum'/>
                    </a>

                    <button className={`${isListCollapsed === false ? 'collapsed' : ''} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#mobile-menu" 
                        aria-controls="mobile-menu" aria-expanded={isListCollapsed} aria-label="Toggle navigation" onClick={handleClick}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`${isListCollapsed === false ? '' : 'show'} collapse navbar-collapse`} id='mobile-menu'>
                        <ul className='nav-list navbar nav w-100'>
                            <li className='nav-item'>
                                <a href="/" >
                                    <div>
                                        Strona główna
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
                        <Button text={'Umów wizytę'} color={'green'} imageName={'Group.svg'} altText={'image header'}/>
                    </div>
                </nav>
            </div>
        </header>
    )
};

export default Header;