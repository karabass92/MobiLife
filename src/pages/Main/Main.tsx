import style from './Main.module.scss';


import LinkButton from '../../components/Button/LinkButton/LinkButton';
import DefaultButton from '../../components/Button/DefaultButton/DefaultButton';
import ProductCard from '../../components/ProductCard/ProductCard';
import img from '../../assets/c88f9f97fa103a420dd009af5cc54568.png'


const Main = () => {
    return (
        <main className={style.main}>
            Main
            <LinkButton text='LinkButton' link='/shop' width={200} height={50} />
            <DefaultButton text='DefaultButton' link='/shop' width={200} height={50} />
            <div>
                <ProductCard name='наушники епт' price='много денег' id={1} img={img} />
            </div>
        </main>
    )
};


export default Main;