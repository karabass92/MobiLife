import { Fragment } from 'react';
import { Link } from 'react-router-dom'
import style from './BreadCrumbs.module.scss';


type Props = {
    header: string,
    product?: string
};


const BreadCrumbs = ({
    header,
    product
}: Props) => {
    return (
        <div className={style.breadCrumbs}>
            <h1>{header}</h1>
            <div className={style.path}>
                <Link to={'/'}>Главная</Link>
                {
                    product
                    ?   <Fragment>
                            <Link to={'/shop'}>{` — ${header}`}</Link>
                            <span>{` — ${product}`}</span>
                        </Fragment>
                    : <span>{` — ${header}`}</span>
                }    
            </div>
        </div>
    );
};


export default BreadCrumbs;