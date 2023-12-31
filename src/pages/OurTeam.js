import React from 'react';
import clsx from 'clsx';
import styles from './OurTeam.module.scss'

const OurTeam = () => {
    return(
        <div className='container'>
                <div className={clsx(styles.ourTeam,'row mt-5 pt-5 justify-content-evenly position-relative')}>
                    <div className='col-lg-6 col-sm-12'>
                        <div className='row d-block'>
                            <div className='col-12 mt-5 mb-5'>
                                <h2>PREZES</h2>
                                <p>Joanna Barbara Chwaszcz</p>
                            </div>
                            <div className='col-12 mt-5 mb-5'>
                                <h2>WICEPREZES</h2>
                                <p>Agnieszka Wyszomirska</p>
                            </div>
                            <div className='col-12 mt-5 mb-5'>
                                <h2>SKARBNIK</h2>
                                <p>Stefania Chwaszcz</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 d-block pr-5'>
                        <h2 className='m-5 text-end'>SPECJALIŚCI</h2>
                        <ul>
                            <li>prof. dr hab. Stanisława Steuden</li>
                            <li>dr hab. Iwona Niewiadomska prof. KUL</li>
                            <li>dr Rafał Bartczuk</li>
                            <li>dr Michał Wiechetek</li>
                            <li>dr Karina Steinbarth-Chmielewska</li>
                            <li>dr Bernadeta Lelonek-Kuleta</li>
                            <li>dr Joanna Chwaszcz</li>
                            <li>dr Weronika Augustynowicz</li>
                            <li>dr Elżbieta Trubiłowicz</li>
                            <li>dr n. med. Aleksandra Radoń</li>
                            <li>dr Anna Przenzak</li>
                            <li>dr Krzysztof Ciepliński</li>
                            <li>dr Robert Modrzyński</li>
                            <li>dr Wiesław Błaszczak</li>
                            <li>dr n. med. Gustaw Kozak</li>
                            <li>dr n. med. Sławomir Jakima</li>
                            <li>lek. med. Zofia Wieczerzak</li>
                            <li>mgr Urszula Grodzka</li>
                            <li>mgr Małgorzata Fatek-Skobel</li>
                            <li>mgr Beata Cybulak</li>
                            <li>mgr Małgorzata Kowalcze</li>
                            <li>mgr Krystyna Pietraszko</li>
                            <li>mgr Maria Tatarska</li>
                            <li>mgr Elżbieta Rachowska</li>
                            <li>mgr Izabela Sawicka</li>
                            <li>mgr Danuta Wiewióra</li>
                            <li>mgr Lidia Woć</li>
                            <li>mgr Iwona Mialik</li>
                            <li>mgr Mira Olszewska</li>
                        </ul>
                    </div>
                    <div className={clsx(styles.butterflyParent,'col-12')}>
                    <img className={clsx(styles.butterflyBlue1, ' z-n1')} src={`${process.env.PUBLIC_URL}/images/ourTeam/krzysztof-niewolny-f8JYQPq45uI-unsplash 1B.png`} alt='krzysztof-niewolny-f8JYQPq45uI-unsplash 1'/>
                    </div>
                </div>
        </div>
    )
}

export default OurTeam;