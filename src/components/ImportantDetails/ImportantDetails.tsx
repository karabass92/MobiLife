import important1 from '../../assets/img/ImportantDetail/important_1.png'
import important2 from '../../assets/img/ImportantDetail/important_2.png'
import important3 from '../../assets/img/ImportantDetail/important_3.png'
import LinkButton from '../Button/LinkButton/LinkButton'
import style from './ImportantDetails.module.scss'


const ImportantDetails = () => {
    return (
        <section className={style.main}>
            <h2 className={style.sectionHeader}>Что для нас важно</h2>
            <section className={style.importantBlock}>
                <article className={style.importantItem}>
                    <div className={style.imgContainer}>
                        <img src={important1} alt='img' />
                    </div>
                    <h3>Ассортимент</h3>
                    <p>
                        Мобильные аксуссуары, зарядные устройства, чехлы для Ваших устройсв, и многое другое
                    </p>
                </article>
                <article className={style.importantItem}>
                    <div className={style.imgContainer}>
                        <img src={important2} alt='img' />
                    </div>
                    <h3>Удобство</h3>
                    <p>
                        Оплата Kaspi Red, возможность покупки в рассрочку (0-0-12), бесплатная доставка
                    </p>
                </article>
                <article className={style.importantItem}>
                    <div className={style.imgContainer}>
                        <img src={important3} alt='img' />
                    </div>
                    <h3>Ответственность</h3>
                    <p>
                        Мы заботимся о наших клиентах. Грамотная консультация, компетентные и
                        вежливые сотрудники - все это MobiLife
                    </p>
                </article>
            </section>
            <LinkButton height={60} width={200} text='О нас' key={'about'} link='/about' />
        </section>
    )
}


export default ImportantDetails