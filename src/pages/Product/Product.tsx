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
        name_product: 'Утюг ебать',
        desc_product: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, consequuntur sapiente praesentium neque ullam tempora, iste dignissimos doloremque quia, pariatur nesciunt molestias dolorum placeat. Sequi repudiandae enim quia quis qui!',
        category: 
            {    
                id: 1,
                name_category: 'утюг',
                desc_category: 'утюг',
            },
        tag: 
            [
                {
                    id: 1,
                    name_tag: 'string',
                    desc_tag: 'string',
                }
            ],
        display_tag: false,
        rating: '5',
        all_colors_products: [
            {
                color_name: 'Night Sea',
                color_code: '#333847'
            },
            {
                color_name: 'Aqua Blue',
                color_code: '#B4FDFB'
            },
            {
                color_name: 'Sandy Gold',
                color_code: '#EBE0C1'
            },
        ],
        list_url_to_image: 
            [
                ''
            ],
        price: '1000',
        price_with_discount_or_PROMO: '',
        display_price: true,
        discount: '',
        discount_period: '',
        display_discount: false,
        promo: {
            id: 1,
            name_promo: 'string',
            pass_promo: 'string',
            desc_promo: 'string',
            discount_promo: 'string',
            discount_deriod_promo: 'string',
        },
        display_promo: false,
        display_reviews: false,
        remaining_goods: 1,
        display_remaining_goods: false,
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
            <BreadCrumbs header='Каталог' product={product.name_product} />
            <section className={style.productContainer}>
                <img src={/*product.img ||*/ noImg} alt={product.name_product} />
                <section className={style.productInfo}>
                    <h1>{product.name_product}</h1>
                    <h2>&#8376; {product.price}</h2>
                    <article>
                        {product.desc_product} 
                    </article>
                    {
                        product.all_colors_products.length > 0 
                        ? <ColorSelection 
                            colors={product.all_colors_products} 
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