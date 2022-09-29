let QandA =[
    {
        Q : "which is the most popular programming language ?",
        a:"C++",
        b:"Python",
        c:"JavaScript",
        ans:"c"
    },
    {
        Q : "which tag is used to link js with html ?",
        a:"css",
        b:"script",
        c:"head",
        ans:"b"
    },
    {
        Q : "which tag is used to link internel css with html ?",
        a:"<html>",
        b:"<footer>",
        c:"<style>",
        ans:"c"
    },
    {
        Q : "which tag is used to write navigate elements in html ?",
        a:"<nav>",
        b:"<div>",
        c:"<p>",
        ans:"a"
    },
    {
        Q : "which is the most popular javascript library",
        a:"Angular js",
        b:"React js",
        c:"Vue.js",
        ans:"b"
    }
]

let container = document.querySelector(".container")
let q1 = document.querySelector(".container-h2")
let a = document.querySelector(".label1")
let b = document.querySelector(".label2")
let c = document.querySelector(".label3")

let btn =document.querySelector(".button")
let answers = document.querySelectorAll(".ans");

let mark=0;
let qnum=0;

let quizlen=QandA.length;

loadquiz()

function loadquiz(){
    deselectAns()
    q1.innerText= QandA[qnum].Q;
    a.innerText= QandA[qnum].a;
    b.innerText= QandA[qnum].b;
    c.innerText= QandA[qnum].c;
    }

    function deselectAns(){
        answers.forEach(function(answer){
        answer.checked=false;
    })

    }
    
function getResult(){
    let value
        answers.forEach(function(answer){
            if(answer.checked){
            value = answer.id
            }
        })
        return value;
}

btn.addEventListener("click",function(event){
    event.preventDefault()
    let getanswer =getResult();
        if(getanswer === QandA[qnum].ans){
            mark++;
         }
        qnum++;

        if(qnum<quizlen){
            loadquiz()
        }
        else if(mark==quizlen){
            container.innerHTML=`olaaaa you got ${mark}/${quizlen} questions😍😍😍😍
            <button onclick="location.reload()">Reload</button>
            }`
        }
        else{
            container.innerHTML=`you got ${mark}/${quizlen} questions
            <button onclick="location.reload()">Reload</button>`
        }
})
