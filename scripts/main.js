let images = ['../images/slide-img/0.png', '../images/slide-img/1.png', '../images/slide-img/2.png', '../images/slide-img/3.png', '../images/slide-img/4.png']

let slide = document.getElementById('slides');
let btnLeft = document.getElementById('left-btn');
let btnRight = document.getElementById('right-btn');

let currentIndex = 0;

//display function 
function displayImage(idx){
    slide.src = images[idx];
    slide.classList.add('fade')
    
    setTimeout(()=>{
        slide.classList.remove('fade')
    }, 500)
}

//on page load
document.addEventListener('DOMContentLoaded', ()=>{
    displayImage(0);
})


//left btn 
btnLeft.addEventListener('click', ()=>{
    currentIndex--;
    
    if(currentIndex < 0){
        currentIndex = images.length - 1
    }
    displayImage(currentIndex);
})

//rightt btn
btnRight.addEventListener('click', ()=>{
    currentIndex++;
    
    if(currentIndex > images.length - 1){
        currentIndex = 0;
    }
    displayImage(currentIndex);
})