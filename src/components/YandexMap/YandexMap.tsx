import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import mapData from '../../constants/yandexMap';
import { shopCordinates } from '../../constants/yandexMap';
import style from './YandexMap.module.scss';


const YandexMap = () => {
    return (
        <div className={style.mapContainer}>
            <YMaps>
                <Map defaultState={mapData} className={style.map}>
                    <Placemark geometry={shopCordinates.first} />
                    <Placemark geometry={shopCordinates.second} />
                </Map>
            </YMaps>
        </div>
    );
};


export default YandexMap;