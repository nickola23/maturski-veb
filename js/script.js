const mercury = document.querySelector('#mercury');
const venus = document.querySelector('#venus');
const earth = document.querySelector('#earth');
const mars = document.querySelector('#mars');
const jupiter = document.querySelector('#jupiter');
const saturn = document.querySelector('#saturn');
const uranus = document.querySelector('#uranus');
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
    let mercuryLeft = scroll / 30 - 60;
    if(scroll<window.innerHeight){
        mercury.style.left = `${mercuryLeft}vw`;
    }else{
        mercury.style.left = `${window.innerHeight / 30 - 60}vw`;
    }
    let earthLeft = (scroll - 2 * window.innerHeight) / 30 -60;
    if(scroll< 3 * window.innerHeight){
        earth.style.left = `${earthLeft}vw`;
    }else{
        earth.style.left = `${window.innerHeight / 30 - 60}vw`;
    }
    let jupiterLeft = (scroll - 4 * window.innerHeight) / 30 -60;
    if(scroll< 5 * window.innerHeight){
        jupiter.style.left = `${jupiterLeft}vw`;
    }else{
        jupiter.style.left = `${window.innerHeight / 30 - 60}vw`;
    }
    let uranusLeft = (scroll - 6 * window.innerHeight) / 30 -60;
    if(scroll< 7 * window.innerHeight){
        uranus.style.left = `${uranusLeft}vw`;
    }else{
        uranus.style.left = `${window.innerHeight / 30 - 60}vw`;
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
    }else{
        venus.style.right = `${window.innerHeight / 30 - 60}vw`;
    }

    let marsRight = (scroll-3*innerHeight) / 30 - 60;
    if(scroll<4*window.innerHeight){
        mars.style.right = `${marsRight}vw`;
    }else{
        mars.style.right = `${window.innerHeight / 30 - 60}vw`;
    }

    let saturnRight = (scroll-5*innerHeight) / 30 - 60;
    if(scroll<6*window.innerHeight){
        saturn.style.right = `${saturnRight}vw`;
    }else{
        saturn.style.right = `${window.innerHeight / 30 - 60}vw`;
    }

    let neptuneRight = (scroll-7*innerHeight) / 30 - 60;
    if(scroll<8*window.innerHeight){
        neptune.style.right = `${neptuneRight}vw`;
    }else{
        neptune.style.right = `${window.innerHeight / 30 - 60}vw`;
    }
})

document.querySelector('.arrow').addEventListener('click',() => {
        console.log(window.innerHeight-(window.scrollY%window.innerHeight) +' height:' + window.innerHeight)
        window.scrollBy(0,window.innerHeight-(window.scrollY%window.innerHeight))
})

