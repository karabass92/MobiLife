import { useState } from 'react';
import style from './ProductFilter.module.scss';
import { categoriesApi } from '../../store/api/categoriesApi';


type Props = {
    categoryId: number,
    setCategoryId: (category: number) => void,
    setPage: (pageNumber: number) => void
}


const ProductFilter = ({
    categoryId,
    setPage,
    setCategoryId
}: Props) => {

    const {
        data: categories, 
        isError: isErrorCategories, 
        isLoading: isLoadingCategories
    } = categoriesApi.useGetAllCategoriesQuery('');

    const [open, setOpen] = useState<boolean>(false);

    if(isErrorCategories) return <h1>Error</h1>
    if(isLoadingCategories) return <h1>Loading</h1>

    return (
        <section className={style.main}>
            <div className={`${style.categoriesButton} ${(!open) || style.sortButtonItemActive}`} 
                onClick={()=> setOpen(!open)}>
                Категории
            </div>
            <div className={`${style.sortButtonContainer} ${!open || style.visible}`}>
                <div className={`${style.sortButtonItem} ${categoryId === 0 && style.sortButtonItemActive}`}
                    onClick={() => {
                        setCategoryId(0)
                        setPage(1)
                        setOpen(false)
                    }}>
                    <span>Все</span>
                </div>
                    {
                        categories?.results.map(el => {
                            return (
                                <div 
                                    key={el.id}
                                    className={`${style.sortButtonItem} ${categoryId === el.id && style.sortButtonItemActive}`}
                                    onClick={() => {
                                        setCategoryId(el.id)
                                        setPage(1)
                                        setOpen(false)
                                    }}>
                                    <span>{el.name_category}</span>
                                </div>
                            )
                        })
                    }
            </div>
        </section>
    );
};


export default ProductFilter;