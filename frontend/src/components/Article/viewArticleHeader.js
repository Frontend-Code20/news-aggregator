import { useNavigate } from 'react-router';
import ShareButton from '../buttons/shareButton';

function ViewArticleHeader({ sourceName , sourceImage, newsID }) {

    const navigate = useNavigate();

    return (
        <header className="w-full flex justify-between box-border px-6 py-2 items-center border-b fixed bg-Gunmetal">
            <div className="flex gap-3 items-center w-full">
                <img src="/icons/back-arrow.png" alt="" className="w-6 h-6 cursor-pointer" onClick={() => {
                    navigate('/');
                }} />
                <img src={sourceImage} alt="" className="h-8 w-8 rounded-full" />
                <h3 className="">{sourceName}</h3>
            </div>
            <ShareButton newsID={newsID} />
        </header>
    )

}

export default ViewArticleHeader;