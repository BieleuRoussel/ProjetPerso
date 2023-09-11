import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData =
    [
        {
            title: 'dashboard',
            path: '/',
            icon: <AiIcons.AiFillDashboard/>,
            cName: 'nav-text'
        },
        {
            title: 'risk',
            path: '/risk',
            icon: <IoIcons.IoIosBug/>,
            cName: 'nav-text'
        },
        {
            title: 'esa',
            path: '/esa',
            icon: <AiIcons.AiFillSecurityScan/>,
            cName: 'nav-text'
        },
        {
            title: 'framework',
            path: '/frameworks',
            icon: <AiIcons.AiFillApi/>,
            cName: 'nav-text'
        },
        {
            title: 'iso',
            path: '/iso',
            icon: <AiIcons.AiFillBook/>,
            cName: 'nav-text'
        },
        {
            title: 'centersecure',
            path: '/center-for-internet-security',
            icon: <AiIcons.AiFillCiCircle/>,
            cName: 'nav-text'
        },
        {
            title: 'cloudsecure',
            path: '/cloud-security-alliance',
            icon: <AiIcons.AiFillCloud/>,
            cName: 'nav-text'
        },
        {
            title: 'myorganisation',
            path: '/my-organisation',
            icon: <AiIcons.AiFillEnvironment/>,
            cName: 'nav-text'
        }

    ]
