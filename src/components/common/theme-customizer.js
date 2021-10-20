import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ThemeCustomizer = () => {

    const primary_color = localStorage.getItem('primary_color');
    const secondary_color = localStorage.getItem('secondary_color');
    const layout_version = localStorage.getItem('layout_version');
    const sidebar_type = localStorage.getItem('wrapper')
    const body_sidebar_type = localStorage.getItem('bodyWrapper');
    const configDB = useSelector(content => content.Customizer.customizer);
    const color = localStorage.getItem('color')
    const mix_layout = configDB.color.mix_layout;
    const [layout_type] = useState(configDB.settings.layout_type);
    const dispatch = useDispatch();
    const config_primary = configDB.color.primary_color;
    const config_secondary = configDB.color.secondary_color;
    const config_color = configDB.color.color;
    const config_layout_version = configDB.color.layout_version;
    configDB.settings.sidebar.wrapper = sidebar_type;
    configDB.settings.sidebar.bodyWrapper = body_sidebar_type;

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

        //set layout_type
        document.body.setAttribute('main-theme-layout', layout_type);
        document.documentElement.dir = layout_type;

        //set sidebar wrapper
        if(sidebar_type === null && body_sidebar_type === null){
            document.querySelector(".page-wrapper").className = 'page-wrapper ' + configDB.settings.sidebar.wrapper;
            document.querySelector(".page-body-wrapper").className = 'page-body-wrapper ' + configDB.settings.sidebar.bodyWrapper;
        }else{
            document.querySelector(".page-wrapper").className = 'page-wrapper ' + sidebar_type;
            document.querySelector(".page-body-wrapper").className = 'page-body-wrapper ' + body_sidebar_type;
        }

        //set sidebar setting
        document.querySelector(".page-sidebar").setAttribute('sidebar-layout', configDB.settings.sidebar_setting);

        //set colors
        document.body.className = mix_layout;


        if (localStorage.getItem('primary_color') == null || localStorage.getItem('secondary_color') == null || localStorage.getItem('color') == null || localStorage.getItem('layout_version') == null) {
            document.documentElement.className = config_color;
            localStorage.setItem('primary_color', config_primary)
            localStorage.setItem('secondary_color', config_secondary);
            localStorage.setItem('color', config_color);
            localStorage.setItem('layout_version', config_layout_version)
            dispatch({
                type: 'ADD_COLOR',
                payload: {
                    color: config_color,
                    primary_color: config_primary,
                    secondary_color: config_secondary,
                    layout_version: config_layout_version
                }
            })
        }

        if (sidebar_type === 'compact-wrapper' || configDB.settings.sidebar.wrapper === 'compact-wrapper') {
            document.querySelector(".compactLogo").className = 'compactLogo show';
        } else {
            document.querySelector(".compactLogo").className = 'compactLogo hide';
        }
    }, []);


    return (
        <Fragment>
            
        </Fragment>
    )
}

export default ThemeCustomizer;
