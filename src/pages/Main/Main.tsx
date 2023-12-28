import MainBanner from '../../components/MainBanner/MainBanner'
import ImportantDetails from '../../components/ImportantDetails/ImportantDetails'
import style from './Main.module.scss'


const Main = () => {
    return (
        <main className={style.main}>
            <MainBanner />
            <div>
                NEW PRODUCTS
            </div>
            <ImportantDetails />
        </main>
    )
}


export default Main