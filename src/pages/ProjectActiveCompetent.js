import SingleProject from '../components/SingleProject.js';

const ProjectActiveCompetent = () => {

    const string =
        `
        <p>Projekt jest realizowany w okresie od dnia 1 marca 2022 r. do dnia 30 czerwca 2023 r.</p>
        <p></p>
        <p>Celem projektu jest aktywizacja zawodowa oraz zwiększenie poziomu zatrudnienia osób biernych zawodowo lub bezrobotnych, zamieszkujących na terenie województwa lubelskiego, posiadających orzeczenie o niepełnosprawności i/lub doświadczających trudności psychicznych, w różnym stopniu nasilenia. W projekcie mogą wziąć udział także osoby bierne zawodowo z powodu choroby, które w ciągu ostatnich dwóch lat przebywały na zwolnieniu lekarskim łącznie 182 dni.</p>
        <p></p>
        <p>Uczestnicy projektu otrzymają kompleksowe i zindywidualizowane wsparcie w procesie zatrudnienia.</p>
        <p></p>
        <p>Dla każdego Uczestnika zostanie opracowana indywidualna diagnoza potrzeb oraz Indywidualny Plan Działania IPD.</p>
        <p></p>
        <p>W projekcie tym Uczestnicy nie muszą realizować z góry zaplanowanych form wsparcia. Wsparcie jest uzgadniane z Uczestnikiem i jest realną odpowiedzią na jego potrzeby.</p>
        <p></p>
        <p>Przykładowe formy wsparcia:</p>
        <ul>
            <li>Poradnictwo psychologiczne i/lub psychoterapia</li>
            <li>Doradztwo zawodowe i/lub pośrednictwo pracy</li>
            <li>Warsztaty kompetencyjne</li>
            <li>Mentoring/coaching</li>
            <li>Doradztwo biznesowe</li>
            <li>Autoprezentacja i promocja własnej marki</li>
            <li>Szkolenia zawodowe</li>
            <li>Praktyki/staże</li>
        </ul>
        <p></p>
        <p>Dokumenty wymagane od kandydatów/tek w procesie rekrutacji:</p>
        <ul>
            <li>Formularz zgłoszeniowy (dostępny w biurze projektu);</li>
            <li>Zaświadczenie pozyskane przez uczestnika projektu z Zakładu Ubezpieczeń Społecznych o braku odprowadzenia składek na ubezpieczenie społeczne lub zdrowotne wg stanu na dzień rozpoczęcia udziału w projekcie (ważne 30 dni) LUB zaświadczenie z urzędu pracy o posiadaniu statusu osoby bezrobotnej w dniu jego wydania (ważne przez okres 30 dni) (w przypadku osób bezrobotnych zarejestrowanych w powiatowym urzędzie pracy);</li>
            <li>Orzeczenie o niepełnosprawności LUB inny dokument poświadczający stan zdrowia, np. diagnoza/opinia/zaświadczenie lekarza psychiatry (w przypadku osób z zaburzeniami psychicznymi w rozumieniu ustawy z dnia 19 sierpnia 1994 r. o ochronie zdrowia psychicznego (Dz. U. z 2016 r. poz. 546), art. 3 pkt.</li>
            <li>Osoby bierne zawodowo z powodu choroby, które w ciągu ostatnich dwóch lat przebywały na zwolnieniu lekarskim łącznie 182 dni, przedkładają dokumenty poświadczające okres zwolnienia lekarskiego LUB zaświadczenie lekarskie potwierdzające okres choroby (przez okres co najmniej 182 dni w ciągu 2 lat przed rozpoczęciem udziału w projekcie</li>
        </ul>
    `;

    const stringBottom = `
        <p>Uwaga!</p>
        <p>Osoby z niepełnosprawnością fizyczną prosimy o kontakt telefoniczny, istnieje możliwość dojazdu do miejsca zamieszkania Uczestnika w celu uzupełnienia dokumentów rekrutacyjnych.</p>
        <p></p>
        <p>Biuro Projektu<br>
        Stowarzyszenie Natanaelum<br>
        Ul. Bohaterów Monte Cassino 16</br>
        20-808 Lublin</p>
        <p></p>
        <p>Koordynator projektu: Karolina Szymańska, telefon: 604 812 922</br>
        e-mail: <u>projekt.natanaelum@gmail.com</u></p>
    `;

    return(
        <SingleProject
            status='AKTYWNY'
            period='1 marca - 30 czerwca 2023 r.'
            title='Aktywni i kompetentni na lubelskim rynku pracy'
            text={string}
            image={`${process.env.PUBLIC_URL}/images/projects/plakat002 2.png`}
            contact={stringBottom}
            showImage='true'
        />
    )
}

export default ProjectActiveCompetent;