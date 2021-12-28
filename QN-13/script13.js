var primary = document.querySelector("#btn-pri");
var secondary = document.querySelector("#btn-sec");
var heading1 = document.querySelector("#head1");
var heading2 = document.querySelector("#head2");
primary.addEventListener("click",primaryHan);

function primaryHan(){
    heading1.style.backgroundColor = "red";
    heading1.style.fontFamily="Imperial Script, cursive"

}

secondary.addEventListener("click",secondaryHan);

function secondaryHan(){
    heading2.style.backgroundColor = "green";
    heading2.style.fontFamily =   "Imperial Script, cursive";
    

}
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', "https://fonts.googleapis.com/css2?family=Imperial+Script&display=swap");
document.head.appendChild(link);
var link1 = document.createElement('link1');
link1.setAttribute('rel', 'stylesheet');
link1.setAttribute('type', 'text/css');
link1.setAttribute('href', "https://fonts.googleapis.com/css2?family=Imperial+Script&display=swap");
document.head.appendChild(link1);