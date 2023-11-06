import TableHeader from './TableHeader/TableHeader';
import TableItem from './TableItem/TableItem';
import TableFooter from './TableFooter/TableFooter';
import style from './ProductsInCartTable.module.scss';


const ProductsInCartTable = () => {


    const data: any[] = [
        {
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
                            key={el.name}
                            info={el.info}
                            price={el.price}
                            count={el.count} />
                    )
                })
                : <div className={style.empyCartMessage}>корзина пуста</div>
            }
            <TableFooter totalPrice={1000} productCount={2} />
        </section>
    );
};


export default ProductsInCartTable;