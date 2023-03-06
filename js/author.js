let lukaDisplay = false;
let nikolaDisplay = false;
let startDisplay = true;
const luka = document.querySelector('.luka');
const nikola = document.querySelector('.nick');
const author = document.querySelector('.def');

document.querySelector(`.luk`).addEventListener('mouseover', e => {
    if(startDisplay){
        author.style.display = 'none';
    }
    if(nikolaDisplay) {
        nikola.style.display = "none";
        nikolaDisplay = false;
    }
    if(!lukaDisplay){
        lukaDisplay = true;
        luka.style.display = "flex";
    }
})

document.querySelector('.nik').addEventListener('mouseover', e =>{
    if(startDisplay){
        author.style.display = "none";
    }
    if(lukaDisplay){
        luka.style.display = "none";
        lukaDisplay = false;
    }
    if(!nikolaDisplay){
        nikolaDisplay = true;
        nikola.style.display = "flex";
    }
})