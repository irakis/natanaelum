import { Link } from 'react-router-dom';
import styles from './Card.module.scss';
import clsx from 'clsx';

const Card = (data) => {
    return(
        <div className={clsx(styles.card)}>
            <div className={clsx(styles.imgParent, 'col-12 w-100')}>
                <img src={data.img} alt={data.alt}/>
            </div>
            <h2 className='mb-4'>{data.header}</h2>
            <p className={styles.cardGreen}>{data.status}</p>
            <p>{data.period}</p>
            <p></p>
            <p className='mb-1'>{data.description}</p>
            <Link to={`/${data.link}`}>
                <p className={clsx(styles.colorGreen)}>Czytaj więcej...</p>
            </Link>
        </div>
    )
}

export default Card;