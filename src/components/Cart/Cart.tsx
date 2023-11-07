import { useAppSelector } from '../../store/hooks';
import { selectCart } from '../../store/slices/cartSlice';
import cart from '../../assets/img/Header/cart.svg';
import { NavLink } from 'react-router-dom';
import style from './Cart.module.scss';


const Cart = () => {

    const count = useAppSelector(selectCart).length;

    return (

        <div className={style.cartContainer}>
            <div className={count ? `${style.productsCount}` : `${style.hidden}`}>
                {
                    count < 10 ? count : `9+`
                }
            </div>
            <NavLink to={'/cart'} className={style.cartContainer}>
                <img src={cart} alt="cart" />
            </NavLink>
        </div>
    )
};


export default Cart;