document.getElementById("myForm").addEventListener("submit", (event)=>{
    event.preventDefault()

    let name = document.getElementById("userName").value
    let password = document.getElementById("password").value
    let ErrorM = document.getElementById("errorMessage")



    const parol = "1234"
    const userName = "Ergash"



    if(name === userName && password === parol){
        window.location.href = "index.html"
    } else {
        ErrorM.innerText = "Noto'g'ri parol"
    }
})















let box = document.querySelector("body")
let korusel = document.querySelector("Korusel")
function myFunc(){
    if(box.style.backgroundColor == "black"){
        box.style.backgroundColor = ""
    } else {
        box.style.backgroundColor = "black"
    }


}