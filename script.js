const signup = document.querySelector('.t-signup');
const newSignup = document.getElementsByClassName('.new_sign');
const newSignin = document.getElementsByClassName('.new_signup')
const login = document.querySelector('.t-login');
const addclass = document.querySelector('.site');
const Name=document.getElementById("Name");
const email=document.getElementById("email");
const Password=document.getElementById("Password");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");

signup.addEventListener('click', function() {
    addclass.className = 'site signup-show';
    
})
function registerHandleClick(){
    console.log("click")
    const update = {
        username: Name.value,
        email: email.value,
        password: Password.value,
    }
    //fetch('http://172.27.16.1:8080/users/register'
    fetch('http://172.20.160.1:83/users/register', {
        method: 'POST',
        //mode: 'no-cors',
        headers: {
            //"Access-Control-Allow-Origin": "*",
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(update)
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log("data",data)
        Name.value=''
        email.value=''
        Password.value=''
    })
    .catch((err)=>{
        console.log("err",err)
    })
};
login.addEventListener('click', function() {
    addclass.className = 'site login-show';
});
function handleClick() {
    console.log("click")
    const update = {
        email: loginEmail.value,
        password: loginPassword.value,
    }
    //fetch('http://172.27.16.1:8080/users/login
    fetch('http://172.20.160.1:83/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(update)
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log("data",data);
        loginEmail.value=''
        loginPassword.value=''
    })
    .catch((err)=>{
        console.log("err",err)
    })
}

// code formate shortcut ctrl+k+f
