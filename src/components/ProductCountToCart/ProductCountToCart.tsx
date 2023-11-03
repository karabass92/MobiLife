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
            <input 
                type="number" 
                className={style.productCount}
                defaultValue={productCount} 
                //value={productCount} 
                onChange={() => setProductCount()} /> 
        </div>
    );
};


export default ProductCountToCart;