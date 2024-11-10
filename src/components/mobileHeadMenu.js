import SideMenu from "./sideMenu"
import '../css/mobileMenu.css'
import { useState } from "react";
import { users } from "../model/db";

function MobileHeadMenu(props){

    const [sideMenu, setSideMenu] = useState(false);

    return(
        <div className="mobile-head-menu-box">
            <img src="/icons/menu.png" alt="menu" className="main-menu-icon" onClick={() => setSideMenu(true)} />
            <img src="/icons/notification.png" alt="notify" className="main-menu-ntf-icon" />
            {sideMenu ? <div className="mb-sd-menu-box"><SideMenu userName={users.userName} userImage={users.userImage} setSideMenu={setSideMenu} /></div>: null}
        </div>
    )
}

export default MobileHeadMenu;