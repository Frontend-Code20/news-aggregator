import { useEffect, useState } from "react";
import BookmarkButton from "../buttons/bookmarkButton";
import { useSelector } from "react-redux";

function PostHeader({ sourceIcon, sourceName, newsID }) {

    const { bookmarksList } = useSelector((state) => state.bookmarksList);

    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {

        const hasBookmarked = bookmarksList.some(bookmark => bookmark.newsID === newsID);
        if(hasBookmarked){
            setIsBookmarked(hasBookmarked);
        }
        // console.log(bookmarksList);
        

    }, [bookmarksList])
        
    return (
        <header className="flex justify-between items-center box-border p-2">
            <div className="flex gap-3 items-center">
                <img src={sourceIcon} alt="" className="w-6 h-6 rounded-full" />
                <h4 className="">{sourceName}</h4>
            </div>
            <BookmarkButton newsID={newsID} active={isBookmarked} />
        </header>
    )
}

export default PostHeader;