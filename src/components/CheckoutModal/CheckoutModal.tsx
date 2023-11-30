import { useState } from 'react';
import { Switch } from '@mui/material';
import cross from '../../assets/img/Cart/cross.svg'
import style from './CheckoutModal.module.scss';
import { IProductToCheckout } from '../../interfaces/interfaces';


type Props = {
    modalIsOpen: boolean,
    setModalIsOpen: (modalIsOpen: boolean) => void,
    totalCartPrice: number,
    promo:string,
    products: Array<IProductToCheckout>
}


const CheckoutModal = ({
    modalIsOpen,
    setModalIsOpen,
    totalCartPrice,
    products,
    promo
}: Props) => {

    const [name, setName] = useState<string>('');
    const [telephone, setTelephone] = useState<string>('');
    const [adress, setAdress] = useState<string>('');
    const [delivery, setDelivery] = useState<boolean>(false);

    const onFinish = () => {
        const data = {
            sessionId: localStorage.id,
            name: name,
            telephone: telephone,
            delivery: delivery,
            adress: adress,
            totalCartPrice: totalCartPrice,
            promo: promo,
            products: products.map(el => {
                return ({
                    id: el.id,
                    name: el.name,
                    price: el.price,
                    quantity: el.quantity,
                    pricePerPosition: el.pricePerPosition
                })
            })
        }
        console.log(data)
    };

    return (
        <>
            <div 
                className={`${style.main} ${modalIsOpen && style.visible}`}
                onClick={() => setModalIsOpen(false)}>
            </div>
            <div className={`${style.formContainer} ${modalIsOpen && style.visible}`}>
                <img src={cross} alt="close" onClick={() => setModalIsOpen(false)} />
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
                    <div 
                        className={style.checkoutButton}
                        onClick={onFinish}>
                        оформить заказ
                    </div>
                </form>
            </div>
        </>
    );
};


export default CheckoutModal;