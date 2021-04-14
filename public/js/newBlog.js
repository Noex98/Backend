const newPostBtn = document.getElementById('newPostBtn');
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

// Character counter
const maxLenght = 350;
formBody.setAttribute ('maxlength', maxLenght);

formBody.addEventListener('input', () => {
    charLeft.style.opacity ="0.5";
    charLeft.innerHTML = 'Characters left: ' + (maxLenght - formBody.value.length);
});