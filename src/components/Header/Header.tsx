import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Cart from '../Cart/Cart';
import Search from '../Search/Search';
import style from './Header.module.scss';


const Header = () => {
    return (
        <div className={style.container}>
            <header className={style.main}>
                <section className={style.leftSection}>
                    <Logo />
                    <Navigation />  
                </section>
                <section className={style.rightSection}>
                    <Search />
                    <Cart />
                </section>
            </header>
        </div>
    )
};


export default Header;