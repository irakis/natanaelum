import React, { useState } from "react";
import Button from "../components/Common/Button.js";
import styles from './SelectClinic.module.scss';
import clsx from 'clsx';
import { Link } from "react-router-dom";
import CustomButton from "../components/Common/CustomButton.js";

const SelectClinic = () => {

    const [clinic, setClinic] = useState('')
    
    const handlerEvent = (e, name) =>{
        setClinic(name);
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-6 d-grid pt-5 pb-5">
                    <div className="row my-auto">
                        <div className={clsx(styles.selectClinicDot, styles.selected,"col-1 m-auto")}>
                        </div>
                        <div className={clsx(styles.selectClinic,"col-11")}>
                            <p>Krok 1</p>
                            <h2>Wybór poradni</h2>
                        </div>
                    </div>
                    <div className="row my-auto">
                        <div className={clsx(styles.selectClinicDot,styles.selectClinicDot__inActive,"col-1 m-auto")}></div>
                        <div className={clsx(styles.selectClinic,"col-11")}>
                            <p>Krok 2</p>
                            <h2>Formularz kontaktowy</h2>
                        </div>
                    </div>
                    <div className="row my-auto">
                        <div className={clsx(styles.selectClinicDot, styles.selectClinicDot__inActive,"col-1 m-auto")}></div>
                        <div className={clsx(styles.selectClinic,"col-11")}>
                            <p>Krok 3</p>
                            <h2>Podsumowanie</h2>
                        </div>
                    </div>                                       
                </div>
                <div className={clsx(styles.selectClinic, "col-6")}>
                    <h1 className="pt-5">Wybór poradni</h1>
                    <p className="pb-5">*Należy potwierdź wybór</p>

                    <CustomButton action={(e)=>handlerEvent(e,'Poradnia Zdrowia Psychicznego')} text='Poradnia Zdrowia Psychicznego' isActive={clinic}/>

                    <CustomButton action={(e)=>handlerEvent(e,'Poradnia Psychologiczna')} text='Poradnia Psychologiczna' isActive={clinic}/>
                    
                    <CustomButton action={(e)=>handlerEvent(e,'Poradnia Leczenia Uzależnień')} text='Poradnia Leczenia Uzależnień' isActive={clinic}/>

                    <div className="row mt-5 pt-5 d-grid justify-content-end ">
                        <Link to={clinic}>
                            <Button color='green' text='Potwierdź'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectClinic;