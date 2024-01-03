import MainBanner from '../../components/MainBanner/MainBanner'
import NewProducts from '../../components/NewProducts/NewProducts'
import ImportantDetails from '../../components/ImportantDetails/ImportantDetails'
import style from './Main.module.scss'


const Main = () => {
    return (
        <main className={style.main}>
            <MainBanner />
            <NewProducts />
            <ImportantDetails />
        </main>
    )
}


export default Main