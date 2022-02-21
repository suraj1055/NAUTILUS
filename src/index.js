import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SixStepStudy from './components/sixstepstudy/SixStepStudy';
import App from "./components/app";
import { Provider } from 'react-redux';
import store from './store';

// Import custom Components 
import Dashboard from './components/dashboard/Dashboard';

// pages 
import SignIn from './pages/login';
import Signup from './pages/signup';
import ResetPwd from './pages/resetPwd';
import Activate from './pages/Activate';
import Sixstepstudy from './components/sixstepstudy/SixStepStudy'
import ResetPwdConfirm from './pages/ResetPwdConfirm';
import SessionGrid from './components/dashboard/SessionGrid';

const Root = () => {

    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter basename={`/`}>
                    <Switch>

                        <Route path="/login" component={SignIn} />

                        <Route path="/signup" component={Signup} />

                        <Route path="/reset-password" component={ResetPwd} />

                        <Route path="/activate/:uid/:token" component={Activate} />

                        <Route exact path='/email/reset/confirm/:uid/:token' component={ResetPwdConfirm} />

                        <App>
                            <Route path="/dashboard/mold" component={Dashboard} />

                            <Route path="/dashboard/session/:MoldId" component={SessionGrid} />

                            <Route exact path="/sixstepstudy/:SessionId/sixstepstudy" component={SixStepStudy} />
                        </App>

                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));
