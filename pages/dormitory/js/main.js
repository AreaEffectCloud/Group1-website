const question = document.querySelector('.faq-item');
const img = document.querySelector('.faq-item-contents-img');
const answer = document.querySelector('.faq-item-answer');

question.addEventListener('click', ()=>{
    img.classList.toggle('active');
    answer.classList.toggle('active');
})

