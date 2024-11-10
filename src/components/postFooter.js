import { setNumberFormat } from '../utils/utils';
import '../css/post.css'
import { useState } from 'react';


function PostFooter(props) {

    const [likes, setLikes] = useState(props.likes);

    const likeFormat = setNumberFormat(likes);
    const readFormat = setNumberFormat(props.reads);

    const HandleLike = (event) => {
        let isliked = false     
        if (event.target.tagName === 'svg') {
            isliked = event.target.classList.toggle('liked');
        }else if(event.target.tagName === 'path'){
            isliked = event.target.parentNode.classList.toggle('liked');
        }
        setLikes((prev) => isliked ? prev + 1 : prev - 1 );
    }

    return (
        <div className="post-footer" onClick={(event) => HandleLike(event)}>
            <div className="like-box" id='btn'>
                {/* <img src="/icons/like.png" alt="" className="like-icon" /> */}
                <button className="like-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </button>
                <h5>{likeFormat}</h5>
            </div>
            <div className="like-box">
                <img src="/icons/read.png" alt="" className="read-icon" />
                <h5>{readFormat}</h5>
            </div>
            <img src="/icons/share.png" alt="" className="share-icon" />
            <span>Comment</span>
        </div>
    )
}

export default PostFooter;