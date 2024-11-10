import { useEffect, useState } from "react";
import CategoryBar from "./categoryBar";
import '../css/searchPage.css'
import Posts from "./posts";
import { newsList } from "../model/db";

function SearchResults(props) {

    const [category, setCategory] = useState(null)
    const [searchs, setSearchs] = useState([])

    useEffect(() => {

        setSearchs(newsList.filter(news => news.sourceTitle.toLowerCase().includes(props.searchInput.toLowerCase()) || news.sourceDescription.includes(props.searchInput)));

    }, []);

    return (
        <div className="search-result-container">
            <CategoryBar setCategory={setCategory} />
            <div className="search-result-box">
                {searchs.length > 0 ? <Posts list={searchs} /> :
                    <div className="empty-search-container">
                        <div className="empty-search-box">
                            <img src="/icons/empty.png" alt="" />
                            <p>No Result Found</p>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default SearchResults;