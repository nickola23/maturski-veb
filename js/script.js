
const sun = document.querySelector('#sun')
document.addEventListener('scroll', (event) =>{
    let scroll = window.scrollY;
    let top = (scroll/4)-120
    sun.style.left= `${-scroll}px`;
    if(top > -120){
        sun.style.top= `${top}px`
    }else{
        sun.style.top= `-120px`
    }
})