
const sun = document.querySelector('#sun')
document.addEventListener('scroll', (event) =>{
    let scroll = window.scrollY;
    let top = (scroll*0.035)-15
    sun.style.left= `${-scroll/12}vw`;
    sun.style.transform = `rotate(${180 - scroll/9}deg)`
    if(top > -15){
        sun.style.top= `${top}vh`
    }else{
        sun.style.top= `-15vh`
    }
})