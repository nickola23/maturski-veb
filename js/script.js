
    //====================== navbar animation =============================
    if(scroll > window.innerHeight/3){
        document.querySelector(`.navbar`).classList.add(`display`);
    }
    else{
        document.querySelector(`.navbar`).classList.remove(`display`);
    }
    //==================== video play pause=====================

 
//==================== back to top ======================

    const toTop = document.querySelector(".to-top");
    window.addEventListener("scroll", ()=>{
      if (window.pageYOffset > window.innerHeight/3) {
      toTop.classList.add("active");
      }else {
      toTop.classList.remove("active");
      }
    })



//=====================nav menu responsive=================== 
let hidden = true;
let navDrop = document.querySelector('.navul:has(#planets)');
document.querySelector('.nav-extend').addEventListener('click', (event) => {
    if(hidden){
        navDrop.style.display = "flex";
        setTimeout(() => navDrop.style.transform = "translateY(0)", 1);
    }else{
        navDrop.style.transform = "translateY(-150%)";
        setTimeout(() => navDrop.style.display = "none", 800);
        
        
    } 
    hidden = !hidden;
})