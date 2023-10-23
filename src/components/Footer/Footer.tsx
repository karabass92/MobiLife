import Logo from '../Logo/Logo';
import GeneralInfoLinks from '../GeneralInfoLinks/GeneralInfoLinks';
import Socials from '../Socials/Socials';
import style from './Footer.module.scss';


const Footer = () => {
    return (
        <div className={style.container}>
            <footer className={style.main}>
                <Logo />


                <section>
                    <p>Каталог</p>
                    <p>Зарядные устройства</p>
                    <p>Кабели</p>
                    <p>Найшники и гарнитуры</p>
                    <p>Флэш накопители</p>
                    <p>Чехлы, сумки, ремешки</p>
                    <p>Аксессуары для компьютера</p>
                </section>


                <GeneralInfoLinks />
                <Socials /> 
            </footer>
        </div>
    )
};


export default Footer;