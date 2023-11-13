import { Fragment, useState } from 'react';
import style from './ProductFilter.module.scss';
import { categoriesApi } from '../../store/api/categoriesApi';


type Props = {
    category: string,
    setCategory: (category: string) => void,
    setPage: (pageNumber: number) => void
}


const ProductFilter = ({
    category,
    setPage,
    setCategory
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
                <div className={`${style.sortButtonItem} ${category === '' && style.sortButtonItemActive}`}
                    onClick={() => {
                        setCategory('')
                        setPage(1)
                        setOpen(false)
                    }}>
                    Все
                </div>
                    {
                        categories?.results.map(el => {
                            return (
                                <div 
                                    key={el.id}
                                    className={`${style.sortButtonItem} ${category === el.name_category && style.sortButtonItemActive}`}
                                    onClick={() => {
                                        setCategory(el.name_category)
                                        setPage(1)
                                        setOpen(false)
                                    }}>
                                    {el.name_category}
                                </div>
                            )
                        })
                    }
            </div>
        </section>
    );
};


export default ProductFilter;