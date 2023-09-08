import { useNavigate, useParams } from "react-router-dom";
import styles from './FormPage.module.scss';
import clsx from 'clsx';
import Button from "../components/common/Button";

import { Form } from 'react-bootstrap';
import { useState } from "react";

const FormPage = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [ formData, setFormData ] = useState({ clinic: id , sureName: '', foreName: '', phone: '', mail: '', date: '', time: ''});
    console.log('formData: ',formData);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        navigate(`form/${formData}`);
        
    };

    return(
        <div className="container d-flex flex-column">
            <div className="row" >
                <div className="col-5 d-grid pt-5 pb-5">
                    <div className="row my-auto">
                        <div className={clsx(styles.selectClinicDot, styles.active,"col-1 m-auto")}>
                            <img className={clsx(styles.selectClinicDot__img)} src={`${process.env.PUBLIC_URL}/images/form/Done.svg`} alt='done'/>
                        </div>
                        <div className={clsx(styles.selectClinic,"col-11")}>
                            <p>Krok 1</p>
                            <h2>Wybór poradni</h2>
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
                        <div className={clsx(styles.selectClinicDot, styles.selectClinicDot__inActive,"col-1 m-auto")}></div>
                        <div className={clsx(styles.selectClinic,"col-11")}>
                            <p>Krok 3</p>
                            <h2>Podsumowanie</h2>
                        </div>
                    </div>                                       
                </div>
                <div className={clsx(styles.selectClinic, "col-7")}>
                    <h1 className="pt-5">Formularz kontaktowy</h1>
                    <p className="pb-5">*Każde pole wymagane</p>
                    <Form onSubmit={handleSubmit} className="d-flex flex-wrap">
                        <div className="p-1 col-6">
                            <label className="form-label">Imię</label>
                            <input type="text" className="form-control" onChange={ e => setFormData({...formData, foreName: e.target.value})} id="exampleInputEmail1" aria-describedby="forenameHelp"></input>
                            <div id="forenameHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. Kowalski</div>
                        </div>
                        <div className="p-1 col-6">
                            <label className="form-label">Nazwisko</label>
                            <input type="text" className="form-control" onChange={ e => setFormData({...formData, sureName: e.target.value})} id="exampleInputEmail1" aria-describedby="sureNameHelp"></input>
                            <div id="sureNameHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. Kowalski</div>
                        </div>
                        <div className="p-1 col-6">
                            <label className="form-label">Telefon</label>
                            <input type="number" className="form-control" onChange={ e => setFormData({...formData, phone: e.target.value})} id="exampleInputPhone" aria-describedby="phoneHelp"></input>
                            <div id="phoneHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. (+48) 123 456 789</div>
                        </div>
                        <div className="p-1 col-6">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" onChange={ e => setFormData({...formData, mail: e.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            <div id="emailHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. jan.kowalski@poczta.pl</div>
                        </div>
                        <div className="p-1 col-6">
                            <Form.Group controlId='date'>
                                <Form.Label>Wybierz datę</Form.Label>
                                <Form.Control name='date' type='date' placeholder='dd/mm/rrrr' onChange={ e => setFormData({...formData, date: e.target.value})} aria-describedby="dateHelper"></Form.Control>
                                <div id='dateHelper' className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. 10.09.2025</div>
                            </Form.Group>
                        </div>
                        <div className="p-1 col-6">
                            <Form.Group controlId='time'>
                                <Form.Label>Wybierz godzinę</Form.Label>
                                <Form.Control name='time' type='time' placeholder='hh/mm' onChange={ e => setFormData({...formData, time: e.target.value})} aria-describedby="timeHelper"></Form.Control>
                                <div id='timeHelper' className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. 12:00</div>
                            </Form.Group>
                        </div>
                        <div className="col-12 mt-5 pt-5 d-flex justify-content-end ">
                            <Button color='green' text='Idź dalej'/>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default FormPage;
