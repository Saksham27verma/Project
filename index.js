const main = document.querySelector('.main')
const question = document.querySelector('.question')
const yes = document.querySelector('.yes-Btn')
const no = document.querySelector('.no-Btn')
const gif = document.querySelector('.gif')
const wp = document.querySelector('.whatsapp')

const mainRect = main.getBoundingClientRect();
const noRect = no.getBoundingClientRect();

yes.addEventListener('click', () => {
    question.innerHTML= 'Then come , text me on Whatsapp';
    gif.src = "images/giphy-2.gif"
    no.style.display = 'none';
    yes.style.display = 'none';
    wp.style.visibility = 'visible';
});

no.addEventListener('mouseover', ()=>{
    const i = Math.floor(Math.random() * (mainRect.width - noRect.width)) + 1;
    const j = Math.floor(Math.random() * (mainRect.height - noRect.height)) + 1;

    no.style.left = i  + 'px';
    no.style.top = j + 'px';
});