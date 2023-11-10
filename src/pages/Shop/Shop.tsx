import { 
    useEffect, 
    useState 
} from 'react';
import { 
    getAllProducts, 
    selectProducts ,
    selectTotalProductsCount,
    seletNextPage,
    selectPreviousPage
} from '../../store/slices/shopSlice';
import { 
    useAppDispatch, 
    useAppSelector 
} from '../../store/hooks';
import { productPerPage } from '../../constants/pagination';
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Pagination/Pagination";
import ProductsToShowCount from "../../components/ProductsToShowCount/ProductsToShowCount";
import style from './Shop.module.scss';


const Shop = () => {

    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const totalProductsCount = useAppSelector(selectTotalProductsCount);
    const nextPage = useAppSelector(seletNextPage);
    const previousPage = useAppSelector(selectPreviousPage);
    const pagesCount = Math.ceil(totalProductsCount/productPerPage)
    const [page, setPage] = useState<number>(1)

    useEffect( ()=> {
        dispatch(getAllProducts(productPerPage, (page - 1)*productPerPage))
    }, [dispatch, page]);

    if(!products) return <h1>Loading</h1>

    return (
        <main className={style.main}>
            <BreadCrumbs header='Каталог' />
            <ProductFilter />
            <ProductsToShowCount />
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
            <ProductsToShowCount />
            <Pagination
                pagesCount={pagesCount}
                page={page}
                setPage={setPage} />
        </main>
    )
};


export default Shop;