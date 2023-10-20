import { Routes, Route } from 'react-router-dom'
import routes from './constants/routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const App = () => {
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