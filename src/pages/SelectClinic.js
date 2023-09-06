import React from "react";
import Button from "../components/common/Button";
import styles from './SelectClinic.module.scss';
import clsx from 'clsx';
import { Link } from "react-router-dom";

const SelectClinic = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-6 d-grid pt-5 pb-5">
                    <div className="row my-auto">
                        <div className={clsx(styles.selectClinicDot,"col-1 m-auto")}></div>
                        <div className={clsx(styles.selectClinic,"col-11")}>
                            <p>Krok 1</p>
                            <h2>Wybór poradni1</h2>
                        </div>
                    </div>
                    <div className="row my-auto">
                        <div className={clsx(styles.selectClinicDot,"col-1 m-auto")}></div>
                        <div className={clsx(styles.selectClinic,"col-11")}>
                            <p>Krok 2</p>
                            <h2>Formularz kontaktowy</h2>
                        </div>
                    </div>
                    <div className="row my-auto">
                        <div className={clsx(styles.selectClinicDot,"col-1 m-auto")}></div>
                        <div className={clsx(styles.selectClinic,"col-11")}>
                            <p>Krok 3</p>
                            <h2>Podsumowanie</h2>
                        </div>
                    </div>                                       
                </div>
                <div className={clsx(styles.selectClinic, "col-6")}>
                    <h1 className="pt-5">Wybór poradni</h1>
                    <p className="pb-5">*Należy potwierdź wybór</p>
                    <div className={clsx(styles.selectClinicRow, "row my-auto d-flex mb-3")}>
                        <div className={clsx(styles.selectClinicDotSmall, "col-1 m-auto")}></div>
                        <div className="col-11">
                            <h2 className="my-auto">Poradnia Zdrowia Psychicznego </h2>
                            <p className="my-auto">Dzieci,  Młodzieży i Dorosłych</p>
                        </div>
                    </div>
                    <div className={clsx(styles.selectClinicRow, "row my-auto d-flex mb-3")}>
                        <div className={clsx(styles.selectClinicDotSmall, "col-1 m-auto")}></div>
                        <div className="col-11">
                            <h2 className="my-auto">Poradnia Psychologiczna</h2>
                            <p className="my-auto">Dzieci,  Młodzieży i Dorosłych</p>
                        </div>
                    </div>
                    <div className={clsx(styles.selectClinicRow, "row my-auto d-flex")}>
                        <div className={clsx(styles.selectClinicDotSmall, "col-1 m-auto")}></div>
                        <div className="col-11">
                            <h2 className="my-auto">Poradnia Leczenia Uzależnień</h2>
                            <p className="my-auto">Dzieci,  Młodzieży i Dorosłych</p>
                        </div>
                    </div>
                    <div className="row mt-5 pt-5 d-grid justify-content-end ">
                        <Link className='w-50 d-grid' to='form'>
                            <Button color='green' text='Potwierdź'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectClinic;