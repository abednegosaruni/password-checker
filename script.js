function checkPassword(){
    let password = document.getElementById("password").value
    let message =  document.getElementById("message")

    if(password.length < 8) {
        message.textContent = "Password is too short"
        message.style.color = "red"
    }
else{
    message.textContent = "Paasword looks good"
    message.style.color = "green"
}
}