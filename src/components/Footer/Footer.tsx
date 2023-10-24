import Logo from '../Logo/Logo';
import CatalogLinks from '../CatalogLinks/CatalogLinks';
import GeneralInfoLinks from '../GeneralInfoLinks/GeneralInfoLinks';
import Socials from '../Socials/Socials';
import style from './Footer.module.scss';


const Footer = () => {
    return (
        <div className={style.container}>
            <footer className={style.main}>
                <Logo />
                <CatalogLinks />
                <GeneralInfoLinks />
                <Socials /> 
            </footer>
        </div>
    )
};


export default Footer;