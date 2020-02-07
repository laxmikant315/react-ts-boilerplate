import React, { lazy } from "react";
import {
    Route
} from "react-router-dom";

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopContainer = lazy(() => import('./pages/shop/shop.container'));




const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/shop",
        component: ShopContainer,
        routes: [
            {
                path: "/shop/bus",
                component: Bus
            },
            {
                path: "/shop/cart",
                component: Cart
            }
        ]
    }
];

function RouteWithSubRoutes(route: any) {
    const { path, routes, component, ...otherProps } = route;
    return (
        <Route
            path={path}
            {...otherProps}
            render={props => (
                <route.component {...props} routes={routes} />
            )}
        />
    );
}


function Bus() {
    return <h3>Bus</h3>;
}

function Cart() {
    return <h3>Cart</h3>;
}

export { routes, RouteWithSubRoutes }