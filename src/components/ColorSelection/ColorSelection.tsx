import { useEffect } from 'react';
import { IColor } from '../../interfaces/interfaces';
import style from './ColorSelection.module.scss';



type Props = {
    colors: IColor[],
    color: string,
    setColor: Function
}


const ColorSelection = ({
    colors, 
    color, 
    setColor
}: Props) => {

    useEffect(() => {
        setColor(colors[0].name);
    }, []);

    return (
        <div className={style.main}>
            <h3>Выбор цвета:</h3>
            <div className={style.colorArray}>
                {
                    colors.map(el => {
                        return (
                            <div 
                                key={el.code} 
                                className={
                                    color === el.name 
                                    ? `${style.itemActive}`
                                    : `${style.item}`
                                }
                                onClick={() => setColor(el.name)} >
                                <div style={{
                                    display: 'block',
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: el.code,
                                    borderRadius: '50%',
                                    border: '0.5px solid grey'    
                                }}></div>
                                <div style={{textAlign: 'center'}}>
                                    {el.name}
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    );
};


export default ColorSelection;