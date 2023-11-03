import style from './ProductCountToCart.module.scss';


type Props = {
    productCount: number,
    setProductCount: Function,
};


const ProductCountToCart = ({
    productCount,
    setProductCount
}: Props) => {

    return (
        <div className={style.main}>
            <span>Количество:</span>
            <div className={style.productCount}>
                <button 
                    onClick={() => setProductCount(productCount - 1)}
                    disabled={productCount <= 1} >
                    -
                </button>
                <span className={style.count}>{productCount}</span>
                <button 
                    onClick={() => setProductCount(productCount + 1)}
                    disabled={productCount >= 9} >
                    +
                </button> 
            </div>

        </div>
    );
};


export default ProductCountToCart;