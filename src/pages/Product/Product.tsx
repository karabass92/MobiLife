import { useAppDispatch } from '../../store/hooks';
import { addProductToCart } from '../../store/slices/cartSlice';
import { useState } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ProductCountToCart from '../../components/ProductCountToCart/ProductCountToCart';
import ColorSelection from '../../components/ColorSelection/ColorSelection';
import DefaultButton from '../../components/Button/DefaultButton/DefaultButton';
import noImg from '../../assets/img/Main/noImg.jpg';
import style from './Product.module.scss';
import { IProduct } from '../../interfaces/interfaces';


const Product = () => {

    const product = {
            id: 1,
            name: 'Утюг ебать',
            price: 1000,
            details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, consequuntur sapiente praesentium neque ullam tempora, iste dignissimos doloremque quia, pariatur nesciunt molestias dolorum placeat. Sequi repudiandae enim quia quis qui!',
            img: '',
            type: 'утюг',
            colors: [
                {
                    name: 'Night Sea',
                    code: '#333847'
                },
                {
                    name: 'Aqua Blue',
                    code: '#B4FDFB'
                },
                {
                    name: 'Sandy Gold',
                    code: '#EBE0C1'
                },
            ]
        };

    const dispatch = useAppDispatch();

    const [productCount, setProductCount] = useState(1);
    const [color, setColor] = useState('');

    const onAddProductToCartClick = (product: IProduct): void => {
        const productToOrder = {
            ...product,
            colors: color,
            count: productCount
        }
        dispatch(addProductToCart(productToOrder))
    };

    return (
        <main className={style.main}>
            <BreadCrumbs header='Каталог' product={product.name} />
            <section className={style.productContainer}>
                <img src={product.img || noImg} alt={product.name} />
                <section className={style.productInfo}>
                    <h1>{product.name}</h1>
                    <h2>&#8376; {product.price}</h2>
                    <article>
                        {product.details} 
                    </article>
                    {
                        product.colors.length > 0 
                        ? <ColorSelection 
                            colors={product.colors} 
                            color={color} 
                            setColor={setColor} />
                        : null
                    }
                    <ProductCountToCart 
                        productCount={productCount} 
                        setProductCount={setProductCount} />
                    <div className={style.buttonBlock}>
                        <DefaultButton
                            width={200}
                            height={60}
                            link='/shop'
                            text='Вернуться в магазин' />     
                        <button 
                            className={style.addProductToCartButon}
                            onClick={() => onAddProductToCartClick(product)} >
                            Добавить в корзину
                        </button>
                    </div>
                </section>
            </section>
        </main>
    )
};


export default Product;