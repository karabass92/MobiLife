import { NavLink } from 'react-router-dom';
import { Fragment } from 'react';
import search from '../../assets/img/Header/search.svg';
import style from './BurgerMenu.module.scss';


type Props = {
    burgerIsOpen: boolean,
    setBurgerIsOpen: Function,
};


const BurgerMenu = ({
    burgerIsOpen,
    setBurgerIsOpen,
}: Props) => {
    return (
        <Fragment>
            <div 
                onClick={() => setBurgerIsOpen(!burgerIsOpen)}
                className={burgerIsOpen ? `${style.burgerOpened}` : `${style.burgerClosed}`}>
                <span></span>
            </div>
            <div className={burgerIsOpen ? `${style.burgerNavOpened}` : `${style.burgerNavClosed}`}>
                <div className={style.item}
                    onClick={() => setBurgerIsOpen(false)} >
                    <NavLink to='/' className={(linkClass) => linkClass.isActive
                            ? style.active
                            : style.item}>
                        Главная
                    </NavLink>
                </div>
                <div className={style.item}
                    onClick={() => setBurgerIsOpen(false)} >
                    <NavLink to='/shop' className={(linkClass) => linkClass.isActive
                            ? style.active
                            : style.item}>
                        Магазин
                    </NavLink>
                </div>
                <div className={style.item}
                    onClick={() => setBurgerIsOpen(false)} >
                    <NavLink to='/guarantee' className={(linkClass) => linkClass.isActive
                            ? style.active
                            : style.item}>
                        Гарантия
                    </NavLink>
                </div>
                <div className={style.item}
                    onClick={() => setBurgerIsOpen(false)} >
                    <NavLink to='/about' className={(linkClass) => linkClass.isActive
                            ? style.active
                            : style.item}>
                        О нас
                    </NavLink>
                </div>                
                <div className={style.item}
                    onClick={() => setBurgerIsOpen(false)} >
                    <NavLink to='/contacts' className={(linkClass) => linkClass.isActive
                            ? style.active
                            : style.item}>
                        Контакты
                    </NavLink>
                </div>
                <div className={style.searchBlock}>
                    <img src={search} alt="" />
                    <input type="text" placeholder='Поиск' />
                </div>
            </div>
        </Fragment>
    );
};


export default BurgerMenu;