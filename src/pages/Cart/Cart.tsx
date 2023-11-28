import { cartApi } from "../../store/api/cartApi";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import DeliveryBanner from "../../components/DeliveryBanner/DeliveryBanner";
import ProductsInCartTable from "../../components/ProductsInCartTable/ProductsInCartTable";
import style from './Cart.module.scss';


const Cart = () => {

    const { 
        data,
        isError,
        isLoading
    } = cartApi.useGetProductsQuery('');

    return (
        <main className={style.main}>
            <BreadCrumbs 
                header='Корзина' />
            <DeliveryBanner 
                text="С условиями доставки Вы можете ознакомиться по данной ссылке!" />
            <ProductsInCartTable 
                isError={isError} 
                isLoading={isLoading} 
                data={data} />
        </main>
    );
};


export default Cart;