import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import TableItemMini from "../../components/ProductsInCartTable/TableItemMini/TableItemMini";
import DefaultButton from "../../components/Button/DefaultButton/DefaultButton";
import style from './Checkout.module.scss';
import { cartApi } from "../../store/api/cartApi";
import { ICartItem } from "../../interfaces/interfaces";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';


const label = { inputProps: { 'aria-label': 'Switch demo' } };


const Checkout = () => {

    const { 
        data,
        isError,
        isLoading
    } = cartApi.useGetProductsQuery('');

    const onFinish = () => {
        console.log('form')
    }

    if(isError) return <>Error</>
    if(isLoading) return <>Loadnig</>

    return (
        <main className={style.main}>
            <BreadCrumbs header='Оформить заказ' />
            <div className={style.container}>
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
                        <button className={style.orderButton} onClick={onFinish}>
                            Оформить заказ
                        </button>
                    </div>
                </section>
                <Box component='form' className={style.form}>
                    <Switch {...label} />
                    <TextField id="standard-basic" label="Телефон" variant="standard" />
                    <TextField id="standard-basic" label="Адрес" variant="standard" />
                    <TextField id="standard-basic" label="Имя" variant="standard" />
                </Box>  
            </div>
        </main>
    )
};


export default Checkout;