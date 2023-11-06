import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import DeliveryBanner from "../../components/DeliveryBanner/DeliveryBanner";
import style from './Cart.module.scss';


const Cart = () => {
    return (
        <main className={style.main}>
            <BreadCrumbs header='Корзина' />
            <DeliveryBanner text="С условиями доставки Вы можете ознакомиться по данной ссылке!" />

            <section>
                таблица с товарами в корзине или сообщение типа "корзина пуста" возможно с ссылкой на магазин
            </section>

            <section>
                блок с total price или кнопкой перейти к оформлению заказа (в скобках количество item)
            </section>

            Cart
        </main>
    )
};


export default Cart;