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
    id: number
};


const TableItem = ({
    photo,
    name,
    price,
    totalPrice,
    count,
    id
}: Props) => {

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
            <ItemCounter productId={id} count={count} />
            <div>
                {totalPrice}
            </div>
            <div className={style.imgContainer}>
                <img src={cross} alt="delete" />
            </div>
        </div>
    );
};


export default TableItem;