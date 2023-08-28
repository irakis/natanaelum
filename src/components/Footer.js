import React from 'react';
import styles from './Footer.module.scss';
import clsx from 'clsx';

const Footer = () => {
    return(
        <div className={clsx(styles.footer)}>
            this is footer!!
        </div>
    )
};

export default Footer;