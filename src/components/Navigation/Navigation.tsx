import { NavLink } from "react-router-dom";
import style from './Navigation.module.scss';


const Navigation = () => {
    return (
        <nav className={style.navigation}>
            <div className={style.item}>
                <NavLink to='/' className={(linkClass) => linkClass.isActive
                        ? style.active
                        : style.item}>
                    Главная
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/shop' className={(linkClass) => linkClass.isActive
                        ? style.active
                        : style.item}>
                    Магазин
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/guarantee' className={(linkClass) => linkClass.isActive
                        ? style.active
                        : style.item}>
                    Гарантия
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/about' className={(linkClass) => linkClass.isActive
                        ? style.active
                        : style.item}>
                    О нас
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/contacts' className={(linkClass) => linkClass.isActive
                        ? style.active
                        : style.item}>
                    Контакты
                </NavLink>
            </div>
        </nav>
    );
};


export default Navigation;