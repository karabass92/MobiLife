import ImportantDetails from '../../components/ImportantDetails/ImportantDetails'
import style from './Main.module.scss'


const Main = () => {
    return (
        <main className={style.main}>
            <div>
                BANNER
            </div>
            <div>
                NEW PRODUCTS
            </div>
            <ImportantDetails />
        </main>
    )
}


export default Main