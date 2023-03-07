let lukaDisplay = false;
let nikolaDisplay = false;
let startDisplay = true;
const luka = document.querySelector('.luka');
const nikola = document.querySelector('.nick');
const author = document.querySelector('.def');
luka.style.width = "80%"
nikola.style.width = "80%"
author.style.width = "80%"
document.querySelector(`.luk`).addEventListener('mouseover', e => {
    if(startDisplay){
        author.style.transform = 'translateX(-80vw)';
        setTimeout(() =>{
            author.style.display = "none";
        },500)
        startDisplay = false;
    }
    if(nikolaDisplay) {
        nikola.style.transform = 'translateX(-80vw)';
        setTimeout(() =>{
            nikola.style.display = "none";
            nikola.style.transition = 'none';
            nikola.style.transform = 'translateX(80vw)';
            nikola.style.transition = '1s'
        },500)
        
        nikolaDisplay = false;
    }
    setTimeout(() =>{
        if(!lukaDisplay){
            luka.style.display = "flex";
            setTimeout(() =>{
                luka.style.transform = "translateX(0)";
            },50)
            lukaDisplay = true;
        }
    },500)
    
})

document.querySelector('.nik').addEventListener('mouseover', e =>{
    if(startDisplay){
        author.style.transform = 'translateX(-80vw)';
        setTimeout(() =>{
            author.style.display = "none";
        },500)
        startDisplay = false;
    }
    if(lukaDisplay) {
        luka.style.transform = 'translateX(-80vw)';
        setTimeout(() =>{
            luka.style.display = "none";
            luka.style.transition = 'none';
            luka.style.transform = 'translateX(80vw)';
            luka.style.transition = '1s'
        },500)
        
        lukaDisplay = false;
    }
    setTimeout(() =>{
        if(!nikolaDisplay){
            nikola.style.display = "flex";
            setTimeout(() =>{
                nikola.style.transform = "translateX(0)";
            },50)
            nikolaDisplay = true;
        }
    },500)
})