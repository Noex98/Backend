const newPostBtn = document.getElementById('newPostBtn');
const postForm = document.getElementById('postForm');

newPostBtn.addEventListener('click', () => {
    newPostBtn.style.display ="none";
    postForm.style.display ="block";
})

const formBody = document.getElementById('form__body');

formBody.addEventListener('input', () => {
    formBody.style.height = formBody.scrollHeight;
    console.log(1)
})