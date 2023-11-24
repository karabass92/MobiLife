import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import TableItemMini from "../../components/ProductsInCartTable/TableItemMini/TableItemMini";
import DefaultButton from "../../components/Button/DefaultButton/DefaultButton";
import style from './Checkout.module.scss';
import { cartApi } from "../../store/api/cartApi";
import { ICartItem } from "../../interfaces/interfaces";


const Checkout = () => {

    const { 
        data,
        isError,
        isLoading
    } = cartApi.useGetProductsQuery('');

    if(isError) return <>Error</>
    if(isLoading) return <>Loadnig</>

    return (
        <main className={style.main}>
            <BreadCrumbs header='Оформить заказ' />
            <div className={style.container}>
                <section>
                    Здесть должна быть форма с выбором доставки либо самовывоза, если доставка должны открываться поля типа адрес, телефон, способ оплаты и т.д.
                </section>
                <section className={style.cart}>
                    <h2>Товары в корзине:</h2>
                    <div>
                        {
                            data.map((el:ICartItem) => {
                                return (
                                    <TableItemMini
                                        key={el.id}
                                        name={el.name_product}
                                        price={el.total_price_per_position}
                                        count={el.quantity}
                                        photo={el.product_images} />
                                )
                            })
                        }
                    </div>
                    <div className={style.buttonBlock}>
                        <DefaultButton 
                            text="Вернуться к корзине"
                            link="/cart"
                            width={200}
                            height={52} />
                        <button className={style.orderButton}>
                            Оформить заказ
                        </button>
                    </div>
                </section>
            </div>
        </main>
    )
};


export default Checkout;