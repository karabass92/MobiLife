import { Fragment } from 'react';


import LinkButton from '../../components/Button/LinkButton/LinkButton';
import DefaultButton from '../../components/Button/DefaultButton/DefaultButton';
import ProductCard from '../../components/ProductCard/ProductCard';


const Main = () => {
    return (
        <Fragment>
            Main
            <LinkButton text='LinkButton' link='/shop' width={200} height={50} />
            <DefaultButton text='DefaultButton' link='/shop' width={200} height={50} />
            <div>
                <ProductCard />
            </div>
        </Fragment>
    )
};


export default Main;