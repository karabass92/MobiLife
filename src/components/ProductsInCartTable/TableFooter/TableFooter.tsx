import LinkButton from '../../Button/LinkButton/LinkButton';
import style from './TableFooter.module.scss';


type Props = {
    productCount: number,
    totalPrice: number
}


const TableFooter = ({
    productCount,
    totalPrice
}: Props) => {

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
                ?   <LinkButton 
                        text={`Заказать (${productCount})`}
                        link='/checkout'
                        width={131}
                        height={52} />
                :   <LinkButton 
                        text={`Перейти в магазин`}
                        link='/shop'
                        width={131}
                        height={52} />
            }
            
        </section>
    );
};


export default TableFooter;