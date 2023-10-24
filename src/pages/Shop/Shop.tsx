import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import style from './Shop.module.scss';


const Shop = () => {
    return (
        <main className={style.main}>
            <BreadCrumbs header='Каталог' />
            Shop
        </main>
    )
};


export default Shop;