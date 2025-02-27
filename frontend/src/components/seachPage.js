import React, { useEffect, useRef, useState } from "react";
import SearchResults from "./searchResults";

function SearchPage() {

    const [searchValue, setSearchValue] = useState('');

    const formRef = useRef(null);
    const errorRef = useRef(null);

    const handleSearch = async (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const search = formData.get('search');
        setSearchValue(search);
        if (search === '') {
            errorRef.current.innerHTML = 'Enter search value';
        }else{
            errorRef.current.innerHTML = '';
        }
    }

    useEffect(() => {

        formRef.current?.addEventListener('submit', handleSearch);

        return () => {
            formRef.current?.removeEventListener('submit', handleSearch);
        }
    }, [])

    return (
        <div className="flex flex-col items-center w-full h-full">
            <div className={`w-full flex flex-col justify-center items-center mt-2 ${searchValue === '' ? 'h-full' : ''}`}>
                <form className="flex gap-3 border border-Almond py-2 px-4 w-3/4 md:w-2/5 justify-between rounded-lg" ref={formRef} noValidate>
                    <input type="text" className="bg-transparent outline-none w-full h-full text-white" placeholder="Search For News" name="search" id="search-input" />
                    <img src="/icons/up-arrow.png" alt="" className="h-5 w-5 cursor-pointer" onClick={handleSearch} />
                </form>
                <div className="text-sm text-orange-500" ref={errorRef}></div>
            </div>
            {searchValue !== '' ? <SearchResults searchInput={searchValue} /> : null}
        </div>
    )
}

export default SearchPage;