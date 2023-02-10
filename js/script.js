const mercury = document.querySelector('#mercury');
mercury.playbackRate = 0.84
console.log((962/1879)/(innerHeight/innerWidth))
const sun = document.querySelector('#sun')
document.addEventListener('scroll', (event) =>{
    let scroll = window.scrollY;
    let sunTop = ((scroll*0.057)-16)*(962/innerHeight)
    sun.style.left= `${-scroll/12*(962/innerHeight)}vw`;
    sun.style.transform = `rotate(${180 - scroll*(innerHeight/962)/9}deg)`
    if(sunTop > -16){
        sun.style.sunTop= `${sunTop}vh`
    }else{
        sun.style.sunTop= `-16vh`
    }
    let mercuryTop = (scroll*1.924-1635)*(962/innerHeight)*((962/1879)/(innerHeight/innerWidth));
    let mercuryLeft = (scroll *0.9395-1503)*(962/innerHeight)*((962/1879)/(innerHeight/innerWidth));
    mercury.style.top = `${mercuryTop}px`;
    mercury.style.left = `${mercuryLeft}px`;
})