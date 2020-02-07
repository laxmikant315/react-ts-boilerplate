import React from "react";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import shopContainer from "./pages/shop/shop.container";

const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/shop",
        component: shopContainer,
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

function Sandwiches() {
    return <h2>Sandwiches</h2>;
}

function Bus() {
    return <h3>Bus</h3>;
}

function Cart() {
    return <h3>Cart</h3>;
}

export { routes, RouteWithSubRoutes }