import React from "react";
import SingleProject from "../../components/SingleProject.js";
import clsx from "clsx";
import styles from './AddictionTraining.module.scss';
import { data } from './addiction-data.js';

const AddictionTraining = () => {

    return(
        <div className={clsx(styles.addiction, "container")}>
            <SingleProject
            status='NABÓR ZAKOŃCZONY'
            period='2021 - 2023 r.'
            title='Specjalistyczne Szkolenie w Dziedzinie Uzależnienia'
            text={data?.addictionString}
            image=''
            contact=''
            showImage='false'
            />
        </div>
    )
}

export default AddictionTraining;