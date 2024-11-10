import { useEffect, useRef, useState } from 'react';
import '../css/walkthrough.css';
import startMovingSlider from "../utils/walkThroughFuncs";

function WalkThrough({ imagesList, slideHeadings, slideDesc, setWalkThrough }) {

    const [currentSlide, setCurrentSlide] = useState(1);
    const slideRef = useRef(null);
    const nextBtnRef = useRef(null);
    const totalSlides = imagesList.length;


    const handleNextClick = () => {
        const slideWidth = slideRef.current.children[0]?.clientWidth || 0;
        const dots = document.querySelectorAll('.dot');
        setCurrentSlide((prevSlide) => startMovingSlider(slideRef.current, prevSlide, totalSlides, slideWidth, dots))
        
        if(nextBtnRef.current.innerHTML === 'Get Started'){
            setWalkThrough(false)
        }
    }

    useEffect(() => {

        const sliderWidth = slideRef.current.clientWidth;
        const slides = document.querySelectorAll('.slide');
        Object.values(slides).forEach(slide => {
            slide.style.flex = `0 0 ${sliderWidth}px`;
            console.log(slide.clientWidth);
        })

    }, []);

    const slides = imagesList.map((imgUrl, idx) => {
        return (
            <div className="slide" id={`slide-${idx}`} key={idx}>
                <img src={imgUrl} alt="slide banner" key={'image' + idx} className="slide-image" />
                <div className="slide-text">
                    <h1 key={'heading' + idx} className="slide-heading">{slideHeadings[idx]}</h1>
                    <p key={'desc' + idx} className="slide-desc">{slideDesc[idx]}</p>
                </div>
            </div>
        )
    })

    const indicators = imagesList.map((img, idx) => {
        return (
            <div key={'indicator' + idx} className={idx === 0 ? "dot active" : "dot"}></div>
        )
    });


    return (
        <div className="slide-container">
            <div className="slides" id="slides" ref={slideRef}>
                {slides}
            </div>
            <div className="design-box">
                <div className="indicators-box">
                    <div className="indicators">
                        {indicators}
                    </div>
                </div>
                <div className="btn-box">
                    <button className="slide-btn" id='slide-btn' onClick={handleNextClick} ref={nextBtnRef}>Next</button>
                </div>
            </div>
           {window.innerWidth < 1025 ?  <span className='walkthrough-skip' onClick={() => {setWalkThrough(false)}}>Skip</span> : null}
        </div>
    )

}
export default WalkThrough;