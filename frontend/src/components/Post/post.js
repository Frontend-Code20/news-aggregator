import { useNavigate } from "react-router";
import PostFooter from "./postFooter";
import PostHeader from "./postHeader";
import { slicedText } from "../../utils/utils";

function Post({ news }) {

    const navigate = useNavigate();

    const title = slicedText(news?.sourceTitle, 50);
    const description = slicedText(news?.sourceDescription, 120);

    const handleContentClick = () => {
        navigate(`/article/${news?.newsID}`);
    }

    return (
        <div className="mt-5 flex flex-col gap-4 rounded-lg bg-Almond">
            <PostHeader sourceIcon={news?.sourceIcon} sourceName={news?.sourceName} newsID={news?.newsID} />
            <div className="flex flex-col gap-2 cursor-pointer" onClick={handleContentClick}>
                <img src={news?.sourceImage} alt="" className=" h-44" />
                <h3 className="text-2xl px-2" >{title}</h3>
                <p className="text-sm px-2">{description}</p>
            </div>
            <PostFooter likes={news?.likes} reads={news?.reads} newsID={news?.newsID} />
        </div>
    )


}

export default Post;