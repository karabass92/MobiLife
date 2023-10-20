import { NavLink } from 'react-router-dom';
import phone from '../../assets/img/Header/phone.svg';
import style from './Logo.module.scss';


const Logo = () => {
    return (
        <NavLink to={'/'}>
            <div className={style.main}>
                MOBI LIFE
                <img src={phone} alt="phone" className={style.phone} />
            </div>
        </NavLink>
    );
};


export default Logo;