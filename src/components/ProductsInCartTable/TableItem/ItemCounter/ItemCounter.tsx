import { cartApi } from '../../../../store/api/cartApi';
import style from './ItemCounter.module.scss';


type Props = {
    count: number,
    productId: number
}


const ItemCounter = ({
    count,
    productId
}: Props) => {

    const user_session= `${localStorage.getItem('id')}`

    const [
        addProductToCart,
        {
            isError: IsErrorAddProduct,
            isLoading: isLoadingAddProduct
        }
    ] = cartApi.useAddProductToCartMutation();

    return (
        <div className={style.main}>
            <button 
                disabled={count <= 1 || isLoadingAddProduct}
                onClick={() => {
                    addProductToCart({
                        user_session: user_session,
                        quantity: count - 1,
                        products: Number(productId) 
                    })}} >
                    -
            </button>
            <span>{count}</span>
            <button
                disabled={count >= 9 || isLoadingAddProduct}
                onClick={() => {
                    addProductToCart({
                        user_session: user_session,
                        quantity: count + 1,
                        products: Number(productId) 
                    })}} >
                    +
            </button>
        </div>
    );
};


export default ItemCounter;