import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SixStepStudy from './components/sixstepstudy/SixStepStudy';

import App from "./components/app";

// Import custom Components 
import Default from './components/dashboard/defaultCompo/default';

// pages 
import SignIn from './pages/login';
import Signup from './pages/signup';
import ResetPwd from './pages/resetPwd';
import Activate from './pages/Activate';
import ResetPwdCofirm from './pages/ResetPwdCofirm';

const Root = () => {

    return (
        <div className="App">
                <BrowserRouter basename={`/`}>
                    <Switch>

                        <Route exact path='/' render={() => {
                            return (<Redirect to="/login" />)
                        }} />

                        <Route exact path='/endless' render={() => {
                            return (<Redirect to="/login" />)
                        }} />

                        <Route path="/login" component={SignIn} />

                        <Route path="/signup" component={Signup} />

                        <Route path="/reset-password" component={ResetPwd} />

                        <Route path="/activate/:uid/:token" component={Activate} />

                        <Route path="/password/reset/:uid/:token" component={ResetPwdCofirm} />

                        <App>
                            <Route exact path="/sixstepstudy/sixstepstudy" component={SixStepStudy} />

                            <Route path="/dashboard/default" component={Default} />
                        </App>

                    </Switch>
                </BrowserRouter>
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));
