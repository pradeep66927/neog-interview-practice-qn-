var textmessagetoadd = document.querySelector("#enter-text")
var increasebtn = document.querySelector("#increase-size")
var decreasebtn = document.querySelector("#decrease-size")
var outputshow = document.querySelector("#output")







function increasetext(){

    outputshow.innerText = textmessagetoadd.value

    var style1 = window.getComputedStyle(outputshow).getPropertyValue('font-size');
    var currentSize = parseInt(style1)
    outputshow.style.fontSize = (currentSize + 2) + 'px'
    outputshow.style.backgroundColor = ("orange")
}



increasebtn.addEventListener("click",increasetext)


function decreasetext(){

    outputshow.innerText = textmessagetoadd.value

    var style1 = window.getComputedStyle(outputshow).getPropertyValue('font-size');
    var currentSize = parseInt(style1)
    outputshow.style.fontSize = (currentSize - 2) + 'px'
    outputshow.style.color = ("green")
}
decreasebtn.addEventListener("click",decreasetext)



