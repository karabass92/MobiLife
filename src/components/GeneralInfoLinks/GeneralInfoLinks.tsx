import { NavLink } from "react-router-dom";
import style from './GeneralInfoLinks.module.scss';


const GeneralInfoLinks = () => {
    return (
        <section className={style.main}>
            <p>
                Общее: 
            </p>
            <div className={style.item}>
                <NavLink to={'/guarantee'} className={(linkClass) => linkClass.isActive
                    ? style.active
                    : style.item} >
                    Гарантия
                </NavLink> 
            </div>
            <div className={style.item}>
                <NavLink to={'/about'} className={(linkClass) => linkClass.isActive
                    ? style.active
                    : style.item} >
                    О нас
                </NavLink> 
            </div>
            <div className={style.item}>
                <NavLink to={'/contacts'} className={(linkClass) => linkClass.isActive
                    ? style.active
                    : style.item} >
                    Контакты
                </NavLink> 
            </div>
        </section>
    );
};


export default GeneralInfoLinks;