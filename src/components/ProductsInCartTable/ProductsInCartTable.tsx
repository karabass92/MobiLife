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

    if(isError) return <>Error</>
    if(isLoading) return <>Loadnig</>

    const totalCount = data.length > 0
        ? data.map((el:ICartItem) => el.quantity).reduce((el:number, count:number) => el + count)
        : null;
    
    const totalPrice = data.length > 0 
        ? data[0].total_price_of_customer_cart 
        : 0;

    return (
        <section className={style.main}>
            <TableHeader />
            {data.length > 0
                ? data.map((el:ICartItem ) => <TableItem
                            key={el.id}
                            cartItemId={el.id}
                            productId={el.products}
                            name={el.name_product}
                            photo={el.product_images}
                            price={el.price_per_prod}
                            totalPrice={el.total_price_per_position}
                            count={el.quantity} />)
                : <div className={style.empyCartMessage}>корзина пуста</div>
            }
            <TableFooter 
                totalPrice={totalPrice} 
                productCount={totalCount} />
        </section>
    );
};


export default ProductsInCartTable;