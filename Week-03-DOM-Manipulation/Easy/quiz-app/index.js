import { quizData } from './data.js';
let i=0
let numOfRightAns=0
let totalQns=quizData.length
console.log("here")
function startQuiz(){
    const div=document.getElementById("dataInputHere")
    div.innerHTML= `<h2>${quizData[i].question}</h2>
                    <input id="check" type="checkbox"><label>${data[i].a}</label>
                    <input id="check" type="checkbox"><label>${data[i].b}</label>
                    <input id="check" type="checkbox"><label>${data[i].c}</label>
                    <input id="check" type="checkbox"><label>${data[i].d}</label>`
    
}
document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    if (startButton) {
        startButton.addEventListener("click", startQuiz);
    }
});