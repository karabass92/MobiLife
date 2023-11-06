import ItemCounter from './ItemCounter/ItemCounter';
import style from './TableItem.module.scss';
import check from '../../../assets/img/Cart/check.svg';
import cross from '../../../assets/img/Cart/cross.svg';


type Props = {
    img?: string,
    info: {
        name: string,
        color?: string,
        params?: string
    },
    price: number,
    count: number
};


const TableItem = ({
    img,
    info,
    price,
    count
}: Props) => {
    return (
        <div className={style.tableItem}>
            <div className={style.imgContainer}>
                <img src={check} alt="check" /> 
            </div>
            <div>
                Фото
            </div>
            <div>
                {info.name}
            </div>
            <div>
                {price}
            </div>
            <ItemCounter count={count} />
            <div>
                {count * price}
            </div>
            <div className={style.imgContainer}>
                <img src={cross} alt="delete" />
            </div>
        </div>
    );
};


export default TableItem;