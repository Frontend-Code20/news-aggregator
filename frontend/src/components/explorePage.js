import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react';

import Posts from "./Post/posts";
import Spinner from './spinner';
import { fetchNewsData } from '../store/newsReducer';

function ExplorePage(props) {

    const [loading, setLoading] = useState('hidden');
    const [spinner, setSpinner] = useState('hidden');

    const exploreRef = useRef(null);
    const dispatch = useDispatch()
    const { newsList, status, error } = useSelector((state) => state.newsList)

    const errorRef = useRef(null);

    useEffect(() => {

        if (status === 'idle') {
            dispatch(fetchNewsData())
        }

        if (error) {
            setLoading('flex')
            setSpinner('flex')
        }

        if (status === 'loading') {
            setLoading('hidden')
            setSpinner('flex')
        }

        if (status === 'success') {
            setSpinner('hidden')
        }

        const previousScrollPosition = window.sessionStorage.getItem('SCROLL_POSITION');
        if (previousScrollPosition) {
            exploreRef.current.scrollTop = previousScrollPosition;
        }

        exploreRef.current?.addEventListener('scroll', handleScrollRefresh);

        return () => {
            exploreRef.current?.removeEventListener('scroll', handleScrollRefresh);
        }



    }, [status])

    const handleScrollRefresh = () => {

        window.sessionStorage.setItem('SCROLL_POSITION', exploreRef.current.scrollTop)

        const scrollHeight = exploreRef.current?.scrollHeight;
        const endScroll = exploreRef.current.scrollTop + exploreRef.current.clientHeight;
        if (scrollHeight === endScroll && status !== 'loading') {
            dispatch(fetchNewsData());
        }
    }

    return (
        <div className='w-full h-full box-border pb-10 lg:pb-20 overflow-auto' ref={exploreRef}>
            <Posts list={newsList} />
            <div className={`text-sm h-16 text-white ${loading} justify-center items-center`} ref={errorRef} >Something went wrong!</div>
            <div className={`${spinner} h-16 justify-center items-center`}>
                <Spinner size={"w-10 h-10"} id={"feedSpinner"} />
            </div>
        </div>
    )
}
export default ExplorePage;