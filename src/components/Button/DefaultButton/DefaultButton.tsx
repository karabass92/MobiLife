import { NavLink } from "react-router-dom";
import style from './DefaultButton.module.scss';


type Props = {
    width: number,
    height: number,
    link: string,
    text: string,
};


const DefaultButton = ({
    width,
    height,
    text,
    link,
}: Props) => {
    return (
        <NavLink 
            to={link} 
            className={style.main} 
            style={{
                width: width, 
                height: height
            }} >
            <div>
                <span>
                    {text}
                </span>
            </div>
        </NavLink>
    );
};


export default DefaultButton;