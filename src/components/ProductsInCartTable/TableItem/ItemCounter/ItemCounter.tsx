import style from './ItemCounter.module.scss';


type Props = {
    count: number
}


const ItemCounter = ({
    count
}: Props) => {
    return (
        <div className={style.main}>
            <button 
                disabled={count <= 1}
                onClick={() => count--} >
                    -
            </button>
            <span>{count}</span>
            <button
                disabled={count >= 9}
                onClick={() => count++} >
                    +
            </button>
        </div>
    );
};


export default ItemCounter;