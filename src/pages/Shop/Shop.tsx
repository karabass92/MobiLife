import { useState } from 'react';
import { selectTotalProductsCount } from '../../store/slices/shopSlice';
import { useAppSelector } from '../../store/hooks';
import { productPerPage } from '../../constants/pagination';
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import Pagination from "../../components/Pagination/Pagination";
import ProductsToShowCount from "../../components/ProductsToShowCount/ProductsToShowCount";
import style from './Shop.module.scss';
import ProductsTable from '../../components/ProductsTable/ProductsTable';


const Shop = () => {



    const totalProductsCount = useAppSelector(selectTotalProductsCount);
    const [page, setPage] = useState<number>(1);
    const [category, setCategory] = useState<string>('');
    console.log(category)

    const pagesCount = Math.ceil(totalProductsCount/productPerPage);
    const offset = (page - 1)*productPerPage;

    return (
        <main className={style.main}>
            <BreadCrumbs header='Каталог' />
            <ProductFilter
                setPage={setPage} 
                category={category} 
                setCategory={setCategory} />
            <ProductsToShowCount />
            <ProductsTable page={page} offset={offset} />
            <ProductsToShowCount />
            <Pagination pagesCount={pagesCount} page={page} setPage={setPage} />
        </main>
    );
};


export default Shop;