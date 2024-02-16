import React, { useState } from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import Button from './Common/Button';
import { Link } from 'react-router-dom';

const Header = () => {

    const [isListCollapsed, setIsListCollapsed] = useState(false);
    const handleClick = () => setIsListCollapsed(!isListCollapsed);

    return (
        <header>
            <div className='shadow-sm bg-white rounded'>
                <nav className={clsx('navbar navbar-expand-md navbar-light gb-light position-sticky', styles.header)}>
                    <Link className={clsx('navbar-brand', styles.logo)} to="/">
                        <img src={`${process.env.PUBLIC_URL}/images/logo_3.png`} alt='logo natanaelum'/>
                    </Link>
                    <button className={`${isListCollapsed === false ? 'collapsed' : ''} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#mobile-menu" 
                        aria-controls="mobile-menu" aria-expanded={isListCollapsed} aria-label="Toggle navigation" onClick={handleClick}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`${isListCollapsed === false ? '' : 'show'} collapse navbar-collapse`} id='mobile-menu'>
                        <ul className='nav-list navbar nav w-100'>
                            <li className='nav-item'>
                                <Link to="/" >
                                    <div>
                                        Strona główna
                                    </div>
                                    <p className={clsx(styles.dot, 'rounded-circle')}></p>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="https://ipip.info.pl" target="_blank" rel='noreferrer'>
                                    <div>
                                        IPIP
                                    </div>
                                    <p className={clsx(styles.dot, 'rounded-circle')}></p>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/about">
                                    <div>
                                        O nas
                                    </div>
                                    <p className={clsx(styles.dot, 'rounded-circle')}></p>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='ourprojects'>
                                    <div>
                                        Projekty
                                    </div>
                                    <p className={clsx(styles.dot, 'rounded-circle')}></p>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="ourtrainings">
                                    <div>
                                        Szkolenia
                                    </div>
                                    <p className={clsx(styles.dot, 'rounded-circle')}></p>
                                </Link>
                            </li>
                            <li className='m-0 nav-item'>
                                <Link to="clinic">
                                    <div>
                                        Poradnia
                                    </div>
                                    <p className={clsx(styles.dot, 'rounded-circle')}></p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={clsx(styles.loginLink, 'text-center col-lg-2 col-sm-12 p-sm-flex')}>
                        <Link to='clinic/select_clinic'>
                            <Button text={'Umów wizytę'} color={'green'} imageName={'Group.svg'} altText={'image header'}/>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
};

export default Header;