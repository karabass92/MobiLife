import style from './ProductsInCartTable.module.scss';
import check from '../../assets/img/Cart/check.svg';
import cross from '../../assets/img/Cart/cross.svg';





const ProductsInCartTable = () => {


    const data = [
        {
            img: '',
            info: {
                name: 'iphone',
                color: 'silver',
                params: '128gb'
            },
            price: '700000',
            count: 1.
        },
        {
            img: '',
            info: {
                name: 'iphone',
                color: 'silver',
                params: '128gb'
            },
            price: '700000',
            count: 1.
        },
        {
            img: '',
            info: {
                name: 'iphone',
                color: 'silver',
                params: '128gb'
            },
            price: '700000',
            count: 1.
        },
    ];


    return (
        <section className={style.main}>
            <div className={style.tableHeader}>
                <div></div>
                <div>
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
                <div>
                    Стоимость
                </div>
                <div></div>
            </div>
            {
                data.map(el => {
                    return (
                        <div className={style.tableItem}>
                            <div className={style.imgContainer}>
                               <img src={check} alt="check" /> 
                            </div>
                            
                            <div>
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
                            <div>
                                Стоимость
                            </div>
                            <div className={style.imgContainer}>
                                <img src={cross} alt="delete" />
                            </div>
                        </div>
                    )
                })
            }
        </section>
    );
};


export default ProductsInCartTable;