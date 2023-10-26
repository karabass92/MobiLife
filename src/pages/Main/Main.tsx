import { Fragment } from 'react';


import LinkButton from '../../components/Button/LinkButton/LinkButton';
import DefaultButton from '../../components/Button/DefaultButton/DefaultButton';


const Main = () => {
    return (
        <Fragment>
            Main
            <LinkButton text='LinkButton' link='/shop' width={200} height={50} />
            <DefaultButton text='DefaultButton' link='/shop' width={200} height={50} />
        </Fragment>
    )
};


export default Main;