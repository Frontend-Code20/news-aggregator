import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import EmptyBookmark from "./emptyBookmark";
import BookmarkButton from "../buttons/bookmarkButton";

import { fetchBookmarkData } from "../../store/bookmarkReducer";

function Bookmark(props) {

    const { userInfo } = useSelector((state) => state.userInfo)
    const { bookmarksList, status} = useSelector((state) => state.bookmarksList)
    const [bookmarks, setBookmarks] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleItemClick = (newsID) => {
        navigate(`/article/${newsID}`)
    }

    useEffect(() => {

        if(status === 'idle'){
            dispatch(fetchBookmarkData(userInfo?.bookmarks))
        }

        if(status === 'success'){
            setBookmarks(bookmarksList);
        }
        
    }, [status, bookmarksList])

    const newbookmarksList = bookmarks.map((bookmark, idx) => {
        return (
            <div className="flex justify-between items-center box-border px-3 py-2 border-b" key={idx}>
                <div className="flex gap-3 items-center">
                    <img src={bookmark.sourceImage} alt="news source Icon" className="h-8 w-8 rounded-full" />
                    <div className="cursor-pointer" onClick={() => handleItemClick(bookmark.newsID)}>
                        <h3 className="">{bookmark.sourceName}</h3>
                        <p className="m-0 text-xs" >{bookmark.sourceTitle.length > 15 ? bookmark.sourceTitle.slice(0, 25) + '...' : bookmark.sourceTitle}</p>
                    </div>
                </div>
                <BookmarkButton active={true} newsID={bookmark.newsID} />
            </div>
        )
    })

    return (
        <div className="w-full h-full overflow-auto box-border pb-32 mt-3 scrollbar-y-2">
            {bookmarks.length === 0 ? <EmptyBookmark /> : newbookmarksList}
        </div>
    )
}


export default Bookmark;