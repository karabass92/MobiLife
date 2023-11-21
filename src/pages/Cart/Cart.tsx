import { useAppSelector } from "../../store/hooks";
import { selectCart } from "../../store/slices/cartSlice";

import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import DeliveryBanner from "../../components/DeliveryBanner/DeliveryBanner";
import ProductsInCartTable from "../../components/ProductsInCartTable/ProductsInCartTable";
import style from './Cart.module.scss';
import { cartApi } from "../../store/api/cartApi";


const Cart = () => {

    return (
        <main className={style.main}>
            <BreadCrumbs 
                header='Корзина' />
            <DeliveryBanner 
                text="С условиями доставки Вы можете ознакомиться по данной ссылке!" />
            <ProductsInCartTable />
        </main>
    );
};


export default Cart;