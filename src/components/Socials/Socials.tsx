import instagram from '../../assets/img/Footer/instagram.svg'
import tiktok from '../../assets/img/Footer/tiktok.svg'
import whatsapp from '../../assets/img/Footer/whatsapp.svg'
import telegram from '../../assets/img/Footer/telegram.svg'
import { telephone } from '../../constants/contacts'
import { email } from '../../constants/contacts'
import { instagramLink } from '../../constants/contacts'
import style from './Socials.module.scss';


const Socials = () => {
    return (
        <section className={style.main}>
            <p>{telephone}</p>
            <p>{email}</p>
            <div className={style.socialsBlock}>
                <a href={instagramLink}>
                    <img src={instagram} alt="instagram" />
                </a>
                <a href={instagramLink}>
                    <img src={tiktok} alt="tiktok" />
                </a>
                <a href={instagramLink}>
                    <img src={whatsapp} alt="whatsapp" />
                </a>
                <a href={instagramLink}>
                    <img src={telegram} alt="telegram" />
                </a> 
            </div>
        </section>
    );
};


export default Socials;