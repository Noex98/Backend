const filterCont = document.getElementsByClassName('filtered__wrap')[0];
const filterLinks = document.querySelectorAll('.cont__item');

// Adds active class to filter btn
function addActiveClass(number){
    for (let i = 0; i < filterLinks.length; i++){
        filterLinks.item(i).classList.remove('cont__item-active');
    }
    filterLinks.item(number).classList.add('cont__item-active')
}

// Add event listeners to filter btns
for (let i = 0; i < filterLinks.length; i++){
    filterLinks.item(i).addEventListener('click', () => {
        var contWidth = filterCont.offsetWidth;
        filterCont.scrollTo(i * contWidth, 0);
        addActiveClass(i)
    })
}

// Scroll to top btn
const toTopBtn = document.getElementById('toTopBtn');

toTopBtn.addEventListener('click', () => {
    scrollTo(0,0)
})

addEventListener('scroll', () => {
    if (window.pageYOffset > 600){
        toTopBtn.classList = 'visible'
        toTopBtn.style.pointerEvents = 'auto';
    } else {
        toTopBtn.classList = 'invisible'
        toTopBtn.style.pointerEvents = 'none';
    }
})

/*###########
- New Post
###########*/

const newPostBtn = document.getElementById('newPostBtn');
const cancelPostBtn = document.getElementById('cancelBtn');
const postForm = document.getElementById('postForm');
const formBody = document.getElementById('form__body');
const charLeft = document.getElementById('charLeft')

setInterval(function(){ 
    if (newPostBtn.innerHTML == 'New post|'){
        newPostBtn.innerHTML = 'New post'
    } else {
        newPostBtn.innerHTML = 'New post|'
    }
}, 550);

// Open new blog form
newPostBtn.addEventListener('click', () => {
    newPostBtn.style.display ="none";
    postForm.style.display ="block";
})
cancelPostBtn.addEventListener('click', () => {
    newPostBtn.style.display ="block";
    postForm.style.display ="none";
})

// Character counter
const maxLenght = 350;
formBody.setAttribute ('maxlength', maxLenght);

formBody.addEventListener('input', () => {
    charLeft.style.opacity ="0.5";
    charLeft.innerHTML = 'Characters left: ' + (maxLenght - formBody.value.length);
});