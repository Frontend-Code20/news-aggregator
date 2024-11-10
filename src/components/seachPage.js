import React, { useState } from "react";
import '../css/searchPage.css'
import SearchResults from "./searchResults";

function SearchPage() {

    const [searchValue, setSearchValue] = useState(null);

    const startSearching = (event, value) => {
        if (event.key === 'Enter') {
            setSearchValue(value);
        } else {
            return
        }
    }
    return (
        <div className="search-container">
            <div className="search-box" action="/search">
                <input type="text" className="search-input" placeholder="Search For News" name="word" id="search-input" onKeyDown={(event) => { startSearching(event, event.target.value) }} />
                <img src="/icons/up-arrow.png" alt="" className="search-icon" />
            </div>
            {searchValue ? <SearchResults searchInput={searchValue} /> : null}
        </div>
    )
}

export default SearchPage;