import instagram from '../../assets/img/Footer/instagram.svg'
import tiktok from '../../assets/img/Footer/tiktok.svg'
import whatsapp from '../../assets/img/Footer/whatsapp.svg'
import telegram from '../../assets/img/Footer/telegram.svg'
import style from './Socials.module.scss';


const Socials = () => {
    return (
        <section className={style.main}>
            <p>
                +7 777 777 77 77
            </p>
            <p>
                somemail@gmail.com
            </p>
            <div className={style.socialsBlock}>
                <img src={instagram} alt="instagram" />
                <img src={tiktok} alt="tiktok" />
                <img src={whatsapp} alt="whatsapp" />
                <img src={telegram} alt="telegram" />    
            </div>
        </section>
    );
};


export default Socials;