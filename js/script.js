

window.addEventListener('scroll', (event) =>{
    let scroll = window.scrollY;


    //====================== navbar animation =============================
    if(scroll > window.innerHeight/3){
        document.querySelector(`.navbar`).classList.add(`display`);
    }
    else{
        document.querySelector(`.navbar`).classList.remove(`display`);
    }
    
})
/*
//==================== nav drop click navigation ======================

const section = window.innerWidth/9.2;

document.querySelector('.navDrop').addEventListener('click', e =>{
    let mouseY = e.clientX;
    const sectionNum = mouseY /section;
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
*/
//==================== back to top ======================

    const toTop = document.querySelector(".to-top");
    window.addEventListener("scroll", ()=>{
      if (window.pageYOffset > window.innerHeight/3) {
      toTop.classList.add("active");
      }else {
      toTop.classList.remove("active");
      }
    })
/*
function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top > (window.innerHeight || document.documentElement.clientHeight) ||
            rect.bottom <0
        );
    }*/