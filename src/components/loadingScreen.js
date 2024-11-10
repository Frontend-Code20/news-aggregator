import { useEffect } from "react";

function LoadingScreen(props) {

    useEffect(() => {

        const timer = setTimeout(props.HideLoadingScreen, 4000)

        return () => clearTimeout(timer);

    }, [props.HideLoadingScreen]);
    
    return (
        <div className="loading-screen">
            <h4>NewsFeed</h4>
        </div>
    );

}
export default LoadingScreen;