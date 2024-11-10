import Posts from "./posts";
import { newsList } from "../model/db";
import '../css/articlesPage.css'

function NewsByCategory({category}){

    const filteredNews = newsList.filter(news => news.sourceTitle.includes(category)) || [];
    return(
        <>
            {filteredNews.length > 0 ? <Posts list={filteredNews} /> : <div className="empty-catg-box"><p>No Result Found</p></div>} 
        </>
    )

}

export default NewsByCategory;