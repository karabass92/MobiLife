import { useAppSelector } from '../../store/hooks';
import { selectProducts, selectTotalProductsCount } from '../../store/slices/shopSlice';
import style from './ProductsToShowCount.module.scss';


const ProductsToShowCount = () => {

    const totalProductsCount = useAppSelector(selectTotalProductsCount);
    const products = useAppSelector(selectProducts);
    const productsOnPage = products.length;

    return (
        <section className={style.main}>
            Показано: {productsOnPage} из {totalProductsCount} товаров
        </section>
    );
};


export default ProductsToShowCount;