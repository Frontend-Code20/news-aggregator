import React, { useState } from "react";
import CategoryBar from "./categoryBar";
import NewsByCategory from "./newsByCategory";
import Posts from "./posts";
import { newsList } from "../model/db";
import '../css/articlesPage.css'

function ArticlesPage(props) {

    const [category, setCategory] = useState('World News');

    return (
        <div className="articles-container">
            <CategoryBar setCategory={setCategory} />
            <div className="news-post">
                {category === 'World News' ? <Posts list={newsList} /> : <NewsByCategory category={category} />}
            </div>
        </div>
    )

}
export default ArticlesPage;