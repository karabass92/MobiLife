import { Switch } from '@mui/material'
import { v1 } from 'uuid'
import style from './CheckoutForm.module.scss'
import { useForm } from 'react-hook-form'


type Props = {
    name: string,
    setName: (name: string) => void,
    telephone: string,
    setTelephone: (telephone: string) => void,
    adress: string,
    setAdress: (adress: string) => void,
    delivery: boolean,
    setDelivery: (delivery: boolean) => void,
    isLoading: boolean,
    makeOrder: Function,
    setModalIsOpen: (modalIsOpen: boolean) => void
    promo: string,
    isSuccess: boolean
}


type Inputs = {
    name: string,
    telephone: string,
    adress: string,
    delivery: boolean,
}



const CheckoutForm = ({
    name,
    setName,
    telephone,
    setTelephone,
    adress,
    setAdress,
    delivery,
    setDelivery,
    isLoading,
    makeOrder,
    setModalIsOpen,
    promo,
    isSuccess
}: Props) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

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
        <form>
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
    );
};


export default CheckoutForm;