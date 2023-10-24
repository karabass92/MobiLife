import { Link } from 'react-router-dom'
import style from './BreadCrumbs.module.scss';


type Props = {
    header: string,
};


const BreadCrumbs = ({
    header,
}: Props) => {
    return (
        <div className={style.breadCrumbs}>
            <h1>{header}</h1>
            <div className={style.path}>
                <Link to={'/'}>Главная</Link> — <span>{header}</span>
            </div>
        </div>
    );
};


export default BreadCrumbs;