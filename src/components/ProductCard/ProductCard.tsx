import LinkButton from '../Button/LinkButton/LinkButton';
import style from './ProductCard.module.scss';


type Props = {
    id: number,
    img?: string,
    name: string,
    price: string
};


const ProductCard = ({
    img, 
    name, 
    price, 
    id}: Props) => {

    return (
        <section className={style.main}>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>&#8376; {price}</p>
            <LinkButton text='Подробнее' link={`../product/${id}`} width={127} height={41} />
        </section>
    );
};


export default ProductCard;