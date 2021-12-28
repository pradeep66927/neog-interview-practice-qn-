var inputage = document.querySelector("#age")
var agechecker = document.querySelector("#btn")
var outputshow = document.querySelector("#outputbox")

function clickHandler() {
    if (inputage.value >= 18) {
        outputshow.innerText="you are eligible for vote"
    } else {
        outputshow.innerText=`your age less ${18-(inputage.value)} year to vote` 
    }
}

outputshow.addEventListener("click" ,clickHandler)