
function Comments({ commentsList = [] }) {

    const allComments = commentsList.map((comt, idx) => {
        return (
            <div key={'comment' + idx} className="">
                <div key={'cm-head' + idx} className="flex gap-1 items-center">
                    <img src={comt.userImage} alt="" className="h-6 w-6 rounded-full" />
                    <h4 className="comment-user-name">{comt.userName}</h4>
                </div>
                <p className="user-comment">{comt.comment}</p>
            </div>
        )
    }) || null;

    return (
        <div className="flex flex-col box-border px-4 py-5 gap-5">
            {allComments.length > 0 ? allComments :
                <div className="empty-comment-box">
                    <p>No comments</p>
                </div>
            }
            <form className='flex'>
                <div className="flex border border-Almond rounded-lg px-2 py-2">
                    <input type='text' className="bg-transparent outline-none" placeholder='Type your comment...' />
                    <img src='/icons/up-arrow.png' alt='' className="h-6 w-6 cursor-pointer" />
                </div>
            </form>
        </div>
    )

}


export default Comments;