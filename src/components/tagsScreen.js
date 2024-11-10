import { useState } from "react";
import '../css/tagScreen.css'

function TagsScreen(props) {

    const [userTags, setUserTags] = useState([]);

    const collectTags = (event) => {
        if (event.target.tagName === 'P') {
            const tag = event.target.getAttribute('data-id');
            if (!userTags.includes(tag)) {
                setUserTags((previous) => [...previous, tag]);
                event.target.style.backgroundColor = '#4DB6AC'
            }else{
                console.log(userTags)
                const idx = userTags.indexOf(tag);
                if(idx !== -1){
                    userTags.splice(idx,1);
                }
                console.log(userTags);
                event.target.style.backgroundColor = 'transparent'
            }
        }
    }
    const tags = ["Politics", "Technology", "Business", "Sports", "Entertainment", "Health", "Science", "World", "Travel", "Lifestyle", "Education", "Opinion", "Environment", "Culture", "Economy", "Finance", "Breaking News", "Local", "International", "Tech Trends", "Startups", "Crypto", "AI & Robotics", "Gadgets", "Space", "Food & Drinks", "Fashion", "Art & Design"];

    const tagsSet = tags.map((tag, idx) => {
        return (
            <p key={idx} className="tag" data-id={tag} >{tag}</p>
        )
    })
    return (
        <div className="tags-wrapper">
            <div className="tags-container">
                <h1>Pick Your Tags</h1>
                <div className="tags-box" onClick={(event) => {collectTags(event)}}>
                    {tagsSet}
                </div>
                <button className="tag-continue-btn" onClick={() => {window.location = '/'}}>Continue</button>
                <img src="/icons/remove.png" alt="" className="remove-icon" onClick={() => {window.location = '/'}}/>
            </div>
        </div>
    )
}

export default TagsScreen;