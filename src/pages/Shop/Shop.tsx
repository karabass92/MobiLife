import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import style from './Shop.module.scss';


const Shop = () => {
    return (
        <main className={style.main}>
            <BreadCrumbs header='Каталог' />
            <p>сортировка по категориям</p>
            <p>фильтрация по тегам</p>
            <p>фильтрация по цене</p>
            <p>дохера товаров</p>
        </main>
    )
};


export default Shop;