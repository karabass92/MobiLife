import ItemCounter from './ItemCounter/ItemCounter';
import style from './TableItem.module.scss';
import check from '../../../assets/img/Cart/check.svg';
import cross from '../../../assets/img/Cart/cross.svg';
import noImg from '../../../assets/img/Main/noImg.jpg'


type Props = {
    id: number,
    photo?: string,
    info: {
        name: string,
        color?: string,
        params?: string
    },
    price: number,
    count: number
};


const TableItem = ({
    photo,
    info,
    price,
    count
}: Props) => {
    return (
        <div className={style.tableItem}>
            <div className={style.imgContainer}>
                <img src={check} alt="check" /> 
            </div>
            <div className={style.productImage} >
                {
                    photo
                    ? <img src={photo} alt={info.name} />
                    : <img src={noImg}  alt='no image' />
                }
            </div>
            <div className={style.productInfo}>
                {
                    `${info.name}, 
                    ${info.color ? `${info.color},` : null} 
                    ${info.params ? `${info.params},` : null} `
                }
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