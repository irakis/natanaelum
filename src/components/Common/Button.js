import React from "react";
import styles from './Button.module.scss';
import clsx from "clsx";

const Button = props => {
    console.log(props, props.color === 'green')

    return(
        <div>
            <button className={clsx((props.color === 'green' ? styles.green : styles.gray),'m-2')} type='button'>{props.text}</button>
        </div>
    )
}

export default Button;