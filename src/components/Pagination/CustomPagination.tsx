import styles from './Pagination.module.scss';


type Props = {
    pagesCount:number,
    page: number,
    setPage: (pageNumber: number) => void
}


const CustomPagination = ({
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
            {
               pagesCount > 1 &&
               <>
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
               </> 
            }
        </section>
    );
};


export default CustomPagination;