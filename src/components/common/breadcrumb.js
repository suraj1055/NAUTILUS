import React, { Fragment } from 'react';
import { Home } from 'react-feather';
import { Link } from 'react-router-dom';

const Breadcrumb = props => {
    const breadcrumb = props;

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col">
                            <div className="page-header-left" style={{marginLeft:"-15px"}}>                               
                                <ol className="breadcrumb ">
                                    <li className="breadcrumb-item">
                                        <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                                            <Home />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active">{breadcrumb.parent}</li>                        
                                </ol>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Breadcrumb;
