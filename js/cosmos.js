const search = document.querySelector('.search');
const titles = document.querySelectorAll('.title');
const descriptions = document.querySelectorAll('.desc');
const titleStrings = [];
const descriptionStrings = []
titles.forEach(title => titleStrings.push(title.textContent));
descriptions.forEach(desc => descriptionStrings.push(desc.textContent));
console.log(titleStrings);
console.log(descriptionStrings);

search.addEventListener('change', () => {
    console.log(titleStrings);
    titles.forEach((title,index) =>{
        if(search.value !== ""){
            title.innerHTML = titleStrings[index].replace(new RegExp(search.value,"ig"),'<span class="highlighted">'+search.value.toUpperCase()+'</span>');
        }else{
            title.innerHTML = titleStrings[index];
        }
        
    })
})