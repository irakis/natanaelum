import styles from './OurTrainings.module.scss';
import Subtitle from '../components/Common/Subtitle.js';
import Training from '../components/Common/Training.js';
import clsx from 'clsx';

const OurTrainings = () => {
    return(
        <div className='container'>
            <div className={clsx('row p-3')}>
                <div className='col-12'>
                    <Subtitle
                        title='Szkolenia'
                        head='Nasze Szkolenia'
                        description='Stowarzyszenie Natanaelum oferuje wyjątkowe szkolenia, zapewniające wysoko wyspecjalizowaną edukację w dziedzinie Psychoterapii Uzależnień oraz Instruktorstwa Terapii Uzależnień. Nasze szkolenia są rekomendowane przez renomowane Krajowe Biuro ds. Przeciwdziałania Narkomanii, potwierdzając najwyższą jakość i profesjonalizm.'
                    />
                </div>
            </div>
            <div className={clsx(styles.trainings, 'row d-flex flex-row pt-3 pb-3')}>
                <div className='col-lg-6 col-md-12 my-2'>
                    <Training
                        url={`${process.env.PUBLIC_URL}/images/training/people-2562102_1280.jpg`}
                        alt='Ręce2'
                        title='Krótkoterminowa terapia par i rodzin z
                            problemem uzależnienia”'
                        link='addiction_training_family'
                        status='NABÓR ZAKOŃCZONY'
                    />
                </div>
                <div className='col-lg-6 col-md-12 my-2'>
                    <Training
                        url={`${process.env.PUBLIC_URL}/images/training/Ręce.png`}
                        alt='Ręce'
                        title='Specjalistyczne Szkolenie w Dziedzinie Uzależnienia'
                        link='addiction_training'
                        status='ZAKOŃCZONE'
                    />
                </div>
                <div className='col-lg-6 col-md-12 my-2'>
                    <Training
                            url={`${process.env.PUBLIC_URL}/images/training/Flaga Ukrainy.png`}
                            alt='flaga_ukrainy'
                            title='Szkolenie w zakresie udzielania pomocy psychologicznej i socjalnej Ukraińcom dotkniętych działaniami wojennymi'
                            link='/'
                            status='ZAKOŃCZONE'
                    />
                </div>
            </div>
        </div>

    )

}

export default OurTrainings; 