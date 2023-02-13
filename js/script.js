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
    let mercuryLeft = scroll / 30 - 60;
    if(scroll<window.innerHeight){
        mercury.style.left = `${mercuryLeft}vw`;
    }
    let earthLeft = (scroll - 2 * window.innerHeight) / 30 -60;
    if(scroll< 3 * window.innerHeight){
        earth.style.left = `${earthLeft}vw`;
    }
    let jupiterLeft = (scroll - 4 * window.innerHeight) / 30 -60;
    if(scroll< 5 * window.innerHeight){
        jupiter.style.left = `${jupiterLeft}vw`;
    }
    let uranusLeft = (scroll - 6 * window.innerHeight) / 30 -60;
    if(scroll< 7 * window.innerHeight){
        uranus.style.left = `${uranusLeft}vw`;
    }
    if(scroll > 300){
        document.querySelector(`.navbar`).classList.add(`display`);
    }
    else{
        document.querySelector(`.navbar`).classList.remove(`display`);
    }
})

document.querySelector('.arrow').addEventListener('click',() => {
        console.log(window.innerHeight-(window.scrollY%window.innerHeight) +' height:' + window.innerHeight)
        window.scrollBy(0,window.innerHeight-(window.scrollY%window.innerHeight))
})

