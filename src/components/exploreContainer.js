import '../css/explorePage.css'
import { newsList } from "../model/db";
import Posts from "./posts";

function ExplorePage(props){

        return(
            <>
                <Posts list={newsList} />
            </>            
        )
}
export default ExplorePage;