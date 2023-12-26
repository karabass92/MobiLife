import { useState } from 'react';
import TableHeader from './TableHeader/TableHeader';
import TableItem from './TableItem/TableItem';
import TableFooter from './TableFooter/TableFooter';
import style from './ProductsInCartTable.module.scss';
import { ICartItem } from '../../interfaces/interfaces';
import { TextField } from '@mui/material';
import Spinner from '../Spinner/Spinner';


type Props = {
    data: Array<ICartItem>,
    isError: boolean,
    isLoading: boolean,
    promo: string,
    setPromo: (promo: string) => void
}


const ProductsInCartTable = ({
    data,
    isError,
    isLoading,
    setPromo,
    promo
}: Props) => {

    const [inputValue, setInputValue] = useState<string>('');

    if(isError) return <>Error</>
    if(isLoading) return <Spinner />

    const products = data?.map(el => {
        return {
            id: el.id,
            productId: el.products,
            name: el.name_product,
            quantity: el.quantity,
            photo: el.product_images,
            pricePerPosition: el.price_per_promo 
                ? el.quantity * el.price_per_promo
                : el.quantity * el.price_per_prod,
            price: el.price_per_promo ? el.price_per_promo : el.price_per_prod
        }
    });

    const totalCount = products?.length > 0
        ? products.map((el) => el.quantity).reduce((el:number, count:number) => el + count)
        : 0;

    const totalPrice = products?.length > 0
        ? products.map((el) => el.pricePerPosition).reduce((el:number, count:number) => el + count)
        : 0;

    return (
        <section className={style.main}>
            <TableHeader />
            {products.length > 0
                ? products.map((el) => <TableItem
                            key={el.id}
                            cartItemId={el.id}
                            productId={el.productId}
                            name={el.name}
                            photo={el.photo}
                            price={el.price}
                            totalPrice={el.pricePerPosition}
                            count={el.quantity} />)
                : <div className={style.empyCartMessage}>корзина пуста</div>
            }
            {products.length > 0
                ? <section className={style.promoContainer}>
                    <TextField 
                        id="promo" 
                        label="Промо-код" 
                        variant="standard" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.currentTarget.value)} />
                    <button className={style.addProductToCartButon} onClick={() => setPromo(inputValue)} >
                            ПРИМЕНИТЬ ПРОМО
                    </button>
                </section>
                : null
            }
            <TableFooter 
                totalPrice={totalPrice} 
                productCount={totalCount}
                products={products}
                promo={promo} />
        </section>
    );
};


export default ProductsInCartTable;