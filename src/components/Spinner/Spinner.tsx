import { RingLoader } from 'react-spinners'
import style from './Spinner.module.scss'


const Spinner = () => {
    return (
        <div className={style.main}>
            <RingLoader
                size={200}
                color='rgb(25, 177, 178)' />
        </div>
    )
}


export default Spinner