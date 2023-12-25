import { useState } from 'react'
import { Switch } from '@mui/material'
import { cartApi } from '../../store/api/cartApi'
import cross from '../../assets/img/Cart/cross.svg'
import style from './CheckoutModal.module.scss'
import { IProductToCheckout } from '../../interfaces/interfaces'
import { v1 } from 'uuid'
import SuccesCheckout from '../SuccesCheckout/SuccesCheckout'


type Props = {
    modalIsOpen: boolean,
    setModalIsOpen: (modalIsOpen: boolean) => void,
    totalCartPrice: number,
    promo: string,
    products: Array<IProductToCheckout>
}


const CheckoutModal = ({
    modalIsOpen,
    setModalIsOpen,
    totalCartPrice,
    products,
    promo
}: Props) => {

    const [makeOrder, { isError, isLoading, isSuccess }] = cartApi.useMakeOrderMutation();
    const [name, setName] = useState<string>('');
    const [telephone, setTelephone] = useState<string>('');
    const [adress, setAdress] = useState<string>('');
    const [delivery, setDelivery] = useState<boolean>(false);

    const onFinish = () => {
        const data = {
            user_session: localStorage.id,
            user_name: name,
            user_telephone: telephone,
            order_delivery: delivery,
            order_delivery_address: adress,
            promo: promo
        }
        makeOrder(data)
        if (isSuccess) {
            setAdress('')
            setDelivery(false)
            setName('')
            setTelephone('')
            setModalIsOpen(false)
            localStorage.clear()
            localStorage.setItem('id', v1())
        }   
    };

    return (
        <>
            <div
                className={`${style.main} ${modalIsOpen && style.visible}`}
                onClick={() => setModalIsOpen(false)}>
            </div>
            <div className={`${style.formContainer} ${modalIsOpen && style.visible}`}>
                <img src={cross} alt="close" onClick={() => setModalIsOpen(false)} className={style.closeImg} />
                { isError
                    ? 'КАКАЯ ТО ХУЕТА'
                    :   isSuccess
                    ?   <SuccesCheckout />
                    :   <>
                        <h2>Оформление заказа</h2>
                        <form action="">
                            <input
                                type='text'
                                placeholder='Имя'
                                className={style.inputItem}
                                value={name}
                                onChange={(e) => setName(e.currentTarget.value)} />
                            <input
                                type='text'
                                placeholder='Телефон'
                                className={style.inputItem}
                                value={telephone}
                                onChange={(e) => setTelephone(e.currentTarget.value)} />
                            <input
                                type='text'
                                placeholder='Адрес доставки'
                                className={style.inputItem}
                                disabled={!delivery}
                                value={adress}
                                onChange={(e) => setAdress(e.currentTarget.value)} />
                            <div className={style.deliveryBlock}>
                                <Switch
                                    color="default"
                                    value={delivery}
                                    onChange={() => setDelivery(!delivery)} />
                                <span>Оформить доставку</span>
                            </div>
                            <button
                                className={style.checkoutButton}
                                onClick={(e) => {
                                    e.preventDefault()
                                    onFinish()
                                }}
                                disabled={isLoading} >
                                {isLoading ? 'Секундочку...' : 'Оформить заказ'}
                            </button>
                        </form>
                        </>
                }
            </div>
        </>
    );
};


export default CheckoutModal;