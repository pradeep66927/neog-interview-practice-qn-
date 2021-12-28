var inputfirst = document.querySelector("#input-first");
var inputsecond = document.querySelector("#input-second");
var plus = document.querySelector("#first")
var minus = document.querySelector("#second")
var multiply = document.querySelector("#third")
var divide = document.querySelector("#fourth")
var output = document.querySelector("#output")






function plusing(){
    output.innerText = Number(inputfirst.value)+Number(inputsecond.value)
    

}

plus.addEventListener("click",plusing)

function minusing(){
    output.innerText = Number(inputfirst.value)-Number(inputsecond.value)
    

}

minus.addEventListener("click",minusing)

function multiplying(){
    output.innerText = Number(inputfirst.value)*Number(inputsecond.value)
    

}

multiply.addEventListener("click",multiplying)

function dividing(){
    output.innerText = Number(inputfirst.value)/Number(inputsecond.value)
    

}

divide.addEventListener("click",dividing)







