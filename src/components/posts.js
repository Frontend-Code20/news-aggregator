import Post from "./post";

function Posts(props){
    
    const list = props.list || [];
    
    const postlist = list.map((news, idx) => {
        return(
            <Post news={news} key={idx} setArticleID={props.setArticleID}/>
        )
    })

    return(
        <div className="post-container">{postlist}</div>
    )
}
export default Posts;