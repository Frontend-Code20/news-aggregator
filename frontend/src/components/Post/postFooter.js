import LikeButton from '../buttons/likeButton';
import ShareButton from '../buttons/shareButton';

import { setNumberFormat } from '../../utils/utils';

function PostFooter({likes, reads, newsID}) {

    const likeFormat = setNumberFormat(likes);
    const readFormat = setNumberFormat(reads);

    return (
        <div className="flex justify-around py-3" >
            <div className="flex gap-2" id='btn'>
                <LikeButton newsID={newsID} />
                <h5>{likeFormat}</h5>
            </div>
            <div className="flex gap-2">
                <img src="/icons/read.png" alt="" className="h-5 w-5" />
                <h5>{readFormat}</h5>
            </div>
            {/* <img src="/icons/share.png" alt="" className="h-5 w-5 cursor-pointer" /> */}
            <ShareButton newsID={newsID} />
            <span>Comment</span>
        </div>
    )
}

export default PostFooter;