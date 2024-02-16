import styles from './Subtitle.module.scss';
import clsx from 'clsx';

const Subtitle = (data) => {
    return(
        <div className={clsx('row d-flex', styles.subtitle)}>
            <div className={clsx(styles.butterflyParent,'col-lg-12 col-md-12 p-0')}>
                {(data.title) ?(
                <div className='col-12 mt-4 mb-4 d-flex justify-content-start'>
                            <h2 className={styles.smallGreen}>{data.title}</h2>
                </div>) : null}
                {(data.head) ? (
                <div className={clsx(styles.main, 'col-12 mb-3 mt-3 d-flex justify-content-start')}>
                    <h2>{data.head}</h2>
                </div>): null}
                <div className={clsx(styles.description,'col-12 mt-4 d-flex')}>
                   {data.description}                    
                </div>
            </div> 
        </div>
    )
}

export default Subtitle;