import { Pagination } from '@mui/material';
import styles from './Pagination.module.scss';


type Props = {
    pagesCount:number,
    page: number,
    setPage: (pageNumber: number) => void
}


export const CustomPagination = ({
    pagesCount,
    page,
    setPage
}: Props) => {

    const pages = [1];

    if(pagesCount > 1) {
        for(let i = 2; i <= pagesCount; i++) pages.push(i)
    }

    return (
        <section className={styles.main}>
        <button 
            className={styles.paginationButton} 
            onClick={ () => setPage(--page)}
            disabled={page === 1} >
            {'<'}
        </button> 
        {pages.map((p) => {
            return (
                <button 
                    className={`${styles.paginationButton} ${p === page && styles.activePaginationButton}` } 
                    onClick={ () => setPage(p)}
                    key={p}>
                        {p}
                </button>
            )
        })}
        <button 
            className={styles.paginationButton} 
            onClick={ () => setPage(++page)}
            disabled={page === pagesCount} >
            {'>'}
        </button> 
    </section>
    );
};


export const MUIPagination = ({pagesCount, page, setPage}: Props) => {
    return (
        <section className={styles.main}>
            <Pagination 
                count={pagesCount}
                page={page}
                defaultPage={page}
                siblingCount={1}
                size={'large'}
                boundaryCount={1}
                shape='rounded'
                onChange={(_, page) => {setPage(page)}} />
        </section>
    );
};