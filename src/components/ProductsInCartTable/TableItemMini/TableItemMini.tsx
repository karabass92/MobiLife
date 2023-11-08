import style from './TableItemMini.module.scss';
import noImg from '../../../assets/img/Main/noImg.jpg';


type Props = {
    photo?: string,
    info: {
        name: string,
        color?: string,
        params?: string
    },
    price: number,
    count: number
};


const TableItemMini = ({
    photo,
    info,
    price,
    count
}: Props) => {
    return (
        <div className={style.tableItem}>
            <div className={style.productImage} >
                {
                    photo
                    ? <img src={photo} alt={info.name} />
                    : <img  src={noImg}  alt='no image' />
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
            <div>
                x{count}
            </div>
        </div>
    );
};


export default TableItemMini;