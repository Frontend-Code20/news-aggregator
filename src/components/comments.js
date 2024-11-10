import '../css/comments.css';

function Comments(props) {

    const allComments = props.commentsList.map((comt, idx) => {
        return (
            <div key={'comment' + idx} className="comment">
                <div key={'cm-head' + idx} className="cm-head-box">
                    <img src={comt.userImage} alt="" className="comment-user-image" />
                    <h4 className="comment-user-name">{comt.userName}</h4>
                </div>
                <p className="user-comment">{comt.comment}</p>
            </div>
        )
    }) || null;

    return (
        <div className="comment-container">
            {allComments.length > 0 ? allComments :
                <div className="empty-comment-box">
                    <p>No comments</p>
                </div>
            }
            <div className='comment-box'>
                <input type='text' className='comment-input' placeholder='Type your comment...' />
                <img src='/icons/up-arrow.png' alt='' className='sent-comment-icon' />
            </div>
        </div>
    )

}

export default Comments;