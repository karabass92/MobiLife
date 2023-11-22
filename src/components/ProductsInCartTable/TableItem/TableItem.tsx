import { cartApi } from '../../../store/api/cartApi';
import ItemCounter from './ItemCounter/ItemCounter';
import { mediaURL } from '../../../constants/api';
import style from './TableItem.module.scss';
import check from '../../../assets/img/Cart/check.svg';
import cross from '../../../assets/img/Cart/cross.svg';
import noImg from '../../../assets/img/Main/noImg.jpg'


type Props = {
    photo: Array<string>,
    name: string,
    price: number,
    totalPrice: number,
    count: number,
    productId: number,
    cartItemId: number
};


const TableItem = ({
    photo,
    name,
    price,
    totalPrice,
    count,
    productId,
    cartItemId
}: Props) => {

    const [removeProduct, {isError, isLoading}] = cartApi.useRemoveProductFromCartMutation();

    return (
        <div className={style.tableItem}>
            <div className={style.imgContainer}>
                <img src={check} alt="check" /> 
            </div>
            <div className={style.productImage} >
                <img src={ photo.length > 0 
                        ? `${mediaURL}${photo[0]}`
                        : noImg
                    } alt={name}/>
            </div>
            <div className={style.productInfo}>
                {name}
            </div>
            <div>
                {price}
            </div>
            <ItemCounter productId={productId} count={count} />
            <div>
                {totalPrice}
            </div>
            <button 
                className={style.imgContainer} 
                disabled={isLoading}
                onClick={() => removeProduct(cartItemId)}>
                <img src={cross} alt="delete" />
            </button>
        </div>
    );
};


export default TableItem;