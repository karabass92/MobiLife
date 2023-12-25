import style from './CheckoutError.module.scss'
import error from '../../assets/img/CheckoutError/error.svg'


const CheckoutError = () => {
    return (
        <div className={style.main}>
            <img src={error} alt="" />
            <span>Приносим своим извенения</span>
            <span>Сервис временно недоступен</span>
        </div>
    );
};


export default CheckoutError;