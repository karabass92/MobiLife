import { Pagination } from '@mui/material';
import styles from './Pagination.module.scss';


type Props = {
    pagesCount:number,
    page: number,
    setPage: (pageNumber: number) => void
}


const MUIPagination = ({pagesCount, page, setPage}: Props) => {
    return (
        <section className={styles.main}>
            {
                pagesCount > 1 &&
                <Pagination 
                    count={pagesCount}
                    page={page}
                    defaultPage={page}
                    siblingCount={1}
                    size={'large'}
                    boundaryCount={1}
                    shape='rounded'
                    onChange={(_, page) => {setPage(page)}} />
            }
        </section>
    );
};


export default MUIPagination;