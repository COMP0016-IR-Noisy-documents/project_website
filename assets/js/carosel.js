var slideIndex = 0;

// Next/previous controls
function incSlide() {
    ChangeSlide(slideIndex += 1);
}

function decSlide() {
    ChangeSlide(slideIndex -= 1);
}

function ChangeSlide(n) {

    var index = n;

    const caroselInner = Array.from(document.querySelector('.carousel-inner').children);
    if (index >= caroselInner.length) {
        index = 0;
    }
    if (index < 0) {
        index = index + caroselInner.length;
    }

    slideIndex = index;

    console.log(slideIndex);

    for (i = 0; i < caroselInner.length; i++) {
        caroselInner[i].className = "slide-item";

    }
    caroselInner[index].className += " active";
    console.log(caroselInner[0]);
    console.log(caroselInner[1]);
}