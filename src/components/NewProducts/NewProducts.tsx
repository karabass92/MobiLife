import LinkButton from '../Button/LinkButton/LinkButton'

import style from './NewProducts.module.scss'


const NewProducts = () => {

    return (
        <section className={style.main}>
            <h2 className={style.sectionHeader}>Последнее поступление</h2>
            <section>
                new products carousel
            </section>
            <LinkButton link='/shop' text='Перейти в магазин' width={200} height={60} />
        </section>
    )
}


export default NewProducts