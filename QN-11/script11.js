const inputPass = document.querySelector("#input-pass");
const outPut = document.querySelector("#output");
const btnCheck = document.querySelector("#btn");

// inputPass.disabled = true;
// btnCheck.disabled = true;

function clickHandler(){
    if (inputPass.value.length < 10){
        outPut.innerHTML = ("password is so shorter")
    }
    else{
        outPut.innerHTML = ("successfull")

    }
}
inputPass.addEventListener("input",inputClickHandler);
function inputClickHandler(){
    if ( inputPass.value.length < 10){
        btnCheck.disabled = true;
    }
    else {
        btnCheck.disabled = false;
        
        btnCheck.addEventListener("click",clickHandler)


    }

}