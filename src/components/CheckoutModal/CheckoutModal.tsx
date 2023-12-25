import { useState } from 'react'
import { Switch } from '@mui/material'
import { cartApi } from '../../store/api/cartApi'
import cross from '../../assets/img/Cart/cross.svg'
import style from './CheckoutModal.module.scss'
import SuccesCheckout from '../SuccesCheckout/SuccesCheckout'
import CheckoutError from '../CheckoutError/CheckoutError'
import CheckoutForm from '../CheckoutForm/CheckoutForm'


type Props = {
    modalIsOpen: boolean,
    setModalIsOpen: (modalIsOpen: boolean) => void,
    promo: string,
}


const CheckoutModal = ({
    modalIsOpen,
    setModalIsOpen,
    promo
}: Props) => {

    const [makeOrder, { isError, isLoading, isSuccess }] = cartApi.useMakeOrderMutation();
    const [name, setName] = useState<string>('');
    const [telephone, setTelephone] = useState<string>('');
    const [adress, setAdress] = useState<string>('');
    const [delivery, setDelivery] = useState<boolean>(false);

    return (
        <>
            <div
                className={`${style.main} ${modalIsOpen && style.visible}`}
                onClick={() => setModalIsOpen(false)}>
            </div>
            <div className={`${style.formContainer} ${modalIsOpen && style.visible}`}>
                <img src={cross} alt="close" onClick={() => setModalIsOpen(false)} className={style.closeImg} />
                { isError
                    ? <CheckoutError />
                    :   isSuccess
                    ?   <SuccesCheckout />
                    :   <>
                            <h2>Оформление заказа</h2>
                            <CheckoutForm
                                adress={adress}
                                delivery={delivery}
                                isLoading={isLoading}
                                name={name}
                                telephone={telephone}
                                setAdress={setAdress}
                                setDelivery={setDelivery}
                                setTelephone={setTelephone}
                                setName={setName}
                                makeOrder={makeOrder}
                                setModalIsOpen={setModalIsOpen}
                                promo={promo}
                                isSuccess={isSuccess} />
                        </>
                }
            </div>
        </>
    );
};


export default CheckoutModal;