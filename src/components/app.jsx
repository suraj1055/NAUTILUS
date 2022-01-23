import React,{ Fragment } from 'react';
import Header from './common/header-component/header';
import Sidebar from './common/sidebar-component/sidebar';
// import Footer from './common/footer';
import ThemeCustomizer from './common/theme-customizer'
import Loader from './common/loader';

const App = (props) => {
        return (
            <Fragment>
                <Loader />
                <div className="page-wrapper">
                    <div className="page-body-wrapper">
                        <Header />
                        <Sidebar />
                        <div className="page-body">
                            { props.children }
                        </div>
                        {/* <Footer /> */}
                        <ThemeCustomizer />
                    </div>
                </div>
            </Fragment>
        );
}

export default App;