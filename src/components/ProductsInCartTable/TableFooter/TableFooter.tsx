import { useState } from 'react'
import LinkButton from '../../Button/LinkButton/LinkButton';
import CheckoutModal from '../../CheckoutModal/CheckoutModal';
import style from './TableFooter.module.scss';
import { IProductToCheckout } from '../../../interfaces/interfaces';


type Props = {
    productCount: number,
    totalPrice: number,
    promo: string,
    products: Array<IProductToCheckout>
}


const TableFooter = ({
    productCount,
    totalPrice,
    products,
    promo
}: Props) => {

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    return (
        <section className={style.main}>
            {
                productCount > 0
                ?   <>
                        <p>Итого:</p>
                        <p>&#8376; {totalPrice}</p> 
                    </>
                : ''
            }
            
            {
                productCount > 0
                ?   <button 
                        className={style.checkoutButton} 
                        onClick={() => setModalIsOpen(true)} >
                        {`Заказать (${productCount})`}
                    </button>
                :   <LinkButton 
                        text={`Перейти в магазин`}
                        link='/shop'
                        width={131}
                        height={52} />
            }
            <CheckoutModal
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                promo={promo} />
        </section>
    );
};


export default TableFooter;