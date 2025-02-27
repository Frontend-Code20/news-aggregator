import SideMenu from "../sideBar/sideMenu"
import { useState } from "react";
import { users } from "../../model/db";

function MobileHeadMenu(props){

    const [sideMenu, setSideMenu] = useState(false);

    return(
        <div className="flex bg-darkNavyBlue h-full justify-between items-center box-border px-4 py-2 relative">
            <img src="/icons/menu.png" alt="menu" className="w-6 h-6" onClick={() => setSideMenu(true)} />
            <img src="/icons/notification.png" alt="notify" className="w-6 h-6" />
            {sideMenu ? <div className=" absolute top-0 left-0  w-3/4 h-full z-10 bg-darkNavyBlue"><SideMenu userName={users.userName} userImage={users.userImage} setSideMenu={setSideMenu} /></div>: null}
        </div>
    )
}

export default MobileHeadMenu;