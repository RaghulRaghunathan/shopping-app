import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

const User = () => {
    const matchParams = useRouteMatch();

    return <Switch>
        <Route exact path={`${matchParams.path}/sign-in`} component={SignIn} />
        <Route exact path={`${matchParams.path}/sign-up`} component={SignUp} />
    </Switch>
}

export default User;