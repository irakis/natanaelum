import { useParams } from "react-router-dom";
import styles from './Form.module.scss';
import clsx from 'clsx';
import Button from "../components/common/Button";

const Form = () => {

    const { id } = useParams();
    console.log('id???:', id);

    return(
        <div className="container d-flex flex-column">
            <div className="row" >
                <div className="col-6 d-grid pt-5 pb-5">
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
                <div className={clsx(styles.selectClinic, "col-6")}>
                    <h1 className="pt-5">Formularz kontaktowy</h1>
                    <p className="pb-5">*Każde pole wymagane</p>

                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nazwisko</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            <div id="emailHelp" className="form-text">np. Kowalski</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nazwisko</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            <div id="emailHelp" className="form-text">np. Kowalski</div>
                        </div>
                        <div className="mb-3">
                            <label className="outlined">Telefon</label>
                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            <div id="emailHelp" className="form-text">np. (+48) 123 456 789</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            <div id="emailHelp" className="form-text">np. jan.kowalski@poczta.pl</div>
                        </div>

                        <div className="row mt-5 pt-5 d-grid justify-content-end ">
                            <Button type='submit' color='green' text='Idź dalej'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;
