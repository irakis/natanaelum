import { useNavigate, useParams } from "react-router-dom";
import styles from './FormPage.module.scss';
import clsx from 'clsx';
import Button from "../../components/Common/Button.js";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import {voivodship} from './form-data.js';
import {criteria, timeGroup } from './form-data.js';
import { useState, useRef, useEffect } from "react";

const FormPage = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [ formData, setFormData ] = useState({ clinic: id , sureName: '', foreName: '', city: '', 
        street: '',zipCode:'',voivodship: '', houseNumber: '', flatNumber:'',phone: '', mail: '', criteria: '', timeGroup: '', textArea: '', checked: 'false'});
    
    const captchaRef = useRef(null);
    const [validated, setValidated] = useState(false);
    const [serverVerification, setServerVerification] = useState('');
    const reportFormValidation = [];
        
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
        
        if (token !== '') {
        const formInputs = document.querySelectorAll('input');
           
        for (let i of formInputs) {
            let checkInput = i.checkValidity();
                if (checkInput === false) {
                    reportFormValidation.push(false);
                    break;
                } else {
                    console.log(validated);
                    setValidated(true);
                }
        };

        if(reportFormValidation.length === 0){ console.log('report empty!!!'); setServerVerification('verification positive')};

        } else {
            navigate(`/clinic/select_clinic/${id}`);
        }}
        console.log(serverVerification)
        useEffect(()=>{
            if (serverVerification === 'verification positive' && serverVerification !== false) {
                const template_id = `${process.env.REACT_APP_TEMPALTE_ID}`;
                const service_id = `${process.env.REACT_APP_SERVICE_ID}`;
                const user_id = `${process.env.REACT_APP_USER_ID}`;
                
                emailjs.send(service_id, template_id , formData, user_id)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                navigate('/clinic/summary')
            } else {
                navigate(`/clinic/select_clinic/${id}`);
        }}, [serverVerification, formData, id, navigate])

    return(
        <div className="container d-flex flex-column">
            <div className="row" >
                <div className={clsx(styles.selectClinic, "col-lg-8 col-md-12 mx-auto")}>
                    <h1 className="pt-5">Nabór zakończony</h1>
                    <p className="pb-5">*Każde pole wymagane</p>
                    <form onSubmit={handleSubmit}  noValidate className="d-flex flex-wrap was-validated">
                        <div className="p-1 col-6">
                            <label className="form-label">Imię</label>
                            <input type="text" name='foreName' className="form-control" onChange={e => setFormData({...formData, foreName: e.target.value})} id="exampleInputEmail1" aria-describedby="forenameHelp" required></input>
                            <div id="forenameHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. Jan</div>
                        </div>
                        <div className="p-1 col-6">
                            <label className="form-label">Nazwisko</label>
                            <input type="text" name='sureName' className="form-control" onChange={ e => setFormData({...formData, sureName: e.target.value})} id="exampleInputEmail1" aria-describedby="sureNameHelp" required></input>
                            <div id="sureNameHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. Kowalski</div>
                        </div>
                        <div className="row m-0">
                            <div className="p-1 col-6">
                                <label className="form-label">Ulica</label>
                                <input type="text" name='street' className="form-control" onChange={ e => setFormData({...formData, street: e.target.value})} id="exampleInputEmail1" aria-describedby="sureNameHelp" required></input>
                                <div id="sureNameHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. Krótka</div>
                            </div>
                            <div className="p-1 col-3">
                                <label className="form-label">Nr domu</label>
                                <input type="number" name='houseNumber' className="form-control" onChange={ e => setFormData({...formData, houseNumber: e.target.value})} id="exampleInputEmail1" aria-describedby="sureNameHelp" required></input>
                                <div id="sureNameHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. 3</div>
                            </div>
                            <div className="p-1 col-3">
                                <label className="form-label">Nr m.</label>
                                <input type="number" name='flatNumber' className="form-control" onChange={ e => setFormData({...formData, flatNumber: e.target.value})} id="exampleInputEmail1" aria-describedby="sureNameHelp"></input>
                                <div id="sureNameHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. 11</div>
                            </div>
                        </div>
                        <div className="row m-0">
                            <div className="p-1 col-2">
                                <label className="form-label">Kod pocztowy</label>
                                <input type="text" name='zipCode' className="form-control" onChange={ e => setFormData({...formData, zipCode: e.target.value})} id="exampleInputEmail1" aria-describedby="sureNameHelp" required></input>
                                <div id="sureNameHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. 20-001</div>
                            </div>
                            <div className="p-1 col-4">
                                <label className="form-label">Miejscowość</label>
                                <input type="text" name='city' className="form-control" onChange={ e => setFormData({...formData, city: e.target.value})} id="exampleInputEmail1" aria-describedby="sureNameHelp" required></input>
                                <div id="sureNameHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. Lublin</div>
                            </div>
                            <div className="p-1 col-4">
                                <label className="form-label">Województwo</label>
                                <select className="form-select" label="Województwo" onChange={e => setFormData({...formData, voivodship: e.target.value})} required>
                                    <option selected disabled></option>
                                    {voivodship.map((viovod)=> <option key={viovod} value={`${viovod}`}>{viovod}</option>)}
                                </select>
                                <div id="sureNameHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. Mazowieckie</div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-between m-0">
                            <div className="p-1 col-5">
                                <label className="form-label">Kryteria kwalifikujące na szkolenie</label>
                                <select className="form-select" label="Województwo" onChange={e => setFormData({...formData, criteria: e.target.value})} required>
                                    <option selected disabled></option>
                                    {criteria.map((crit)=> <option key={crit} value={`${crit}`}>{crit}</option>)}
                                </select>
                                <div id="sureNameHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>Wybierz opcję</div>
                            </div>
                            <div className="col-6 form-check my-auto">
                                <input className="form-check-input" type="checkbox" value={false} id="defaultCheck1" onChange={e=> setFormData({...formData, checked: true})}/>
                                <label className=" form-check-label" for="defaultCheck1">
                                Osoby udzielająca świadczeń zdrowotnych w placówkach leczenia uzależnień 
                                (nieodpłatne świadczenia dla klientów) 
                                </label>
                                </div>
                        </div>
                        <div className="row d-flex m-0">
                            <div className="p-1 col-10">
                                <label className="form-label">Preferowana grupa do wyboru </label>
                                <select className="form-select" label="tmeGroup" onChange={e => setFormData({...formData, timeGroup: e.target.value})} required>
                                    <option selected disabled></option>
                                    {timeGroup.map((group)=> <option key={group} value={`${group}`}>{group}</option>)}
                                </select>
                                <div id="sureNameHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>Wybierz grupę</div>
                            </div>
                            <div className="p-1 col-10">
                                <textarea className="form-control" id="textAreaExample1" onChange={e => setFormData({...formData, textArea: e.target.value})} rows="2"></textarea>
                                <label className="form-label" for="textAreaExample">Uwagi</label>
                            </div>     
                        </div>
                        <div className="p-1 col-6">
                            <label className="form-label">Telefon</label>
                            <input type="number"name='phone' className="form-control" onChange={ e => setFormData({...formData, phone: e.target.value})} id="exampleInputPhone" aria-describedby="phoneHelp" required></input>
                            <div id="phoneHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. 123 456 789</div>
                        </div>
                        <div className="p-1 col-6">
                            <label className="form-label">Email address</label>
                            <input type="email" name='mail' className="form-control" onChange={ e => setFormData({...formData, mail: e.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp" required></input>
                            <div id="emailHelp" className={clsx(styles.selectClinic, styles.selectClinic__green, "form-text")}>np. jan.kowalski@poczta.pl</div>
                        </div>      
                        <div className="d-none col-12 m-4 pt-4 d-flex justify-content-end ">
                            <div className={clsx(styles.selectClinic__recaptcha)}>
                                <ReCAPTCHA
                                    sitekey={process.env.REACT_APP_SITE_KEY_RECAPTCHA}
                                    ref={captchaRef}
                                    badge="bottomleft"
                                />
                            </div>
                            <Button color='green' text='Idź dalej' action={handleSubmit} imageName=''/>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default FormPage;
