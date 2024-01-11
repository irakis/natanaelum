import clsx from 'clsx';
import styles from './InfoCard.module.scss'

const InfoCard = (data) => {
    return(
        <div className={clsx(styles.infoCard, "card text-dark bg-light mb-3 p-0 col-lg-4 col-md-6 col-sm-12 shadow rounded")}>
            <div className="card-header">
                <img src={data.img} alt={data.alt}/>
            </div>
            <div  className="card-body">
                <h5 className='mt-3 mb-3'>{data.title}</h5>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default InfoCard;