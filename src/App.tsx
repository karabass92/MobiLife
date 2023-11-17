import { Routes, Route } from 'react-router-dom'
import routes from './constants/routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { v1 } from 'uuid';


const App = () => {

    if(!localStorage.getItem('id')) localStorage.setItem('id', v1());

    return (
        <div>
            <Header />
            <Routes>
                {
                    routes.map(route => <Route key={route.path} path={route.path} element={route.element} />)
                }
            </Routes>
            <Footer />
        </div>
    );
};


export default App;