import React, { Fragment, useEffect } from 'react';

const ThemeCustomizer = () => {

    const primary_color = localStorage.getItem('primary_color');
    const secondary_color = localStorage.getItem('secondary_color');
    const layout_version = localStorage.getItem('layout_version');
    const sidebar_type = localStorage.getItem('wrapper')
    const body_sidebar_type = localStorage.getItem('bodyWrapper');
    const color = localStorage.getItem('color')

    useEffect(() => {

        //set layout_type
        // document.body.setAttribute('main-theme-layout', layout_type);
        // document.documentElement.dir = layout_type;

        //set sidebar wrapper
        if(sidebar_type === null && body_sidebar_type === null){
            
        }else{
            document.querySelector(".page-wrapper").className = 'page-wrapper ' + sidebar_type;
            document.querySelector(".page-body-wrapper").className = 'page-body-wrapper ' + body_sidebar_type;
        }

        
    }, [body_sidebar_type, color, layout_version, primary_color, secondary_color, sidebar_type]);

    // const toggle = () => {
    //     setModal(!modal)
    // }

    // const openCustomizer = () => {
    //     if (rightSidebar) {
    //         setRightSidebar(!rightSidebar)
    //         document.querySelector(".customizer-contain").classList.add('open');
    //         document.querySelector(".customizer-links").classList.add('open');
    //     }
    // }

    // const closeCustomizer = () => {
    //     setRightSidebar(!rightSidebar)
    //     document.querySelector(".customizer-contain").classList.remove('open');
    //     document.querySelector(".customizer-links").classList.remove('open');
    // }

    // const handleSidebarColor = (e) => {
    //     document.querySelectorAll(".sidebar-bg-settings li").forEach((item) => {
    //         item.classList.remove('active');
    //     });
    //     document.querySelector(".page-sidebar").className = 'page-sidebar ' + e.target.classList.value;
    //     e.target.classList.add('active');
    // }

    // const handleLayout = (layout) => {
    //     setLayout_type(layout)
    //     document.querySelectorAll(".main-layout li").forEach((item) => {
    //         item.classList.remove('active');
    //     });
    //     document.body.setAttribute('main-theme-layout', layout);
    //     document.documentElement.dir = layout;
    //     dispatch({ type: 'ADD_LAYOUT', payload: layout });
    // }

    // const handleSidebarSetting = (e) => {
    //     e.preventDefault();
    //     document.querySelectorAll(".sidebar-setting li").forEach((item) => {
    //         item.classList.remove('active');
    //     });
    //     document.querySelector(".page-sidebar").setAttribute('sidebar-layout', e.currentTarget.getAttribute('data-attr'));
    //     e.currentTarget.classList.add('active');
    //     dispatch({ type: 'ADD_SIDEBAR_SETTINGS', payload: e.currentTarget.getAttribute('data-attr') })
    // }

    // const handleCustomizerMix = (e) => {
    //     e.preventDefault();
    //     document.querySelectorAll(".customizer-mix li").forEach((item) => {
    //         item.classList.remove('active');
    //     });
    //     document.body.className = e.currentTarget.getAttribute('data-attr');
    //     e.currentTarget.classList.add('active');
    //     dispatch({ type: 'ADD_MIXlAYOUT', payload: e.currentTarget.getAttribute('data-attr') });
    // }

    // const handleSidebarType = (e, wrapper, bodyWrapper) => {
    //     e.preventDefault();
    //     document.querySelectorAll(".sidebar-type li").forEach((item) => {
    //         item.classList.remove('active');
    //     });
    //     document.querySelector(".page-wrapper").className = 'page-wrapper ' + wrapper;
    //     document.querySelector(".page-body-wrapper").className = 'page-body-wrapper ' + bodyWrapper;
    //     e.currentTarget.classList.add('active');
    //     dispatch({ type: 'ADD_SIDEBAR_TYPES', payload: { wrapper, bodyWrapper } })

    //     localStorage.setItem('wrapper', wrapper);
    //     localStorage.setItem('bodyWrapper', bodyWrapper);
    //     window.location.reload();
    // }

    // const colorChangeTheme = (value) => {

    //     if (value === 'light-1') {
    //         localStorage.setItem('color', 'color-1');
    //         localStorage.setItem('layout_version', 'light');
    //         localStorage.setItem('primary_color', '#4466f2');
    //         localStorage.setItem('secondary_color', '#1ea6ec');
    //     } if (value === 'light-2') {
    //         localStorage.setItem('color', 'color-2');
    //         localStorage.setItem('layout_version', 'light');
    //         localStorage.setItem('primary_color', '#0288d1');
    //         localStorage.setItem('secondary_color', '#26c6da');
    //     } if (value === 'light-3') {
    //         localStorage.setItem('color', 'color-3');
    //         localStorage.setItem('layout_version', 'light');
    //         localStorage.setItem('primary_color', '#8e24aa');
    //         localStorage.setItem('secondary_color', '#ff6e40');
    //     } if (value === 'light-4') {
    //         localStorage.setItem('color', 'color-4');
    //         localStorage.setItem('layout_version', 'light');
    //         localStorage.setItem('primary_color', '#4c2fbf');
    //         localStorage.setItem('secondary_color', '#2e9de4');
    //     } if (value === 'light-5') {
    //         localStorage.setItem('color', 'color-5');
    //         localStorage.setItem('layout_version', 'light');
    //         localStorage.setItem('primary_color', '#7c4dff');
    //         localStorage.setItem('secondary_color', '#7b1fa2');
    //     } if (value === 'light-6') {
    //         localStorage.setItem('color', 'color-6');
    //         localStorage.setItem('layout_version', 'light');
    //         localStorage.setItem('primary_color', '#3949ab');
    //         localStorage.setItem('secondary_color', '#4fc3f7');
    //     } if (value === 'dark-1') {
    //         localStorage.setItem('color', 'color-1');
    //         localStorage.setItem('layout_version', 'dark-only');
    //         localStorage.setItem('primary_color', '#4466f2');
    //         localStorage.setItem('secondary_color', '#1ea6ec');
    //     } if (value === 'dark-2') {
    //         localStorage.setItem('layout_version', 'dark-only');
    //         localStorage.setItem('primary_color', '#0288d1');
    //         localStorage.setItem('secondary_color', '#26c6da');
    //         localStorage.setItem('color', 'color-2');
    //     } if (value === 'dark-3') {
    //         localStorage.setItem('layout_version', 'dark-only');
    //         localStorage.setItem('primary_color', '#8e24aa');
    //         localStorage.setItem('secondary_color', '#ff6e40');
    //         localStorage.setItem('color', 'color-3');
    //     } if (value === 'dark-4') {
    //         localStorage.setItem('layout_version', 'dark-only');
    //         localStorage.setItem('primary_color', '#4c2fbf');
    //         localStorage.setItem('secondary_color', '#2e9de4');
    //         localStorage.setItem('color', 'color-4');
    //     } if (value === 'dark-5') {
    //         localStorage.setItem('layout_version', 'dark-only');
    //         localStorage.setItem('primary_color', '#7c4dff');
    //         localStorage.setItem('secondary_color', '#7b1fa2');
    //         localStorage.setItem('color', 'color-5');
    //     } if (value === 'dark-6') {
    //         localStorage.setItem('layout_version', 'dark-only');
    //         localStorage.setItem('primary_color', '#3949ab');
    //         localStorage.setItem('secondary_color', '#4fc3f7');
    //         localStorage.setItem('color', 'color-6');
    //     }
    //     window.location.reload();
    // }

    return (
        <Fragment>
            {/* <div className="customizer-links">
                <div className="nav flex-column nac-pills" id="c-pills-tab" role="tablist" aria-orientation="vertical">
                    <Nav tabs className="tab-list-bottom border-tab-primary">
                        <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                            
                            <NavLink className={activeTab1 == '1' ? 'active' : ''} onClick={() => setActiveTab1('1')}>
                                <div className="settings">
                                    <i className="icofont icofont-ui-settings" onClick={openCustomizer}></i>
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                            
                            <NavLink className={activeTab1 == '2' ? 'active' : ''} onClick={() => setActiveTab1('2')}>
                                <div className="settings color-settings">
                                    <i className="icofont icofont-color-bucket" onClick={openCustomizer}></i>
                                </div>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div> */}
        </Fragment>
    )
}

export default ThemeCustomizer
