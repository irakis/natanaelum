import React from "react";
//import styles from './LogoStamp.module.scss';

const LogoStamp = () => {
    return(
        <div className='col-12 d-flex justify-content-between pt-1 '>
            <img src={`${process.env.PUBLIC_URL}/images/home/LPPS.png`} alt="LPPS_logo"/>
            <img src={`${process.env.PUBLIC_URL}/images/home/KPCU.png`} alt="KPCU_logo"/>
            <img src={`${process.env.PUBLIC_URL}/images/home/KUL.png`} alt="KUL_logo"/>      
        </div>
    )
}

export default LogoStamp;