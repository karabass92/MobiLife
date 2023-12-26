import { Switch } from '@mui/material'
import { v1 } from 'uuid'
import style from './CheckoutForm.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'


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

    // const data = {
    //     user_session: localStorage.id,
    //     user_name: name,
    //     user_telephone: telephone,
    //     order_delivery: delivery,
    //     order_delivery_address: adress,
    //     promo: promo
    // }

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <section className={style.inputItem}>
                <input
                    type='text'
                    placeholder='Имя'
                    className={style.inputItem}
                    value={name}
                    {...register("name", { required: true, maxLength: 10 })}
                    onChange={(e) => setName(e.currentTarget.value)} />
                {errors.name && <span className={style.errorMessage}>Данное поле необходимо заполнить</span>}
            </section>
            <section className={style.inputItem}>
                <input
                    type='text'
                    placeholder='Телефон'
                    className={style.inputItem}
                    value={telephone}
                    {...register("telephone", { required: true })}
                    onChange={(e) => setTelephone(e.currentTarget.value)} />
                {errors.telephone && <span className={style.errorMessage}>Данное поле необходимо заполнить</span>}
            </section>
            <section className={style.inputItem}>
                <input
                    type='text'
                    placeholder='Адрес доставки'
                    className={style.inputItem}
                    disabled={!delivery}
                    {...register("adress", { required: delivery })}
                    value={adress}
                    onChange={(e) => setAdress(e.currentTarget.value)} />
                {errors.adress && <span className={style.errorMessage}>Данное поле необходимо заполнить</span>}
            </section>
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
            <input className={style.checkoutButton} type="submit" />
        </form>
    );
};


export default CheckoutForm;