import styles from './SingleProject.module.scss';
import clsx from 'clsx';
import Parser from 'react-html-parser';
import { Link } from 'react-router-dom';

const SingleProject = (data) => {
    return(
        <div className={clsx(styles.singleProject,'container')}>
            <div className='row pb-5'>
                <div className={clsx(styles.header, 'col-12')}>
                    <h1 className='m-4'>{data.status}</h1>
                    <p>{data.period}</p>
                    <h2>{data.title}</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    {Parser(data.text)}
                </div>
            </div>
            <div className='row'>
                <div className={clsx(data.showImage === 'true' ? styles.visible : styles.notVisible,'col-12')}>
                    <img src={data.image} alt={data.alt}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    {Parser(data.contact)}
                </div>
            </div>
        </div>
    )
}

export default SingleProject;