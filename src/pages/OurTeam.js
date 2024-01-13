import React from 'react';
import clsx from 'clsx';
import styles from './OurTeam.module.scss';

const OurTeam = () => {

    const prevHandle = () => {
        const activeIndicator = document.querySelector("button.active")
        const activeIndicatorId = activeIndicator.getAttribute('data-slide-to');
        const lastIndicatorId = document.querySelector('button[data-slide-to="2"]');
        const allSlides = document.querySelectorAll('.carousel-item');
        const activeSlide = document.querySelector('.carousel-item.active');

        if (activeIndicatorId === '0') {
            activeIndicator.classList.remove('active');
            lastIndicatorId.classList.add('active');
            activeSlide.classList.remove('active');
            allSlides[2].classList.add('active')
        } else {

            const nextIndicatorId = Number(activeIndicatorId)-1;
            const nextIndicator = document.querySelector(`button[data-slide-to="${nextIndicatorId}"]`);
            activeIndicator.classList.remove('active');
            nextIndicator.classList.add('active');
            activeSlide.classList.remove('active');
            allSlides[nextIndicatorId].classList.add('active');
        }
    }

    const nextHandle = () => {
        const activeIndicator = document.querySelector("button.active")
        const activeIndicatorId = activeIndicator.getAttribute('data-slide-to');
        const firstIndicatorId = document.querySelector('button[data-slide-to="0"]');
        const allSlides = document.querySelectorAll('.carousel-item');
        const activeSlide = document.querySelector('.carousel-item.active');

        if (activeIndicatorId === '2') {
            activeIndicator.classList.remove('active');
            firstIndicatorId.classList.add('active');
            activeSlide.classList.remove('active');
            allSlides[0].classList.add('active')
        } else {

            const nextIndicatorId = Number(activeIndicatorId)+1;
            const nextIndicator = document.querySelector(`button[data-slide-to="${nextIndicatorId}"]`);
            activeIndicator.classList.remove('active');
            nextIndicator.classList.add('active');
            activeSlide.classList.remove('active');
            allSlides[nextIndicatorId].classList.add('active');
        }
    }

    const members = [
        'prof. dr hab. Stanisława Steuden',
        'dr hab. Iwona Niewiadomska prof. KUL',
        'dr Rafał Bartczuk',
        'dr Michał Wiechetek',
        'dr Karina Steinbarth-Chmielewska',
        'dr Bernadeta Lelonek-Kuleta',
        'dr Joanna Chwaszcz',
        'dr Weronika Augustynowicz',
        'dr Elżbieta Trubiłowicz',
        'dr n. med. Aleksandra Radoń',
        'dr Anna Przenzak',
        'dr Krzysztof Ciepliński',
        'dr Robert Modrzyński',
        'dr Wiesław Błaszczak',
        'dr n. med. Gustaw Kozak',
        'dr n. med. Sławomir Jakima',
        'lek. med. Zofia Wieczerzak',
        'mgr Urszula Grodzka',
        'mgr Małgorzata Fatek-Skobel',
        'mgr Beata Cybulak',
        'mgr Małgorzata Kowalcze',
        'mgr Krystyna Pietraszko',
        'mgr Maria Tatarska',
        'mgr Elżbieta Rachowska',
        'mgr Izabela Sawicka',
        'mgr Danuta Wiewióra',
        'mgr Lidia Woć',
        'mgr Iwona Mialik',
        'mgr Mira Olszewska',
    ]

    return(
        <div className='container'>
                <div className={clsx(styles.ourTeam, 'row mt-2 pt-2')}>
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type='button' data-bs-target="#carouselExampleIndicators" data-slide-to="0"/>
                            <button type='button' data-bs-target="#carouselExampleIndicators" data-slide-to="1" className="active"/>
                            <button type='button' data-bs-target="#carouselExampleIndicators" data-slide-to="2"/>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item">
                                <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/images/avatar2.png`} alt="First slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Prezes</h5>
                                    dr hab. Joanna Barbara Chwaszcz
                                </div>
                            </div>
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/images/avatar3.png`} alt="Second slide"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Wice prezes</h5>
                                    mgr Agnieszka Wyszomirska
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/images/avatar4.png`} alt="Third slide"/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Skarbnik</h5>
                                        Stefania Chwaszcz
                                    </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" onClick={prevHandle} data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" onClick={nextHandle} data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        </div>
                    </div>
                <div className={clsx(styles.ourTeam, 'row mt-2 pt-2')}>
                    <div className='col-12'>
                         
                        <div className={clsx(styles.rowBackground,'row')}>
                            <div className='col-9 d-flex p-4 mx-auto'>
                                <p className={clsx(styles.middle, 'mx-auto')}>
                                    SPECJALIŚCI
                                </p>
                            </div>
                        </div>

                        <div className='row mt-4 d-flex flex-wrap'>
                            {members.map(member => {
                                return(
                                    <div className='col-3' key={member}>
                                        <div className="card mb-3">
                                            <img className="card-img-top" src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="Card cap"/>
                                            <div className="card-body">
                                                <p className="card-text">{member}</p>
                                            </div>
                                        </div>
                                </div>
                                )
                            })}  
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default OurTeam;