import { useState } from 'react';
import { selectTotalProductsCount } from '../../store/slices/shopSlice';
import { useAppSelector } from '../../store/hooks';
import { productPerPage } from '../../constants/pagination';
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import { CustomPagination } from '../../components/Pagination/Pagination';
import { MUIPagination } from '../../components/Pagination/Pagination';
import ProductsToShowCount from "../../components/ProductsToShowCount/ProductsToShowCount";
import style from './Shop.module.scss';
import ProductsTable from '../../components/ProductsTable/ProductsTable';


const Shop = () => {

    const totalProductsCount = useAppSelector(selectTotalProductsCount);
    const [page, setPage] = useState<number>(1);
    const [categoryId, setCategoryId] = useState<number>(0);

    const pagesCount = Math.ceil(totalProductsCount/productPerPage);
    const offset = (page - 1)*productPerPage;

    return (
        <main className={style.main}>
            <BreadCrumbs 
                header='Каталог' />
            <ProductFilter
                setPage={setPage} 
                categoryId={categoryId} 
                setCategoryId={setCategoryId} />
            <ProductsToShowCount />
            <ProductsTable 
                page={page} 
                offset={offset} 
                categoryId={categoryId} />
            <ProductsToShowCount />
            <CustomPagination 
                pagesCount={pagesCount} 
                page={page} 
                setPage={setPage} />
            <MUIPagination 
                pagesCount={pagesCount} 
                page={page} 
                setPage={setPage} />
        </main>
    );
};


export default Shop;