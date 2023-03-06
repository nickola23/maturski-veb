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

