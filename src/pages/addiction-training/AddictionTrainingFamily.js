import React from "react";
import { data } from './addiction-family-data';
import clsx from "clsx";
import styles from './AddictionTraining.module.scss';
import SingleProject from "../../components/SingleProject";
import { Link } from "react-router-dom";

const AddictionTrainingFamily = () => {

    return(
        <div className={clsx(styles.addiction, "container")}>
            <SingleProject
                status={data.status}
                period={data.period}
                title={data.title}
                text={data?.addictionString}
                image=''
                contact=''
                showImage='false'
            />
            <p className="p-2 m-1">Zgłoszenie: za pomocą <b><Link className={clsx(styles.addiction__blinking)} to='/clinic/select_clinic/Aktualne%20szkolenia'>formularza</Link></b> na stronie www.natanaelum.pl</p>
        </div>
    )
}

export default AddictionTrainingFamily;