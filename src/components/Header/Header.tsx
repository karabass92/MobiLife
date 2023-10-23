import { useState } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Cart from '../Cart/Cart';
import Search from '../Search/Search';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import style from './Header.module.scss';


const Header = () => {

    const [burgerIsOpen, setBurgerIsOpen] = useState(false);

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
                    <BurgerMenu 
                        burgerIsOpen={burgerIsOpen} 
                        setBurgerIsOpen={setBurgerIsOpen} />
                </section>
            </header>
        </div>
    )
};


export default Header;