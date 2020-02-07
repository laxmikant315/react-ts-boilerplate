import React, { useEffect } from 'react';


import Button from '@material-ui/core/Button';

import { ShopStyle } from './shop.styles';
import { Switch, Link } from 'react-router-dom';
import { RouteWithSubRoutes } from '../../routes';

export const ShopPage = (props: any) => {


  const { collections, fetchCollectionsStart, routes } = props;

  useEffect(() => {
    fetchCollectionsStart();

  }, [fetchCollectionsStart]);

  return (
    <ShopStyle>
      <h1>Shop</h1>

      <Button variant="contained" color="primary">
        Hello World
    </Button>
      <ul>
        <li>
          <Link to="/shop/bus">Bus</Link>
        </li>
        <li>
          <Link to="/shop/cart">Cart</Link>
        </li>
      </ul>

      <Switch>
        {routes.map((route: any, i: number) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>

      {collections && collections.map((collection: any) => (
        <div key={collection.itemName}>
          <h2>{collection.itemName}</h2>
          <h3>${collection.itemPrice}</h3>
        </div>
      ))}
    </ShopStyle>

  );
};

export default ShopPage;
