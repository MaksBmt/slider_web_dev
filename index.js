let images = document.querySelectorAll('.slider img')
const containerSlider = document.querySelector('.slider')
const btnUp = document.querySelector('.slider__btn--up')
const btnDown = document.querySelector('.slider__btn--down')
let current = 0
var baseUrl = 'https://filtr-prise-on-forma.firebaseio.com'
const btnSubmit = document.querySelector('.slider__submit')

transparencyImg()
containerSlider.addEventListener('click', transparencyImgHandler)
btnUp.addEventListener('click', buttonUpSlidersClickHandler)
btnDown.addEventListener('click', buttonDownSlidersClickHandler)
btnSubmit.addEventListener('click', saveFotoHandler)



function transparencyImgHandler() {
    if (current + 1 == images.length) {
        current = 0
        console.log('current', current)
    } else {
        current++;
        console.log('current', current)
    }
    transparencyImg()
}

function buttonDownSlidersClickHandler(event) {
    event.preventDefault()

    if (current + 1 == images.length) {
        current = 0;
        console.log('current', current)
    } else {
        current++;
        console.log('current', current)
    }
    transparencyImg()
}

function buttonUpSlidersClickHandler(event) {
    event.preventDefault()

    if (current - 1 == -1) {
        current = images.length - 1;
        console.log('current', current)
    } else {
        current--;
        console.log('current', current)
    }
    transparencyImg()
}

function transparencyImg() {
    images.forEach(function (i) {
        i.classList.add('visibility')
    })
    images[current].classList.remove('visibility')
}

// if (current + 1 == images.length) {
//     current = 0
//     console.log('current', current)
// } else {
//     current++
//     console.log('current', current)
// }

function saveFotoHandler(event) {
    event.preventDefault()
    let photo = document.getElementById("image-file").files[0];
    let req = new XMLHttpRequest();
    let formData = new FormData();

    formData.append("photo", photo);
    req.open("POST", baseUrl + '/posts.json');
    req.send(formData);
}
