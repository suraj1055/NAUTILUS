import React, { Fragment, useState, useEffect } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { useDispatch } from 'react-redux';

const ThemeCustomizer = () => {

    const primary_color = localStorage.getItem('primary_color');
    const secondary_color = localStorage.getItem('secondary_color');
    const layout_version = localStorage.getItem('layout_version');
    const sidebar_type = localStorage.getItem('wrapper')
    const body_sidebar_type = localStorage.getItem('bodyWrapper');
    const [activeTab1, setActiveTab1] = useState('1');
    const color = localStorage.getItem('color')
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'ADD_COSTOMIZER' });

        dispatch({
            type: 'ADD_COLOR',
            payload: {
                color,
                primary_color,
                secondary_color,
                layout_version,
            }
        })

        //set sidebar wrapper
        if(sidebar_type === null && body_sidebar_type === null){
            
        }else{
            document.querySelector(".page-wrapper").className = 'page-wrapper ' + sidebar_type;
            document.querySelector(".page-body-wrapper").className = 'page-body-wrapper ' + body_sidebar_type;
        }

        
    }, [body_sidebar_type, color, dispatch, layout_version, primary_color, secondary_color, sidebar_type]);

    return (
        <Fragment>
            <div className="customizer-links">
                <div className="nav flex-column nac-pills" id="c-pills-tab" role="tablist" aria-orientation="vertical">
                    <Nav tabs className="tab-list-bottom border-tab-primary">
                        <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                            {/* eslint-disable-next-line */}
                            <NavLink className={activeTab1 == '1' ? 'active' : ''} onClick={() => setActiveTab1('1')}>
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                            {/* eslint-disable-next-line */}
                            <NavLink className={activeTab1 == '2' ? 'active' : ''} onClick={() => setActiveTab1('2')}>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
        </Fragment>
    )
}

export default ThemeCustomizer
