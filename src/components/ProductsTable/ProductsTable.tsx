import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectProducts } from '../../store/slices/shopSlice';
import { getAllProducts, getProductsByCategory } from '../../store/slices/shopSlice';
import { productPerPage } from '../../constants/pagination';
import ProductCard from '../ProductCard/ProductCard';
import style from './ProductsTable.module.scss';


type Props = {
    page: number,
    offset: number,
    categoryId: number
};


const ProductsTable = ({
    page,
    offset,
    categoryId
}: Props) => {

    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);

    useEffect( ()=> {
        categoryId === 0
        ? dispatch(getAllProducts(productPerPage, offset))
        : dispatch(getProductsByCategory(categoryId, productPerPage, offset))
    }, [page, offset, categoryId, dispatch]);

    return (
        <section className={style.productsContainer}>
            {
                products.map(el => <ProductCard 
                    key={el.id} 
                    id={el.id} 
                    name={el.name_product} 
                    price={el.price_with_discount_or_PROMO}
                    img={el.list_url_to_image}
                    displayPrice={el.display_price} />)
            }
        </section>
    );
};


export default ProductsTable;