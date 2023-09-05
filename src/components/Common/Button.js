import React from "react";
import styles from './Button.module.scss';
import clsx from "clsx";

const Button = props => {
    return(
        <div className="m-0 p-0">
            <button className={clsx((props.color === 'green' ? styles.green : styles.gray),'m-2')} type='button'>{props.text}</button>
        </div>
    )
}

export default Button;