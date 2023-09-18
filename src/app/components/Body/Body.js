import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AboutUs } from './AboutUs';
import {User} from './User';
import { Product } from './Product';
import { Gallery } from './Product/Gallery';
import { PageNotFound } from './PageNotFound';

const Body = () => {

    return <Switch>
        <Route path={`/user`} component={User} />   
        <Route path={`/product`} component={Product} />   
        <Route exact path={`/about-us`} component={AboutUs} />
        <Route exact path={`/customer-service`} component={PageNotFound} />
        <Route exact path={`/order-returns`} component={PageNotFound} />
        <Route exact path={`/privacy-policy`} component={PageNotFound} />
        <Route exact path={`/`} component={Gallery} />
        <Route exact path={`/*`} component={PageNotFound} />
    </Switch>
}

export default Body;