import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import styles from './FormUniversal.module.scss';
import clsx from 'clsx';
import Button from "../../components/Common/Button";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

import { Form } from 'react-bootstrap';
import { useState, useRef } from "react";

const FormUniversal = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [ formData, setFormData ] = useState({ clinic: id , sureName: '', foreName: '', phone: '', mail: '', date: '', time: ''});
    const captchaRef = useRef(null);

    const sureNameValidity = useRef(null);
    const foreNameValidity = useRef(null);
    const phoneValidity = useRef(null);
    const mailValidity = useRef(null);
    const dateValidity = useRef(null);
    const timeValidity = useRef(null);

    const [validated, setValidated] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = captchaRef.current.getValue();

        console.log('token: ', token);

        captchaRef.current.reset();
        
        if (foreNameValidity.current.checkValidity() &&
            sureNameValidity.current.checkValidity() &&
            phoneValidity.current.checkValidity() && 
            mailValidity.current.checkValidity() &&
            dateValidity.current.checkValidity() &&
            timeValidity.current.checkValidity() === true) {
          e.preventDefault();
          e.stopPropagation();
          setValidated(true);
        } else {
            setValidated(false);
        }
      };
        console.log('validated???', validated)

        const template_id = `${process.env.REACT_APP_TEMPLATE_ID_UNIVERSAL}`;
        const service_id = `${process.env.REACT_APP_SERVICE_ID}`;
        const user_id = `${process.env.REACT_APP_USER_ID}`;
        console.log(template_id);
        console.log('formData', formData);

        useEffect(()=>{
            if(validated === true) {
                emailjs.send(service_id, template_id , formData, user_id)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

                navigate('/clinic/summary');
            } else {
                navigate(`/clinic/select_clinic/formUniversal`)
            }},[validated, formData, service_id, template_id, user_id, navigate]
        )


    return(
        <div className="container d-flex flex-column">
            <div className="row justify-content-center" >
                <div className={clsx(styles.selectClinic, "col-lg-9 col-md-12")}>
                    <h1 className="pt-5">Formularz kontaktowy</h1>
                    <p className="pb-5">*Każde pole wymagane</p>
                    <Form onSubmit={handleSubmit} noValidate validated={validated} className="d-flex mx-auto flex-wrap">
                        <div className="p-1 col-6">
                            <Form.Label className="form-label">Imię</Form.Label>
                            <Form.Control ref={foreNameValidity} type="text" name='foreName' className="form-control" onChange={ e => setFormData({...formData, foreName: e.target.value})} id="exampleInputEmail1" aria-describedby="forenameHelp" required/>
                            <Form.Control.Feedback type="invalid">np. Kowalski</Form.Control.Feedback>
                        </div>
                        <div className="p-1 col-6">
                            <Form.Label className="form-label">Nazwisko</Form.Label>
                            <Form.Control ref={sureNameValidity} required type="text" name='sureName' className="form-control" onChange={ e => setFormData({...formData, sureName: e.target.value})} id="exampleInputEmail1" aria-describedby="sureNameHelp"></Form.Control>
                            <Form.Control.Feedback className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. Kowalski</Form.Control.Feedback>
                        </div>
                        <div className="p-1 col-6">
                            <Form.Label className="form-label">Telefon</Form.Label>
                            <Form.Control ref={phoneValidity} required type="number"name='phone' className="form-control" onChange={ e => setFormData({...formData, phone: e.target.value})} id="exampleInputPhone" aria-describedby="phoneHelp"></Form.Control>
                            <Form.Control.Feedback className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. (+48) 123 456 789</Form.Control.Feedback>
                        </div>
                        <div className="p-1 col-6">
                            <Form.Label className="form-label">Email address</Form.Label>
                            <Form.Control ref={mailValidity} required type="email" name='mail' className="form-control" onChange={ e => setFormData({...formData, mail: e.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp"></Form.Control>
                            <Form.Control.Feedback className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. jan.kowalski@poczta.pl</Form.Control.Feedback>
                        </div>
                        <div className="p-1 col-6">
                            <Form.Group controlId='date'>
                                <Form.Label>Wybierz datę</Form.Label>
                                <Form.Control ref={dateValidity} required name='date' type='date' placeholder='dd/mm/rrrr' onChange={ e => setFormData({...formData, date: e.target.value})} aria-describedby="dateHelper"></Form.Control>
                                <Form.Control.Feedback className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. 10.09.2025</Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="p-1 col-6">
                            <Form.Group controlId='time'>
                                <Form.Label>Wybierz godzinę</Form.Label>
                                <Form.Control ref={timeValidity} required name='time' type='time' placeholder='hh/mm' onChange={ e => setFormData({...formData, time: e.target.value})} aria-describedby="timeHelper"></Form.Control>
                                <Form.Control.Feedback className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. 12:00</Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col-12 mt-5 pt-5 d-flex justify-content-end ">
                            <ReCAPTCHA
                                sitekey={process.env.REACT_APP_SITE_KEY_RECAPTCHA}
                                ref={captchaRef}
                                badge="bottomleft"
                            />
                            <div className="p-2 m-2">
                                <Button color='green' text='Idź dalej' imageName='' action={handleSubmit}/>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default FormUniversal;