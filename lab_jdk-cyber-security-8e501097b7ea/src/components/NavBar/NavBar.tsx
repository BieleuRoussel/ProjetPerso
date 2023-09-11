import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {useState} from "react";
import {SidebarData} from "./SidebarData";
import {useTranslation} from "react-i18next";
import "./NavBar.css";
import {IconContext} from "react-icons";

function NavBar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const {t} = useTranslation();

    return (
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <Link className="menu-bars" to="#">
                    <FaIcons.FaBars onClick={showSidebar}/>
                    <span className="text-light title">{t('title')}</span>
                </Link>
                <Link className="d-flex menu-bars flex-column  pe-2 align-items-center" to="#">
                    <FaIcons.FaUser/>
                    <span className="text-light fs-6">{t('title')}</span>
                </Link>

            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose onClick={showSidebar}/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{t(item.title)}</span>
                                </Link>
                            </li>
                        );
                    })}

                </ul>
            </nav>

        </IconContext.Provider>
    );

}

export default NavBar;
