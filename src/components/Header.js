import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';

const Header = () => {
    return (
        <div className={clsx('row', styles.header)}>
            <div className={clsx('col-1', styles.logo)}>
                <img src={`${process.env.PUBLIC_URL}/images/logo_3.png`} alt='logo natanaelum'/>
            </div>
            <div className='col-9'>
                <ul className='d-flex'>
                    <li>Dom</li>
                    <li>IPIP</li>
                    <li>O nas</li>
                    <li>Projekty</li>
                    <li>Szkolenia</li>
                    <li>Poradnia</li>
                </ul>
            </div>
            <div className='col-1'>
                <p>Zaloguj</p>
            </div>
        </div>
    )
};

export default Header;