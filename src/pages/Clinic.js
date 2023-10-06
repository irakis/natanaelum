import React from "react";
import Subtitle from "../components/Common/Subtitle.js";
import Button from "../components/Common/Button.js";
import clsx from "clsx";
import styles from './Clinic.module.scss'
import InfoCard from "../components/Common/InfoCard.js";
import { Link } from "react-router-dom";

const Clinic = () => {
    return(
        <div className={clsx(styles.clinic,'container')}>
            <div className="m-2">
                <Subtitle
                    title='Specjalistyczna poradnia'
                    head='Poradnia Leczenia Uzależnień Dzieci, Młodzieży i Dorosłych'
                    description='W naszej Poradni pracujemy nad zmniejszeniem ryzyka rozwoju uzależnień od substancji psychoaktywnych, redukcją szkód i przywracaniu do zdrowia oraz aktywności społecznej i zawodowej osób używających substancji psychoaktywnych i osób uzależnionych. Udzielamy bezpłatnego wsparcia psychologicznego.'
                />
                <div className="row">
                    <Link to='select_clinic'>
                        <Button
                            color='green'
                            text='Zapisz się!'
                        />
                    </Link>
                </div>
                <div className={clsx('row')}>
                    <div className='col-9 d-flex p-4 mx-auto'>
                        <p className={clsx(styles.middle, 'mx-auto')}>Świadczymy darmowe usługi w zakresie:
                        </p>
                    </div>
                </div>
                <div className="row">
                    <InfoCard
                        img={`${process.env.PUBLIC_URL}/images/clinic/Collaboration.png`}
                        alt='Collaboration'
                        description='poradnictwa psychologicznego w temacie uzależnień'
                    />
                    <InfoCard
                        img={`${process.env.PUBLIC_URL}/images/clinic/Ophthalmology.png`}
                        alt='Ophthalmology'
                        description='diagnozy uzależnienia'
                    />
                    <InfoCard
                        img={`${process.env.PUBLIC_URL}/images/clinic/Development Skill.png`}
                        alt='Development Skill'
                        description='motywowania do zman destrukcyjnych zachowań'
                    />
                    <InfoCard
                        img={`${process.env.PUBLIC_URL}/images/clinic/diversity_3.svg`}
                        alt='diversity_3'
                        description='profilaktyki uzależnień(dla rodziców, nauczycieli, szkół, organizacji)'
                    />               
                </div>
                <div className={clsx('row')}>
                    <div className='col-12 d-block p-4 mx-auto'>
                        <p className={clsx(styles.middle, 'mx-auto')}>TERAPIĘ I PORADY PSYCHOLOGICZNE REALIZOWANE SĄ W FORMIE STACJONARNEJ LUB ZDALNEJ / ON-LINE.
                        </p>
                    </div>
                    <div className={clsx(styles.description, 'col-12 d-block p-4 mx-auto')}>
                        <p>Terapię pacjentów w Poradni prowadzą terapeuci w trakcie procesu certyfikacji "Specjalisty Psychoterapii Uzależnień", którzy są 
                            pod nadzorem merytorycznym Specjalisty Psychoterapii Uzależnień i swojego Superwizora.
                        </p>
                        <p></p>
                        <p>Celem Poradni jest zmniejszenie ryzyka rozwoju uzależnień od substancji psychoaktywnych, 
                            szczególnie od narkotyków, wśród mieszkańców woj. lubelskiego, a zwłaszcza wśród młodzieży szkolnej oraz redukcja szkód i przywracanie do zdrowia, aktywności społecznej 
                            i zawodowej osób używających substancji psychoaktywnych i uzależnionych.
                        </p>
                        <p></p>
                        <p>Ze wsparcia Poradni mogą korzystać wszyscy, a zwłaszcza rodzice i młodzież szkolna, 
                            po wcześniejszym kontakcie telefonicznym.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clinic;