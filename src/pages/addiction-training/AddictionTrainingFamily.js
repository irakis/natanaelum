import React from "react";
import { data } from './addiction-family-data';
import clsx from "clsx";
import styles from './AddictionTraining.module.scss';
import SingleProject from "../../components/SingleProject";

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
        </div>
    )
}

export default AddictionTrainingFamily;