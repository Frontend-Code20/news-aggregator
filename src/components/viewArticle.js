import ViewArticleHeader from "./viewArticleHeader";
import ViewArticleFooter from './viewArticleFooter';
import { newsList } from "../model/db";
import Comments from "./comments";
import '../css/viewArticle.css'
import { useParams } from "react-router-dom";

function ViewArticle(props) {

    const {id} = useParams();
    const news = newsList.find(n => n.newsID ===  Number(id));

    return (
        <div className="view-article-container">
            <ViewArticleHeader sourceName={news.sourceName} sourceImage={news.sourceIcon} />
            <div className="article-content">
                <img src={news.sourceImage} alt="" />
                <h1 className="article-title">{news.sourceTitle}</h1>
                <p className="full-article">{news.fullArticle}</p>
            </div>
            <ViewArticleFooter likes={news.likes} reads={news.reads} comments={news.comments} />
            <Comments commentsList={news.comments}/>
        </div>
    )
}

export default ViewArticle;