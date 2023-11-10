import styles from './Pagination.module.scss';


type Props = {
    pagesCount:number,
    page: number,
    setPage: Function
}


const Pagination = ({
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
    </section>
    );
};


export default Pagination;