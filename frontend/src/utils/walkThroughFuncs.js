export default function startMovingSlider(slideRef,  currentSlide, totalSlides, nextBtnRef) {

    if (currentSlide < totalSlides) {
        const slideWidth = slideRef.clientWidth;
        slideRef.style.transform = `translateX(-${(currentSlide) * slideWidth}px)`;
        nextBtnRef.innerHTML = 'Next';
        currentSlide++;
    }
    if(currentSlide === totalSlides && window.innerWidth > 1024){
        nextBtnRef.innerHTML = 'Login to get started';
    }else if(currentSlide === totalSlides ){
        nextBtnRef.innerHTML = 'Get Started';
    }

    return currentSlide;
}