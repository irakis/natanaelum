import React from "react";
import styles from './LogoStamp.module.scss';
import clsx from 'clsx';

const LogoStamp = () => {
    return(
        <div className={clsx(styles.LogoStamp, 'justify-content-between pt-1 ')}>
            <img src={`${process.env.PUBLIC_URL}/images/home/LPPS.png`} alt="LPPS_logo"/>
            <img src={`${process.env.PUBLIC_URL}/images/home/KPCU.png`} alt="KPCU_logo"/>
            <img src={`${process.env.PUBLIC_URL}/images/home/KUL.png`} alt="KUL_logo"/>      
        </div>
    )
}

export default LogoStamp;