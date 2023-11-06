import TableHeader from './TableHeader/TableHeader';
import TableItem from './TableItem/TableItem';
import style from './ProductsInCartTable.module.scss';


const ProductsInCartTable = () => {


    const data = [
        {
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
        <section className={style.main}>
            <TableHeader />
            {data.length > 0
                ? data.map(el => {
                    return (
                        <TableItem
                            info={el.info}
                            price={el.price}
                            count={el.count} />
                    )
                })
                : <div>Корзина пуста</div>
            }
            
        </section>
    );
};


export default ProductsInCartTable;