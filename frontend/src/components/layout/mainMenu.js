import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

function MainMenu(props) {

    const [active, setActive] = useState(1);
    const highlightMenuItem = (active) => {
        setActive(active)
    }

    return (
        <div className="absolute bottom-0 py-5 bg-cyan-800  w-full flex justify-center">
            <nav>
                <ul className="flex gap-3">
                    <li><Link to={'/'} className={`${active === 1 ? 'text-white': ''}` }  onClick={() => highlightMenuItem(1)}>Explore</Link></li>
                    <li><Link to={'/search'} className={`${active === 2 ? 'text-white': ''}`} onClick={() => highlightMenuItem(2)}>Search</Link></li>
                    <li><Link to={'/articles'} className={`${active === 3 ? 'text-white': ''}`} onClick={() => highlightMenuItem(3)}>Articles</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default MainMenu;