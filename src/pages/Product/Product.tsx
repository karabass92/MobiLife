import { useState } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ProductCountToCart from '../../components/ProductCountToCart/ProductCountToCart';
import DefaultButton from '../../components/Button/DefaultButton/DefaultButton';
import noImg from '../../assets/img/Main/noImg.jpg';
import style from './Product.module.scss';


const Product = () => {

    const product = {
            id: 1,
            name: 'Утюг ебать',
            price: '1000',
            img: ''
        };

    const [productCount, setProductCount] = useState(1);

    return (
        <main className={style.main}>
            <BreadCrumbs header='Каталог' product={product.name} />
            <section className={style.productContainer}>
                <img src={product.img || noImg} alt={product.name} />
                <section className={style.productInfo}>
                    <h1>{product.name}</h1>
                    <h2>&#8376; {product.price}</h2>

                    <article>
                        ОПИСАНИЕ ТОВАРА Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, consequuntur sapiente praesentium neque ullam tempora, iste dignissimos doloremque quia, pariatur nesciunt molestias dolorum placeat. Sequi repudiandae enim quia quis qui!
                    </article>

                    <div>ВЫБОР ЦВЕТА (в отдельный компонент)</div>

                    <ProductCountToCart 
                        productCount={productCount} 
                        setProductCount={setProductCount} />
                    <div className={style.buttonBlock}>
                        <DefaultButton
                            width={200}
                            height={60}
                            link='/shop'
                            text='Вернуться в магазин' />     
                        <button className={style.addProductToCartButon}>
                            Добавить в корзину
                        </button>
                    </div>
                </section>
            </section>
        </main>
    )
};


export default Product;