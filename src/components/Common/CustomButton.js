import React from "react";
import styles from '../../pages/SelectClinic.module.scss';
import clsx from 'clsx';

const CustomButton = (data) => {
    return(
            <div className={clsx(styles.selectClinicRow, "row d-grid")}>
                <button onClick={data.action} className='d-flex pt-2 pb-2 mt-2 mb-2 align-items-center'>
                    <div className={clsx(styles.selectClinicDotSmall,data.isActive === data.text ? styles.selectClinicDotSmall__active : null, "col-1 m-auto")}></div>
                    <div className="col-10">
                        <h2 className="my-auto">{data.text}</h2>
                        <p className="my-auto">Dzieci,  Młodzieży i Dorosłych</p>
                    </div>
                </button>
            </div>  
    )
}

export default CustomButton;