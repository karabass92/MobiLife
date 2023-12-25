import style from './SuccesCheckout.module.scss'
import success from '../../assets/img/SuccessCheckout/success.svg'


const SuccesCheckout = () => {
    return (
        <div className={style.main}>
            <img src={success} alt="" />
            <span>Ваш заказ оформлен! </span>
            <span>В ближайшее время с Вами свяжется продавец</span>
        </div>
    );
};


export default SuccesCheckout;