import { useSelector } from "react-redux";

function ShareButton({ newsID }) {

    const { newsList } = useSelector((state) => state.newsList);

    const handleShare = () => {

        const news = newsList.find(news => news.newsID === newsID);
        if (navigator.share && news) {

            const url = window.location
            navigator.share({
                title: news.sourceTitle,
                text: news.sourceDescription,
                url: `${url.origin}/article/${newsID}`                  
            }).then(() => {
                console.log("shared");
            })

            console.log(news.sourceTitle, news);
            
        }
    }

    return (
        <img src="/icons/share.png" alt="Share icon" className="h-6 w-6 cursor-pointer" onClick={handleShare} />
    )
}

export default ShareButton;
