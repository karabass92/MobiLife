import LinkButton from '../Button/LinkButton/LinkButton';
import noImg from '../../assets/img/Main/noImg.jpg';
import style from './ProductCard.module.scss';
import { mediaURL } from '../../constants/api';


type Props = {
    id: number,
    name: string,
    price: string,
    displayPrice: boolean,
    img: string[]
};


const ProductCard = ({
    img, 
    name, 
    price,
    id,
    displayPrice
}: Props) => {

    return (
        <section className={style.main}>
            <img src={
                img.length > 0 
                    ? `${mediaURL}${img[0]} `
                    : noImg
                } alt="" />
            <h3>{name}</h3>
            {
                displayPrice && <p>&#8376; {price}</p>
            }
            <LinkButton text='Подробнее' link={`../product/${id}`} width={127} height={41} />
        </section>
    );
};


export default ProductCard;