import { quizData } from './data.js';

let i = 0;
let numOfRightAns = 0;
let totalQns = quizData.length;

console.log("here");

function startQuiz(i) {
    const div = document.getElementById("dataInputHere");
div.innerHTML = `<pre><h2>${quizData[i].question}</h2>
<div><input id="checkA" name="answer" type="radio" value="a"><label>${quizData[i].a}</label></div>
<div><input id="checkB" name="answer" type="radio" value="b"><label>${quizData[i].b}</label></div>
<div><input id="checkC" name="answer" type="radio" value="c"><label>${quizData[i].c}</label></div>
<div><input id="checkD" name="answer" type="radio" value="d"><label>${quizData[i].d}</label></div>
                
<button id="submit">Submit</button></pre>`;

    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", () => submitAns(i));
}

function submitAns(i) {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (selectedOption) {
        let selectedValue = selectedOption.value;  
        const correctAns = quizData[i].correct; 

        if (selectedValue === correctAns) {
            console.log("Correct");
            numOfRightAns++;
        } else {
            console.log("Incorrect");
        }
    } else {
        console.log("No answer selected.");
    }

    if (i + 1 < totalQns) {
        i++; 
        startQuiz(i);
    } else {
        const div = document.getElementById("dataInputHere");
        div.innerHTML=`<div id="somediv"><h1>You answered ${numOfRightAns}/${totalQns} questions correctly
<br><button id="reload">Reload Quiz</button></div>`

        const reloadButton = document.getElementById("reload");
        reloadButton.addEventListener("click", () => {
            i = 0;
            numOfRightAns = 0; 
            startQuiz(i); 
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    if (startButton) {
        startButton.addEventListener("click", () => startQuiz(i)); 
    }
});

