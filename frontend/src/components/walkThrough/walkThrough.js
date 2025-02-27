import { useRef, useState } from 'react';
import startMovingSlider from "../../utils/walkThroughFuncs";
import { headings, descriptions, desktopImages, tabletImages, mobileImages } from '../../helper/walkthroughPaths';

function WalkThrough({ setWalkThrough }) {

    const [currentSlide, setCurrentSlide] = useState(1);
    const slideRef = useRef(null);
    const nextBtnRef = useRef(null);

    const imagesList = window.innerWidth > 1024 ? desktopImages : window.innerWidth > 556 ? tabletImages : mobileImages;
    const totalSlides = imagesList.length;


    const handleNextClick = () => {
        setCurrentSlide((prevSlide) => startMovingSlider(slideRef.current, prevSlide, totalSlides, nextBtnRef.current))

        if (nextBtnRef.current.innerHTML === 'Get Started') {
            setWalkThrough(false)
        }
    }

    const handleDotClick = (dot) => {
        startMovingSlider(slideRef.current, dot, totalSlides, nextBtnRef.current);
        setCurrentSlide(dot + 1);
    }

    const slides = imagesList.map((imgUrl, idx) => {
        return (
            <div className="w-full flex flex-col flex-shrink-0 gap-4 items-center justify-center" id={`slide-${idx}`} key={idx}>
                <img src={imgUrl} alt="slide banner" key={'image' + idx} className="h-64" />
                <h1 key={'heading' + idx} className="text-3xl text-center">{headings[idx]}</h1>
                <p key={'desc' + idx} className="text-center w-3/4">{descriptions[idx]}</p>
            </div>
        )
    })

    const indicators = imagesList.map((img, idx) => {
        return (
            <div
                key={'indicator' + idx}
                className={`w-4 h-4 bg-black/25 rounded-full ${idx === currentSlide - 1 ? 'bg-blue-950' : ''} cursor-pointer`} 
                onClick={() => handleDotClick(idx)} >
            </div>
        )
    });


    return (
        <div className="w-full justify-center h-full bg-cyan-200">
            <div className="w-full flex flex-col gap-4 h-full justify-center items-center relative overflow-hidden">
                <div className=" w-full flex transition-all duration-300" id="slides" ref={slideRef}>
                    {slides}
                </div>
                <div className="">
                    <div className="flex gap-3">
                        {indicators}
                    </div>
                </div>
                <div className="w-64">
                    <button className="bg-blue-500 text-white py-2 px-9 rounded w-full cursor-pointer" id='slide-btn' onClick={handleNextClick} ref={nextBtnRef}>Next</button>
                </div>
                {window.innerWidth < 1025 ? <span className="absolute top-1 right-3" onClick={() => { setWalkThrough(false) }}>Skip</span> : null}
            </div>
        </div>
    )

}
export default WalkThrough;