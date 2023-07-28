var nameInput=document.getElementById("nameInput")
var emailInput=document.getElementById("emailInput")
var passwordInput=document.getElementById("passwordInput")
var loginBtn=document.getElementById("btnLogin")
var loginAncor=document.querySelector('a')
loginBtn.addEventListener("click",function(){
loginAncor.setAttribute('href','welcome.html')

})
// loginBtn.addEventListener("click",login)
// emailInput.addEventListener("blur",login)
// passwordInput.addEventListener("blur",login)

var data=[] 
if(localStorage.getItem("Data")!=null){
    data=JSON.parse(localStorage.getItem("Data"))
    emailInput.value=data[length-1].email
    passwordInput.value=data[length-1].password
} 

function login(){
    if(validateEmailInput()==true&&validatePasswordInput()==true){
        var userData={
            email:emailInput.value,
            password:passwordInput.value
        }
        data.push(userData)
        localStorage.setItem("Data",JSON.stringify(data))
    }
    else{
        alert("email or password is invalid")
    }

}

function validateEmailInput(){
var regex=/^[a-z]+[0-9]+@(gmail|yahoo)\.com$/
if(regex.test(emailInput.value)==true){
    return true
}
else{return false;}

}
function validatePasswordInput(){
var regex=/[a-z].[0-9]./
if(regex.test(passwordInput.value)==true){
    return true
}
else{return false;}

}

