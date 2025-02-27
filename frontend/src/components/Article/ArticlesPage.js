import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

// Importing reusable compenonts
import CategoryBar from "../categoryBar";
import Posts from "../Post/posts";
import Spinner from "../spinner";

// Helper function to fetch data by category
import { fetchArticlesByCategory } from "../../store/articleReducer";


function ArticlesPage() {

    // Life cyle hooks states to handle category, articlesList, spinner, and error
    const [category, setCategory] = useState('World News');
    const [articlesList, setArticlesList] = useState(null);
    const [spinner, setSpinner] = useState('hidden');
    const [displayError, setDispalyError] = useState('hidden')

    const dispatch = useDispatch();

    // Get data from redux store
    const {articles, status, error} = useSelector((state) => state.articles);

    const scrollRef = useRef(null);

    useEffect(() => {

        // Fetch data when status is idle
        if(status === 'idle'){
            dispatch(fetchArticlesByCategory(category))
        }

        // Show spinner and Hide error when status is loading
        if(status === 'loading'){
            setSpinner('')
            setDispalyError('hidden')
        }

        // Hide spinner and error on success
        if(status === 'success'){
            setSpinner('hidden')
            setDispalyError('hidden')
        }
        
        // Show error and hide spinner on error
        if(error){
            setSpinner('hidden')
            setDispalyError('flex')
        }

        // Check for articles by category
        const newArticles = articles.find(art => art?.category === category);

        // If there is articles for any category, get articles or add empty array 
        if(newArticles){
            setArticlesList(newArticles.articles)
        }else{
            setArticlesList([]);
        }

        // Add scroll event to container 
        scrollRef.current?.addEventListener('scroll', handleScroll);
        
        return () => {
            // remove scroll event from container 
            scrollRef.current?.removeEventListener('scroll', handleScroll);
        }

    }, [articles, category, status, error]);

    // Change category state and fetch new data by categry when category state is changed
    const handleCategoryChange = (category) => {
        setCategory(category);
        dispatch(fetchArticlesByCategory(category));
    }

    // Fetch new data on last scroll
    const handleScroll = () => {
        const scrollHeight = scrollRef.current.scrollHeight;
        const endScroll = scrollRef.current.scrollTop + scrollRef.current.clientHeight;
        if(scrollHeight === endScroll && status !== 'loading'){
            dispatch(fetchArticlesByCategory(category));
        }
    }

    return (
        <div className="w-full h-full">
            <CategoryBar setCategory={handleCategoryChange} />
            <div className="w-full h-full overflow-auto pb-32" ref={scrollRef}>
                {articlesList ? <Posts list={articlesList} /> : null}
                <div className={`my-3 ${spinner}`}>
                    <Spinner size={'h-8 w-8'}/>
                </div>
                <div className={`text-sm text-white justify-center my-3 ${displayError}`}>Something went wrong!</div>
            </div>
        </div>
    )

}

export default ArticlesPage;