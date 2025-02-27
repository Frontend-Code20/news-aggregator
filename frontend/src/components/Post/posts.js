import Post from "./post";

function Posts(props) {
    const list = props.list || [];

    const postlist = list.map((news, idx) => {
        return (
            <Post news={news} key={idx} setArticleID={props.setArticleID} />
        )
    })

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 box-border px-3">
            {postlist}
        </div>
    )
}
export default Posts;