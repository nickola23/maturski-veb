if(window.innerWidth<993){
    document.querySelector("#leve-donje").textContent = "donje";
}else{
    document.querySelector("#leve-donje").textContent = "leve";
}
window.addEventListener("resize", () => {
    if(window.innerWidth<993){
        document.querySelector("#leve-donje").textContent = "donje";
    }else{
        document.querySelector("#leve-donje").textContent = "leve";
    }
})