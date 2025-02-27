import { setNumberFormat } from '../../utils/utils';
import LikeButton from '../buttons/likeButton';

function ViewArticleFooter({ totalLikes, totalReads, totalComments, newsID }) {

    const likes = setNumberFormat(totalLikes);
    const reads = setNumberFormat(totalReads);
    const commentsLength = setNumberFormat(totalComments);

    return (
        <footer className="flex py-4 box-border ps-4 border-b">
            <div className="flex gap-10">
                <div className="flex gap-1">
                    <LikeButton newsID={newsID} />
                    <span>{likes}</span>
                </div>
                <div className="flex gap-1">
                    <img src="/icons/read.png" alt="" className="h-6 w-6" />
                    <span>{reads}</span>
                </div>
                <div className="flex gap-1">
                    <span>{commentsLength}</span>
                    <span>Comments</span>
                </div>
            </div>
        </footer>
    )
}

export default ViewArticleFooter;
