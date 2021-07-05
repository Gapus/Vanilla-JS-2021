// const loginForm = document.getElementById("login-form");
// const loginInput=loginForm.querySelector("input");
// const loginButton=loginForm.querySelector("button");
const loginForm = document.querySelector("#login-form");
const loginInput= document.querySelector("#login-form input");
const greeting= document.querySelector("#greeting");

const HIDDEN_CLAASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(evnet){
    evnet.preventDefault();
    loginForm.classList.add(HIDDEN_CLAASSNAME);

    const username = loginInput.value;

    //"Kim " + username == `kim ${username}`

    localStorage.setItem(USERNAME_KEY,username);

    paintGreetings(username);
}


function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLAASSNAME);
}



const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLAASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else{
    paintGreetings(saveUsername);
}