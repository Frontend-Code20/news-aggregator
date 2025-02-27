import { Link } from "react-router";

function MobileBottonMenu(props){

    return(
        <div className="flex h-10 absolute bottom-0 justify-evenly w-full bg-darkNavyBlue items-center">
            <Link to={'/'}><img src="/icons/explore.png" alt="" className="h-6 w-6" /></Link>
            <Link to={'/search'}><img src="/icons/search.png" alt="" className="h-6 w-6" /></Link>
            <Link to={'articles'}><img src="/icons/articles.png" alt="" className="h-6 w-6" /></Link>
            <Link to={'profile'}><img src="/icons/account.png" alt="" className="h-6 w-6" /></Link>
        </div>
    )
}

export default MobileBottonMenu;