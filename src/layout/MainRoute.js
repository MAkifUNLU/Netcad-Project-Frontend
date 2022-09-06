import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Login = React.lazy(() => import('../pages/Login'));
const ShoppingCartPage = React.lazy(() => import('../pages/ShoppingCartPage'));

export const MainRoutes = [
    <Routes>
        <Route key="homeroute" exact path={`/`} element={<Home />} />,
        <Route key="aboutroute" exact path={`/about`} element={<About />} />,
        <Route key="loginpageroute" exact path={`/login`} element={<Login />} />,
        <Route key="cartpageroute" exact path={`/cart`} element={<ShoppingCartPage />} />,
    </Routes>
    
];

// const parseUrlParams = (Comp) => {
//     return <Comp />
// }