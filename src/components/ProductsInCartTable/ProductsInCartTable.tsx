import { useState } from 'react';
import TableHeader from './TableHeader/TableHeader';
import TableItem from './TableItem/TableItem';
import TableFooter from './TableFooter/TableFooter';
import style from './ProductsInCartTable.module.scss';
import { ICartItem } from '../../interfaces/interfaces';


type Props = {
    data: Array<ICartItem>,
    isError: boolean,
    isLoading: boolean
}


const ProductsInCartTable = ({
    data,
    isError,
    isLoading
}: Props) => {

    const [promo, setPromo] = useState<string>('');
    const [inputValue, setInputValue] = useState<string>('');

    if(isError) return <>Error</>
    if(isLoading) return <>Loadnig</>

    const totalCount = data?.length > 0
        ? data.map((el:ICartItem) => el.quantity).reduce((el:number, count:number) => el + count)
        : 0;
    
    const products = data?.map(el => {

        /*
        здесь нужен массив продуктов к которым подходим промо
        [1,2,3,4,] если id продкута есть в массиве то берется цена с промо
        возможно в этом же обьете нужно вернуть итоговую стоимость товаров для футера
        */

        return {
            id: el.id,
            productId: el.products,
            name: el.name_product,
            quantity: el.quantity,
            photo: el.product_images,
            pricePerPosition: el.quantity * el.price_per_prod,
            price: el.price_per_prod
        }
    })

    const totalPrice = data?.length > 0 
        ? data[0].total_price_of_customer_cart 
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

            <input value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)} />
            <button onClick={() => setPromo(inputValue)}>применить промо</button>

            <TableFooter 
                totalPrice={totalPrice} 
                productCount={totalCount} />
        </section>
    );
};


export default ProductsInCartTable;