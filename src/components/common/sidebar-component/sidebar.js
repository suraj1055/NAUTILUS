import React, { Fragment } from 'react';
import { MENUITEMS } from '../../../components/common/sidebar-component/menu';
import { Link } from 'react-router-dom';
import { translate } from 'react-switch-lang';

const Sidebar = (props) => {

    // Click Toggle menu
    const toggletNavActive = (item) => {
        if (!item.active) {
            MENUITEMS.forEach(a => {
                if (MENUITEMS.includes(item))
                    a.active = false
                if (!a.children) return false
                a.children.forEach(b => {
                    if (a.children.includes(item)) {
                        b.active = false
                    }
                    if (!b.children) return false
                    b.children.forEach(c => {
                        if (b.children.includes(item)) {
                            c.active = false
                        }
                    })
                })
            });
        }
        item.active = !item.active
    }

    return (
        <>

        </>
    )

    }

    export default Sidebar;
