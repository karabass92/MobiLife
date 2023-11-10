import { count } from 'console';
import { productPerPage } from '../../constants/pagination';
import style from './ProductsToShowCount.module.scss';


type Props = {
    totalCount: number,
    count: number
};


const ProductsToShowCount = ({
    totalCount,
    count
}: Props) => {
    return (
        <section className={style.main}>
            Показано: {count} из {totalCount} товаров
        </section>
    );
};


export default ProductsToShowCount;