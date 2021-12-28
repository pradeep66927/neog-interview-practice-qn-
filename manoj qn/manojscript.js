var input1 = document.querySelector("#input-n")
var btn = document.querySelector("#btn")
var outputDiv = document.querySelector("#outputn")

function clickhandler() {
    outputDiv.innerText=10-(input1.value.length)
}
btn.addEventListener("click",clickhandler)