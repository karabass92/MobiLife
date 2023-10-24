import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import style from './Cart.module.scss';


const Cart = () => {
    return (
        <main className={style.main}>
            <BreadCrumbs header='Корзина' />
            Cart
        </main>
    )
};


export default Cart;