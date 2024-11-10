import '../css/sideMenu.css'
import { logout } from '../utils/handleLogin';
import { Link } from 'react-router-dom';
import { highlightMainMenuItem } from '../utils/utils';

function SideMenu(props) {

    return (
        <div className="side-menu-box">
            <header className="side-menu-header">
                <img src={props.userImage} alt="" className="menu-profile-pic" />
                <h3>{props.userName}</h3>
                <img src="/icons/remove.png" alt="cut" className="menu-cut-icon" onClick={() => props.setSideMenu(false)} />
            </header>
            <div>
                <ul className="side-menu-items">
                    <li className="side-menu-item">
                        <img src="/icons/explore.png" alt="" className="side-menu-item-icon" />
                        <Link to={'/'} className='side-menu-item' onClick={() => window.innerWidth > 769 ? highlightMainMenuItem(0) : null}>Explore</Link>
                    </li>
                    <li className="side-menu-item">
                        <img src="/icons/articles.png" alt="" className="side-menu-item-icon" />
                        <Link to={'/articles'} className='side-menu-item' onClick={() => window.innerWidth > 769 ? highlightMainMenuItem(2) : null}>Articles</Link>
                    </li>
                    <li className="side-menu-item">
                        <img src="/icons/notification.png" alt="" className="side-menu-item-icon" />
                        <span>Notifications</span>
                    </li>
                    <li className="side-menu-item">
                        <img src="/icons/feedback.png" alt="" className="side-menu-item-icon" />
                        <span>Feedback</span>
                    </li>
                </ul>
            </div>
            <div className="menu-logout" onClick={() => logout()}>Logout</div>
        </div>
    )

}

export default SideMenu;