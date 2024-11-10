import { useNavigate } from 'react-router-dom';
import '../css/viewArticle.css'

function ViewArticleHeader(props) {

    const navigate = useNavigate();
    
    return (
        <header className="view-article-header">
            <div className="vw-art-hd-box">
                <img src="/icons/back-arrow.png" alt="" className="view-art-back-btn" onClick={() => {
                    navigate('/');
                }}/>
                <img src="" alt="" className="view-art-src-icon" />
                <h3 className="view-art-src-name">CNN</h3>
            </div>
            <img src="/icons/share.png" alt="" className="share-art-icon" />
        </header>
    )

}

export default ViewArticleHeader;