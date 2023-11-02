import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Pagination/Pagination";
import ProductsToShowCount from "../../components/ProductsToShowCount/ProductsToShowCount";
import style from './Shop.module.scss';


const Shop = () => {

    const data = [
        {
            id: 1,
            name: 'товар 1',
            price: '1000',
        },
        {
            id: 2,
            name: 'товар 1',
            price: '1000',
        },
        {
            id: 3,
            name: 'товар 1',
            price: '1000',
        },
        {
            id: 4,
            name: 'товар 1',
            price: '1000',
        },
        {
            id: 5,
            name: 'товар 1',
            price: '1000',
        },
        {
            id: 6,
            name: 'товар 1',
            price: '1000',
        },
        {
            id: 7,
            name: 'товар 1',
            price: '1000',
        },
    ];

    const productsToShow = 
        data.map(el => <ProductCard 
            key={el.id} 
            id={el.id} 
            name={el.name} 
            price={el.price} /> );

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