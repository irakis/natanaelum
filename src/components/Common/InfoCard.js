import clsx from 'clsx';
import styles from './InfoCard.module.scss'

const InfoCard = (data) => {
    return(
        <div className={clsx(styles.infoCard,'col-lg-3 col-md-12 d-block')}>
            <div className='col-12 pb-3'>
                <img src={data.img} alt={data.alt}/>
            </div>
            <div>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default InfoCard;