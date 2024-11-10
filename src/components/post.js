import React from "react";
import PostFooter from "./postFooter";
import '../css/post.css'
import { useNavigate } from "react-router-dom";

function Post(props) {

    const navigate = useNavigate();

    const handleBmclick = (event) => {
        let isbookmarked = false;
        if (event.target.tagName === 'svg') {
            isbookmarked = event.target.classList.toggle('bookmarked');
        }else if(event.target.tagName === 'path'){
            isbookmarked = event.target.parentNode.classList.toggle('bookmarked');
        }
    }

    return (
        <div className="post-card">
            <header className="post-card-header" onClick={(event) => handleBmclick(event)   }>
                <div className="source-box">
                    <img src={props.news.sourceIcon} alt="" className="source-icon" />
                    <h4 className="source-name">{props.news.sourceName}</h4>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="bookmark-icon">
                    <path d="M6 2h12a2 2 0 0 1 2 2v16l-10-6-10 6V4a2 2 0 0 1 2-2z" />
                </svg>
            </header>
            <div className="news-content" onClick={() => {
                navigate(`/article/${props.news.newsID}`);
            }}>
                <img src={props.news.sourceImage} alt="" className="news-image" />
                <h3 className="news-heading" >{props.news.sourceTitle}</h3>
                <p className="news-description">{props.news.sourceDescription}</p>
            </div>
            <PostFooter likes={props.news.likes} reads={props.news.reads} />
        </div>
    )


}

export default Post;