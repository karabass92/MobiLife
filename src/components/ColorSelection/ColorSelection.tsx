import { useEffect } from 'react';
import { IColor } from '../../interfaces/interfaces';
import style from './ColorSelection.module.scss';



type Props = {
    color: IColor
}


const ColorSelection = ({
    color
}: Props) => {

    return (
        <div className={style.main}>
            <h3>Цвет:</h3>
            <div className={style.colorArray}>
                <div className={style.item} >
                    <div style={{
                        display: 'block',
                        width: '20px',
                        height: '20px',
                        backgroundColor: color.color,
                        borderRadius: '50%',
                        border: '0.5px solid grey'    
                    }}></div>
                    <div style={{textAlign: 'center'}}>
                        {color.name_color}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ColorSelection;