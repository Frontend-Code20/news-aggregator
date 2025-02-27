import { useEffect, useState } from "react";
import { updateBookmark } from "../../store/bookmarkReducer";
import { useDispatch, useSelector } from "react-redux";

function BookmarkButton({ newsID, active }) {
    
    const [isActive, setIsActive] = useState(active);

    const { newsList } = useSelector((state) => state.newsList);
    
    const dispatch = useDispatch();

    const handleClick = () => {
        if (isActive) {
            setIsActive(false);
            dispatch(updateBookmark({ newsID, remove: true }))
        } else {
            setIsActive(true);
            const news = newsList.find(news => news.newsID === newsID)
            dispatch(updateBookmark({ newsID, remove: false, news }))
        }
        console.log(isActive);
    }

    useEffect(() => {

        setIsActive(active);

    }, [active])

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={`${isActive ? "violet" : "none"}`} stroke={`${isActive ? "violet" : "currentColor"}`} strokeWidth="1" className="cursor-pointer" onClick={handleClick}>
            <path d="M12 2h6a2 2 0 0 1 2 2v19l-8-6-8 6V4a2 2 0 0 1 2-2z" />
        </svg>
    )
}

export default BookmarkButton;