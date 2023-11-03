import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import style from './Product.module.scss';


const Product = () => {

    const product = {
            id: 1,
            name: 'товар 1',
            price: '1000',
        };

    return (
        <main className={style.main}>
            <BreadCrumbs header='Каталог' product={product.name} />
            Product
        </main>
    )
};


export default Product;