const mercury = document.querySelector('#mercury');
const venus = document.querySelector('#venus');
const earth = document.querySelector('#earth');
const mars = document.querySelector('#mars');
const jupiter = document.querySelector('#jupiter');
const saturn = document.querySelector('#saturn');
const uranus = document.querySelector('#uranus');
const neptune = document.querySelector('#neptune');
const contents = document.querySelectorAll('.content');
mercury.playbackRate = 0.84
const sun = document.querySelector('#sun')
let screenPosition = window.innerHeight/1.3;
window.addEventListener('scroll', (event) =>{
    let scroll = window.scrollY;
    //==============planet animations===========================
    let sunTop = ((scroll/19)-16)*(962/window.innerHeight)
    sun.style.left= `${-scroll/12*(962/window.innerHeight)}vw`;
    sun.style.transform = `rotate(${180 - scroll/9}deg)`
    if(sunTop > -16){
        sun.style.top= `${sunTop}vh`
    }else{
        sun.style.top= `-16vh`
    }
    let mercuryLeft = scroll*(962/window.innerHeight) / 30 - 60;
    if(scroll<window.innerHeight){
        mercury.style.left = `${mercuryLeft}vw`;
    }else{
        mercury.style.left = `${window.innerHeight*(962/window.innerHeight) / 30 - 60}vw`;
    }
    let earthLeft = (scroll- 2 * window.innerHeight)*(962/window.innerHeight) / 30 -60;
    if(scroll< 3 * window.innerHeight){
        earth.style.left = `${earthLeft}vw`;
    }else{
        earth.style.left = `${window.innerHeight*(962/window.innerHeight) / 30 - 60}vw`;
    }
    let jupiterLeft = (scroll - 4 * window.innerHeight)*(962/window.innerHeight) / 30 -60;
    if(scroll< 5 * window.innerHeight){
        jupiter.style.left = `${jupiterLeft}vw`;
    }else{
        jupiter.style.left = `${window.innerHeight*(962/window.innerHeight) / 30 - 60}vw`;
    }
    let uranusLeft = (scroll - 6 * window.innerHeight)*(962/window.innerHeight) / 30 -60;
    if(scroll< 7 * window.innerHeight){
        uranus.style.left = `${uranusLeft}vw`;
    }else{
        uranus.style.left = `${window.innerHeight*(962/window.innerHeight) / 30 - 60}vw`;
    }
    let venusRight = (scroll-innerHeight)*(962/window.innerHeight) / 30 - 60;
    if(scroll<2*window.innerHeight){
        venus.style.right = `${venusRight}vw`;
    }else{
        venus.style.right = `${window.innerHeight*(962/window.innerHeight) / 30 - 60}vw`;
    }

    let marsRight = (scroll-3*innerHeight)*(962/window.innerHeight) / 30 - 60;
    if(scroll<4*window.innerHeight){
        mars.style.right = `${marsRight}vw`;
    }else{
        mars.style.right = `${window.innerHeight*(962/window.innerHeight) / 30 - 60}vw`;
    }

    let saturnRight = (scroll-5*innerHeight)*(962/window.innerHeight) / 30 - 60;
    if(scroll<6*window.innerHeight){
        saturn.style.right = `${saturnRight}vw`;
    }else{
        saturn.style.right = `${window.innerHeight*(962/window.innerHeight) / 30 - 60}vw`;
    }

    let neptuneRight = (scroll-7*innerHeight)*(962/window.innerHeight) / 30 - 60;
    if(scroll<8*window.innerHeight){
        neptune.style.right = `${neptuneRight}vw`;
    }else{
        neptune.style.right = `${window.innerHeight*(962/window.innerHeight) / 30 - 60}vw`;
    }
    //======================content animation================================
    
    
 
    contents.forEach(content =>{
        let contentPosition = content.getBoundingClientRect().top;
        if(contentPosition <screenPosition){
            content.classList.add("animate");
        }
    })
    //======================navbar animation=============================
    if(scroll > window.innerHeight/3){
        document.querySelector(`.navbar`).classList.add(`display`);
    }
    else{
        document.querySelector(`.navbar`).classList.remove(`display`);
    }
})


//====================nav drop click navigation======================
const section = window.innerWidth/9.2;

document.querySelector('.navDrop').addEventListener('click', e =>{
    let mouseY = e.clientX;
    const sectionNum = mouseY /section;
    console.log(sectionNum,section,mouseY)
    if(sectionNum<1){
        mercury.parentNode.scrollIntoView(true,{behavior: "smooth"})
    }else if(sectionNum<2){
        venus.parentNode.scrollIntoView(true,{behavior: "smooth"})
    }else if(sectionNum<3){
        earth.parentNode.scrollIntoView(true,{behavior: "smooth"})
    }else if(sectionNum<4){
        mars.parentNode.scrollIntoView(true,{behavior: "smooth"})
    }else if(sectionNum<5){
        jupiter.parentNode.scrollIntoView(true,{behavior: "smooth"})
    }else if(sectionNum<7.2){
        saturn.parentNode.scrollIntoView(true,{behavior: "smooth"})
    }else if(sectionNum<8.2){
        uranus.parentNode.scrollIntoView(true,{behavior: "smooth"})
    }else{
        neptune.parentNode.scrollIntoView(true,{behavior: "smooth"})
    }
})
//====================back to top======================

    const toTop = document.querySelector(".to-top");
    window.addEventListener("scroll", ()=>{
      if (window.pageYOffset > window.innerHeight/3) {
      toTop.classList.add("active");
      }else {
      toTop.classList.remove("active");
      }
    })