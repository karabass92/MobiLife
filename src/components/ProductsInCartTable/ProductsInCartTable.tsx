import TableHeader from './TableHeader/TableHeader';
import TableItem from './TableItem/TableItem';
import TableFooter from './TableFooter/TableFooter';
import style from './ProductsInCartTable.module.scss';
import { cartApi } from '../../store/api/cartApi';
import { ICartItem } from '../../interfaces/interfaces';


const ProductsInCartTable = () => {

    const { 
        data,
        isError,
        isLoading
    } = cartApi.useGetProductsQuery('');

    if(isError || isLoading) return <>XYU</>

console.log(data)

    return (
        <section className={style.main}>
            <TableHeader />
            {data.length > 0
                ? data.map((el:ICartItem ) => {
                    return (
                        <TableItem
                            key={el.id}
                            price={el.total_price_of_customer_cart}
                            count={el.quantity} />
                    )
                })
                : <div className={style.empyCartMessage}>корзина пуста</div>
            }
            <TableFooter totalPrice={1000} productCount={2} />
        </section>
    );
};


export default ProductsInCartTable;