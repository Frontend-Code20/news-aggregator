import { Link } from 'react-router';

function SideMenu(props) {

    return (
        <div className="w-full bg-darkNavyBlue relative text-white">
            <header className="flex w-full justify-center items-center flex-col h-44 gap-2">
                <img src={props.userImage} alt="" className="h-16 w-16 rounded-full" />
                <h3>{props.userName}</h3>
            </header>
            <div>
                <ul className="flex flex-col gap-4">
                    <li className="flex items-center w-full box-border px-4 gap-2">
                        <img src="/icons/explore.png" alt="" className="h6 w-6" />
                        <Link to={'/'} className='side-menu-item' onClick={() => window.innerWidth > 769 ? "" : null}>Explore</Link>
                    </li>
                    <li className="flex items-center w-full box-border px-4 gap-2">
                        <img src="/icons/articles.png" alt="" className="h6 w-6" />
                        <Link to={'/articles'} className='side-menu-item' onClick={() => window.innerWidth > 769 ? "" : null}>Articles</Link>
                    </li>
                    <li className="flex items-center w-full box-border px-4 gap-2">
                        <img src="/icons/notification.png" alt="" className="h6 w-6" />
                        <span>Notifications</span>
                    </li>
                    <li className="flex items-center w-full box-border px-4 gap-2">
                        <img src="/icons/feedback.png" alt="" className="h6 w-6" />
                        <span>Feedback</span>
                    </li>
                </ul>
            </div>
            <div className="w-full text-center py-4" onClick={() => {}}>Logout</div>
            <img src="/icons/remove.png" alt="" className="w-6 h-6 absolute top-2 right-4" onClick={() => props.setSideMenu(false)} />
        </div>
    )

}

export default SideMenu;