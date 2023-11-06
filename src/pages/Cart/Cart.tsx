import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import DeliveryBanner from "../../components/DeliveryBanner/DeliveryBanner";
import ProductsInCartTable from "../../components/ProductsInCartTable/ProductsInCartTable";
import style from './Cart.module.scss';


const Cart = () => {
    return (
        <main className={style.main}>
            <BreadCrumbs header='Корзина' />
            <DeliveryBanner text="С условиями доставки Вы можете ознакомиться по данной ссылке!" />
            <ProductsInCartTable />

            <section>
                блок с total price или кнопкой перейти к оформлению заказа (в скобках количество item)
            </section>
        </main>
    )
};


export default Cart;