import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectProducts } from '../../store/slices/shopSlice';
import { getAllProducts } from '../../store/slices/shopSlice';
import { productPerPage } from '../../constants/pagination';
import ProductCard from '../ProductCard/ProductCard';
import style from './ProductsTable.module.scss';


type Props = {
    page: number,
    offset: number,
};


const ProductsTable = ({
    page,
    offset
}: Props) => {

    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);

    useEffect( ()=> {
        dispatch(getAllProducts(productPerPage, offset));
    }, [dispatch, page, offset]);

    return (
        <section className={style.productsContainer}>
            {
                products.map(el => <ProductCard 
                    key={el.id} 
                    id={el.id} 
                    name={el.name_product} 
                    price={el.price}
                    img={el.list_url_to_image} />)
            }
        </section>
    );
};


export default ProductsTable;