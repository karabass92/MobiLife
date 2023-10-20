import { useState } from 'react';
import search from '../../assets/img/Header/search.svg';
import style from './Search.module.scss';


const Search = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={style.searchContainer}>
            <input 
                type="text" 
                placeholder='Поиск'
                onBlur={() => setIsOpen(false)}
                className={isOpen ? style.visible : style.hidden} />
            <img 
                src={search} 
                alt="search" 
                onClick={() => setIsOpen(!isOpen)} />
        </div>
    );
};


export default Search;