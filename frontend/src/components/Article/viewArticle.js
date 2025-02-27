import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

// Importing reusable components
import ViewArticleHeader from "./viewArticleHeader";
import Comments from "../Post/comments";
import ViewArticleFooter from './viewArticleFooter';

function ViewArticle() {

    const { id } = useParams();
    const { newsList } = useSelector((state) => state.newsList);

    const news = newsList.find(n => n.newsID === Number(id));
    const [newsData, setNewsData] = useState(news);

    const longTextRef = useRef(null)

    useEffect(() => {

        const news = newsList.find(n => n.newsID === Number(id));
        if(news){
            setNewsData(news)
        }

        if(longTextRef.current){
            longTextRef.current.innerHTML = newsData.fullArticle;
        }

    }, [newsList, id, newsData]);

    return (
        <div className="text-white overflow-auto h-full box-border pb-20 relative w-full flex flex-col">
            <ViewArticleHeader sourceName={newsData?.sourceName} sourceImage={newsData?.sourceIcon} newsID={newsData?.newsID} />
            <div className="w-full flex justify-center items-center mb-5 pt-20">
                <img src={newsData?.sourceImage} alt="" />
            </div>
            <div className="w-full box-border px-4 flex flex-col gap-3">
                <h1 className="text-3xl text-center">{newsData?.sourceTitle}</h1>
                <p className="text-justify" ref={longTextRef}>{newsData?.fullArticle}</p>
            </div>
            <ViewArticleFooter totalLikes={newsData?.likes} totalReads={newsData?.reads} totalComments={newsData?.comments?.length} />
            <Comments commentsList={newsData?.comments} />
        </div>
    )
}

export default ViewArticle;