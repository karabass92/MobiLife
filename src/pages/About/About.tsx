import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import style from './About.module.scss';


const About = () => {
    return (
        <main className={style.main}>
            <BreadCrumbs header='О нас' />
            About
        </main>
    )
};


export default About;