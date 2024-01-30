import React from "react";
import styles from './Button.module.scss';
import clsx from "clsx";

const Button = (data) => {
    return(
            <div className={clsx((data.color === 'green' ? styles.green : styles.gray), 'container')} 
                role="button" type="submit" onClick={data.action}>
                    <div className="row">
                        <div className={clsx("col p-0 m-0 justify-end" ,`${data.imageName !== '' ? null : 'd-none'}`)}>
                            <img src={`${process.env.PUBLIC_URL}/images/icons/${data.imageName}`} alt={data.altText}/>
                        </div>
                        <div className={clsx(styles.green__buttonText, "col-9 m-auto pl-0")}>{data.text}</div>
                    </div>
                    
            </div>
    )
}

export default Button;