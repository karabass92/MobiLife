import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import style from './Checkout.module.scss';


const Checkout = () => {
    return (
        <main className={style.main}>
            <BreadCrumbs header='Оформить заказ' />
            Checkout
        </main>
    )
};


export default Checkout;