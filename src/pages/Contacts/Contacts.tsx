import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import YandexMap from '../../components/YandexMap/YandexMap';
import { telephone } from '../../constants/contacts';
import { email } from '../../constants/contacts';
import { adressees } from '../../constants/contacts';
import style from './Contacts.module.scss';


const Contacts = () => {
    return (
        <main className={style.main}>
            <BreadCrumbs header='Контакты' />
            <YandexMap />
            <section className={style.contactInfo}>
                <div>
                    <h3>Телефон :</h3>
                    <p>{telephone}</p>
                </div>
                <div>
                    <h3>E-mail :</h3>
                    <p>{email}</p>
                </div>
                <div>
                    <h3>Адреса :</h3>
                    {
                        adressees.map(el => <p>{el}</p>)
                    }
                </div>
            </section>
        </main>
    )
};


export default Contacts;