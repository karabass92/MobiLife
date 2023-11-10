import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getOneProduct, selectProduct } from '../../store/slices/productSlice';
import { addProductToCart } from '../../store/slices/cartSlice';
import { IProduct } from '../../interfaces/interfaces';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ProductCountToCart from '../../components/ProductCountToCart/ProductCountToCart';
import ColorSelection from '../../components/ColorSelection/ColorSelection';
import DefaultButton from '../../components/Button/DefaultButton/DefaultButton';
import { mediaURL } from '../../constants/api';
import noImg from '../../assets/img/Main/noImg.jpg';
import style from './Product.module.scss';


const Product = () => {

    const dispatch = useAppDispatch();
    const product = useAppSelector(selectProduct);
    let { productId } = useParams();

    useEffect( () => {
        dispatch(getOneProduct(productId))
    }, [productId, dispatch]);


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

    if (!product) return <h1>loading</h1>;

    return (
        <main className={style.main}>
            <BreadCrumbs header='Каталог' product={product.name_product} />
            <section className={style.productContainer}>
                <img src={
                        product.list_url_to_image.length > 0 
                        ? `${mediaURL}${product.list_url_to_image[0]} `
                        : noImg
                    } alt={product.name_product} />
                <section className={style.productInfo}>
                    <h1>{product.name_product}</h1>
                    <h2>&#8376; {product.price}</h2>
                    <article>
                        {product.desc_product} 
                    </article>
                    {
                        product.all_colors_product.length > 0 
                        ? <ColorSelection 
                            colors={product.all_colors_product} 
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