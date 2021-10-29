import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { auth0 } from './data/config';
import { configureFakeBackend, authHeader, handleResponse } from "./services/fack.backend";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import SixStepStudy from './components/sixstepstudy/SixStepStudy';

// ** Import custom components for redux **
import { Provider } from 'react-redux';
import store from './store';
import App from "./components/app";
import { Auth0Provider } from '@auth0/auth0-react'

// Import custom Components 
import Default from './components/dashboard/defaultCompo/default';

// pages 
import SignIn from './pages/login';
import Signup from './pages/signup';
import ResetPwd from './pages/resetPwd';

//config data
import configDB from './data/customizer/config'

import Callback from './auth/callback'

// setup fake backend
configureFakeBackend();

const Root = () => {

    const abortController = new AbortController();


    useEffect(() => {

        const requestOptions = { method: 'GET', headers: authHeader() };
        fetch('/users', requestOptions).then(handleResponse)
        const color = localStorage.getItem('color')
        console.log(color);
        const layout = localStorage.getItem('layout_version') || configDB.data.color.layout_version
        document.body.classList.add(layout);
        console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
        console.disableYellowBox = true;
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/${color}.css`);

        return function cleanup() {
            abortController.abort();
        }

    }, [abortController]);

    return (
        <div className="App">
            <Auth0Provider domain={auth0.domain} clientId={auth0.clientId} redirectUri={auth0.redirectUri}>
                <Provider store={store}>
                    <BrowserRouter basename={`/`}>
                        <Switch>

                            <Route exact path='/' render={() => {
                                return (<Redirect to={`${process.env.PUBLIC_URL}/pages/login`} />)
                            }} />

                            <Route exact path='/endless' render={() => {
                                return (<Redirect to={`${process.env.PUBLIC_URL}/pages/login`} />)
                            }} />

                            <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={SignIn} />

                            <Route path={`${process.env.PUBLIC_URL}/pages/signup`} component={Signup} />

                            <Route path={`${process.env.PUBLIC_URL}/pages/resetPwd`} component={ResetPwd} />

                            <Route path={`${process.env.PUBLIC_URL}/callback`} render={() => <Callback />} />

                            <App>
                                <Route exact path={`${process.env.PUBLIC_URL}/sixstepstudy/sixstepstudy`} component={SixStepStudy} />

                                <Route path={`${process.env.PUBLIC_URL}/dashboard/default`} component={Default} />
                            </App>

                        </Switch>
                    </BrowserRouter>
                </Provider>
            </Auth0Provider>
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
