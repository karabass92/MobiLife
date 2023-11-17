import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { NavLink } from 'react-router-dom';
import { cartApi } from '../../store/api/cartApi';
import cart from '../../assets/img/Header/cart.svg';
import style from './HeaderCart.module.scss';
import { setAllProducts, selectCart } from '../../store/slices/cartSlice';
import { ICartItem } from '../../interfaces/interfaces';


const HeaderCart = () => {
    
    let count = 0;
    const dispatch = useAppDispatch();

    const { 
        data,
        isError,
        isLoading
    } = cartApi.useGetProductsQuery('');

    useEffect(() => {
        if(!isError && !isLoading) {
            dispatch(setAllProducts(data.map((el:ICartItem )=> el.id)));
        } 
    }, [data, isError, isLoading]);

    count = useAppSelector(selectCart).length;

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
    );
};


export default HeaderCart;