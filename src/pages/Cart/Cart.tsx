import { useState } from "react";
import { cartApi } from "../../store/api/cartApi";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import DeliveryBanner from "../../components/DeliveryBanner/DeliveryBanner";
import ProductsInCartTable from "../../components/ProductsInCartTable/ProductsInCartTable";
import style from './Cart.module.scss';


const Cart = () => {

    const [promo, setPromo] = useState<string>('');

    const { 
        data,
        isError,
        isLoading
    } = cartApi.useGetProductsQuery(promo);

    return (
        <main className={style.main}>
            <BreadCrumbs 
                header='Корзина' />
            <DeliveryBanner 
                text="С условиями доставки Вы можете ознакомиться по данной ссылке!" />
            <ProductsInCartTable 
                isError={isError} 
                isLoading={isLoading} 
                data={data}
                setPromo={setPromo} />
        </main>
    );
};


export default Cart;