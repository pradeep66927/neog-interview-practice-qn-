var inputText = document.querySelector("#input-text")
var redselector = document.querySelector("#red-col")
var greenselector = document.querySelector("#green-col")
var blueselector = document.querySelector("#blue-col")
var outputDiv = document.querySelector("#outputbox")


// redselector.addEventListener("click",rshower)

function rshower(){
    outputDiv.innerText=inputText.value

        outputDiv.style.color="red"
        outputDiv.style.fontSize="2rem"

}
redselector.addEventListener("click",rshower)


function gshower(){
    outputDiv.innerText=inputText.value
    outputDiv.style.color="green"
    outputDiv.style.fontSize="2rem"

}
greenselector.addEventListener("click" , gshower)


function bshower(){
    outputDiv.innerText=inputText.value
    outputDiv.style.color="blue"
    outputDiv.style.fontSize="2rem"
}
blueselector.addEventListener("click" , bshower)

