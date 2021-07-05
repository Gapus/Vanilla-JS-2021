// const loginForm = document.getElementById("login-form");
// const loginInput=loginForm.querySelector("input");
// const loginButton=loginForm.querySelector("button");
const loginForm = document.querySelector("#login-form");
const loginInput= document.querySelector("#login-form input");
const greeting= document.querySelector("#greeting");

const HIDDEN_CLAASSNAME = "hidden";

function onLoginSubmit(evnet){
    evnet.preventDefault();
    loginForm.classList.add(HIDDEN_CLAASSNAME);

    const username = loginInput.value;

    //"Kim " + username == `kim ${username}`

    localStorage.setItem("username",username);
    
    greeting.innerText = `kim ${username}`;
    greeting.classList.remove(HIDDEN_CLAASSNAME)
}



loginForm.addEventListener("submit",onLoginSubmit);
