import SideBar from "./sideBar";
import MainMenu from "./mainMenu";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MobileHeadMenu from "./mobileHeadMenu";
import '../css/index.css'
import { useEffect } from "react";
import MobileBottonMenu from "./mobileBottonMenu";

function Layout() {

    const navigate = useNavigate();

    useEffect(() => {

        if(!window.sessionStorage.getItem('token')){
            navigate('/login')
        }
    }, [navigate]);

    return (
        <>
            <div className="main-content">
                {window.innerWidth > 1024 ? <SideBar /> : <MobileHeadMenu />}
                <Outlet />
                {window.innerWidth > 768 ? <MainMenu /> : <MobileBottonMenu/> }
            </div>
        </>
    )

}

export default Layout;