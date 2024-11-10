import SideMenu from "./sideMenu";
import { useState } from "react";
import Bookmark from "./bookMark";
import { newsList, users } from "../model/db";
import '../css/sideBar.css'

function SideBar(props) {

    const [sideMenu, setSideMenu] = useState(false);

    const bookmarks = newsList.filter(n =>
        users.bookmarks.includes(n.newsID)
    )   
    console.log(bookmarks);
    return (
        <div className="side-bar">
            <div className="side-bar-header">
                <img src={users.userImage} alt="profile" className="profile-image" onClick={() => setSideMenu(true)} />
                <h3 className="side-bar-username">{users.userName}</h3>
            </div>
            <div className="bookmark-box">
                <h4>Bookmarks</h4>
                <Bookmark bookmarks={bookmarks} setBookMarks={props.setBookMarks} />
            </div>
            {sideMenu ? <SideMenu userName={users.userName} userImage={users.userImage} setSideMenu={setSideMenu} /> : ''}
        </div>
    )
}


export default SideBar;
