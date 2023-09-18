
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { PageNotFound } from '../PageNotFound';
import {Gallery} from './Gallery';
import {Chairs} from './Chairs';

const productJson = require('../../../../products.json');
const productTypes = [];

Object.keys(productJson).forEach(item1 => {
    const products = productJson[item1];
    products.forEach(item2 => {
        productTypes.push(item2);
    })
})

const Product = () => {
    const matchParams = useRouteMatch();

    return <Switch>
        {productTypes.map(item => <Route key={item.id} exact 
        path={`${matchParams.path}/${item.name}/${item.id}`} component={Gallery} />)}
        {productTypes.map(item => <Route key={item.id} exact 
        path={`${matchParams.path}/${item.name}/${item.id}/:productId/:colorId?`} component={Chairs} />)}
        {/* <Route exact path={`${matchParams.path}/chairs`} component={Chairs} /> */}
        <Route exact path={`${matchParams.path}`} component={Gallery} />
        <Route exact path={`${matchParams.path}/wishlist`} component={Gallery} />
        <Route exact path={`${matchParams.path}/cart`} component={Gallery} />
        <Route exact path={`/*`} component={PageNotFound} />
    </Switch>
}

export default Product;