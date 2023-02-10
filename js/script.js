const mercury = document.querySelector('#mercury');
mercury.playbackRate = 0.84
const sun = document.querySelector('#sun')
document.addEventListener('scroll', (event) =>{
    console.log(scrollY);
    let scroll = window.scrollY;
    let top = (scroll*0.057)-16
    sun.style.left= `${-scroll/12}vw`;
    sun.style.transform = `rotate(${180 - scroll/9}deg)`
    if(top > -16){
        sun.style.top= `${top}vh`
    }else{
        sun.style.top= `-16vh`
    }
})