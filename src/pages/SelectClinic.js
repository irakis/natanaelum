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
                <div className={clsx(styles.selectClinic, "col-lg-8 col-md-12 mx-auto")}>
                    <h1 className="pt-5">Wybór poradni</h1>
                    <p className="pb-5">*Należy potwierdź wybór</p>
                    <CustomButton action={(e)=>handlerEvent(e,'Aktualne szkolenia')} text='Aktualne szkolenia' isActive={clinic}/>

                    <CustomButton action={(e)=>handlerEvent(e,'Poradnia Zdrowia Psychicznego')} text='Poradnia Zdrowia Psychicznego' isActive={clinic}/>

                    <CustomButton action={(e)=>handlerEvent(e,'Poradnia Psychologiczna')} text='Poradnia Psychologiczna' isActive={clinic}/>
                    
                    <CustomButton action={(e)=>handlerEvent(e,'Poradnia Leczenia Uzależnień')} text='Poradnia Leczenia Uzależnień' isActive={clinic}/>

                    <div className="row m-4 p-4 d-grid justify-content-end ">
                        <Link to={clinic}>
                            <Button color='green' text='Potwierdź' imageName=''/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectClinic;