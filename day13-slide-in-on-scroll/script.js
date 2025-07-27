// debounce function
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}


function checkSlide(e){
    const sliderImages = document.querySelectorAll('.slide-in');
    sliderImages.forEach(sliderImage => {
        let slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        let imageTop = sliderImage.offsetTop;
        let imageBottom =  imageTop + sliderImage.height;

        let isHalfShown = slideInAt > imageTop;
        let isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast){
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    })
}

window.addEventListener("scroll",debounce(checkSlide));


