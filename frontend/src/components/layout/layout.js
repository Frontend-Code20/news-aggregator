import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";

import SideBar from "../sideBar/sideBar";
import MainMenu from "./mainMenu";
import MobileHeadMenu from "../layout/mobileHeadMenu";
import MobileBottonMenu from "./mobileBottonMenu";

import { getToken } from "../../utils/utils";

function Layout() {

    const navigate = useNavigate();

    useEffect(() => {


        const token = getToken();
        if(!token){
            // navigate('/login')
        }

    }, [navigate]);

    return (
        <>
            <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-rows-1 w-full h-full overflow-hidden relative">
                <div className="w-full fixed top-0 bg-Gunmetal z-10 xl:bg-cyan-300 xl:static">
                    {window.innerWidth > 1024 ? <SideBar /> : <MobileHeadMenu />}
                </div>
                <div className="relative lg:col-span-4 overflow-hidden lg:h-full bg-Gunmetal pt-10 xl:pt-0">
                    <Outlet />
                    {window.innerWidth > 768 ? <MainMenu /> : <MobileBottonMenu />}
                </div>
            </div>
        </>
    )

}

export default Layout;