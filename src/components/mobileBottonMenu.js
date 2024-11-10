import { Link } from "react-router-dom";
import '../css/mobileMenu.css'

function MobileBottonMenu(props){

    return(
        <div className="bottom-menu-box">
            <Link to={'/'}><img src="/icons/explore.png" alt="" className="botton-mene-icon" /></Link>
            <Link to={'/search'}><img src="/icons/search.png" alt="" className="botton-mene-icon" /></Link>
            <Link to={'articles'}><img src="/icons/articles.png" alt="" className="botton-mene-icon" /></Link>
            <Link to={'profile'}><img src="/icons/account.png" alt="" className="botton-mene-icon" /></Link>
        </div>
    )
}

export default MobileBottonMenu;