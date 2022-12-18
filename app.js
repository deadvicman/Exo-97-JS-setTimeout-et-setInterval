let btnTime = document.getElementById("timeout")

let intervalStart = document.getElementById("interval-start")
let intervalStop  = document.getElementById("interval-stop")
let intervalDiv  = document.getElementById("interval-div")

myBtnTime.addEventListener("click", () => {
    setTimeout(function (){
        let myDiv = document.createElement('div');
        myDiv.style.backgroundColor = "red"
        document.body.appendChild(myDiv);
        myDiv.innerHTML = "Mon timeout vient de créer ce div 2 secondes après le click sur le bouton !"
    },2000)
})

let count = 60

intervalStart.addEventListener("click", () => {
    let myTime = setInterval(function (){
        if (count < 500){
            count+=60;
            intervalDiv.innerHTML = count;
        }
    }, 2000)
    intervalStop.addEventListener("click", function () { // Permet d'annuler
        clearInterval(myTime);
    });
})