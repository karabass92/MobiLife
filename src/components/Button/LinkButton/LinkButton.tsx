import { NavLink } from "react-router-dom";
import style from './LinkButton.module.scss';


type Props = {
    width: number,
    height: number,
    link: string,
    text: string,
};


const LinkButton = ({
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


export default LinkButton;