import cart from '../../assets/img/Header/cart.svg';
import { NavLink } from 'react-router-dom';
import style from './Cart.module.scss';


const Cart = () => {
    return (
        <NavLink to={'/cart'} className={style.cartContainer}>
            <img src={cart} alt="cart" />
        </NavLink>
    )
};


export default Cart;