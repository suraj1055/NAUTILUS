import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import Samplepage from '../../sample/samplepage';

const Default = () => {

    return (
        <Fragment>
            <Breadcrumb parent="Dashboard" title="Default" />

            <Samplepage />

        </Fragment>
    );
};

export default Default;