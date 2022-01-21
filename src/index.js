import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SixStepStudy from './components/sixstepstudy/SixStepStudy';

// ** Import custom components for redux **
import { Provider } from 'react-redux';
import store from './store/store';
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
                <Provider store={store}>
                    <BrowserRouter basename={`/`}>
                        <Switch>

                            <Route exact path='/' render={() => {
                                return (<Redirect to={`${process.env.PUBLIC_URL}/login`} />)
                            }} />

                            <Route exact path='/endless' render={() => {
                                return (<Redirect to={`${process.env.PUBLIC_URL}/login`} />)
                            }} />

                            <Route path={`${process.env.PUBLIC_URL}/login`} component={SignIn} />

                            <Route path={`${process.env.PUBLIC_URL}/signup`} component={Signup} />

                            <Route path={`${process.env.PUBLIC_URL}/reset-password`} component={ResetPwd} />

                            <Route path={`${process.env.PUBLIC_URL}/activate/:uid/:token`} component={Activate} />

                            <Route path={`${process.env.PUBLIC_URL}/password/reset/:uid/:token`} component={ResetPwdCofirm} />

                            <App>
                                <Route exact path={`${process.env.PUBLIC_URL}/sixstepstudy/sixstepstudy`} component={SixStepStudy} />

                                <Route path={`${process.env.PUBLIC_URL}/dashboard/default`} component={Default} />
                            </App>

                        </Switch>
                    </BrowserRouter>
                </Provider>
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));
