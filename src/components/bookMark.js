import React from "react";
import '../css/bookmark.css'

function Bookmark(props) {

    const bookmarks = props.bookmarks || [];
    const bookmarksList = bookmarks.map((bm, idx) => {
        return (
            <div className="bookmark" key={idx}>
                <div className="bm-Name-Image-box">
                    <img src={bm.sourceImage} alt="" className="bookmark-item-image" />
                    <h3 className="bm-source-title">{bm.sourceTitle.length > 15 ? bm.sourceTitle.slice(0, 12) + '...' : bm.sourceTitle}</h3>
                </div>
                <img src="/icons/bookmark.png" alt="" className="bm-item-icon" />
            </div>
        )
    })

    return (
        <div className="bookmarks-list">
            {bookmarks.length === 0 ? <div className="empty-bm-list">
                <div className="empty-bm-box">
                    <img src="/icons/bookmarklarge.png" alt="" className="bm-large-icon" />
                    <h4>No Bookmarks</h4>
                    <p className="em-bm-text">Never miss out on important stories — bookmark your favorite news now and read them at your convenience!</p>
                </div>
            </div> : bookmarksList}
        </div>
    )
}


export default Bookmark;