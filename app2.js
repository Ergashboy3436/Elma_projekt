let box = document.querySelector("body")
let text = document.querySelectorAll(".text-darkmod__video")

console.log(text);




// text.style.color = "black"
function myFunc() {
    if (box.style.backgroundColor == "black") {
        box.style.backgroundColor = ""
    } else {
        box.style.backgroundColor = "black"
    }

    if(text.style.color == "black"){
        text.style.collor = ""
    } else {
        text.style.color = "black "
    }




}

