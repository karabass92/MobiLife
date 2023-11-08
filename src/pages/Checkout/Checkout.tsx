import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

import TableItemMini from "../../components/ProductsInCartTable/TableItemMini/TableItemMini";
import DefaultButton from "../../components/Button/DefaultButton/DefaultButton";
import style from './Checkout.module.scss';


const Checkout = () => {

    const data: any[] = [
        {
            id: 1,
            img: '',
            info: {
                name: 'блядский утюг',
                color: 'silver',
                params: 'здоровый и тяжелый пиздец'
            },
            price: 666,
            count: 1
        },
        {
            id: 2,
            img: '',
            info: {
                name: 'iphone',
                color: 'silver',
                params: '128gb'
            },
            price: 700000,
            count: 1
        },
        {
            id: 3,
            img: '',
            info: {
                name: 'iphone',
                color: 'silver',
                params: '128gb'
            },
            price: 700000,
            count: 1
        },
    ];

    return (
        <main className={style.main}>
            <BreadCrumbs header='Оформить заказ' />

            <div className={style.container}>

                <section>
                    Checkout from
                </section>

                <section className={style.cart}>
                    <h2>Товары в корзине</h2>
                    <div>
                        {
                            data.map(el => {
                                return (
                                    <TableItemMini
                                        key={el.id}
                                        info={el.info}
                                        price={el.price}
                                        count={el.count} />
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