import styles from './FormPage.module.scss';
import clsx from 'clsx';

const SummarySite = () => {
    return(
        <div className="container d-flex flex-column">
            <div className="row" >
                <div className="col-lg-5 col-md-12 d-grid pt-5 pb-5">
                    <div className="row my-5">
                        <div className={clsx(styles.selectClinicDot, styles.active,"col-2 m-auto")}>
                            <img className={clsx(styles.selectClinicDot__img)} src={`${process.env.PUBLIC_URL}/images/form/Done.svg`} alt='done'/>
                        </div>
                        <div className={clsx(styles.selectClinic,"col-10")}>
                            <p>Krok 1</p>
                            <h2>Wybór poradni</h2>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className={clsx(styles.selectClinicDot, styles.active, "col-2 m-auto")}>
                            <img className={clsx(styles.selectClinicDot__img)} src={`${process.env.PUBLIC_URL}/images/form/Done.svg`} alt='done'/>
                        </div>
                        <div className={clsx(styles.selectClinic,"col-10")}>
                            <p>Krok 2</p>
                            <h2>Formularz kontaktowy</h2>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className={clsx(styles.selectClinicDot, styles.active,"col-2 m-auto")}>
                            <img className={clsx(styles.selectClinicDot__img)} src={`${process.env.PUBLIC_URL}/images/form/Done.svg`} alt='done'/>
                        </div>
                        <div className={clsx(styles.selectClinic,"col-10")}>
                            <p>Krok 3</p>
                            <h2>Podsumowanie</h2>
                        </div>
                    </div>                                       
                </div>
                <div className={clsx(styles.selectClinic, "col-lg-7 col-md-12 p-5")}>
                    <h1 className="pt-5">Dziękujemy!</h1>
                </div>
            </div>
        </div>
    )
}

export default SummarySite;