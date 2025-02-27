import { useRef, useState } from "react";
import Spinner from "./spinner";
import { useNavigate } from "react-router";
import { sendRequest } from "../utils/requests";

function TagsScreen(props) {

    const [userTags, setUserTags] = useState([]);
    const [spinner, setSpinner] = useState('hidden')

    const navigate = useNavigate();

    const errorRef = useRef(null);

    const collectTags = (event) => {
        if (event.target.tagName === 'P') {
            const tag = event.target.getAttribute('data-id');
            if (!userTags.includes(tag)) {
                setUserTags((previous) => [...previous, tag]);
                event.target.style.backgroundColor = '#4DB6AC'
            } else {
                const idx = userTags.indexOf(tag);
                if (idx !== -1) {
                    userTags.splice(idx, 1);
                }
                event.target.style.backgroundColor = 'transparent'
            }
        }
    }

    const handleContinue = async (event) => {
        if (userTags.length > 0) {
            setSpinner('');
            event.target.disabled = true;
            const response = await sendRequest('/save-tags', { userTags });
            if(response.statusText === "OK"){
                navigate('/');
            }else{
                errorRef.current.innerHTML = response.message;
            }
            setSpinner('hidden');
            event.target.disabled = false;
        }else{
            navigate('/')
        }
    }

    const tags = ["Politics", "Technology", "Business", "Sports", "Entertainment", "Health", "Science", "World", "Travel", "Lifestyle", "Education", "Opinion", "Environment", "Culture", "Economy", "Finance", "Breaking News", "Local", "International", "Tech Trends", "Startups", "Crypto", "AI & Robotics", "Gadgets", "Space", "Food & Drinks", "Fashion", "Art & Design"];

    const tagsSet = tags.map((tag, idx) => {
        return (
            <p key={idx} className="border border-Almond p-3 text-white rounded-lg cursor-pointer" data-id={tag} >{tag}</p>
        )
    })
    return (
        <div className="w-full h-full bg-harcoalBlue flex justify-center items-center">
            <div className="h-full flex flex-col justify-center items-center lg:gap-16 gap-4 relative lg:w-3/4 w-full px-4">
                <h1 className="text-3xl text-white">Pick Your Tags</h1>
                <div className="h-2/3 lg:h-auto w-full overflow-auto flex flex-wrap gap-4" onClick={(event) => { collectTags(event) }}>
                    {tagsSet}
                </div>
                <div className="textsm text-orange-400 text-center" ref={errorRef}></div>
                <button className="bg-cyan-600 w-64 py-2 rounded-lg text-white flex gap-3 items-center justify-center cursor-pointer disabled:cursor-not-allowed disabled:bg-cyan-800" onClick={handleContinue}>
                    <div className={`${spinner}`}><Spinner size={'h-5 w-5'} /></div>
                    <span>Continue</span>
                </button>
                <img src="/icons/remove.png" alt="" className="w-6 h-6 absolute top-0 right-2 cursor-pointer" onClick={() => { navigate('/') }} />
            </div>
        </div>
    )
}

export default TagsScreen;