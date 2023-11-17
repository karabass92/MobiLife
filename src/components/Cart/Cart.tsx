import cart from '../../assets/img/Header/cart.svg';
import { NavLink } from 'react-router-dom';
import style from './Cart.module.scss';
import { cartApi } from '../../store/api/cartApi';


const Cart = () => {

    const { 
        data,
        isError,
        isLoading
     } = cartApi.useGetProductsQuery('');

    let count = 0;
    if(!isError && !isLoading) count = data?.length

    // setAllProducts
    // setSessionid

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