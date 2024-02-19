import React from "react";
import styles from './LogoStamp.module.scss';
import clsx from 'clsx';

const LogoStamp = () => {
    return(
        <div className={clsx(styles.logoStamp, 'd-lg-flex d-md-flex d-sm-block align-items-center justify-content-center pt-1 ')}>
            <img src={`${process.env.PUBLIC_URL}/images/home/kcpu (1).jpg`} alt="KCPU_logo"/>
            <img src={`${process.env.PUBLIC_URL}/images/home/logo ministerstwo (1).png`} alt="MZ_logo"/>     
        </div>
    )
}

export default LogoStamp;