import React from "react";
import styles from './Button.module.scss';
import clsx from "clsx";

const Button = props => {
    return(
            <button className={clsx((props.color === 'green' ? styles.green : styles.gray),'m-2')} type='submit'>{props.text}</button>
    )
}

export default Button;