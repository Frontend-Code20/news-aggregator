export default function startMovingSlider(slideRef,  currentSlide, totalSlides, slideWidth, dots) {
    
    if (currentSlide < totalSlides) {
        slideRef.style.marginLeft = `-${currentSlide * slideWidth}px`;
        currentSlide++;
    }
    dots.forEach((dot, idx) => {
        if(idx === currentSlide - 1){
            dot.classList.add('active');
        }else{
            dot.classList.remove('active');
        }
    });

    const slideNextBtn = document.getElementById('slide-btn');
    if(currentSlide === totalSlides && window.innerWidth > 1024){
        slideNextBtn.innerHTML = 'Login to get started';
    }else if(currentSlide === totalSlides){
        slideNextBtn.innerHTML = 'Get Started';
    }
    if(slideNextBtn.innerHTML === 'Get Started');{
        
    }

    return currentSlide;
}