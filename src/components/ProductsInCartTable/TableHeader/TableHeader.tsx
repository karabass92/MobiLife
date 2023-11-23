import style from './TableHeader.module.scss';


const TableHeader = () => {
    return (
        <div className={style.tableHeader}>
            <div></div>
            <div className={style.imgCol}>
                Фото
            </div>
            <div>
                Наименование
            </div>
            <div>
                Цена
            </div>
            <div>
                Количество
            </div>
            <div className={style.totalPrice}>
                Стоимость
            </div>
            <div></div>
        </div>
    );
};


export default TableHeader;