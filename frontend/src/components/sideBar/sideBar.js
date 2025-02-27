import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import SideMenu from "./sideMenu";
import Bookmark from "../Post/bookMark";
import { fetchUserData } from "../../store/userReducer";
import Spinner from "../spinner";

function SideBar(props) {

    const [sideMenu, setSideMenu] = useState(false);

    const dispatch = useDispatch();

    const { userInfo, status, error } = useSelector((state) => state.userInfo)
    const sidebarSpinner = document.getElementById('sidebarSpinner')

    useEffect(() => {

        if (status === 'idle'){
            dispatch(fetchUserData());
        }

        if(status === 'loading'){
            sidebarSpinner?.classList.remove('hidden')
        }

        if(status === 'success'){
            sidebarSpinner?.classList.add('hidden')
        }
        
    }, [status])

    // const bookmarks = newsList.filter(n =>
    //     users.bookmarks.includes(n.newsID)
    // )

    return (
        <div className="w-full h-full border-r-2 text-white bg-harcoalBlue flex flex-col relative">
            {userInfo ? <div className="flex w-full flex-col justify-center items-center h-1/4 border-b-2 py-2">
                <img src={userInfo?.userImage} alt="profile" className="h-16 w-16 rounded-full" onClick={() => setSideMenu(true)} />
                <h3 className="side-bar-username">{userInfo?.userName}</h3>
            </div>: ''}
            {userInfo ? <div className="h-full flex flex-col">
                <h4 className="box-border font-bold ps-4 mt-3">Bookmarks</h4>
                <Bookmark setBookMarks={props.setBookMarks} />
            </div> : ''}
            {!userInfo ? <div className="w-full h-full flex justify-center items-center"> <Spinner size={'w-6 h-6'} id={'sidebarSpinner'} /> </div> : null}
            {sideMenu ? <SideMenu userName={userInfo?.userName} userImage={userInfo?.userImage} setSideMenu={setSideMenu} /> : ''}
            <img src="/icons/notification.png" className="w-6 h-6 absolute right-4 top-2 cursor-pointer" alt="Notification icon" title="Notification" />
        </div>
    )
}


export default SideBar;
