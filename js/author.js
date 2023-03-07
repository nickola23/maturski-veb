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
        author.style.transform = 'translateY(-80vh)';
        setTimeout(() =>{
            author.style.display = "none";
        },500)
        startDisplay = false;
    }
    if(nikolaDisplay) {
        nikola.style.transform = 'translateY(-80vh)';
        setTimeout(() =>{
            nikola.style.display = "none";
            nikola.style.transition = 'none';
            nikola.style.transform = 'translateY(80vh)';
            nikola.style.transition = '1s'
        },500)
        
        nikolaDisplay = false;
    }
    setTimeout(() =>{
        if(!lukaDisplay){
            luka.style.display = "flex";
            setTimeout(() =>{
                luka.style.transform = "translateY(0)";
            },50)
            lukaDisplay = true;
        }
    },500)
    
})

document.querySelector('.nik').addEventListener('mouseover', e =>{
    if(startDisplay){
        author.style.transform = 'translateY(-80vh)';
        setTimeout(() =>{
            author.style.display = "none";
        },500)
        startDisplay = false;
    }
    if(lukaDisplay) {
        luka.style.transform = 'translateY(-80vh)';
        setTimeout(() =>{
            luka.style.display = "none";
            luka.style.transition = 'none';
            luka.style.transform = 'translateY(80vh)';
            luka.style.transition = '1s'
        },500)
        
        lukaDisplay = false;
    }
    setTimeout(() =>{
        if(!nikolaDisplay){
            nikola.style.display = "flex";
            setTimeout(() =>{
                nikola.style.transform = "translateY(0)";
            },50)
            nikolaDisplay = true;
        }
    },500)
})