import styles from './Training.module.scss';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

const Training = (data) => {
    return(
            <div className={clsx(styles.training, 'col-12 position-relative')} >
                <img src={data.url} alt={data.alt} className='mx-auto my-auto'/>
                <div className={clsx(styles.title,'col-12 d-flex d-md-block justify-content-between')}>
                    <h2>{data.title}</h2>
                    <h1>{data.status}</h1>
                </div>
                <Link to={data.link}>
                    <p>Czytaj więcej...</p>
                </Link>
            </div>
    )
}

export default Training;