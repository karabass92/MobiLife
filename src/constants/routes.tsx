import About from "../pages/About/About";
import Cart from "../pages/Cart/Cart";
import Contacts from "../pages/Contacts/Contacts";
import Guarantee from "../pages/Guarantee/Guarantee";
import Main from "../pages/Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import Shop from "../pages/Shop/Shop";
import Product from "../pages/Product/Product";


const routes = [
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/shop',
        element: <Shop />
    },
    {
        path: '/guarantee',
        element: <Guarantee />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contacts',
        element: <Contacts />
    },
    {
        path: '/product/:productId',
        element: <Product />
    },
    {
        path: '/cart',
        element: <Cart />
    },
    {
        path: '*',
        element: <NotFound />
    },
];


export default routes;