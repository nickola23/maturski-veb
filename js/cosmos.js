const search = document.querySelector('.search');
const titles = document.querySelectorAll('.title');
const descriptions = document.querySelectorAll('.desc');
const titleStrings = [];
const descriptionStrings = []
titles.forEach(title => titleStrings.push(title.textContent));
descriptions.forEach(desc => descriptionStrings.push(desc.textContent));

search.addEventListener('keyup', () => {
    titles.forEach((title,index) =>{
        if(search.value !== ""){
            title.innerHTML = titleStrings[index].replace(new RegExp(search.value,"ig"),'<span class="highlighted">'+search.value+'</span>');
        }else{
            title.innerHTML = titleStrings[index];
        }
        
    })
    descriptions.forEach((description,index) =>{
        if(search.value !== ""){
            description.innerHTML = descriptionStrings[index].replace(new RegExp(search.value,"ig"),'<span class="highlighted">'+search.value+'</span>');
        }else{
            description.innerHTML = descriptionStrings[index];
        }
    })
})

//=====================================planets image navigation================================
const section = document.querySelector('.planets').getBoundingClientRect().width/9.2;
document.querySelector('.planets').addEventListener('click', e =>{
    let mouseY = e.clientX;
    const sectionNum = mouseY /section;
    if(sectionNum<1){
        window.location.href = '../index.html#mercurySec';
    }else if(sectionNum<2){
        window.location.href = '../index.html#venusSec';
    }else if(sectionNum<3){
        window.location.href = '../index.html#earthSec';
    }else if(sectionNum<4){
        window.location.href = '../index.html#marsSec';
    }else if(sectionNum<5){
        window.location.href = '../index.html#jupiterSec';
    }else if(sectionNum<7.2){
        window.location.href = '../index.html#saturnSec';
    }else if(sectionNum<8.2){
        window.location.href = '../index.html#uranusSec';
    }else{
        window.location.href = '../index.html#neptuneSec';
    }

    
})

if(window.innerWidth < 600){
    document.querySelector(`#search`).placeholder = `Search`;
}