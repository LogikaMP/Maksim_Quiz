let score = document.querySelector(".score")
let total = document.querySelector(".total")
let cookie = document.cookie.split(";")
let answr = []
for(let i =0; i<cookie.length; i++){
    let [name, value] = cookie[i].trim().split("=")
    if(name.trim() == "score"){
        score.innerHTML = value
    }
    if(name.trim()== "total"){
        total.innerHTML = value
    }
    if(name.trim()== "answr"){
        answr = value.split("/")
}

    
}

import { questions } from "./data.js"
let col = ""
let stat = document.querySelector(".stat")
for (let i = 0; i< questions.length; i++){
    if(questions[i].correct == answr[i]){
        col = "#fd0909ff"
    }
    else{
        col = "#24ff07ff"
    }

    stat.innerHTML+=`<div class="card-qw">
      <div class="qw" style="background:${col}">${questions[i].qw}</div>
      <di class="answers">
        <div class="ans">${questions[i].ans[0]}</div>
        <div class="ans">${questions[i].ans[1]}</div>
        <div class="ans">${questions[i].ans[2]}</div>
        <div class="ans">${questions[i].ans[3]}</div>
      </di>
     </div>
    </div>`
}
let btn_start = document.querySelector('.btn-start')
btn_start.addEventListener("click", function(){
    //анімація по кліку по кнопці- по завершенню анімації перенаправити на сторінку тестування
    anime({
        targets: btn_start,
        color: ['#FF876E', '#FFB2A1', '#FF6640'],
        scale: [1.2, 1, 1.2],
        rotate: [120, 240, 360],
        duration: 2000,
    }).finished.then(function(){
        window.location.replace("test.html")
    })
})
//