import {
    Home,
    Lock
} from 'react-feather';

export const MENUITEMS = [
    {
        path:'/dashboard/default', title: 'Dashboard', icon: Home, type: 'link', badgeType: 'primary', active: false
    },
   
    {
        title: 'Authentication', icon: Lock, type: 'sub', active: false, children: [
            { path: '/pages/login', type: 'link', title: 'Login'},
            { path: '/pages/signup', type: 'link', title: 'Register'},
            { path: '/pages/resetPwd', type: 'link', title: 'Forget Password'}
        ]
    },

]
