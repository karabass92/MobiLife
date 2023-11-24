import { mediaURL } from '../../../constants/api';
import style from './TableItemMini.module.scss';
import noImg from '../../../assets/img/Main/noImg.jpg';


type Props = {
    photo: Array<string>,
    name: string,
    price: number,
    count: number
};


const TableItemMini = ({
    photo,
    name,
    price,
    count
}: Props) => {
    return (
        <div className={style.tableItem}>
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
            <div>
                x{count}
            </div>
        </div>
    );
};


export default TableItemMini;