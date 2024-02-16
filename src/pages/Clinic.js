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
                    title=''
                    head='Poradnie'
                    description='Zapraszamy Państwa do zapoznania się z ofertą naszych poradni. Świadczymy wsparcie psychologiczne, psychoterapeutyczne, psychoterapię uzależnień. Pracujemy także z osobami bliskimi osób uzależnionych. Realizujemy działania profilaktyczne w zakresie zdrowia psychicznego, profilaktyki uzależnień, wzmocnienia kompetencji osobistych i społecznych. Oferujemy doradztwo wyboru szkoły/profilu klasy/kierunku studiów tak, aby jak najlepiej dopasować ścieżkę kariery zawodowej do cech osobowości i potrzeb rynku pracy. '
                />
                <Subtitle
                    description='W każdej poradni świadczymy wsparcie indywidualne dla dzieci, młodzieży i osób dorosłych, pracujemy z parami i rodzicami. W ramach dodatkowych programów realizujemy warsztaty doskonalące kompetencje osobiste i psychospołeczne.'
                />
                <div className="row d-flex justify-content-between">
                    <div className={clsx(styles.clinic__bordered, "col-4 text-center m-1 p-4")}><p className="text-center m-0">Poradnia Leczenia Uzależnień</p></div>
                    <div className={clsx(styles.clinic__bordered, "col-3 text-center m-1 p-4")}><p className="text-center m-0">Poradnia Psychologiczna</p></div>
                    <div className={clsx(styles.clinic__bordered, "col-4 text-center m-1 p-4")}><p className="text-center m-0">Poradnia Zdrowia Psychicznego</p></div>
                    <Link to='select_clinic' className="mt-4 pt-4">
                        <Button
                            color='green'
                            text='Zapisz się!'
                            imageName=''
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
                    <div className={clsx('col-12 d-block p-4 mx-auto')}>
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