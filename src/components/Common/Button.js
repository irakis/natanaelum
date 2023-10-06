import React from "react";
import styles from './Button.module.scss';
import clsx from "clsx";

const Button = (data) => {
    return(
            <div className={clsx((data.color === 'green' ? styles.green : styles.gray))} 
                role="button" type="submit" onClick={data.action}>{data.text}</div>
    )
}

export default Button;