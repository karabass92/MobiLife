import { useEffect } from 'react';
import { getAllProducts, selectShop } from '../../store/slices/shopSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Pagination/Pagination";
import ProductsToShowCount from "../../components/ProductsToShowCount/ProductsToShowCount";
import style from './Shop.module.scss';


const Shop = () => {

    const dispatch = useAppDispatch();
    const products = useAppSelector(selectShop);

    useEffect( ()=> {
        dispatch(getAllProducts())
    }, [dispatch]);

    const productsToShow = 
        products.map(el => <ProductCard 
            key={el.id} 
            id={el.id} 
            name={el.name_product} 
            price={el.price}
            img={el.list_url_to_image} /> );

    return (
        <main className={style.main}>
            <BreadCrumbs header='Каталог' />
            <ProductFilter />
            <ProductsToShowCount />
            <section className={style.productsContainer}>
                {productsToShow}
            </section>
            <ProductsToShowCount />
            <Pagination />
        </main>
    )
};


export default Shop;