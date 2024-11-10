import '../css/viewArticle.css'
import { setNumberFormat } from '../utils/utils';

function ViewArticleFooter(props){

    const likes = setNumberFormat(props.likes);
    const reads = setNumberFormat(props.reads);
    const commentsLength = setNumberFormat(props.comments.length);

    return(
        <footer className="view-article-footer">
            <div className="view-art-ft-box">
                <div className="ft-box">
                    <img src="/icons/like.png" alt="" className="ft-icon" />
                    <span>{likes}</span>
                </div>
                <div className="ft-box">
                    <img src="/icons/read.png" alt="" className="ft-icon" />
                    <span>{reads}</span>
                </div>
                <div className="ft-box">
                    <span>{commentsLength}</span>
                    <span>Comments</span>
                </div>
            </div>
        </footer>
    )    
}

export default ViewArticleFooter;
