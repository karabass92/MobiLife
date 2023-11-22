import { useState, ReactElement } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectCart } from '../../store/slices/cartSlice';
import { useParams } from 'react-router-dom';
import { productApi } from '../../store/api/productApi';
import { cartApi } from '../../store/api/cartApi';
import { mediaURL } from '../../constants/api';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ProductCountToCart from '../../components/ProductCountToCart/ProductCountToCart';
import ColorSelection from '../../components/ColorSelection/ColorSelection';
import DefaultButton from '../../components/Button/DefaultButton/DefaultButton';
import noImg from '../../assets/img/Main/noImg.jpg';
import style from './Product.module.scss';
import LinkButton from '../../components/Button/LinkButton/LinkButton';


const Product = () => {

    let { productId } = useParams();
    const [productCount, setProductCount] = useState<number>(1);
    const [img, setImg] = useState<string>('');
    const cart = useAppSelector(selectCart);

    const { 
        data: product, 
        isError: isErrorProduct, 
        isLoading: isLoadingProduct
    } = productApi.useGetProductQuery(productId);

    const [
        addProductToCart,
        {
            isError: IsErrorAddProduct,
            isLoading: isLoadingAddProduct
        }
    ] = cartApi.useAddProductToCartMutation();

    const onAddProductToCartClick = async () => {
        const body = {
            user_session: `${localStorage.getItem('id')}`,
            quantity: productCount,
            products: Number(productId)
        };
        await addProductToCart(body);
    };

    if (isLoadingProduct) return <h1>loading</h1>;
    if (isErrorProduct) return <h1>error</h1>;
    
    return (
        <main className={style.main}>
            <BreadCrumbs header='Каталог' product={product?.name_product} />
            <section className={style.productContainer}>
                <div className={style.imageContainer}>
                    <img src={ product.list_url_to_image?.length > 0 
                        ? `${mediaURL}${img ? img : product?.list_url_to_image[0]}`
                        : noImg
                    } alt={product?.name_product}
                    className={style.mainImg} />
                    { product.list_url_to_image?.length > 0
                        ?   <div className={style.imgSeletContainer}> 
                                {
                                    product?.list_url_to_image.map((el: string): ReactElement => {
                                        return <img 
                                            key={el}
                                            src={`${mediaURL}${el}`} 
                                            alt={el}
                                            onClick={() => setImg(el)}/>
                                    })
                                }
                            </div>
                        : null
                    }
                </div>
                <section className={style.productInfo}>
                    <h1>{product?.name_product}</h1>
                    { product.display_price && 
                        <h2>&#8376; {product?.price_with_discount_or_PROMO}</h2>
                    }
                    <article>{product?.desc_product}</article>
                    { product?.color 
                        ? <ColorSelection color={product?.color} />
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
                        { cart.includes(product.id)
                            ?   <LinkButton
                                    width={200}
                                    height={60}
                                    link='/cart'
                                    text='Перейти к корзине' />
                            :   <button 
                                    className={style.addProductToCartButon}
                                    onClick={onAddProductToCartClick}
                                    disabled={isLoadingAddProduct} >
                                    {isLoadingAddProduct ? 'Cекунду...' : 'Добавить в корзину'}
                                </button>
                        }
                    </div>
                </section>
            </section>
        </main>
    );
};


export default Product;