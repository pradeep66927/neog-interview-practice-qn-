var inputText = document.querySelector("#input-hsize")
var h1selector = document.querySelector("#h1-size")
var h2selector = document.querySelector("#h2-size")
var h3selector = document.querySelector("#h3-size")
var outputhsize = document.querySelector("#outputbox")

// function h1shower(){
//     var inpval = inputText.value
//     inpval.style.fontSize = "3rem"
// }
h1selector.addEventListener("click",shower)

function shower(){
    outputhsize.innerText=inputText.value
        // var inpval = inputText.value
        outputhsize.style.fontSize="3rem"
}

// h2selector.addEventListner("click" , hhshower)

function h2shower(){
    outputhsize.innerText=inputText.value
    outputhsize.style.fontSize="2rem"

}
h2selector.addEventListener("click" , h2shower)




function h3shower(){
    outputhsize.innerText=inputText.value
    outputhsize.style.fontSize="1rem"
}
h3selector.addEventListener("click" , h3shower)
