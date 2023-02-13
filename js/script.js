const mercury = document.querySelector('#mercury');
const venus = document.querySelector('#venus');
const mars = document.querySelector('#mars');
const saturn = document.querySelector('#saturn');
const neptune = document.querySelector('#neptune');
mercury.playbackRate = 0.84
const sun = document.querySelector('#sun')
window.addEventListener('scroll', (event) =>{
    event.preventDefault();
    let scroll = window.scrollY;
    let sunTop = ((scroll*0.057)-16)*(962/innerHeight)
    sun.style.left= `${-scroll/12*(962/innerHeight)}vw`;
    sun.style.transform = `rotate(${180 - scroll*(innerHeight/962)/9}deg)`
    if(sunTop > -16){
        sun.style.sunTop= `${sunTop}vh`
    }else{
        sun.style.sunTop= `-16vh`
    }
    //let mercuryTop = (scroll*1.924-1635)*(962/innerHeight)*((962/1879)/(innerHeight/innerWidth));
    //mercury.style.top = `${mercuryTop}px`;
    let mercuryLeft = scroll / 30 - 60;
    if(scroll<window.innerHeight){
        mercury.style.left = `${mercuryLeft}vw`;
    }
    if(scroll > 300){
        document.querySelector(`.navbar`).classList.add(`display`);
    }
    else{
        document.querySelector(`.navbar`).classList.remove(`display`);
    }
    let venusRight = (scroll-innerHeight) / 30 - 60;
    if(scroll<2*window.innerHeight){
        venus.style.right = `${venusRight}vw`;
    }


    let marsRight = (scroll-3*innerHeight) / 30 - 60;
    if(scroll<4*window.innerHeight){
        mars.style.right = `${marsRight}vw`;
    }


    let saturnRight = (scroll-5*innerHeight) / 30 - 60;
    if(scroll<6*window.innerHeight){
        saturn.style.right = `${saturnRight}vw`;
    }

    let neptuneRight = (scroll-7*innerHeight) / 30 - 60;
    if(scroll<8*window.innerHeight){
        neptune.style.right = `${neptuneRight}vw`;
    }
})


document.querySelector('.arrow').addEventListener('click',() => {
        window.scrollBy(0,window.innerHeight-(window.scrollY%window.innerHeight)-50)
})