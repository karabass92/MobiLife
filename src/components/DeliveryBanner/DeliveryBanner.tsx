import circle from '../../assets/img/Cart/circle.svg';
import auto from '../../assets/img/Cart/auto.svg';
import style from './DeliveryBanner.module.scss';


type Props = {
    text: string,
};


const DeliveryBanner = ({
    text
}: Props) => {
    return (
        <section className={style.main}>
                <div className={style.imgContainer}>
                    <img src={circle} alt="" />  
                    <img src={auto} alt="delivery" />
                </div>
                <article>
                    <h2>
                        Возможна доставка !
                    </h2>
                    <p>
                        {text}
                    </p>
                </article>
        </section>
    )
};


export default DeliveryBanner;