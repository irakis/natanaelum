import { useNavigate, useParams } from "react-router-dom";
import styles from './FormPage.module.scss';
import clsx from 'clsx';
import Button from "../components/Common/Button.js";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

import { Form } from 'react-bootstrap';
import { useState, useRef } from "react";

const FormPage = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [ formData, setFormData ] = useState({ clinic: id , sureName: '', foreName: '', phone: '', mail: '', date: '', time: ''});
    const captchaRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        
        const token = captchaRef.current.getValue();
        console.log('token: ', token);
        captchaRef.current.reset();
        
        await axios.post(`${process.env.REACT_APP_LOCALHOST_URL_POST}`, { formData, token })
        .then(res => console.log(res.data))
        .catch((error) => {
            console.log(error.message);
        })
        


        const template_id = `${process.env.REACT_APP_TEMPALTE_ID}`;
        const service_id = `${process.env.REACT_APP_SERVICE_ID}`;
        const user_id = `${process.env.REACT_APP_USER_ID}`;

        emailjs.send(service_id, template_id , formData, user_id)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });


        navigate('/clinic/summary');
    }

    return(
        <div className="container d-flex flex-column">
            <div className="row" >
                <div className="col-lg-5 col-md-12 d-grid pt-5 pb-5">
                    <div className="row my-auto">
                        <div className={clsx(styles.selectClinicDot, styles.active,"col-2 m-auto")}>
                            <img className={clsx(styles.selectClinicDot__img)} src={`${process.env.PUBLIC_URL}/images/form/Done.svg`} alt='done'/>
                        </div>
                        <div className={clsx(styles.selectClinic,"col-10")}>
                            <p>Krok 1</p>
                            <h2>Wybór poradni</h2>
                        </div>
                    </div>
                    <div className="row my-auto">
                        <div className={clsx(styles.selectClinicDot,"col-2 m-auto")}></div>
                        <div className={clsx(styles.selectClinic,"col-10")}>
                            <p>Krok 2</p>
                            <h2>Formularz kontaktowy</h2>
                        </div>
                    </div>
                    <div className="row my-auto">
                        <div className={clsx(styles.selectClinicDot, styles.selectClinicDot__inActive,"col-2 m-auto")}></div>
                        <div className={clsx(styles.selectClinic,"col-10")}>
                            <p>Krok 3</p>
                            <h2>Podsumowanie</h2>
                        </div>
                    </div>                                       
                </div>
                <div className={clsx(styles.selectClinic, "col-lg-7 col-md-12")}>
                    <h1 className="pt-5">Formularz kontaktowy</h1>
                    <p className="pb-5">*Każde pole wymagane</p>
                    <Form onSubmit={handleSubmit} className="d-flex flex-wrap">
                        <div className="p-1 col-6">
                            <label className="form-label">Imię</label>
                            <input type="text" name='foreName' className="form-control" onChange={ e => setFormData({...formData, foreName: e.target.value})} id="exampleInputEmail1" aria-describedby="forenameHelp" required></input>
                            <div id="forenameHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. Kowalski</div>
                        </div>
                        <div className="p-1 col-6">
                            <label className="form-label">Nazwisko</label>
                            <input required type="text" name='sureName' className="form-control" onChange={ e => setFormData({...formData, sureName: e.target.value})} id="exampleInputEmail1" aria-describedby="sureNameHelp"></input>
                            <div id="sureNameHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. Kowalski</div>
                        </div>
                        <div className="p-1 col-6">
                            <label className="form-label">Telefon</label>
                            <input required type="number"name='phone' className="form-control" onChange={ e => setFormData({...formData, phone: e.target.value})} id="exampleInputPhone" aria-describedby="phoneHelp"></input>
                            <div id="phoneHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. (+48) 123 456 789</div>
                        </div>
                        <div className="p-1 col-6">
                            <label className="form-label">Email address</label>
                            <input required type="email" name='mail' className="form-control" onChange={ e => setFormData({...formData, mail: e.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            <div id="emailHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. jan.kowalski@poczta.pl</div>
                        </div>
                        <div className="p-1 col-6">
                            <Form.Group controlId='date'>
                                <Form.Label>Wybierz datę</Form.Label>
                                <Form.Control required name='date' type='date' placeholder='dd/mm/rrrr' onChange={ e => setFormData({...formData, date: e.target.value})} aria-describedby="dateHelper"></Form.Control>
                                <div id='dateHelper' className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. 10.09.2025</div>
                            </Form.Group>
                        </div>
                        <div className="p-1 col-6">
                            <Form.Group controlId='time'>
                                <Form.Label>Wybierz godzinę</Form.Label>
                                <Form.Control required name='time' type='time' placeholder='hh/mm' onChange={ e => setFormData({...formData, time: e.target.value})} aria-describedby="timeHelper"></Form.Control>
                                <div id='timeHelper' className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. 12:00</div>
                            </Form.Group>
                        </div>
                        <div className="col-12 mt-5 pt-5 d-flex justify-content-end ">
                            <ReCAPTCHA
                                sitekey={process.env.REACT_APP_SITE_KEY_RECAPTCHA}
                                ref={captchaRef}
                                badge="bottomleft"
                            />
                            <Button color='green' text='Idź dalej' action={handleSubmit}/>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default FormPage;
