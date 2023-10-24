import style from './CatalogLinks.module.scss';


const CatalogLinks = () => {
    return (
        <section className={style.main}>
            <p>Каталог :</p>
            <article className={style.categories}>
                <div className={style.column}>
                    <p>Зарядные устройства</p>
                    <p>Кабели</p>
                    <p>Найшники и гарнитуры</p>
                </div>
                <div className={style.column}>
                    <p>Флэш накопители</p>
                    <p>Чехлы, сумки, ремешки</p>
                    <p>Аксессуары для компьютера</p>
                </div> 
            </article>
        </section>
    );
};


export default CatalogLinks;