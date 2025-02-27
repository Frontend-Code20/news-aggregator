import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchedData } from "../store/searchReducer";
import { updateError } from "../store/searchReducer";

import CategoryBar from "./categoryBar";
import Posts from "./Post/posts";
import Spinner from "./spinner";
import EmptyScreen from "./emptyScreen";

function SearchResults({ searchInput }) {

    const [category, setCategory] = useState("World News");
    const [spinner, setSpinner] = useState('hidden');
    const [initailLoading, setInitailLoading] = useState(true);
    const [showError, setShowError] = useState('hidden');
    const [results, setResults] = useState([]);

    const errorRef = useRef(null);
    const scrollRef = useRef(null);

    const dispatch = useDispatch();

    const { searchResults, error, status } = useSelector((state) => state.searchResults)

    const handleCategoryChange = (catg) => {

        const hasLoaded = searchResults.find(result => result.category === catg);
        setCategory(catg);
        if(!hasLoaded){
            setSpinner('');
            setShowError('hidden');
            dispatch(updateError(null))
            dispatch(fetchSearchedData({ searchInput, category: catg }));
            setInitailLoading(true);
            console.log(catg, status, searchInput, hasLoaded);
        }else{
            setInitailLoading(false);
            setResults(hasLoaded?.results);
            console.log(hasLoaded.results);
        }

    }

    const fetchDataONScroll = (event) => {
     
        const clientHeight = event.target.clientHeight;
        const scrollHeight = event.target.scrollHeight;
        const scrollTop = event.target.scrollTop;
        const endScroll = clientHeight + scrollTop;

        if(endScroll === scrollHeight){
            dispatch(updateError(null));
            dispatch(fetchSearchedData({searchInput, category}));
        }
    }

    useEffect(() => {

        const result = searchResults.find(result => result.category === category);

        if (status === 'idle') {
            dispatch(fetchSearchedData({ searchInput, category }));
            setSpinner('')
        }

        if (status === 'loading') {
            setSpinner('');
            setShowError('hidden');
        }

        if (status === 'success') {
            setSpinner('hidden');
            setInitailLoading(false);
        }

        if (error) {
            setSpinner('hidden');
            setShowError('');
            if(result){
                setInitailLoading(false);
            }else{
                setInitailLoading(true);
            }
            console.log(error, result, category);

        }

        if (result) {
            setResults(result.results);
        } else {
            setResults([])
        }

        scrollRef.current?.addEventListener('scroll', fetchDataONScroll);

        return () => {
            scrollRef.current?.removeEventListener('scroll', fetchDataONScroll);
        }
    }, [status, error, searchInput, category, searchResults]);

    return (
        <div className="flex flex-col w-full h-full">
            <CategoryBar setCategory={handleCategoryChange} />
            <div className="flex flex-col h-full w-full overflow-auto box-border pb-28 lg:pb-32" ref={scrollRef}>
                {initailLoading ? null : results.length > 0 ? <Posts list={results} /> : <EmptyScreen />}
                {<div className={`text-sm text-white mt-2 text-center ${showError}`} ref={errorRef}>Something went wrong!</div>}
                <div className={`mt-3 ${spinner}`}><Spinner size={'w-8 h-8'} /></div>
            </div>
        </div>
    )
}

export default SearchResults;