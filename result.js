let score = document.querySelector(".score")
let total = document.querySelector(".total")
let cookie = document.cookie.split(";")
for(let i =0; i<cookie.length; i++){
    let [name, value] = cookie[i].trim().split("=")
    if(name.trim() == "score"){
        score.innerHTML = value
    }
    if(name.trim() == "total"){
        total.innerHTML = value
    }
}
window.onload = function(){
    
}