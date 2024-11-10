import { Link } from "react-router-dom";
import '../css/mainMenu.css'
import { useEffect } from "react";
import { highlightMainMenuItem } from "../utils/utils";

function MainMenu(props) {

    useEffect(() => {
        highlightMainMenuItem(0);
    },[])

    return (
        <div className="main-menu-box">
            <nav>
                <ul className="main-menu-list">
                    <li><Link to={'/'} className="main-menu-item"  onClick={() => highlightMainMenuItem(0)}>Explore</Link></li>
                    <li><Link to={'/search'} className="main-menu-item" onClick={() => highlightMainMenuItem(1)}>Search</Link></li>
                    <li><Link to={'/articles'} className="main-menu-item" onClick={() => highlightMainMenuItem(2)}>Articles</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default MainMenu;